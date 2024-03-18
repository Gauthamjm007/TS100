export default function difference<T>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = []
  for (const item of arr1) {
    if (!arr2.includes(item)) {
      result.push(item)
    }
  }
  return result
}
