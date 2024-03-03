import { describe, expect, it, vi } from 'vitest'
import { debounce } from 'js100/debounce'

describe('debounce function', () => {
  it('should call the function only once after the delay', async () => {
    const mockFunction = vi.fn()
    const debouncedFunction = debounce(mockFunction, 500)

    // Simulate rapid, repeated calls
    debouncedFunction()
    debouncedFunction()
    debouncedFunction()

    // Wait for the debounce delay to pass
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if the mock function was called only once
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('should not call the function if it is called again before the delay', async () => {
    const mockFunction = vi.fn()
    const debouncedFunction = debounce(mockFunction, 500)

    debouncedFunction()

    // Call the function again before the delay has passed
    debouncedFunction()

    // Wait for the debounce delay to pass
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if the mock function was called only once
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('should call the function with the latest arguments if it was called multiple times', async () => {
    const mockFunction = vi.fn()
    const debouncedFunction = debounce(mockFunction, 500)

    debouncedFunction('first call')
    debouncedFunction('second call')

    // Wait for the debounce delay to pass
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if the mock function was called with the latest arguments
    expect(mockFunction).toHaveBeenLastCalledWith('second call')
  })

  it('should not call the function if it is called after the delay', async () => {
    const mockFunction = vi.fn()
    const debouncedFunction = debounce(mockFunction, 500)

    debouncedFunction()

    // Wait for the debounce delay to pass
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Call the function again after the delay
    debouncedFunction()

    // Wait for a short time to ensure the function is not called again
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Check if the mock function was called only once
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })
})
