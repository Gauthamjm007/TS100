import { describe, expect, it } from 'vitest'
import union from 'js100/union'

describe('union', () => {
  it('combines arrays with no common elements', () => {
    const result = union([1, 2, 3], [4, 5, 6])
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('combines arrays with some common elements', () => {
    const result = union([1, 2, 3], [2, 3, 4])
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('combines multiple arrays', () => {
    const result = union([1, 2, 3], [2, 3, 4])
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('returns the non-empty array when one is empty', () => {
    const result = union([1, 2, 3], [])
    expect(result).toEqual([1, 2, 3])
  })

  it('combines two empty arrays', () => {
    const result = union([], [])
    expect(result).toEqual([])
  })
})
