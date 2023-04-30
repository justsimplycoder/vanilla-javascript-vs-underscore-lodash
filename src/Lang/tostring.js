const und = require('underscore');
const lod = require('lodash');

/**
 * toString - Преобразует значение в строку.
 */

// lodash
console.log("lod.toString(null)", lod.toString(null));
console.log("lod.toString(undefined)", lod.toString(undefined));
console.log("lod.toString([1, 2, 3])", lod.toString([1, 2, 3]));
console.log("lod.toString(-0)", lod.toString(-0));
console.log("lod.toString(0)", lod.toString(0));
console.log("lod.toString()", lod.toString());
console.log("lod.toString('')", lod.toString(''));
console.log("lod.toString('text')", lod.toString('text'));

// es6
/**
 * Функция проверки, является ли значение -0
 * @param  {any}  x - проверяемое значение
 * @return {Boolean}
 */
// function isNegativeZero(x) {
// 	return x === 0 && (1 / x) === -Infinity
// }

function toString(value) {
	if(value == null) {
		return '';
	}
	// if(isNegativeZero(value)) return '-0';
	if(Object.is(-0, value)) return '-0';
	return (value).toString();
}

console.log("toString(null)", toString(null));
console.log("toString(undefined)", toString(undefined));
console.log("toString([1, 2, 3])", toString([1, 2, 3]));
console.log("toString(-0)", toString(-0));
console.log("toString(0)", toString(0));
console.log("toString()", toString());
console.log("toString('')", toString(''));
console.log("toString('text')", toString('text'));
