/**
 * 防抖函数
 * @param func 函数
 * @param wait 等待时间
 */
export function debounce<T extends (...args: unknown[]) => unknown>(func: T, wait: number) {
  let timer: number | undefined = void 0
  const debounced: (this: unknown) => void = function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      timer = void 0
    }, wait) as unknown as number
  }
  return debounced
}

/**
 * 节流函数
 * @param func 函数
 * @param wait 等待时间
 * @param trailing 是否在节流结束后调用
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  trailing?: boolean,
) {
  let timer: number | undefined = void 0
  const debounced: (this: unknown) => void = function (...args) {
    if (!timer) {
      if (!trailing) {
        func.apply(this, args)
      }
      timer = setTimeout(() => {
        if (trailing) {
          func.apply(this, args)
        }
        timer = void 0
      }, wait) as unknown as number
    }
  }
  return debounced
}
