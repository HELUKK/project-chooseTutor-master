import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import * as consty from "@/datasource/Const";
import { useStore } from "@/stores";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      meta: { title: "登录" },
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      meta: { title: "毕设选导师系统-登录" },
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/student",
      name: "student",
      meta: {
        title: "毕设选导师系统-学生界面",
        role: consty.STUDENT,
      },
      component: () => import("@/views/StudentView.vue"),
      redirect: "/student/index",
      children: [
        {
          path: "index",
          name: "student-index",
          meta: { title: "毕设选导师系统-学生界面-首页" },
          component: () => import("@/views/StudentIndexView.vue"),
        },
        {
          path: "select-teacher",
          name: "select-teacher",
          meta: { title: "毕设选导师系统-学生界面-选择导师" },
          component: () => import("@/views/StudentSelectTeacherView.vue"),
        },
      ],
    },
    {
      path: "/teacher",
      name: "teacher",
      meta: {
        title: "毕设选导师系统-教师界面",
        role: consty.TEACHER,
      },
      component: () => import("@/views/TeacherView.vue"),
      redirect: "/teacher/index",
      children: [
        {
          path: "index",
          name: "teahcer-index",
          meta: { title: "毕设选导师系统-老师界面-首页" },
          component: () => import("@/views/TeacherIndexView.vue"),
        },
        {
          path: "select-student",
          name: "select-student",
          meta: { title: "毕设选导师系统-老师界面-学生管理" },
          component: () => import("@/views/TeacherSelectStudentView.vue"),
        },
      ],
    },
    {
      name: "nomatch",
      path: "/:pathMatch(.*)*", // 如果是全局匹配，应加上`/`，/:pathMatch(.*)*
      redirect: "/login",
    },
  ],
});

//路由前置守卫；用来设置元信息
router.beforeEach((to, from, next) => {
  if (to.meta.role && to.meta.role != sessionStorage.getItem("role")) {
    next({ path: "login" });
    const store = useStore();
    store.exception;
    return;
  }
  if (to.meta.title) {
    document.title = String(to.meta.title);
  }
  next();
});

export default router;
