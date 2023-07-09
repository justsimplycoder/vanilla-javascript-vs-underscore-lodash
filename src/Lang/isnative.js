/**
 * isNative - Проверяет, является ли значение нетронутой нативной функцией.
 */

function isNative(value) {
	if(typeof value !== 'function') return false;
	return value.toString().includes('[native code]');
}

export default isNative;