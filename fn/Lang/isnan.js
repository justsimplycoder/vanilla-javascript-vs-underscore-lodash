/**
 * isNaN - Проверяет, является ли значение NaN.
 */

function isNotANumber(value) {
	if(Object.prototype.toString.call(value) === '[object Number]')
		return Number.isNaN(value.valueOf());
	return Number.isNaN(value);
}

export default isNotANumber;