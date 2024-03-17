import { expect, it } from 'vitest'
import pipe from 'js100/pipe'

const times = (y: number) => (x: number) => x * y
const plus = (y: number) => (x: number) => x + y
const subtract = (y: number) => (x: number) => x - y
const divide = (y: number) => (x: number) => x / y

it('pipe function applies operations correctly', () => {
  const result = pipe([times(2), plus(3), subtract(1), divide(2)])(5)
  expect(result).toBe(6) // (5 * 2 + 3 - 1) / 2 = 6
})

it('pipe function returns initial value for empty array', () => {
  const result = pipe([])(5)
  expect(result).toBe(5)
})

it('pipe function applies single operation correctly', () => {
  const result = pipe([times(2)])(5)
  expect(result).toBe(10)
})

it('pipe function works with negative initial value', () => {
  const result = pipe([times(-1), plus(2), subtract(3)])(5)
  expect(result).toBe(-6) // (-5 * -1 + 2 - 3) = -8
})

it('pipe function handles zero initial value', () => {
  const result = pipe([plus(1), times(2), subtract(1)])(0)
  expect(result).toBe(1) // (0 + 1 * 2 - 1) = 1
})
