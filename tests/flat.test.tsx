import { expect, it } from 'vitest'
import flat from 'js100/flat'

it('flattens a single level array', () => {
  const input = [1, [2, 3], [4, 5]]
  const expected = [1, 2, 3, 4, 5]
  expect(flat(input, 3)).toEqual(expected)
})

it('flattens a multi-level array with default depth', () => {
  const input = [1, [2, [3, 4]], [5, 6]]
  const expected = [1, 2, [3, 4], 5, 6]
  expect(flat(input, 1)).toEqual(expected)
})

it('flattens a multi-level array with specified depth', () => {
  const input = [1, [2, [3, 4]], [5, 6]]
  const expected = [1, 2, 3, 4, 5, 6]
  expect(flat(input, 2)).toEqual(expected)
})

it('flattens an empty array', () => {
  const input: number[][] = []
  const expected: number[] = []
  expect(flat(input)).toEqual(expected)
})
