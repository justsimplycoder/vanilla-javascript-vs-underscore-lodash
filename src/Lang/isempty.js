/**
 * isEmpty - Проверяет, является ли значение пустым объектом, коллекцией, map или set.
 */

function isEmpty(value) {
	// number, symbol, boolean
	if(
		typeof value === 'number' ||
		typeof value === 'symbol' ||
		typeof value === 'boolean'
	) return true;
	// string
	if(typeof value === 'string' && value.length === 0) return true;
	// null or undefined
	if(value == null) return true;
	// function
	if(typeof value === 'function') return true;
	// Map or Set
	if(value.size !== undefined) {
		if(value.size === 0) {
			return true;
		} else {
			return false;
		}
	}
	// prototype
	if(typeof value === 'object' && Object.hasOwn(value, 'constructor') && Object.keys(value).length === 1) return true;
	// Object or Array
	if(typeof	value === 'object' && Object.entries(value).length === 0) return true;
	return false;
}

export default isEmpty;