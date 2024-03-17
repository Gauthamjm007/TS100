import { expect, it } from 'vitest'
import shuffle from 'js100/shuffle'

it('shuffles an empty array', () => {
  const input: number[] = []
  const result = shuffle(input)
  expect(result).toEqual([])
})

it('shuffles an array with a single element', () => {
  const input = [1]
  const result = shuffle(input)
  expect(result).toEqual([1])
})

it('shuffles an array with multiple elements', () => {
  const input = [1, 2, 3, 4, 5]
  const result = shuffle(input)
  expect(result.length).toBe(input.length)
  expect(result).not.toEqual(input) // Check if the order is different
})

it('shuffles an array with mixed types', () => {
  const input = [1, 'a', 2, 'b']
  const result = shuffle(input)
  expect(result.length).toBe(input.length)
  expect(result).not.toEqual(input) // Check if the order is different
})

it('shuffles an array with duplicate elements', () => {
  const input = [1, 1, 2, 2]
  const result = shuffle(input)
  expect(result.length).toBe(input.length)
  expect(result).not.toEqual(input) // Check if the order is different
})
