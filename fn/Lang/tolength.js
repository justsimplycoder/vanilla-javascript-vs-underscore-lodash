/**
 * toLength - Преобразует значение в целое число, подходящее для использования в качестве длины объекта, подобного массиву.
 */

// es6
function toLength(value) {
	const MAX_ARRAY_LENGTH = 4294967295;

	if(value === Infinity) return MAX_ARRAY_LENGTH;
	value = parseInt(value);
	if(Number.isNaN(value)) return 0;
	if(value < 0) return 0;
	if(value > MAX_ARRAY_LENGTH) return MAX_ARRAY_LENGTH;
	return value;
}

export default toLength;