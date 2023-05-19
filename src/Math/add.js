const und = require('underscore');
const lod = require('lodash');

/**
 * add - складывание 2-х чисел
 */

// lodash
console.log("lod.add(4, 6)", lod.add(4, 6));
console.log("lod.add('4', '6')", lod.add('4', '6'));

// es6
function add(a, b) {
  return a + b;
}
console.log("add(4, 6)", add(4, 6));
console.log("add('4', '6')", add('4', '6'));