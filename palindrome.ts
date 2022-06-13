function isPalindrome(x: number): boolean {
  const string = x.toString().split("");
  if (string === string.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}
