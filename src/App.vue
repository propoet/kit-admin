<script setup lang="ts">
import { useLocale } from '@/i18n/useLocale'
const { elLocale } = useLocale()

// const alertRef = ref()

const alertRef = useTemplateRef('alertRef')

const handleClick = () => {
  alertRef.value?.open()
}
const wrapRef = ref(null)
</script>

<template>
  <el-config-provider :locale="elLocale">
    <div style="position: relative">
      <div ref="wrapRef" style="max-height: 320px; overflow: auto; background: rgb(203, 243, 254)">
        <div style="margin-bottom: 120px">内容内容内容</div>
        <div style="margin-bottom: 120px">内容内容内容</div>
        <div style="margin-bottom: 120px">内容内容内容</div>
        <div style="margin-bottom: 120px">内容内容内容</div>
        <div style="margin-bottom: 120px">内容内容内容</div>
        <div style="margin-bottom: 120px">内容内容内容</div>
      </div>
      <KitBacktop :target="wrapRef" :bottom="120" style="position: absolute" />
    </div>

    <el-button @click="handleClick">点击</el-button>
    <KitAlert ref="alertRef" title="提示" description="这是一段描述" />
    <p>{{ $t('layout.home') }}</p>
    <LocaleSelect />
    <DarkSwitch />
    <!-- <el-pagination layout="total, prev, pager, next" :total="50" /> -->
  </el-config-provider>
</template>

<style scoped></style>
