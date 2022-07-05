export function organizingContainers(container: number[][]): string {
  if (container.length === 1 && container[0].length > 1) return 'Impossible'

  const row = new Array(container.length).fill(0)
  const colon = new Array(container.length).fill(0)
  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < container.length; j++) {
      row[i] += container[i][j]
      colon[j] += container[i][j]
    }
  }
  const resultRow = row.sort().join()
  const resultColon = colon.sort().join()

  return resultRow === resultColon ? 'Possible' : 'Impossible'
}
