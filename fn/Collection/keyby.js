const und = require('underscore');
const lod = require('lodash');

/**
 * keyBy - Создает объект, состоящий из ключей, сгенерированных по результатам прохождения каждого элемента коллекции через итерацию.
 */

var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

// lodash
console.log("lod.keyBy(array, o => String.fromCharCode(o.code))", lod.keyBy(array, o => String.fromCharCode(o.code)));
console.log("lod.keyBy(array, 'dir')", lod.keyBy(array, 'dir'));

// es6
function keyBy(arr, key) {
	let obj = {};
	arr.forEach(el => {
		if(typeof key === 'function') {
			obj[key(el)] = el;
		} else if (typeof key === 'string') {
			obj[el[key]] = el;
		} else {
			throw new Error('Неверный тип');
		}
	});
	return obj;
}
console.log("keyBy(array, o => String.fromCharCode(o.code))", keyBy(array, o => String.fromCharCode(o.code)));
console.log("keyBy(array, 'dir')", keyBy(array, 'dir'));
