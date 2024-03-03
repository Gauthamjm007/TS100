import { describe, expect, it, vi } from 'vitest'
import { throttle } from 'js100/throttle'

describe('throttle function', () => {
  it('should call the function only once in the given time window', async () => {
    const mockFunction = vi.fn()
    const throttledFunction = throttle(mockFunction, 500)

    // Simulate rapid, repeated calls
    throttledFunction()
    throttledFunction()
    throttledFunction()

    // Wait for the throttle time window to pass
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if the mock function was called only once
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('should call the function again after the throttle time window has passed', async () => {
    const mockFunction = vi.fn()
    const throttledFunction = throttle(mockFunction, 500)

    throttledFunction()
    await new Promise((resolve) => setTimeout(resolve, 500))

    throttledFunction()

    // Wait for the throttle time window to pass again
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if the mock function was called twice
    expect(mockFunction).toHaveBeenCalledTimes(2)
  })

  it('should not call the function if it was called again within the throttle time window', async () => {
    const mockFunction = vi.fn()
    const throttledFunction = throttle(mockFunction, 500)

    throttledFunction()
    throttledFunction()

    // Wait for the throttle time window to pass
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if the mock function was called only once
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('should call the function with the latest arguments if it was called multiple times within the throttle time window', async () => {
    const mockFunction = vi.fn()
    const throttledFunction = throttle(mockFunction, 500)

    throttledFunction('first call')
    throttledFunction('second call')

    // Wait for the throttle time window to pass
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if the mock function was called with the latest arguments
    expect(mockFunction).toHaveBeenLastCalledWith('second call')
  })
})
