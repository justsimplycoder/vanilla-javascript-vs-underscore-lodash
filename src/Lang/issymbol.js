const und = require('underscore');
const lod = require('lodash');

/**
 * isSymbol - проверяет является ли выражение типом Symbol
 */

let sym = Symbol('abc');

// underscore
console.log("und.isSymbol(Symbol.iterator)", und.isSymbol(Symbol.iterator));
console.log("und.isSymbol(sym)", und.isSymbol(sym));
console.log("und.isSymbol('abc')", und.isSymbol('abc'));

// lodash
console.log("lod.isSymbol(Symbol.iterator)", lod.isSymbol(Symbol.iterator));
console.log("lod.isSymbol(sym)", lod.isSymbol(sym));
console.log("lod.isSymbol('abc')", lod.isSymbol('abc'));

// es6
function isSymbol(value) {
	if(Object.prototype.toString.call(value) === '[object Symbol]') return true;
	return false;
}

console.log("isSymbol(Symbol.iterator)", isSymbol(Symbol.iterator));
console.log("isSymbol(sym)", isSymbol(sym));
console.log("isSymbol('abc')", isSymbol('abc'));