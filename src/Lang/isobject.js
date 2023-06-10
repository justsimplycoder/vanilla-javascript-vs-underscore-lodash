/**
 * isObject - Проверяет, является ли значение языковым типом объекта. (например, array, function, object, regexp, new Number(0) и String(''))
 */
function isObject(value) {
	return typeof value === 'object' && (value !== null || typeof value === 'function');
}

export default isObject;