import Group from "./Group";
import Person from "./Person";

class GroupMaker {
  static isOdd(value: number): boolean {
    if (value === 0)
      throw new Error("number 0 is odd but not admitted for making groups");
    return value % 2 === 0;
  }

  static isDivisibleBy(value: number, byValue: number): boolean {
    if (value === 0 || byValue === 0) {
      throw new Error("value param and byValue param must be > 0");
    }

    if (byValue > value) {
      throw new Error("value param must be <= byValue param");
    }

    return value % byValue === 0;
  }

  private static make2groups(persons: Array<Person>): Array<Group> {
    const middleIndex: number = Math.ceil(persons.length / 2);

    return [
      new Group("A", persons.slice(0, middleIndex)),
      new Group("B", persons.slice(-middleIndex)),
    ];
  }

  private static makeNgroups(persons: Array<Person>, n: number): Array<Group> {
    const groups: Array<Group> = [];
    let divideBy: number = n;
    if (divideBy === persons.length) divideBy = 1;

    for (let i: number = 0; i < persons.length; i += divideBy) {
      const group = new Group("Group " + i, persons.slice(i, i + divideBy));
      groups.push(group);
    }

    return groups;
  }

  static makeEqualGroups(persons: Array<Person>): Array<Group> {
    if (persons.length === 0 || persons.length < 2) {
      throw new Error("persons param must be >= 2");
    }

    if (GroupMaker.isOdd(persons.length)) {
      let groups;

      try {
        if (GroupMaker.isDivisibleBy(persons.length, 4)) {
          groups = GroupMaker.makeNgroups(persons, 4);
        } else {
          groups = GroupMaker.make2groups(persons);
        }
      } catch (error) {
        groups = GroupMaker.make2groups(persons);
      }

      return groups;
    } else {
      throw new Error(
        "If people length is not odd, can't return groups with equal length"
      );
    }
  }
}

export default GroupMaker;
