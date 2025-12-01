<!-- 条形码 -->
<template>
  <component ref="rootRef" :is="tag" :style="value ? void 0 : { display: 'none' }" />
</template>

<script lang="ts" setup>
import { ref, watch, nextTick, onMounted } from 'vue'
import JsBarCode from 'jsbarcode'
import { barCodeProps } from './props'

defineOptions({ name: 'KitBarCode' })

const props = defineProps(barCodeProps)

/** 根节点 */
const rootRef = ref<HTMLElement | null>(null)

/** 渲染 */
const render = () => {
  if (!props.value || !rootRef.value) {
    return
  }
  try {
    // jsbarcode 是一个函数，不是构造函数，直接调用即可
    JsBarCode(rootRef.value, props.value, props.options)
  } catch (e) {
    console.error(e)
  }
}

watch(
  () => props.value,
  () => {
    render()
  },
)

watch(
  () => props.options,
  () => {
    render()
  },
  { deep: true },
)

watch(
  () => props.tag,
  () => {
    nextTick(() => {
      render()
    })
  },
)

onMounted(() => {
  render()
})

defineExpose({
  rootRef,
  render,
})
</script>
