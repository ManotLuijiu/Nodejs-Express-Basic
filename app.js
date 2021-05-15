const _ = require('lodash');
const url = require('url');
const myURL = new URL('https://means-business.info');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
console.log(myURL);
