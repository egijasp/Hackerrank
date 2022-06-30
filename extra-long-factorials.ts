// https://www.hackerrank.com/challenges/extra-long-factorials/problem

export function extraLongFactorials(n: number): void {
  const bigInt = BigInt(n)
  let result = 1n

  for (let i = bigInt; i > 0; i--) {
    result *= i
  }

  console.log(result.toString())
}
