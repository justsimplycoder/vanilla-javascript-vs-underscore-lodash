const und = require('underscore');
const lod = require('lodash');

/**
 * ceil - Округляет число в большую сторону
 */

// lodash
console.log("lod.ceil(4.006)", lod.ceil(4.006));
console.log("lod.ceil(6.004, 2)", lod.ceil(6.004, 2));
console.log("lod.ceil(6040, -2)", lod.ceil(6040, -2));

// es6
function ceil(value, decimals) {
	if(decimals === undefined || +decimals === 0) {
		return Math.ceil(value);
	}
	// Если значение не является числом, либо степень не является целым числом...
	if (isNaN(value) || !(typeof decimals === 'number' && decimals % 1 === 0)) {
		return NaN;
	}
	if (decimals > 0) {
		return Number(Math.ceil(value+'e'+decimals)+'e-'+decimals);
	}
	if (decimals < 0) {
		return Number(Math.ceil(value+'e'+decimals)+'e'+ Math.abs(decimals));
	}
}

console.log("ceil(4.006)", ceil(4.006));
console.log("ceil(6.004, 2)", ceil(6.004, 2));
console.log("ceil(6040, -2)", ceil(6040, -2));
