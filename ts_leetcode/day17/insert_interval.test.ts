import { describe, expect, test } from "bun:test";
import { insert, insert2 } from "./insert_interval";

describe("insert", () => {
  test("Example 1", () => {
    const intervals = [[1, 3], [6, 9]];
    const newInterval = [2, 5];
    const output = [
      [1, 5],
      [6, 9],
    ];

    expect(insert(intervals, newInterval)).toEqual(output);
  });

  test("Example 2", () => {
    const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
    const newInterval = [4, 8];
    const output = [
      [1, 2],
      [3, 10],
      [12, 16],
    ];

    expect(insert(intervals, newInterval)).toEqual(output);
  });

  test("Example 3", () => {
    const intervals = [[1, 5]];
    const newInterval = [0, 3];
    const output = [
      [0, 5],
    ];

    expect(insert(intervals, newInterval)).toEqual(output);
  });

  test("Example 4", () => {
    const intervals = [[1, 5]];
    const newInterval = [0, 0];
    const output = [
      [0, 0],
      [1, 5],
    ];

    expect(insert(intervals, newInterval)).toEqual(output);
  });
});

describe("insert2", () => {
  test("Example 1", () => {
    const intervals = [[1, 3], [6, 9]];
    const newInterval = [2, 5];
    const output = [
      [1, 5],
      [6, 9],
    ];

    expect(insert2(intervals, newInterval)).toEqual(output);
  });

  test("Example 2", () => {
    const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
    const newInterval = [4, 8];
    const output = [
      [1, 2],
      [3, 10],
      [12, 16],
    ];

    expect(insert2(intervals, newInterval)).toEqual(output);
  });

  test("Example 3", () => {
    const intervals = [[1, 5]];
    const newInterval = [0, 3];
    const output = [
      [0, 5],
    ];

    expect(insert2(intervals, newInterval)).toEqual(output);
  });

  test("Example 4", () => {
    const intervals = [[1, 5]];
    const newInterval = [0, 0];
    const output = [
      [0, 0],
      [1, 5],
    ];

    expect(insert2(intervals, newInterval)).toEqual(output);
  });
});
