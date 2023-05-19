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
  test("GroupMaker should return 2 groups of 1 when 2 persons is given in param", () => {
    const person1 = new Person("John", "Doe");
    const person2 = new Person("James", "White");
    const persons: Array<Person> = [person1, person2];
    expect(GroupMaker.makeEqualGroups(persons).length).toEqual(2);
  });
  test("GroupMaker should return more than 2 groups when more than 2 persons is given in param", () => {
    const persons: Array<Person> = Group.fake(4).persons;
    const groups: Array<Group> = GroupMaker.makeEqualGroups(persons);
    expect(groups.length).toBeGreaterThan(2);
  });

  test("GroupMaker should return 5 groups of 4 persons when 20 persons is given in param", () => {
    const persons: Array<Person> = Group.fake(20).persons;
    const groups: Array<Group> = GroupMaker.makeEqualGroups(persons);
    expect(groups.length).toEqual(5);
  });
  test("GroupMaker should return equal groups", () => {
    const persons: Array<Person> = Group.fake(24).persons;
    const groups: Array<Group> = GroupMaker.makeEqualGroups(persons);
    expect(groups[0].persons.length).toEqual(
      groups[groups.length - 1].persons.length
    );
  });
  test("GroupMaker should return same number of persons in groups than number of persons given in param", () => {
    const persons: Array<Person> = Group.fake(24).persons;
    const groups: Array<Group> = GroupMaker.makeEqualGroups(persons);
    const total = groups.reduce(
      (prev, group, index) => prev + group.persons.length,
      0
    );
    expect(total).toEqual(24);
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
  test("GroupMaker isDivisibleBy return true if ask 2 is disible by 2", () => {
    expect(GroupMaker.isDivisibleBy(2, 2)).toBeTruthy();
  });
  test("GroupMaker isDivisibleBy return true if ask 4 is disible by 2", () => {
    expect(GroupMaker.isDivisibleBy(4, 2)).toBeTruthy();
  });
  test("GroupMaker isDivisibleBy return true if ask 4 is disible by 2", () => {
    expect(GroupMaker.isDivisibleBy(4, 2)).toBeTruthy();
  });
  test("GroupMaker isDivisibleBy return false if ask 3 is disible by 2", () => {
    expect(GroupMaker.isDivisibleBy(3, 2)).toBeFalsy();
  });
  test("GroupMaker isDivisibleBy throw exception if value param is > byValue param", () => {
    expect(() => GroupMaker.isDivisibleBy(1, 3)).toThrow(
      "value param must be <= byValue param"
    );
  });
  test("GroupMaker isDivisibleBy throw exception if value param or byValue param are equal to 0", () => {
    expect(() => GroupMaker.isDivisibleBy(0, 0)).toThrow(
      "value param and byValue param must be > 0"
    );
  });
});
