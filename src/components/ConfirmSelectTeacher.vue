<template>
  <el-button type="primary" @click="dialogVisible = true"> 选择 </el-button>
  <el-dialog
    v-model="dialogVisible"
    title=""
    width="30%"
    :before-close="handleClose"
    :append-to-body="true"
  >
    <span> 确认选择{{ teacher.name }}作为你的导师吗？ </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import type { User } from "@/datasource/Types";
import { useStore } from "@/stores";
interface Props {
  teacher: User;
  student: User;
}
const props = withDefaults(defineProps<Props>(), {});

const dialogVisible = ref(false);

const submit = () => {
  dialogVisible.value = false;
  const store = useStore();
  store.selectTeacher({ teacher: props.teacher, student: props.student });
};

const handleClose = (done: () => void) => {
  ElMessageBox.confirm("确认关闭吗?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
