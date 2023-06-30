<template>
  <el-row>
    <el-col style="margin-bottom: 16px"><h2>个人信息</h2></el-col>
    <el-col>
      <el-card class="box-card">
        <template #header>
          <span>{{ user.name }}</span>
        </template>
        <div class="cardRow">用户编号: {{ user.id }}</div>
        <div class="cardRow">密码: {{ user.password }}</div>
        <div class="cardRow">用户类型: 学生</div>
        <div class="cardRow">导师: {{ teacher?.name }}</div>
      </el-card>
    </el-col>
    <el-col style="margin-top: 20px"> 请点击左侧导航栏去完成您的需求 </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { useStore } from '@/stores'
import { computed } from 'vue'
const store = useStore()
const { user } = store
const teacher = computed(() => {
  return store.teachers.find((data) => {
    return store.user.unit[0] === data.id
  })
})
</script>
<style scoped>
.cardRow {
  margin-bottom: 50px;
}
</style>
