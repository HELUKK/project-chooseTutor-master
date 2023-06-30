import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import type { ResultVO } from "@/datasource/Types";
import { listStudents, listTeachers } from "@/datasource/DataSource";
import * as consty from "@/datasource/Const";

const mock = new MockAdapter(axios);
// 过滤http前缀请求
mock.onAny(/^http/).passThrough();
mock.onAny(/^\/api\//).passThrough();

function path(p: string) {
  const reg = p.replace(/{\w+}/g, "(\\w+)").replace(/\//g, "\\/") + "$";
  return new RegExp(reg);
}

const resulVO: ResultVO = {
  code: 200,
  data: {},
};

mock.onGet("list-students").reply((c) => {
  const students = listStudents();
  resulVO.code = 200;
  resulVO.data.students = students;
  resulVO.message = "获得学生列表";
  return [200, resulVO];
});

mock.onGet("list-teachers").reply((c) => {
  const teachers = listTeachers();
  resulVO.code = 200;
  resulVO.data.teachers = teachers;
  resulVO.message = "获得教师列表";
  return [200, resulVO];
});

mock.onPost("login-guard").reply((c) => {
  //测试，测试无法修改密码，故只检测id
  const data = c.data;
  const { id, password } = JSON.parse(data);
  const students = listStudents();
  let index = -1;
  index = students.findIndex((data) => {
    return data.id == id && data.password == password;
  });
  // index = students.findIndex((i) => {
  //   return i.id === id;
  // });
  if (index != -1) {
    resulVO.code = 200;
    resulVO.data.user = students[index];
    resulVO.message = "学生用户登录";
    return [
      200,
      resulVO,
      {
        token: JSON.stringify(students[index]),
        role: consty.STUDENT,
      },
    ];
  }
  const teachers = listTeachers();
  index = teachers.findIndex((data) => {
    return data.id == id && data.password == password;
  });
  // index = teachers.findIndex((i) => {
  //   return i.id === id;
  // });
  if (index != -1) {
    resulVO.code = 200;
    resulVO.data.user = teachers[index];
    resulVO.message = "教师用户登录";
    return [
      200,
      resulVO,
      {
        token: JSON.stringify(teachers[index]),
        role: consty.TEACHER,
      },
    ];
  }
  resulVO.code = 401;
  resulVO.message = "用户名或密码错误";
  return [200, resulVO];
});

mock.onPost("change-password").reply((c) => {
  const data = c.data;
  const { user, password } = JSON.parse(data);
  //测试
  // mock数据无法持久化，应修改数据库再读取
  user.password = password;
  //结束位置
  resulVO.code = 200;
  resulVO.message = "修改密码";
  return [
    200,
    resulVO,
    {
      token: JSON.stringify(user),
    },
  ];
});

mock.onPost("select-teacher").reply((c) => {
  const data = c.data;
  const { teacher, student } = JSON.parse(data);
  //测试
  // mock数据无法持久化，pinia模拟
  console.log("选择导师：数据库对两条信息（一学生，一教师）进行修改");
  student.unit.push(teacher.id);
  //结束位置
  resulVO.code = 200;
  resulVO.message = "选择导师";
  return [
    200,
    resulVO,
    {
      token: JSON.stringify(student),
    },
  ];
});

mock.onPost("exit-teacher").reply((c) => {
  const data = c.data;
  const { user } = JSON.parse(data);
  //测试
  // mock数据无法持久化，pinia模拟
  console.log("退选导师：数据库对两条信息（一学生，一教师）进行修改");
  user.unit.pop();
  //结束位置
  resulVO.code = 200;
  resulVO.message = "退选导师";
  return [
    200,
    resulVO,
    {
      token: JSON.stringify(user),
    },
  ];
});

export default mock;
