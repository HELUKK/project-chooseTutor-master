<template>
  <div v-if="hasTeacher">
    <el-table
      :data="teachers"
      stripe="true"
      border="true"
      style="width: 400px"
      :row-class-name="tableRow"
    >
      <el-table-column prop="name" label="导师" width="100"></el-table-column>
      <el-table-column label="当前人数" width="100">
        <template #default="scope">
          {{ scope.row.unit.length }}
        </template>
      </el-table-column>
      <el-table-column prop="maxCount" label="最多人数" width="100"> </el-table-column>
      <el-table-column label="选择导师" width="100">
        <template #default="scope">
          <ConfirmSelectTeacher
            v-if="scope.row.unit.length < scope.row.maxCount"
            :teacher="scope.row"
            :student="me"
          ></ConfirmSelectTeacher>
          <el-button v-else text type="danger">已满</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div v-else>
    已选导师 {{ teacher?.name }}
    <el-button type="danger" @click="exitTeacher">退选</el-button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores'
import { computed } from '@vue/reactivity'
import type { User } from '@/datasource/Types'
import ConfirmSelectTeacher from '@/components/ConfirmSelectTeacher.vue'

const store = useStore()
store.listteachers()
const teachers = computed(() => store.teachers)
const me = computed(() => store.user)
const teacher = computed(() => {
  return store.teachers.find((data) => {
    return store.user.unit[0] === data.id
  })
})
const hasTeacher = computed(() => {
  return me.value.maxCount > me.value.unit.length
})
const tableRow = ({ row }: { row: User }) => {
  if (row.maxCount <= row.unit.length) {
    return 'warning-row'
  }
}

const exitTeacher = () => {
  store.exitTeacher({ user: store.user })
}
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-7);
}
</style>
