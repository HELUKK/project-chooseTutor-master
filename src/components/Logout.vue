<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-button type="info" @click="dialogVisible = true">登出</el-button>

  <el-dialog v-model="dialogVisible" title="" width="30%" :append-to-body="true">
    <span>是否退出登录？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '@/stores'

const dialogVisible = ref(false)

const store = useStore()
const submit = () => {
  store.logout()
  dialogVisible.value = false
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
