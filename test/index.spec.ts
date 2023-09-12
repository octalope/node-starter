import { expect } from 'chai';
import { MyClass, sqr } from '../src/index';

describe('MyClass', () => {
  it('exposes a function doit which returns the initialization string', () => {
    const myClass = new MyClass('hello');
    expect(myClass).to.have.all.keys('foo');
    expect(myClass.doit()).to.deep.equal('hello');
  });
});

describe('sqr', () => {
  it('squares the input', () => {
    expect(sqr(2)).to.equal(4);
  });
});
