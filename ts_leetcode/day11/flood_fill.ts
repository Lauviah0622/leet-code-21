export function getSurrounded(image: number[][], y: number, x: number) {
  const dirs: [number, number][] = [
    [y, x + 1], //right
    [y + 1, x], // top
    [y, x - 1], // left
    [y - 1, x], // bottom
  ];
  const surrounded = dirs.map(([y, x]: [number, number]) => ({
    pos: [y, x],
    val: image?.[y]?.[x],
  }));

  return surrounded;
}

function execRecursion(
  image: number[][],
  sr: number,
  sc: number,
  fromColor: number,
  toColor: number
) {
  const surrounded = getSurrounded(image, sr, sc);

  image[sr][sc] = toColor;

  surrounded
    .filter(({ val }) => val === fromColor && val !== toColor)
    .forEach(({ pos: [y, x] }) => {
      execRecursion(image, y, x, fromColor, toColor);
    });

  return image;
}

function execLoop(
  image: number[][],
  sr: number,
  sc: number,
  fromColor: number,
  toColor: number
) {
  const queue = [[sr, sc]];

  while (queue.length > 0) {
    const pos = queue.shift();
    if (!pos) return image;

    const [y, x] = pos;

    const surrounded = getSurrounded(image, y, x)
      .filter(({ val }) => val === fromColor && val !== toColor)
      .map(({ pos }) => pos);
    
    image[y][x] = toColor;

    queue.push(...surrounded);
  }
}

export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  execLoop(image, sr, sc, image[sr][sc], color);

  return image;
}
