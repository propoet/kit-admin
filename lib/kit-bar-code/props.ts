import type { PropType, ExtractPropTypes } from 'vue'
import type { Options } from 'jsbarcode'
import type { BarCodeTag } from './types'

/**属性 */
export const barCodeProps = {
  /**条形码内容 */
  value: String,
  /**条形码渲染方式 */
  tag: {
    type: String as PropType<BarCodeTag>,
    default: 'svg',
  },
  /**参数 */
  options: Object as PropType<Options>,
}

export type BarCodeProps = ExtractPropTypes<typeof barCodeProps>
