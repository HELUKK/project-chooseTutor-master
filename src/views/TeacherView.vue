<template>
  <el-container class="minHeight">
    <el-header>
      <user-header></user-header>
    </el-header>
    <el-container>
      <el-aside width="20%">
        <el-menu
          :default-active="$route.path"
          background-color="transparent"
          router
        >
          <el-menu-item index="/teacher/index">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/teacher/select-student">
            <el-icon>
              <list />
            </el-icon>
            <span>学生管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <el-row justify="center">
            <router-view />
          </el-row>
        </el-main>
        <el-footer height="40px">
          <user-footer></user-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import type { Menu as iconMenu, List } from "@element-plus/icons-vue";
import UserHeader from "@/components/UserHeader.vue";
import UserFooter from "@/components/UserFooter.vue";
</script>
<style></style>
