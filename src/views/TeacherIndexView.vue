<template>
  <el-row>
    <el-col style="margin-bottom: 16px"><h2>个人信息</h2></el-col>
    <el-col>
      <el-card>
        <template #header>
          <span>{{ user.name }}</span>
        </template>
        <div class="cardRow">用户编号: {{ user.id }}</div>
        <div class="cardRow">密码: {{ user.password }}</div>
        <div class="cardRow">用户类型: 老师</div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { useStore } from '@/stores'
const store = useStore()
const { user } = store
</script>
<style scoped>
.cardRow {
  margin-bottom: 10px;
}
</style>
