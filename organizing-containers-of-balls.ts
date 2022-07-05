export function organizingContainers(container: number[][]): string {
  if (container.length === 1 && container[0].length > 1) return 'Impossible'

  const row = new Array(container.length).fill(0)
  const column = new Array(container.length).fill(0)
  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < container.length; j++) {
      row[i] += container[i][j]
      column[j] += container[i][j]
    }
  }
  const resultRow = row.sort().join()
  const resultColumn = column.sort().join()

  return resultRow === resultColumn ? 'Possible' : 'Impossible'
}
