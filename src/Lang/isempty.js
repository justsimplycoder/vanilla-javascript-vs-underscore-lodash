const und = require('underscore');
const lod = require('lodash');

/**
 * isEmpty - Проверяет, является ли значение пустым объектом, коллекцией, map или set.
 */

// lodash
console.log("lod.isEmpty(null)", lod.isEmpty(null));
console.log("lod.isEmpty(undefined)", lod.isEmpty(undefined));
console.log("lod.isEmpty('abc')", lod.isEmpty('abc'));
console.log("lod.isEmpty(new Set())", lod.isEmpty(new Set()));
console.log("lod.isEmpty(new Set([1, 2, 3]))", lod.isEmpty(new Set([1, 2, 3])));
console.log("lod.isEmpty(new Map())", lod.isEmpty(new Map()));
console.log("lod.isEmpty(new Map([['a', 1]]))", lod.isEmpty(new Map([['a', 1]])));
console.log("lod.isEmpty(() => {})", lod.isEmpty(() => {}));
console.log("lod.isEmpty({})", lod.isEmpty({}));
console.log("lod.isEmpty({'a': 1})", lod.isEmpty({'a': 1}));
console.log("lod.isEmpty([])", lod.isEmpty([]));
console.log("lod.isEmpty([1, 2, 3])", lod.isEmpty([1, 2, 3]));

// es6
function isEmpty(value) {
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
	// Object or Array
	if(typeof	value === 'object' && Object.entries(value).length === 0) return true;
	return false;
}

console.log("isEmpty(null)", isEmpty(null));
console.log("isEmpty(undefined)", isEmpty(undefined));
console.log("isEmpty('abc')", isEmpty('abc'));
console.log("isEmpty(new Set())", isEmpty(new Set()));
console.log("isEmpty(new Set([1, 2, 3]))", isEmpty(new Set([1, 2, 3])));
console.log("isEmpty(new Map())", isEmpty(new Map()));
console.log("isEmpty(new Map([['a', 1]]))", isEmpty(new Map([['a', 1]])));
console.log("isEmpty(() => {})", isEmpty(() => {}));
console.log("isEmpty({})", isEmpty({}));
console.log("isEmpty({'a': 1})", isEmpty({'a': 1}));
console.log("isEmpty([])", isEmpty([]));
console.log("isEmpty([1, 2, 3])", isEmpty([1, 2, 3]));
