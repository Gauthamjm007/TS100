export default function join<T>(arr: T[], joiner = ',') {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
    if (i !== arr.length - 1) {
      result += joiner
    }
  }
  return result
}
