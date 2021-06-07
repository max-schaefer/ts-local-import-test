import { greet } from './greet';
import { Person } from './person';
import { expect } from 'chai';
import 'mocha';

describe('Greet function', () => {
  it('should return greeting', () => {
    const result = greet({
      getName() { return "you"; }
    });
    expect(result).to.equal('Hello, you');
  });
});