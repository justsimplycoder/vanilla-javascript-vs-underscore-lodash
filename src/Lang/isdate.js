const und = require('underscore');
const lod = require('lodash');

/**
 * isDate - Проверяет, классифицируется ли значение как объект Date.
 */

// underscore
console.log("und.isDate(new Date)", und.isDate(new Date));
console.log("und.isDate('Mon April 23 2012')", und.isDate('Mon April 23 2012'));

// lodash
console.log("lod.isDate(new Date)", lod.isDate(new Date));
console.log("lod.isDate('Mon April 23 2012')", lod.isDate('Mon April 23 2012'));

// es6
function isDate(value) {
	if(Object.prototype.toString.call(value) === '[object Date]') return true;
	return false;
}

console.log("isDate(new Date)", isDate(new Date));
console.log("isDate('Mon April 23 2012')", isDate('Mon April 23 2012'));
