import { Person } from './person';

/** Return a greeting for the given person. */
export function greet(person: Person) {
  return `Hello, ${person.getName()}`;
}
