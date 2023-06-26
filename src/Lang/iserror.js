/**
 * isError - Проверяет, является ли значение объектом Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError или URIError.
 */

function isError(value) {
	if(Object.prototype.toString.call(value) === '[object Error]') return true;
	return false;
}

export default isError;