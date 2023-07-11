/**
 * isWeakMap - проверяет является ли выражение WeakMap
 */

function isWeakMap(value) {
	if(Object.prototype.toString.call(value) === '[object WeakMap]') return true;
	return false;
}

export default isWeakMap;