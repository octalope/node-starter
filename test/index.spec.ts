import { expect } from 'chai';
import { MyClass } from '../src/index';

describe('MyClass', () => {
  it('exposes a function doit which returns the initialization string', () => {
    const myClass = new MyClass('hello');
    expect(myClass).to.have.all.keys('foo');
    expect(myClass.doit()).to.deep.equal('hello');
  });
});
