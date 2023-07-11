const und = require('underscore');
const lod = require('lodash');

/**
 * reduceRight - Этот метод подобен _.reduce, за исключением того, что он перебирает элементы коллекции справа налево.
 */

var array = [[0, 1], [2, 3], [4, 5]];

// underscore
console.log(
  "und.reduceRight(array, (flattened, other) => flattened.concat(other), [])\n",
  und.reduceRight(array, (flattened, other) => flattened.concat(other), [])
);

// lodash
console.log(
  "lod.reduceRight(array, (flattened, other) => flattened.concat(other), [])\n",
  lod.reduceRight(array, (flattened, other) => flattened.concat(other), [])
);

// es6
console.log(
  "array.reduceRight((flattened, other) => flattened.concat(other), [])\n",
  array.reduceRight((flattened, other) => flattened.concat(other), [])
);