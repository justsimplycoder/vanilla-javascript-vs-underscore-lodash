const und = require('underscore');
const lod = require('lodash');

/**
 * at - Создает массив значений, соответствующих путям объекта.
 */

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

// lodash
console.log("lod.at(object, ['a[0].b.c', 'a[1]', 'a[3]'])", lod.at(object, ['a[0].b.c', 'a[1]', 'a[3]']));

// es6
console.log("[object.a[0].b.c, object.a[1], object.a[3]]", [object.a[0].b.c, object.a[1], object.a[3]]);

function at(obj, arr) {
	arr = arr.map(patch => {
		let el = patch.replace(']', '').split(/\.|\[/);
		let o = obj;
		el.forEach(pop => {
			o = o[pop];
		});
		return o;
	});
	return arr;
}

console.log("at(object, ['a[0].b.c', 'a[1]', 'a[3]'])", at(object, ['a[0].b.c', 'a[1]', 'a[3]']));