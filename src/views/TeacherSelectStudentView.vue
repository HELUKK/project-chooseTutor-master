<template>
  <div>
    <el-table :data="students" stripe="true" border="true" style="width: 300px">
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column prop="name" label="学生" width="100"></el-table-column>
      <el-table-column prop="id" label="编号" width="150"></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores";
import { computed } from "@vue/reactivity";

const store = useStore();
store.liststudents();
const me = computed(() => store.user);
const students = computed(() => {
  return store.students.filter((s) => {
    return (
      me.value.unit.findIndex((i) => {
        return i === s.id;
      }) > -1
    );
  });
});
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-7);
}
</style>
