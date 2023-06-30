import type { User } from "@/datasource/Types";

export function listStudents() {
  const students: User[] = [
    {
      id: "2019000001",
      password: "2019000001",
      role: "student",
      name: "小明",
      unit: [],
      maxCount: 1,
    },
    {
      id: "2019000002",
      password: "2019000002",
      role: "student",
      name: "小红",
      unit: ["1000000001"],
      maxCount: 1,
    },
    {
      id: "2019000003",
      password: "2019000003",
      role: "student",
      name: "小黑",
      unit: [],
      maxCount: 1,
    },
    {
      id: "2019000004",
      password: "2019000004",
      role: "student",
      name: "小白",
      unit: [],
      maxCount: 1,
    },
  ];
  return students;
}

export function listTeachers() {
  const teachers: User[] = [
    {
      id: "1000000001",
      password: "1000000001",
      role: "teacher",
      name: "bo",
      unit: ["2019000002"],
      maxCount: 1,
    },
    {
      id: "1000000002",
      password: "1000000002",
      role: "teacher",
      name: "bobo",
      unit: [],
      maxCount: 2,
    },
    {
      id: "1000000003",
      password: "1000000003",
      role: "teacher",
      name: "bobobo",
      unit: [],
      maxCount: 2,
    },
    {
      id: "1000000004",
      password: "1000000004",
      role: "teacher",
      name: "bomb！",
      unit: [],
      maxCount: 2,
    },
  ];
  return teachers;
}
