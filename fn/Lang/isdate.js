/**
 * isDate - Проверяет, классифицируется ли значение как объект Date.
 */

function isDate(value) {
	if(Object.prototype.toString.call(value) === '[object Date]') return true;
	return false;
}

export default isDate;