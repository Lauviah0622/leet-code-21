import { describe, expect, test } from "bun:test";
import { floodFill, getSurrounded} from "./flood_fill";

describe.skip('getSurrounded', () => {
  test('at center', () => {
    const map = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const x = 1;
    const y = 1;

    const output = [
      {
        pos: [0, 1],
        val: 2,
      },
      {
        pos: [2, 1],
        val: 8,
      },
      {
        pos: [1, 0],
        val: 4,
      },
      {
        pos: [1, 2],
        val: 6,
      },
    ];

    const res = getSurrounded(map, y, x);

    output.forEach((dir) => {
      expect(res).toContainEqual(dir);
    });
  });
  test('at border', () => {
    const map = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const x = 1;
    const y = 0;
    const included = [
      {
        pos: [0, 0],
        val: 1,
      },
      {
        pos: [0, 2],
        val: 3,
      },
      {
        pos: [1, 1],
        val: 5,
      },
    ];

    const excluded = [
      {
        pos: [0, -1],
        val: undefined,
      },
    ];

    const res = getSurrounded(map, y, x);

    included.forEach((dir) => {
      expect(res).toContainEqual(dir);
    });
    excluded.forEach((dir) => {
      expect(res).not.toContainEqual(dir);
    });
  });

  test('at corner', () => {
    const map = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const x = 0;
    const y = 0;
    const included = [
      {
        pos: [1, 0],
        val: 4,
      },
      {
        pos: [0, 1],
        val: 2,
      },
    ];

    const excluded = [
      {
        pos: [0, -1],
        val: undefined,
      },
      {
        pos: [-1, 0],
        val: undefined,
      },
    ];

    const res = getSurrounded(map, y, x);

    included.forEach((dir) => {
      expect(res).toContainEqual(dir);
    });
    excluded.forEach((dir) => {
      expect(res).not.toContainEqual(dir);
    });
  });

  test('not 3 x 3', () => {
    const map = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const x = 0;
    const y = 1;
    const included = [
      {
        pos: [0, 0],
        val: 1,
      },
      {
        pos: [1, 1],
        val: 5,
      },
    ];

    const res = getSurrounded(map, y, x);

    included.forEach((dir) => {
      expect(res).toContainEqual(dir);
    });
    expect(res.length).toBe(included.length)
  });


});


test("Example 1", () => {
  const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
  const sr = 1;
  const sc = 1;
  const color = 2;
  const output = [[2, 2, 2], [2, 2, 0], [2, 0, 1]];

  expect(floodFill(image, sr, sc, color)).toEqual(output);
});

test("Example 2", () => {
  const image = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  const sr = 0;
  const sc = 0;
  const color = 0;
  const output = [[0, 0, 0], [0, 0, 0]];

  expect(floodFill(image, sr, sc, color)).toEqual(output);
});

test("Example 3", () => {
  const image = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  const sr = 1;
  const sc = 0;
  const color = 2;
  const output = [[2, 2, 2], [2, 2, 2]];

  expect(floodFill(image, sr, sc, color)).toEqual(output);
});
