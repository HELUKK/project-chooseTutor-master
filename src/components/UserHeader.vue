<template>
  <el-row style="height: 100%" align="middle">
    <el-col :span="12" :xs="4" justify="center" hidden-sm-and-down>
      <div
        style="
          display: inline-block;
          margin-left: 10px;
          font-size: 32px;
          font-family: STHupo;
          color: var(--el-color-info-dark-2);
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          text-overflow: ellipsis;
        "
      >
        <el-icon
          size="32px"
          style="vertical-align: top"
          color="var(--el-color-primary-dark-2)"
        >
          <platform />
        </el-icon>
        毕设选导师系统, 欢迎您
      </div>
    </el-col>
    <el-col :span="12" :xs="20" justify="center" align="right">
      <el-icon
        color="var(--el-color-primary-dark-2)"
        size="24px"
        style="vertical-align: middle"
      >
        <user />
      </el-icon>
      <div
        style="
          display: inline-block;
          margin-right: 20px;
          color: var(--el-color-success-dark-2);
          font-weight: 700;
        "
      >
        {{ store.user.name }}
      </div>
      <change-password :isSame="isSame"></change-password>
      <logout></logout>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import logout from "@/components/Logout.vue";
import ChangePassword from "@/components/ChangePassword.vue";
import type { User, Platform } from "@element-plus/icons-vue";
import { useStore } from "@/stores";
const store = useStore();
store.userHasLogin();

const isSame = store.user.id === store.user.password && !store.hasLogin;
store.hasLogin = true;
</script>
<style scoped></style>
