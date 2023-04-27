const und = require('underscore');
const lod = require('lodash');

/**
 * isBuffer - Проверяет, является ли значение буфером.
 */

// lodash
console.log("lod.isBuffer(new Buffer(2))", lod.isBuffer(new Buffer(2)));
console.log("lod.isBuffer(new Uint8Array(2))", lod.isBuffer(new Uint8Array(2)));

// es6
console.log("Buffer.isBuffer(new Buffer(2))", Buffer.isBuffer(new Buffer(2)));
console.log("Buffer.isBuffer(new Uint8Array(2))", Buffer.isBuffer(new Uint8Array(2)));
