/**
 * toString - Преобразует значение в строку.
 */

function convertString(value) {
	// Пустое значение
	if(value == null) {
		return '';
	}
	// Преобразование
	if(typeof value === 'object' && value instanceof Number) value = value.valueOf();
	// Преобразование -0 в строку '-0'
	if(Object.is(-0, value)) return '-0';
	return (value).toString();
}

function toString(value) {
	if(Array.isArray(value)) value = value.map(el => convertString(el));
	return convertString(value);
}

export default toString;