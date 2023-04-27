const und = require('underscore');
const lod = require('lodash');

/**
 * isBoolean - Проверяет, классифицируется ли значение как логический примитив или объект.
 */

// underscore
console.log("und.isBoolean(false)", und.isBoolean(false));
console.log("und.isBoolean(null)", und.isBoolean(null));

// lodash
console.log("lod.isBoolean(false)", lod.isBoolean(false));
console.log("lod.isBoolean(null)", lod.isBoolean(null));

// es6
console.log("typeof false === 'boolean'", typeof false === 'boolean');
console.log("typeof null === 'boolean'", typeof null === 'boolean');
