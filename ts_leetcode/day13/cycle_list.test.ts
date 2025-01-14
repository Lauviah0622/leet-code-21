import { describe, expect, test } from "bun:test";
import { createCycleLinkList } from "../utils";
import { hasCycle, hasCycleTwoPtr } from "./cycle_list";

describe("hasCycle", () => {
  test("example 1", () => {
    const arr = [3, 2, 0, -4];
    const tail = 1;
    const output = true;

    expect(hasCycle(createCycleLinkList(arr, tail))).toBe(output);
  });

  test("example 2", () => {
    const arr = [1, 2];
    const tail = 0;
    const output = true;

    expect(hasCycle(createCycleLinkList(arr, tail))).toBe(output);
  });

  test("example 3", () => {
    const arr = [1];
    const tail = -1;
    const output = false;

    expect(hasCycle(createCycleLinkList(arr, tail))).toBe(output);
  });
});

describe('hasCycleTwoPtr', () => {
  test("example 1", () => {
    const arr = [3, 2, 0, -4];
    const tail = 1;
    const output = true;

    expect(hasCycleTwoPtr(createCycleLinkList(arr, tail))).toBe(output);
  });

  test("example 2", () => {
    const arr = [1, 2];
    const tail = 0;
    const output = true;

    expect(hasCycleTwoPtr(createCycleLinkList(arr, tail))).toBe(output);
  });

  test.only("example 3", () => {
    const arr = [1];
    const tail = -1;
    const output = false;

    expect(hasCycleTwoPtr(createCycleLinkList(arr, tail))).toBe(output);
  });
})