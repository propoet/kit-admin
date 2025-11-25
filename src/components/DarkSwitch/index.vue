<script setup lang="ts">
import {useDark,useToggle} from '@vueuse/core'
defineOptions({
  name: 'DarkSwitch',
})
const isDark = useDark()
const toggleDark = useToggle(isDark)
// const wsCache = useCache()
// watch(isDark, (newIsDark) => {
//   wsCache.set('isDark', newIsDark)
// })

const handleChange = (val: string | number | boolean) => {
  toggleDark(Boolean(val))
}
</script>
<template>
  <el-switch v-model="isDark" @change="handleChange" />
</template>
