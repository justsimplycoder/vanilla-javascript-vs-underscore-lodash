/**
 * isArrayBuffer - Проверяет, классифицируется ли значение как объект ArrayBuffer.
 */

function isArrayBuffer(arg) {
	if(Object.prototype.toString.call(arg) === '[object ArrayBuffer]') return true;
	else return false;
}

export default isArrayBuffer;
