import { describe, expect, it } from 'vitest'
import difference from 'js100/difference'

describe('difference', () => {
  it('returns an empty array when the first array is empty', () => {
    const result = difference([], [1, 2, 3])
    expect(result).toEqual([])
  })

  it('returns the first array when the second array is empty', () => {
    const result = difference([1, 2, 3], [])
    expect(result).toEqual([1, 2, 3])
  })

  it('returns the first array when there are no common elements', () => {
    const result = difference([1, 2, 3], [4, 5, 6])
    expect(result).toEqual([1, 2, 3])
  })

  it('returns the first array with common elements removed', () => {
    const result = difference([1, 2, 3], [2, 3, 4])
    expect(result).toEqual([1])
  })

  it('returns an empty array when the arrays are identical', () => {
    const result = difference([1, 2, 3], [1, 2, 3])
    expect(result).toEqual([])
  })
})
