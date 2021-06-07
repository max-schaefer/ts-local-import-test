#! /usr/bin/env ts-node

import { Person } from './src/person';
import { greet } from './src/greet';
import readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  const person = {
    getName() { return answer; }
  };
  console.log(greet(person));
  rl.close();
});
