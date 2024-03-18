import { describe, expect, it } from 'vitest'
import uniq from 'js100/uniq'

describe('_.uniq', () => {
  it('returns an array with unique elements', () => {
    const result = uniq([2, 1, 2])
    expect(result).toEqual([2, 1])
  })

  it('returns an array with unique objects', () => {
    const result = uniq([{ a: 1 }, { a: 1 }, { b: 2 }])
    expect(result).toEqual([{ a: 1 }, { b: 2 }])
  })

  it('returns an empty array for an empty input', () => {
    const result = uniq([])
    expect(result).toEqual([])
  })

  it('returns an array with unique numbers', () => {
    const result = uniq([1, 2, 2, 3, 4, 3, 8, 6])
    expect(result).toEqual([1, 2, 3, 4, 8, 6])
  })

  it('returns an array with unique strings', () => {
    const result = uniq([
      'apple',
      'banana',
      'banana',
      'chikoo',
      'Elderberry',
      'Damson',
      'Date',
      'guava',
      'Damson Date',
    ])
    expect(result).toEqual([
      'apple',
      'banana',
      'chikoo',
      'Elderberry',
      'Damson',
      'Date',
      'guava',
      'Damson Date',
    ])
  })
})
