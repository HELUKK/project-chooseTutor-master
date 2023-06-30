import type { User } from "@/datasource/Types";

export function listStudents() {
  const students: User[] = [
    {
      id: "2020210001",
      password: "2020210001",
      role: "student",
      name: "小明",
      unit: [],
      maxCount: 1,
    },
    {
      id: "2020210002",
      password: "2020210002",
      role: "student",
      name: "小红",
      unit: ["1000000001"],
      maxCount: 1,
    },
    {
      id: "2020210003",
      password: "2020210003",
      role: "student",
      name: "小黑",
      unit: [],
      maxCount: 1,
    },
    {
      id: "2020210004",
      password: "2020210004",
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
      maxCount: 3,
    },
    {
      id: "1000000002",
      password: "1000000002",
      role: "teacher",
      name: "bobo",
      unit: [],
      maxCount: 3,
    },
    {
      id: "1000000003",
      password: "1000000003",
      role: "teacher",
      name: "bobobo",
      unit: [],
      maxCount: 3,
    },
    {
      id: "1000000004",
      password: "1000000004",
      role: "teacher",
      name: "bomb！",
      unit: [],
      maxCount: 3,
    },
  ];
  return teachers;
}
