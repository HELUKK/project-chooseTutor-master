<template>
  <el-form
    :v-model="loginInfo"
    label-position="right"
    label-width="80px"
    size="large"
    class="loginDialog"
  >
    <el-row style="margin-bottom: 20px" justify="center" align="middle"
      ><h2>毕设选导师系统</h2></el-row
    >
    <el-form-item label="用户名：">
      <el-input v-model="loginInfo.id" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码：">
      <el-input
        v-model="loginInfo.password"
        type="password"
        placeholder="请输入密码"
        show-password
      />
    </el-form-item>
    <el-form-item class="btn">
      <el-button type="primary" round @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useStore } from '@/stores'

const store = useStore()
const loginInfo = reactive({
  id: '',
  password: ''
})

const login = () => {
  const user = {
    id: loginInfo.id,
    password: loginInfo.password
  }
  store.loginGuard(user)
  loginInfo.id = ''
  loginInfo.password = ''
}
</script>
<style scoped>
.el-form {
  background-color: aliceblue;
}
.loginDialog {
  max-width: 500px;
  min-width: 400px;
  max-height: 500px;
  border: 4px solid rgb(72, 161, 202);
  border-radius: 20px;
  padding: 20px;
}

.btn {
  float: right;
  margin-right: 20px;
}
</style>
