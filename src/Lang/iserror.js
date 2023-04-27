const und = require('underscore');
const lod = require('lodash');

/**
 * isError - Проверяет, является ли значение объектом Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError или URIError.
 */

// underscore
console.log("und.isError(new Error)", und.isError(new Error));
console.log("und.isError(Error)", und.isError(Error));
console.log("und.isError(new EvalError)", und.isError(new EvalError));

// lodash
console.log("lod.isError(new Error)", lod.isError(new Error));
console.log("lod.isError(Error)", lod.isError(Error));
console.log("lod.isError(new EvalError)", lod.isError(new EvalError));

// es6
function isError(value) {
	if(Object.prototype.toString.call(value) === '[object Error]') return true;
	return false;
}

console.log("isError(new Error)", isError(new Error));
console.log("isError(Error)", isError(Error));
console.log("isError(new EvalError)", isError(new EvalError));
