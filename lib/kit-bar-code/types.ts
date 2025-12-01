import type { api } from 'jsbarcode'
/**条形码示例 */
export type JsBarCodeInstance = Required<api> | null
/**条形码渲染方式 */
export type BarCodeTag = 'svg' | 'canvas' | 'img'
