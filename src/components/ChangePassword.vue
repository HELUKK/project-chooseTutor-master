<template>
  <el-button type="primary" @click="dialogFormVisible = true"
    >修改密码</el-button
  >

  <el-dialog
    v-model="dialogFormVisible"
    title="修改密码"
    width="30%"
    :append-to-body="true"
  >
    <el-form :model="form">
      <span v-show="store.user.id === store.user.password">
        密码与用户名相同，建议修改密码。 </span
      ><br /><br />
      <el-form-item label="新密码" :label-width="formLabelWidth">
        <el-input
          v-model="form.newPassword"
          type="password"
          autocomplete="off"
          show-password
        />
      </el-form-item>
      <el-form-item label="确认新密码" :label-width="formLabelWidth">
        <el-input
          v-model="form.confirmPassword"
          type="password"
          autocomplete="off"
          show-password
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { useStore } from "@/stores";
const store = useStore();

const formLabelWidth = "100px";
interface Props {
  isSame: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isSame: false,
});

const dialogFormVisible = ref(props.isSame);

const form = reactive({
  newPassword: "",
  confirmPassword: "",
});

const submit = () => {
  if (form.newPassword === "") {
    ElMessage({ message: "密码不能为空", type: "error" });
  } else if (store.user.password === form.newPassword) {
    ElMessage({ message: "与原密码一致", type: "error" });
  } else if (form.newPassword === form.confirmPassword) {
    store.changePassword({ user: store.user, password: form.newPassword });
    dialogFormVisible.value = false;
  } else if (form.newPassword !== form.confirmPassword) {
    ElMessage({ message: "两次输入不一致", type: "error" });
  }
};
</script>
<style>
.el-select {
  width: 300px;
}

.el-input {
  width: 300px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
