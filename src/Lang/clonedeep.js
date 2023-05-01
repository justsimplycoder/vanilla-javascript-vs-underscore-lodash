const und = require('underscore');
const lod = require('lodash');

/**
 * cloneDeep - Этот метод похож на _.clone, за исключением того, что он рекурсивно клонирует значение.
 */

const objects = [{ 'a': 1 }, { 'b': 2 }];

// lodash
const deep = lod.cloneDeep(objects);
console.log("deep === objects", deep === objects);
console.log("deep[0] === objects[0]", deep[0] === objects[0]);

// es6
function copy(aObject) {
	if (!aObject) {
		return aObject;
	}

	let v;
	let bObject = Array.isArray(aObject) ? [] : {};
	for (const k in aObject) {
		v = aObject[k];
		bObject[k] = (typeof v === "object") ? copy(v) : v;
	}

	return bObject;
}

const clone = copy(objects);

console.log("clone === objects", clone === objects);
console.log("clone[0] === objects[0]", clone[0] === objects[0]);