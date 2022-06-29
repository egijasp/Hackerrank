/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
function isPalindrome(x: number): boolean {
  const string = x.toString()
  if (string === string.split('').reverse().join('')) {
    return true
  } else {
    return false
  }
}
