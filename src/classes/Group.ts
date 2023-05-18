import Person from "./Person";

export default class Group {
  _name: string;

  constructor(private name: string, private _persons: Array<Person>) {
    this._name = name;
    this._persons = _persons;
  }

  get persons(): Array<Person> {
    return this._persons;
  }

  static fake(numberOfPersons: number): Group {
    const aGroup: Group = new Group("Fake", []);

    if (!numberOfPersons || numberOfPersons < 2) {
      throw new Error("numberOfPersons must be >=2");
    }

    for (let index = 0; index < numberOfPersons; index++) {
      aGroup.persons.push(new Person("A" + index, "B" + index));
    }

    return aGroup;
  }
}
