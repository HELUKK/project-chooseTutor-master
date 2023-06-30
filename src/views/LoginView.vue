<template>
  <div class="background">
    <el-row style="position: fixed; z-index: 999">
      学生id<br />
      2019000001<br />
      2019000002<br />
      2019000003<br />
      2019000004<br />
      老师id<br />
      1000000001<br />
      1000000002<br />
      1000000003<br />
      1000000004<br />
      密码同id<br />
      使用axios-mock模拟，除了启动时就是走个形式<br />
      使用pinia持久性存储学生列表和老师列表<br />
    </el-row>
    <el-row class="maxtype" justify="center" align="middle">
      <LoginInput></LoginInput>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import LoginInput from "@/components/LoginInput.vue";
// 测试专用
import { useStore } from "@/stores";
const store = useStore();
store.liststudents();
store.listteachers();
store.statusChange();
// 测试专用结束
store.hasLogin = false;
</script>
<style scoped>
.maxtype {
  min-width: 100vw;
  min-height: 100vh;
}

.background {
  background-image: url("@/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
