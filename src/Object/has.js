const und = require('underscore');
const lod = require('lodash');

/**
 * has - проверяет есть ли собственное свойство в объекте
 */

const object = { 'a': { 'b': 2 } };
const other = lod.create({ 'a': lod.create({ 'b': 2 }) });
const other2 = Object.create({ 'a': Object.create({'b': 2}) });

// lodash
console.log("lod.has(object, 'a')", lod.has(object, 'a'));
console.log("lod.has(object, 'a.b')", lod.has(object, 'a.b'));
console.log("lod.has(other, 'a')", lod.has(other, 'a'));
console.log("lod.has(other2, 'a')", lod.has(other2, 'a'));

// Underscore
console.log("und.has(object, 'a')", und.has(object, 'a'));
console.log("und.has(object, 'a.b')", und.has(object, 'a.b')); // не понимает a.b
console.log("und.has(other, 'a')", und.has(other, 'a'));
console.log("und.has(other2, 'a')", und.has(other2, 'a'));

// es6
console.log("object.hasOwnProperty('a')", object.hasOwnProperty('a'));
console.log("object.a.hasOwnProperty('b')", object.a.hasOwnProperty('b'));
console.log("other.hasOwnProperty('a')", other.hasOwnProperty('a'));
console.log("other.hasOwnProperty('a')", other2.hasOwnProperty('a'));

console.log("Object.hasOwn(object, 'a')", Object.hasOwn(object, 'a'));
console.log("Object.hasOwn(object.a, 'b')", Object.hasOwn(object.a, 'b'));
console.log("Object.hasOwn(other, 'a')", Object.hasOwn(other, 'a'));
console.log("Object.hasOwn(other2, 'a')", Object.hasOwn(other2, 'a'));
