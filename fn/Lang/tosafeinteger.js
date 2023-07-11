/**
 * toSafeIntege - Преобразует значение в безопасное целое число.
 */

if (!Math.trunc) {
	Math.trunc = function(v) {
		v = +v;
		return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
	};
}

function toSafeInteger(value) {
	if(value === Infinity) {
		return Number.MAX_SAFE_INTEGER;
	}
	if(value === -Infinity) {
		return -Number.MAX_SAFE_INTEGER;
	}
	value = Math.trunc(value);
	if(Number.isSafeInteger(value)) {
		return value;
	}
	return 0;
}

export default toSafeInteger;
