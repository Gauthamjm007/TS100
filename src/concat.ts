export function concat<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => [...acc, ...curr], [])
}
