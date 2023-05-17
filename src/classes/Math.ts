export default class Math {
  add(a: number, b: number): number {
    return a + b;
  }

  sum(...args: Array<number>): number {
    const defaultValue: number = 0;

    return args.reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
      defaultValue
    );
  }
}
