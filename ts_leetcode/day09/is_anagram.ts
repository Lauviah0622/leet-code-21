export function _isAnagram(s: string, t: string): boolean {
  const stackRecord: Record<string, number> = {};

  for (const ch of s) {
    stackRecord[ch] = (stackRecord?.[ch] ?? 0) + 1;
  }

  for (const ch of t) {
    stackRecord[ch] = (stackRecord?.[ch] ?? 0) - 1;
  }

  return Object.values(stackRecord).reduce((sum, c) => sum && c === 0, true);
};

export function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false

  const records = new Uint16Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    records[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    records[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
  }

  return records.every((e) => e === 0);
};