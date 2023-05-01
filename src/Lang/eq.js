const und = require('underscore');
const lod = require('lodash');

/**
 * eq - проверяет является значения эквивалентными
*/

// lodash
var object = { 'a': 1 };
var other = { 'a': 1 };

console.log("lod.eq(object, object)", lod.eq(object, object));
console.log("lod.eq(object, other)", lod.eq(object, other));
console.log("lod.eq('a', 'a')", lod.eq('a', 'a'));
console.log("lod.eq('a', Object('a'))", lod.eq('a', Object('a')));
console.log("lod.eq(NaN, NaN)", lod.eq(NaN, NaN));

// es6
console.log("Object.is(object, object)", Object.is(object, object));
console.log("Object.is(object, other)", Object.is(object, other));
console.log("Object.is('a', 'a')", Object.is('a', 'a'));
console.log("Object.is('a', Object('a'))", Object.is('a', Object('a')));
console.log("Object.is(NaN, NaN)", Object.is(NaN, NaN));
