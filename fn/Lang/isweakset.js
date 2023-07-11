/**
 * isWeakSet - проверяет является ли выражение WeakSet
*/

function isWeakSet(value) {
	if(Object.prototype.toString.call(value) === '[object WeakSet]') return true;
	return false;
}

export default isWeakSet;