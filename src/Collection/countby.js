const und = require('underscore');
const lod = require('lodash');

/**
 * conutBy - Создает объект, состоящий из ключей, сгенерированных по результатам прохождения каждого элемента коллекции через итерацию. Соответствующее значение каждого ключа — это количество раз, когда ключ возвращался итерацией.
 */

// lodash
console.log("lod.countBy([6.1, 4.2, 6.3], Math.floor)", lod.countBy([6.1, 4.2, 6.3], Math.floor));
console.log("lod.countBy(['one', 'two', 'three'], 'length')", lod.countBy(['one', 'two', 'three'], 'length'));

// es6
function countBy(arr, fn) {
	let obj = {};
	arr.forEach(el => {
		let key = undefined;
		if(typeof fn === 'function') {
			key = fn(el);
		} else if(typeof fn === 'string'){
			key = el[fn];
		} else {
			throw new Error('Неверный тип');
		}
		if(key in obj) {
			obj[key]++;
		} else {
			obj[key] = 1;
		}
	});
	return obj;
}

console.log("countBy([6.1, 4.2, 6.3], Math.floor)", countBy([6.1, 4.2, 6.3], Math.floor));
console.log("countBy(['one', 'two', 'three'], length)", countBy(['one', 'two', 'three'], 'length'));