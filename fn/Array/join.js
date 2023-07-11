const und = require('underscore');
const lod = require('lodash');

/**
 * join - Преобразует все элементы массива в строку, разделенную разделителем.
 */

// lodash
console.log("lod.join(['a', 'b', 'c'], '~')", lod.join(['a', 'b', 'c'], '~'));

// es6
console.log("['a', 'b', 'c'].join('~')", ['a', 'b', 'c'].join('~'));