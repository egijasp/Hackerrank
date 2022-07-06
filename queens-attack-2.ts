// https://www.hackerrank.com/challenges/queens-attack-2

export function queensAttack(
  n: number,
  k: number,
  rQ: number,
  cQ: number,
  obstacles: number[][]
): number {
  const moves = {
    up: n - rQ,
    down: rQ - 1,
    left: cQ - 1,
    right: n - cQ,
    upRight: Math.min(n - rQ, n - cQ),
    downRight: Math.min(rQ - 1, n - cQ),
    downLeft: Math.min(rQ - 1, cQ - 1),
    upLeft: Math.min(n - rQ, cQ - 1),
  }

  for (const obs of obstacles) {
    // obs same row
    if (obs[0] === rQ) {
      if (obs[1] > cQ) {
        moves['right'] = Math.min(moves['right'], obs[1] - cQ - 1)
      } else {
        moves['left'] = Math.min(moves['left'], cQ - obs[1] - 1)
      }
    }
    // same column
    if (obs[1] === cQ) {
      if (obs[0] > rQ) {
        moves['up'] = Math.min(moves['up'], obs[0] - rQ - 1)
      } else {
        moves['down'] = Math.min(moves['down'], rQ - obs[0] - 1)
      }
    }
    // same diagonal
    if (Math.abs(rQ - obs[0]) === Math.abs(cQ - obs[1])) {
      if (obs[0] < rQ && obs[1] < cQ) {
        moves['downLeft'] = Math.min(moves['downLeft'], cQ - obs[1] - 1)
      }
      if (obs[0] > rQ && obs[1] < cQ) {
        moves['upLeft'] = Math.min(moves['upLeft'], cQ - obs[1] - 1)
      }
      if (obs[0] > rQ && obs[1] > cQ) {
        moves['upRight'] = Math.min(moves['upRight'], obs[1] - cQ - 1)
      }
      if (obs[0] < rQ && obs[1] > cQ) {
        moves['downRight'] = Math.min(moves['downRight'], obs[1] - cQ - 1)
      }
    }
  }

  return Object.values(moves).reduce((a, b) => a + b)
}
