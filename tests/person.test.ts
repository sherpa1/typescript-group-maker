import { describe, expect, test } from "@jest/globals";
import { faker } from "@faker-js/faker";
import Person from "../src/classes/Person";

describe("Person", () => {
  test("Person to be defined", () => {
    expect(Person).toBeDefined();
  });
  test("faker to be defined", () => {
    expect(faker).toBeDefined();
  });
  test("Person to have firstname affected from constructor", () => {
    const p = new Person("John", "Doe");
    expect(p.firstname).toEqual("John");
  });
  test("Person to have lastname affected from constructor", () => {
    const p = new Person("John", "Doe");
    expect(p.lastname).toEqual("Doe");
  });
  test("Person to have firstname randomly affected from constructor with Fajerjs", () => {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const p = new Person(firstname, lastname);
    expect(p.firstname).toEqual(firstname);
  });
  test("Person to have lastname randomly affected from constructor with Fajerjs", () => {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const p = new Person(firstname, lastname);
    expect(p.lastname).toEqual(lastname);
  });
});
