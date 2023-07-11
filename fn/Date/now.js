const und = require('underscore');
const lod = require('lodash');

/**
 * now - Получает временную метку числа миллисекунд, прошедших с эпохи Unix (1 января 1970 г., 00:00:00 UTC).
 */

// underscore
console.log("und.now()", und.now());
console.log("new Date(und.now())", new Date(und.now()));

// lodash
console.log("lod.now()", lod.now());
console.log("new Date(lod.now())", new Date(lod.now()));

// es6
console.log("Date.now()", Date.now());
console.log("new Date(Date.now())", new Date(Date.now()));
