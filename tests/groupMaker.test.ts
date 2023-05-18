import { describe, expect, test } from "@jest/globals";
import Person from "../src/classes/Person";
import Group from "../src/classes/Group";
import GroupMaker from "../src/classes/GroupMaker";

describe("Group", () => {
  test("Group to be defined", () => {
    expect(Group).toBeDefined();
  });
  test("Person to be defined", () => {
    expect(Person).toBeDefined();
  });
  test("GroupMaker to be defined", () => {
    expect(GroupMaker).toBeDefined();
  });
  test("GroupMaker should return two groups of 1 when 2 persons is given in param", () => {
    const person1 = new Person("John", "Doe");
    const person2 = new Person("James", "White");
    const persons: Array<Person> = [person1, person2];
    expect(GroupMaker.makeEqualGroups(persons).length).toEqual(2);
  });
  test("GroupMaker should return two groups of equal length when odd param is given", () => {
    const group = Group.fake(10);
    const [groupA, groupB] = GroupMaker.makeEqualGroups(group.persons);
    expect(groupA.persons.length).toEqual(groupB.persons.length);
  });
  test("GroupMaker isOdd returns true if odd number is given", () => {
    expect(GroupMaker.isOdd(2)).toBeTruthy();
  });
  test("GroupMaker isOdd returns false if even number is given", () => {
    expect(GroupMaker.isOdd(3)).toBeFalsy();
  });
  test("GroupMaker isOdd returns exception if 0 is given", () => {
    expect(() => GroupMaker.isOdd(0)).toThrow(
      "number 0 is odd but not admitted for making groups"
    );
  });
});
