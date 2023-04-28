const und = require('underscore');
const lod = require('lodash');

/**
 * isNaN - Проверяет, является ли значение NaN.
 */

// underscore
console.log("und.isNaN(NaN)", und.isNaN(NaN));
console.log("und.isNaN(new Number(NaN))", und.isNaN(new Number(NaN)));
console.log("und.isNaN(undefined)", und.isNaN(undefined));
console.log("und.isNaN(null)", und.isNaN(null));

console.log('--------------------------------------------------');

// lodash
console.log("lod.isNaN(NaN)", lod.isNaN(NaN));
console.log("lod.isNaN(new Number(NaN))", lod.isNaN(new Number(NaN)));
console.log("lod.isNaN(undefined)", lod.isNaN(undefined));
console.log("lod.isNaN(null)", lod.isNaN(null));

console.log('--------------------------------------------------');

// es6
console.log("isNaN(NaN)", isNaN(NaN));
console.log("isNaN(new Number(NaN))", isNaN(new Number(NaN)));
console.log("isNaN(undefined)", isNaN(undefined));
console.log("isNaN(null)", isNaN(null));

console.log('--------------------------------------------------');

console.log("Number.isNaN(NaN)", Number.isNaN(NaN));
console.log("Number.isNaN(new Number(NaN))", Number.isNaN(new Number(NaN)));
console.log("Number.isNaN(undefined)", Number.isNaN(undefined));
console.log("Number.isNaN(null)", Number.isNaN(null));

console.log('--------------------------------------------------');

function isNotANumber(value) {
	if(value === undefined) return false;
	return isNaN(value);
}

console.log("isNotANumber(NaN)", isNotANumber(NaN));
console.log("isNotANumber(new Number(NaN))", isNotANumber(new Number(NaN)));
console.log("isNotANumber(undefined)", isNotANumber(undefined));
console.log("isNotANumber(null)", isNotANumber(null));
