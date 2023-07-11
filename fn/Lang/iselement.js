/**
 * isElement - Проверяет, вероятно ли значение является элементом DOM.
 */

function isElement(value) {
	if(value === null) return false;
	if(
		value.nodeType === 1 &&
		typeof value === 'object' &&
		value.constructor.name !== 'Object'
	) return true;
	return false;
}

export default isElement;