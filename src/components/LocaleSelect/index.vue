<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setCacheLang } from '@/i18n/useLocale'
const { locale } = useI18n()

// 监听语言切换，保存到缓存
watch(locale, (newLocale) => {
  setCacheLang(newLocale)
})
</script>
<template>
  <el-select v-model="locale" style="width: 100px">
    <el-option value="zh_CN" label="中文"></el-option>
    <el-option value="en" label="英文"></el-option>
  </el-select>
</template>
