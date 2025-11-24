<script setup lang="ts">
import { useLocale, setCacheLang } from '@/i18n/useLocale'
const { elLocale } = useLocale()
</script>

<template>
  <el-config-provider :locale="elLocale">
    <p>{{ $t('layout.home') }}</p>
    <LocaleSelect />
    <el-pagination layout="total,prev, pager, next" :total="50" />
  </el-config-provider>
</template>

<style scoped></style>
