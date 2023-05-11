const und = require('underscore');
const lod = require('lodash');

/**
 * get - Получает значение по пути объекта.
 */

var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

// lodash
console.log("lod.get(object, 'a[0].b.c')", lod.get(object, 'a[0].b.c'));
console.log("lod.get(object, ['a', '0', 'b', 'c'])", lod.get(object, ['a', '0', 'b', 'c']));
console.log("lod.get(object, 'a.b.c', 'default')", lod.get(object, 'a.b.c', 'default'));

// es6
function get(obj, patch, defaultValue = undefined) {
	let o = obj;
	if(typeof patch === 'string') patch = patch.replace('[', '.').replace(']', '').split('.');
	if (Array.isArray(patch)) {
		for (let i = 0; i < patch.length; i++) {
			if(patch[i] in o) {
				o = o[patch[i]];
			} else {
				return defaultValue;
			}
		}
		return o;
	} else {
		return defaultValue;
	}
}

console.log("get(object, 'a[0].b.c')", get(object, 'a[0].b.c'));
console.log("get(object, ['a', '0', 'b', 'c'])", get(object, ['a', '0', 'b', 'c']));
console.log("get(object, 'a.b.c', 'default')", get(object, 'a.b.c', 'default'));