import Math from "../src/classes/Math";
import { describe, expect, test } from "@jest/globals";

let m: Math;

beforeEach(() => {
  m = new Math();
});

describe("Mathematics", () => {
  test("Math to be defined", () => {
    expect(Math).toBeDefined();
  });
  test("Test add(1,1) equal 2", () => {
    expect(m.add(1, 1)).toEqual(2);
  });
  test("Test sum(1,1,1) equal 3", () => {
    expect(m.sum(1, 1, 1)).toEqual(3);
  });
});
