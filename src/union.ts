export default function union<T>(arr1: T[], arr2: T[]) {
  const result = new Set()
  for (let i = 0; i < arr1.length; i++) {
    result.add(arr1[i])
  }

  for (let i = 0; i < arr2.length; i++) {
    result.add(arr2[i])
  }

  return Array.from(result)
}
