// 遇到太長的 array 會出問題
// 他在考你空間複雜度...
export function kClosest(points: number[][], k: number): number[][] {
  const output = points
    .map(([x, y]) => {
      return { val: Math.sqrt(x ** 2 + y ** 2), coords: [x, y] };
    })
    .sort(({ val: a }, { val: b }) => {
      console.log({ a, b });

      return a - b;
    })
    .map(({ coords }) => coords)
    .slice(0, k);

  console.log(output);

  return output;
}

export function kClosest2_wrong(points: number[][], k: number): number[][] {
  // 替換機制要是什麼？

  const calDist = (x: number, y: number) => Math.sqrt(x ** 2 + y ** 2);

  const closest: Map<{ x: number; y: number }, number> = new Map();

  // let max =
  const insert = (val: number, coords: { x: number; y: number }) => {
    console.log('123123', closest.size, k);

    if (closest.size < k) {
      closest.set(coords, val);

      return;
    }
    // 幹，這裡也不能 loop...
    const keys = [...closest.entries()]
      .filter(([_, dist]) => dist >= val)
      .sort(([_keyA, a], [_keyB, b]) => b - a);

    const largestKey = keys?.[0];

    if (!largestKey) return;

    closest.delete(largestKey[0]);
    closest.set(coords, val);
  };

  while (points.length > 0) {
    const p = points.shift();
    if (!p) continue;

    console.log('p', p);

    const [x, y] = p;
    const dist = calDist(x, y);

    insert(dist, { x, y });
  }

  console.log('closest', closest);

  return [...closest.keys()].map(({ x, y }) => [x, y]);
}

export function kClosest2(points: number[][], k: number): number[][] {
  // 替換機制要是什麼？
  const getDist = (x: number, y: number) => {
    return Math.sqrt(x ** 2 + y ** 2);
  };

  let closest: number[][] = []
  let min = 0
  let max = 0

  while (points.length > 0) {
    const p = points.pop();
    
    console.log('p', p);
    
    if (!p) continue;

    const dist= getDist(p[0], p[1]);
    if (closest.length < k) {
      min = Math.min(min, dist);
      max = Math.max(max, dist);
      closest.push(p)
      continue
    }


    if (dist > max) {
      continue;

    } else if (dist < min) {
      // 從最小那端插入
      closest.unshift(p)
      // 拔出一個最大的
      closest.pop();
    } else {
      closest.push(p)
      closest = closest.sort((a, b) => getDist(a[0], a[1]) - getDist(b[0], b[1]))
      closest.pop();
    }

    console.log('closest', closest);
    


  }

  return closest;
}


/**
插入那裡要每次作一次 ordered 

 */

