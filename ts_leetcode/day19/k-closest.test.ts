import { describe, expect, test } from "bun:test";
import { kClosest, kClosest2 } from "./k-closest";


describe.skip('kClosest', () => {
  test("Example 1", () => {
    const points = [[1,3],[-2,2]];
    const k = 1
    const output = [
      [-2, 2]
    ];
  
    expect(kClosest(points, k)).toEqual(output);
  });
  
  test("Example 2", () => {
    const points = [[3,3],[5,-1],[-2,4]];
    const k = 2;
    const output = [
      [3, 3], [-2, 4]
    ];
  
    expect(kClosest(points, k)).toEqual(output);
  });
})  


describe('kClosest2', () => {
  test("Example 1", () => {
    const points = [[1,3],[-2,2]];
    const k = 1
    const output = [
      [-2, 2]
    ];
  
    expect(kClosest2(points, k)).toEqual(output);
  });
  
  test("Example 2", () => {
    const points = [[3,3],[5,-1],[-2,4]];
    const k = 2;
    const output = [
      [3, 3], [-2, 4]
    ];
  
    expect(kClosest2(points, k)).toEqual(output);
  });

  test("Example 3", () => {
    const points = [[3,3],[5,-1],[-2,4], [2, 2]];
    const k = 2;
    const output = [
      [2, 2], [3, 3]
    ];

  
    expect(kClosest2(points, k).sort()).toEqual(output.sort());
  });
  test("Example 4", () => {
    const points = [[0,1],[1,0]];
    const k = 2;
    const output = [[0,1],[1,0]];
  
    expect(kClosest2(points, k).sort()).toEqual(output.sort());
  });
  test.only("Example 5", () => {
    const points = [[6,10],[-3,3],[-2,5],[0,2]];
    const k = 3;
    const output = [[0,2],[-3,3],[-2,5]];
  
    expect(kClosest2(points, k).sort()).toEqual(output.sort());
  });
})  
