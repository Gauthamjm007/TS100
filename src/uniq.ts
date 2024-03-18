import { shallow } from './shallow.ts'

export default function uniq<T>(arr: T[]) {
  const result: T[] = []
  for (let i = 0; i < arr.length; i++) {
    if (!checkIfArrHasElement(result, arr[i])) {
      result.push(arr[i]!)
    }
  }

  return result
}

export function checkIfArrHasElement<T>(arr: T[], item: T) {
  if (arr.length === 0) return false
  for (let i = 0; i < arr.length; i++) {
    if (shallow(arr[i], item)) {
      return true
    }
  }
  return false
}

// export default function uniq<T>(arr: T[]) {
//   const result = new Set()

//   for (const item of arr) {
//     result.add(item)
//   }

//   return Array.from(result)
// }
