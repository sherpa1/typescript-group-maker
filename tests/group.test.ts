import { describe, expect, test } from "@jest/globals";
import Person from "../src/classes/Person";
import Group from "../src/classes/Group";

describe("Group", () => {
  test("Group to be defined", () => {
    expect(Group).toBeDefined();
  });
  test("Person to be defined", () => {
    expect(Person).toBeDefined();
  });
  test("Group to be have persons affected from constructor", () => {
    const person1 = new Person("John", "Doe");
    const person2 = new Person("James", "White");
    const persons: Array<Person> = [person1, person2];
    const group: Group = new Group("A", persons);
    expect(group.persons.length).toEqual(2);
  });
  test("Group to be have persons affected from constructor", () => {
    const person1 = new Person("John", "Doe");
    const person2 = new Person("James", "White");
    const persons: Array<Person> = [person1, person2];
    const group: Group = new Group("A", persons);
    expect(group.persons.length).toEqual(2);
  });
  test("Group.fake return a Group with number of persons param given", () => {
    const group: Group = Group.fake(10);
    expect(group.persons.length).toEqual(10);
  });
  test("Group.fake throw if number of persons param given is 0", () => {
    expect(() => Group.fake(0)).toThrow();
  });
});
