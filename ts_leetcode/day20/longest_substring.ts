export function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let str = ''

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (str.includes(ch)) {
      str = str.slice(str.indexOf(ch) + 1, str.length) + ch;
      
    } else {
      str += ch
    }
    max = Math.max(str.length, max)
  }

  return max
};