import { describe, expect, it } from 'vitest'
import intersection from 'js100/intersection'

describe('intersection', () => {
  it('returns an empty array when there are no common elements', () => {
    const result = intersection([1, 2, 3], [4, 5, 6])
    expect(result).toEqual([])
  })

  it('returns an array with common elements', () => {
    const result = intersection([1, 2, 3], [2, 3, 4])
    expect(result).toEqual([2, 3])
  })

  it('returns an empty array when one of the arrays is empty', () => {
    const result = intersection([1, 2, 3], [])
    expect(result).toEqual([])
  })

  it('returns the first array when the arrays are identical', () => {
    const result = intersection([1, 2, 3], [1, 2, 3])
    expect(result).toEqual([1, 2, 3])
  })

  it('returns an array with multiple common elements', () => {
    const result = intersection([1, 2, 3, 4, 5], [2, 3, 4, 5, 6])
    expect(result).toEqual([2, 3, 4, 5])
  })
})
