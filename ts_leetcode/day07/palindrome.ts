const isAlpha = (char: string) => {
  return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
}

export function isPalindrome(str: string): boolean {
  let indexL = 0;
  let indexR = str.length - 1

  while (indexL < indexR) {

      const r = str[indexR].toLocaleLowerCase()
      const l = str[indexL].toLocaleLowerCase()
      
      if (!isAlpha(l)) {
          indexL++;
          continue
      }

      if (!isAlpha(r)) {
          indexR--;
          continue
      }

      if (l !== r) return false;

      indexR--;
      indexL++;
  }
  return true
}
