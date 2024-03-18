import { describe, expect, it } from 'vitest'
import join from 'js100/join'

describe('join', () => {
  it('joins elements with default separator', () => {
    const result = join(['a', 'b', 'c'])
    expect(result).toEqual('a,b,c')
  })

  it('joins elements with a custom separator', () => {
    const result = join(['a', 'b', 'c'], '~')
    expect(result).toEqual('a~b~c')
  })

  it('returns an empty string for an empty array', () => {
    const result = join([])
    expect(result).toEqual('')
  })

  it('returns a string with a single element for a single-element array', () => {
    const result = join(['a'])
    expect(result).toEqual('a')
  })

  it('joins numbers with a custom separator', () => {
    const result = join([1, 2, 3], '-')
    expect(result).toEqual('1-2-3')
  })
})
