<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style>
* {
  margin: 0;
}

.minHeight {
  min-height: 100vh;
}

.dialogClass {
  border-radius: 20px;
}

.el-aside {
  max-width: 200px;
  background-color: var(--el-color-primary-light-8);
}

.el-main {
  background-color: var(--el-bg-color);
}

.el-header {
  background-color: var(--el-color-primary-light-7);
  border-bottom: 1px solid var(--el-color-primary-light-5);
}

.el-footer {
  background-color: var(--el-color-primary-light-9);
}

.el-menu {
  border-color: var(--el-color-primary-light-8);
}

.el-menu-item span {
  font-weight: 550;
  letter-spacing: 2px;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
}
</style>
