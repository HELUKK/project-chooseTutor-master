import { defineStore } from "pinia";
import axios from "@/axios";
import type { ResultVO, User } from "@/datasource/Types";
import * as consty from "@/datasource/Const";
import router from "@/router";
import { ElMessage } from "element-plus";
export const useStore = defineStore("state", {
  state: () => ({
    user: {} as User,
    message: "" as string,
    exception: "" as string,
    students: [] as User[],
    teachers: [] as User[],
    hasLogin: false as boolean,
    // 测试专用
    status: false as boolean,
    // 测试专用结束
  }),

  actions: {
    // 测试专用
    statusChange() {
      this.status = true;
    },
    // 测试专用结束
    userHasLogin() {
      console.log("token重置user");
      if (JSON.stringify(this.user) === "{}") {
        const token = sessionStorage.getItem("token");
        if (token) {
          this.user = JSON.parse(token);
        }
      }
    },
    async liststudents() {
      // 测试专用
      if (this.status) return;
      // 测试专用结束
      try {
        const resp = await axios.get<ResultVO>("list-students");
        this.students = resp.data.data.students;
      } catch {
        //
      }
    },
    async listteachers() {
      // 测试专用
      if (this.status) return;
      // 测试专用结束
      try {
        const resp = await axios.get<ResultVO>("list-teachers");
        this.teachers = resp.data.data.teachers;
      } catch {
        //
      }
    },

    async loginGuard(user: { id: string; password: string }) {
      try {
        const resp = await axios.post<ResultVO>("login-guard", user);

        //测试专用
        //因mock无法修改密码，且有修改密码功能
        resp.data.data.user.password = user.password;
        //测试专用结束
        let path = "/login";
        switch (resp.headers.role) {
          case consty.STUDENT:
            path = "/student";
            this.user = resp.data.data.user;
            console.log(this.user);
            //测试专用
            this.user = this.students.find((u) => {
              return this.user.id == u.id && this.user.password == u.password;
            }) as User;
            console.log(this.user);
            if (this.user === undefined) {
              router.push("/login");
              ElMessage({ message: "用户名密码错误", type: "error" });
              return;
            }
            //测试专用结束
            sessionStorage.setItem("token", resp.headers.token);
            sessionStorage.setItem("role", resp.headers.role);
            break;
          case consty.TEACHER:
            path = "/teacher";
            this.user = resp.data.data.user;
            //测试专用
            this.user = this.teachers.find((u) => {
              return this.user.id == u.id && this.user.password == u.password;
            }) as User;
            if (this.user === undefined) {
              ElMessage({ message: "用户名密码错误", type: "error" });
              router.push("/login");
              return;
            }
            //测试专用结束
            sessionStorage.setItem("token", resp.headers.token);
            sessionStorage.setItem("role", resp.headers.role);
            break;
        }
        if (path === "/login")
          ElMessage({ message: "用户名密码错误", type: "error" });
        else ElMessage({ message: "欢迎您", type: "success" });
        router.push(path);
      } catch (error) {
        //
        ElMessage({ message: "登录异常", type: "error" });
      }
    },

    logout() {
      sessionStorage.clear();
      this.user = {} as User;
      router.push("/login");
    },

    async changePassword(data: { user: User; password: string }) {
      try {
        const resp = await axios.post<ResultVO>("change-password", data);
        sessionStorage.setItem("token", resp.headers.token);
        this.user = JSON.parse(resp.headers.token);
        // 以下为测试专用
        switch (this.user.role) {
          case "student":
            // eslint-disable-next-line no-case-declarations
            const index1 = this.students.findIndex((i) => {
              return i.id === this.user.id;
            });
            this.students[index1].password = data.password;
            break;
          case "teacher":
            // eslint-disable-next-line no-case-declarations
            const index2 = this.teachers.findIndex((i) => {
              return i.id === this.user.id;
            });
            this.teachers[index2].password = data.password;
            break;
        }
        // 以下为真实后端
        // const resp2 = await axios.get<ResultVO>('list-students')
        // this.students = resp2.data.data.students
        // const resp3 = await axios.get<ResultVO>('list-teachers')
        // this.teachers = resp3.data.data.teachers
        ElMessage({ message: "修改密码成功", type: "success" });
      } catch {
        //
        ElMessage({ message: "修改密码异常", type: "error" });
      }
    },

    async selectTeacher(data: { teacher: User; student: User }) {
      if (
        data.student.id != this.user.id ||
        data.student.password != this.user.id
      )
        return;
      try {
        const resp = await axios.post<ResultVO>("select-teacher", data);
        sessionStorage.setItem("token", resp.headers.token);
        this.user = resp.data.data.user;
        // 以下为测试专用
        const index1 = this.students.findIndex((s) => {
          return s.id === data.student.id;
        });
        const index2 = this.teachers.findIndex((t) => {
          return t.id === data.teacher.id;
        });
        this.students[index1].unit.push(data.teacher.id);
        this.teachers[index2].unit.push(data.student.id);
        // 以下为真实后端
        // const resp2 = await axios.get<ResultVO>('list-students')
        // this.students = resp2.data.data.students
        // const resp3 = await axios.get<ResultVO>('list-teachers')
        // this.teachers = resp3.data.data.teachers
        location.reload();
      } catch (error) {
        //
      }
    },

    async exitTeacher(data: { user: User }) {
      try {
        const resp = await axios.post<ResultVO>("exit-teacher", data);
        sessionStorage.setItem("token", resp.headers.token);
        this.user = resp.data.data.user;
        // 以下为测试专用
        const index1 = this.students.findIndex((s) => {
          return s.id === data.user.id;
        });
        const index2 = this.teachers.findIndex((t) => {
          return t.id === data.user.unit[0];
        });
        this.students[index1].unit.pop();
        this.teachers[index2].unit = this.teachers[index2].unit.filter(
          (d) => d != data.user.id
        );
        // 以下为真实后端
        // const resp2 = await axios.get<ResultVO>('list-students')
        // this.students = resp2.data.data.students
        // const resp3 = await axios.get<ResultVO>('list-teachers')
        // this.teachers = resp3.data.data.teachers
        location.reload();
      } catch (error) {
        //
      }
    },
  },
  persist: {
    key: "storekey",
    storage: window.sessionStorage,
    paths: ["students", "teachers", "hasLogin", "status"],
  },
});
