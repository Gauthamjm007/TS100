import { describe, expect, it } from 'vitest'
import { concat } from 'js100/concat'

describe('concat', () => {
  it('should concatenate two arrays', () => {
    const arr1 = [1, 2]
    const arr2 = [3, 4]
    const result = concat(arr1, arr2)
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('should concatenate multiple arrays', () => {
    const arr1 = [1, 2]
    const arr2 = [3, 4]
    const arr3 = [5, 6]
    const result = concat(arr1, arr2, arr3)
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should handle empty arrays', () => {
    const arr1 = [] as Array<number>
    const arr2 = [1, 2]
    const result = concat(arr1, arr2)
    expect(result).toEqual([1, 2])
  })

  it('should handle arrays of different types', () => {
    const arr1 = [1, 2]
    const arr2 = ['a', 'b']
    const result = concat<number | string>(arr1, arr2)
    expect(result).toEqual([1, 2, 'a', 'b'])
  })

  it('should handle arrays with nested arrays', () => {
    const arr1 = [1, 2, [3, 4]]
    const arr2 = [5, 6]
    const result = concat(arr1, arr2)
    expect(result).toEqual([1, 2, [3, 4], 5, 6])
  })
})
