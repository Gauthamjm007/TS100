export default function pipe<T>(funcs: ((arg: T) => T)[]): (arg: T) => T {
  return function (arg: T): T {
    return funcs.reduce((result: T, fn: (arg: T) => T) => {
      return fn.call(this, result)
    }, arg)
  }
}
