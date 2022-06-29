export function catAndMouse(x: number, y: number, z: number): string {
  const catAdistance = Math.abs(x - z)
  const catBdistance = Math.abs(y - z)

  if (catAdistance > catBdistance) {
    return 'cat b'
  } else if (catAdistance < catBdistance) {
    return 'cat a'
  }

  return 'mouse c'
}
