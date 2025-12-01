<script setup lang="ts">
import { useLocale } from '@/i18n/useLocale'
const { elLocale } = useLocale()

// const alertRef = ref()

const alertRef = useTemplateRef('alertRef')

const handleClick = () => {
  alertRef.value?.open()
}
</script>

<template>
  <el-config-provider :locale="elLocale">
    <div style="height: 3000px"></div>
    <KitBacktop target="#app" />
    <el-button @click="handleClick">点击</el-button>
    <KitAlert ref="alertRef" title="提示" description="这是一段描述" />
    <p>{{ $t('layout.home') }}</p>
    <LocaleSelect />
    <DarkSwitch />
    <!-- <el-pagination layout="total, prev, pager, next" :total="50" /> -->
  </el-config-provider>
</template>

<style scoped></style>
