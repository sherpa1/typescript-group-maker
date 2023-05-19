export default class Person {
  constructor(private _firstname: string, private _lastname: string) {
    this._firstname = _firstname;
    this._lastname = _lastname;
  }

  public get firstname(): string {
    return this._firstname;
  }

  public get lastname(): string {
    return this._lastname;
  }
}
