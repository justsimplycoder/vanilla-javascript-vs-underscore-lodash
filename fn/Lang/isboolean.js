/**
 * isBoolean - Проверяет, классифицируется ли значение как логический примитив или объект.
 */

function isBoolean(value) {
	if(Object.prototype.toString.call(value) === '[object Boolean]') return true;
	return false;
}

export default isBoolean;