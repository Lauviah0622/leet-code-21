import { describe, expect, test } from "bun:test";
import { updateMatrix } from "./nearest-0";

describe("insert", () => {
  test("Example 1", () => {
    const mat = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
    const output = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    expect(updateMatrix(mat)).toEqual(output);
  });

  test("Example 2", () => {
    const mat = [[0, 0, 0], [0, 1, 0], [1, 1, 1]];
    const output = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ];

    expect(updateMatrix(mat)).toEqual(output);
  });
  test("Example 3", () => {
    const mat = [[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]];
    const output = [[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]];

    expect(updateMatrix(mat)).toEqual(output);
  });
  test("Example 4", () => {
    const mat = [[0,1,0,1,1],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]];
    const output =[[0,1,0,1,2],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]];

    expect(updateMatrix(mat)).toEqual(output);
  });

  test.only("Example 5", () => {
    const mat = [[0,1,1,0,0],[0,1,1,0,0],[0,1,0,0,1],[1,1,1,1,0],[1,0,0,1,0]];
    const output =[[0,1,1,0,0],[0,1,1,0,0],[0,1,0,0,1],[1,1,1,1,0],[1,0,0,1,0]];

    expect(updateMatrix(mat)).toEqual(output);
  });
});
