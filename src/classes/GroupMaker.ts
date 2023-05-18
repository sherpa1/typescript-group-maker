import Group from "./Group";
import GroupMakerException from "./GroupMakerException";
import Person from "./Person";

class GroupMaker {
  static isOdd(value: number): boolean {
    if (value === 0)
      throw new Error("number 0 is odd but not admitted for making groups");
    return value % 2 === 0;
  }

  static makeEqualGroups(persons: Array<Person>): Array<Group> {
    if (persons.length === 0 || persons.length < 2) {
      throw new GroupMakerException("persons param must be >= 2");
    }

    if (GroupMaker.isOdd(persons.length)) {
      const middleIndex: number = Math.ceil(persons.length / 2);

      return [
        new Group("A", persons.slice(0, middleIndex)),
        new Group("B", persons.slice(-middleIndex)),
      ];
    } else {
      throw new GroupMakerException(
        "If people length is not odd, can't return groups with equal length"
      );
    }
  }
}

export default GroupMaker;
