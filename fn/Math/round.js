const und = require('underscore');
const lod = require('lodash');

/**
 * round - Округляет число до ближайшего числа
 */

// lodash
console.log("lod.round(4.006)", lod.round(4.006));
console.log("lod.round(6.004, 2)", lod.round(6.004, 2));
console.log("lod.round(6040, -2)", lod.round(6040, -2));

// es6
function round(value, decimals) {
	if(decimals === undefined || +decimals === 0) {
		return Math.round(value);
	}
	// Если значение не является числом, либо степень не является целым числом...
	if (isNaN(value) || !(typeof decimals === 'number' && decimals % 1 === 0)) {
		return NaN;
	}
	if (decimals > 0) {
		return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}
	if (decimals < 0) {
		return Number(Math.round(value+'e'+decimals)+'e'+ Math.abs(decimals));
	}
}

console.log("round(4.006)", round(4.006));
console.log("round(6.004, 2)", round(6.004, 2));
console.log("round(6040, -2)", round(6040, -2));
