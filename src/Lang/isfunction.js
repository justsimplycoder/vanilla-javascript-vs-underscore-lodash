const und = require('underscore');
const lod = require('lodash');

/**
 * isFunction - Проверяет, классифицируется ли значение как объект Function.
 */

// underscore
console.log("und.isFunction(lod)", und.isFunction(lod));
console.log("und.isFunction(/abc/)", und.isFunction(/abc/));
console.log("und.isFunction(String)", und.isFunction(String));

// lodash
console.log("lod.isFunction(lod)", lod.isFunction(lod));
console.log("lod.isFunction(/abc/)", lod.isFunction(/abc/));
console.log("lod.isFunction(String)", lod.isFunction(String));

// es6
console.log("typeof lod === 'function'", typeof lod === 'function');
console.log("typeof /abc/ === 'function'", typeof /abc/ === 'function');
console.log("typeof String === 'function'", typeof String === 'function');