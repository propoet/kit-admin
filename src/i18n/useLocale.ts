import type { RouteLocationNormalized } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { I18N_CACHE_NAME } from '@/config/setting'
import { setPageTitle } from '@/utils/page-title-util'
import type { Language } from 'element-plus/es/locale'
// todo lib 的国际化 typescript 类型

// element plus 的国际化
import zh_CN from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
// todo lib 国际化

// dayjs 的国际化
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

const elLocales = { zh_CN, en }

// todo lib 国际化
const libLocales = {
  zh_CN: {},
  en: {},
}

const defaultLocale = 'zh_CN'

export function useLocale() {
  const route = useRoute()
  const { locale } = useI18n()
  const elLocale = ref<Language>()
  // const libLocale = ref<string>();

  watch(
    locale,
    () => {
      elLocale.value = elLocales[locale.value as keyof typeof elLocales]
      // todo lib 国际化
      dayjs.locale(locale.value.toLowerCase().replace(/_/g, '-'))
      setPageTitle(getRouteTitle(route))
    },
    { immediate: true },
  )

  return {
    elLocale,
    // libLocale,
  }
}

// 获取缓存的语言
export function getCacheLang() {
  const wsCache = useCache('localStorage')
  return wsCache.get(I18N_CACHE_NAME) || defaultLocale
}

// 设置缓存的语言
export function setCacheLang(lang?: string) {
  const wsCache = useCache()
  if (!lang) {
    wsCache.delete(I18N_CACHE_NAME)
    return
  }
  wsCache.set(I18N_CACHE_NAME, lang)
}
// 获取路由对应的标题
export function getRouteTitle(route: RouteLocationNormalized) {
  const lang = route.meta?.lang ?? {}
  return lang[getCacheLang() as keyof typeof lang] ?? route.meta?.title
}
