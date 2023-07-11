const und = require('underscore');
const lod = require('lodash');

/**
 * words - Разбивает строку на массив слов.
 */

// lodash
console.log("lod.words('fred, barney, & pebbles')", lod.words('fred, barney, & pebbles'));
console.log("lod.words('fred, barney, & pebbles', /[^, ]+/g)", lod.words('fred, barney, & pebbles', /[^, ]+/g));
console.log("lod.words('яблоки, груши, сливы')", lod.words('яблоки, груши, сливы'));

// es6
console.log("'fred, barney, & pebbles'.match(/[^, &]+/g)", 'fred, barney, & pebbles'.match(/[^, &]+/g));
console.log("'fred, barney, & pebbles'.split(' ')", 'fred, barney, & pebbles'.split(' '));
console.log("'fred, barney, & pebbles'.match(/[^, ]+/g)", 'fred, barney, & pebbles'.match(/[^, ]+/g));
console.log("'яблоки, груши, сливы'.split(' ')", 'яблоки, груши, сливы'.split(' '));