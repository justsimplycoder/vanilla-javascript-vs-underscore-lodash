const und = require('underscore');
const lod = require('lodash');

/**
 * isObject - Проверяет, является ли значение языковым типом объекта. (например, array, function, object, regexp, new Number(0) и String(''))
 */

// lodash
console.log("und.isObject({})", und.isObject({}));
console.log("und.isObject(() => {})", und.isObject(() => {}));
console.log("und.isObject([1, 2, 3])", und.isObject([1, 2, 3]));
console.log("und.isObject(new Number(0))", und.isObject(new Number(0)));
console.log("und.isObject(new String(''))", und.isObject(new String('')));
console.log("und.isObject(/\w/)", und.isObject(/\w/));
console.log("und.isObject(null)", und.isObject(null));
console.log("und.isObject(undefined)", und.isObject(undefined));

// lodash
console.log("lod.isObject({})", lod.isObject({}));
console.log("lod.isObject(() => {})", lod.isObject(() => {}));
console.log("lod.isObject([1, 2, 3])", lod.isObject([1, 2, 3]));
console.log("lod.isObject(new Number(0))", lod.isObject(new Number(0)));
console.log("lod.isObject(new String(''))", lod.isObject(new String('')));
console.log("lod.isObject(/\w/)", lod.isObject(/\w/));
console.log("lod.isObject(null)", lod.isObject(null));
console.log("lod.isObject(undefined)", lod.isObject(undefined));

// es6
function isObject(value) {
	return typeof value === 'object' && value !== null || typeof value === 'function';
}

console.log("isObject({})", isObject({}));
console.log("isObject(() => {})", isObject(() => {}));
console.log("isObject([1, 2, 3])", isObject([1, 2, 3]));
console.log("isObject(new Number(0))", isObject(new Number(0)));
console.log("isObject(new String(''))", isObject(new String('')));
console.log("isObject(/\w/)", isObject(/\w/));
console.log("isObject(null)", isObject(null));
console.log("isObject(undefined)", isObject(undefined));

