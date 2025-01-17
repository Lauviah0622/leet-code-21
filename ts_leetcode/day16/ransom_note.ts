export function canConstruct(ransomNote: string, magazine: string): boolean {
  const A_CHAR_CODE = 'a'.charCodeAt(0);
  const alphas = new Array(26).fill(0);
  
  Array.from(magazine).forEach((a) => {
    const i = a.charCodeAt(0) - A_CHAR_CODE
    alphas[i] ++;
  })

  Array.from(ransomNote).forEach((a) => {
    const i = a.charCodeAt(0) - A_CHAR_CODE
    alphas[i]--;
  })

  return alphas.every((c) => c >= 0)
}
