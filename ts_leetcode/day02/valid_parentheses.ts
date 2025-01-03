
export const validParenthesis = (input: string): boolean => {
  const queue: string[] = [];
  const map: Record<string, string> = {
    '{': '}',
    '[': ']',
    '(': ')',
  }

  Array.from(input).forEach(ch => {
    if (queue.length === 0 || map[queue?.[queue.length - 1]] !== ch) {
      queue.push(ch);
      return
    }

    queue.pop()
  });
  

  return queue.length === 0;
}