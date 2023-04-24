const und = require('underscore');
const lod = require('lodash');

/**
 * floor - Округляет число в меньшую стороун
 */

// lodash
console.log("lod.floor(4.006)", lod.floor(4.006));
console.log("lod.floor(0.046, 2)", lod.floor(0.046, 2));
console.log("lod.floor(4060, -2)", lod.floor(4060, -2));

// es6
function floor(value, decimals) {
	if(decimals === undefined || +decimals === 0) {
		return Math.floor(value);
	}
	// Если значение не является числом, либо степень не является целым числом...
	if (isNaN(value) || !(typeof decimals === 'number' && decimals % 1 === 0)) {
		return NaN;
	}
	if (decimals > 0) {
		return Number(Math.floor(value+'e'+decimals)+'e-'+decimals);
	}
	if (decimals < 0) {
		return Number(Math.floor(value+'e'+decimals)+'e'+ Math.abs(decimals));
	}
}

console.log("floor(4.006)", floor(4.006));
console.log("floor(0.046, 2)", floor(0.046, 2));
console.log("floor(4060, -2)", floor(4060, -2));

