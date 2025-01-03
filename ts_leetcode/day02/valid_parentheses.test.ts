import { expect, test } from "bun:test";
import { validParenthesis } from './valid_parentheses';


test("validParenthesis - 1", () => {
  expect(validParenthesis("()")).toEqual(true);
});
test("validParenthesis - 2", () => {
  expect(validParenthesis("()[]{}")).toEqual(true);
});
test('validParenthesis - 3', () => {
  expect(validParenthesis("(]")).toEqual(false);
});
test('validParenthesis - 4', () => {
  expect(validParenthesis("([])")).toEqual(true);
});
