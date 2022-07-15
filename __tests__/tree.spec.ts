import transformTree from '../src/tree'

console.log(transformTree)

test('The Array result should be tree.', () => {
  const arr: any[] = [
    { id: 1, pid: 0, type: 1 },
    { id: 2, pid: 1, type: 1 },
    { id: 3, pid: 2, type: 2 },
    { id: 4, pid: 2, type: 2 }
  ]
  expect(transformTree(arr)).toEqual([
    {
      id: 1,
      pid: 0,
      type: 1,
      children: [
        {
          id: 2,
          pid: 1,
          type: 1,
          children: [
            { id: 3, pid: 2, type: 2, children: [] },
            { id: 4, pid: 2, type: 2, children: [] }
          ]
        }
      ]
    }
  ])
})
