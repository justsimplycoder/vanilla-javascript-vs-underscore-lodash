const und = require('underscore');
const lod = require('lodash');

/**
 * split - Разбивает строку по разделителю.
 */

// lodash
console.log("lod.split('a-b-c-d', '-', 2)", lod.split('a-b-c-d', '-', 2));

// es6
console.log("'a-b-c-d'.split('-', 2)", 'a-b-c-d'.split('-', 2));