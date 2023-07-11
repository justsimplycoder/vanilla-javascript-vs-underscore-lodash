/**
 * toInteger - конвертирует значение в целое число.
 */

if (!Math.trunc) {
	Math.trunc = function(v) {
		v = +v;
		return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
	};
}

function toInteger(value) {
	if(isFinite(value)) {
		return Math.trunc(value)
	} else if(value === Infinity){
		return Number.MAX_VALUE;
	} else if(value === -Infinity){
		return -Number.MAX_VALUE;
	} else {
		return 0;
	}
}

export default toInteger;