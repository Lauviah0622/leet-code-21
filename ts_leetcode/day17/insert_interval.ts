export function insert(
  intervals: number[][],
  newInterval: number[],
): number[][] {
  /**
     想 edge case 真的是我的弱項

     要刻意去想 input output 之間的 edge case
     還有看看自己的 code 可能哪裡會有潛在的問題之類的
  */

  if (intervals.length === 0) {
    return [newInterval];
  }

  const [newStart, newEnd] = newInterval;
  const marks = [] as [number, number][];

  let tempStart: number = newStart;
  let tempEnd: number = newEnd;
  let added = false;

  for (const [start, end] of intervals) {
    if (end < newStart) {
      marks.push([start, end]);
      continue;
    }

    if (start > newEnd) {
      if (!added) {
        marks.push([tempStart, tempEnd]);
        added = true;
      }

      marks.push([start, end]);
      continue;
    }

    tempStart = Math.min(start, tempStart);
    tempEnd = Math.max(end, tempEnd);
  }

  if (!added) {
    marks.push([tempStart, tempEnd]);
  }

  return marks;
}

export function insert2(intervals: number[][], [newStart, newEnd]: number[]): number[][] {
  // 我怎麼沒想到可以有個 left, right ...？

  const left = []
  const right = []
  let tempStart: number = newStart;
  let tempEnd: number = newEnd;

  for (const [start, end] of intervals) {
    if (end < newStart) {
      left.push([start, end]);
      continue;
    }

    if (start > newEnd) {
      right.push([start, end]);
      continue;
    }

    tempStart = Math.min(start, tempStart);
    tempEnd = Math.max(end, tempEnd);
  }

  return [...left, [tempStart, tempEnd], ...right]
}
