// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

// import { john, peter } from './4-names';

// console.log(data);

const john = names.john;
const peter = names.peter;

sayHi(john);
sayHi(peter);
sayHi(names.john);
