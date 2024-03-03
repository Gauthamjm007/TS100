export const throttle = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  waitFor: number,
) => {
  let timeoutId: NodeJS.Timeout | null = null
  let lastArgs: Parameters<F> | null = null
  return function (...args: Parameters<F>) {
    lastArgs = args
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        timeoutId = null
        if (lastArgs) {
          func(...(lastArgs as Parameters<F>))
        }
      }, waitFor)
    }
  }
}
