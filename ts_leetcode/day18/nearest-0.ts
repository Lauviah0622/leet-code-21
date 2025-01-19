export function updateMatrix(mat: number[][]): number[][] {
  const cols = mat[0].length
  const rows = mat.length

  const updated: (number | undefined)[][] = Array.from(new Array(rows), () => new Array(cols))


  const queue: {
    y: number,
    x: number,
    steps: number
  }[] = []

  // 先掃第一次
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const matVal = mat[y][x]

      if (matVal === 0) {
        updated[y][x] = 0
        queue.push({
          y,
          x,
          steps: 0
        })
      } else {
        updated[y][x] = -1

      }
    }
  }

  //  然後慢慢填進去

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  const isValid = (y: number, x: number) => {
    return y >= 0 && x >= 0 && y < rows && x < cols
  }

  while (queue.length > 0) {
    const target = queue.shift();

    if (!target) continue;

    for (const [shiftX, shiftY] of dirs) {
        const nextX: number = target.x + shiftX;
        const nextY: number = target.y + shiftY;

        if (isValid(nextY, nextX) && updated[nextY][nextX] == -1) {
          updated[nextY][nextX] = target.steps + 1;
          queue.push({
            y: nextY,
            x: nextX,
            steps: target.steps + 1,
          });
        }
    }

  }
  return updated as number[][]
};