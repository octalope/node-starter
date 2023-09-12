export class MyClass {
  constructor (private foo: string) {}
  doit (): string {
    return this.foo;
  }
}

export const sqr = (x: number): number => {
  return x * x;
};
