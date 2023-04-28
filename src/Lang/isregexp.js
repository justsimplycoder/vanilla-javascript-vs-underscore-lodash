const und = require('underscore');
const lod = require('lodash');

/**
 * isRegExp - Проверяет, классифицируется ли значение как объект RegExp.
 */

// underscore
console.log("und.isRegExp(/abc/)", und.isRegExp(/abc/));
console.log("und.isRegExp('/abc/')", und.isRegExp('/abc/'));

// lodash
console.log("lod.isRegExp(/abc/)", lod.isRegExp(/abc/));
console.log("lod.isRegExp('/abc/')", lod.isRegExp('/abc/'));

// es6
let re = /abc/;
/abc/ instanceof RegExp
console.log("re instanceof RegExp", re instanceof RegExp);
console.log("re.constructor === RegExp", re.constructor === RegExp);
let str = '/abc/';
console.log("str instanceof RegExp", str instanceof RegExp);
console.log("str.constructor === RegExp", str.constructor === RegExp);
