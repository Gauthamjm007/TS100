const shuffle = <T>(arr: T[]) => {
  let result: T[] = []
  const arrClone: T[] = [...arr]
  const arrLength = arrClone.length
  for (let i = 0; i < arrLength; i++) {
    result = [
      ...result,
      ...arrClone.splice(generateRandomNumber(arrClone.length - 1), 1),
    ]
  }
  return result
}

const generateRandomNumber = (till: number) => {
  return Math.round(Math.random() * till)
}

export default shuffle
