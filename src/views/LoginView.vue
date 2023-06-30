<template>
  <div class="background">
    <el-row style="position: fixed; z-index: 999">
      学生id<br />
      2020210001~4<br />
      老师id<br />
      1000000001~4<br />
      密码同id<br />
    </el-row>
    <el-row class="maxtype" justify="start" align="middle">
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
