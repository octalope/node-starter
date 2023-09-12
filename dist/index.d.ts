declare module 'scratch/src/index' {
  export class MyClass {
      private foo;
      constructor(foo: string);
      doit(): string;
  }

}
declare module 'scratch/test/index.spec' {
  export {};

}
declare module 'scratch' {
  import main = require('scratch/src/index');
  export = main;
}