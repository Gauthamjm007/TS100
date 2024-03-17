export default function flat(arr: any, depth = 1) {
  return depth
    ? arr.reduce((acc: any, curr: any) => {
        return [
          ...acc,
          ...(Array.isArray(curr) ? flat(curr, depth - 1) : [curr]),
        ]
      }, [])
    : arr
}
