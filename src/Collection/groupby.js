const und = require('underscore');
const lod = require('lodash');

/**
 * groupBy - Создает объект, состоящий из ключей, сгенерированных по результатам прохождения каждого элемента коллекции через итерацию. Порядок сгруппированных значений определяется порядком их появления в коллекции. Соответствующее значение каждого ключа представляет собой массив элементов, отвечающих за генерацию ключа..
 */

// lodash
console.log(
	"lod.groupBy([6.1, 4.2, 6.3], Math.floor)",
	lod.groupBy([6.1, 4.2, 6.3], Math.floor)
);
console.log(
	"lod.groupBy(['one', 'two', 'three'], 'length')",
	lod.groupBy(['one', 'two', 'three'], 'length')
);

// es6
function groupBy(arr, iterate) {
	let obj = {};
	arr.forEach(el => {
		let key = undefined;
		if(typeof iterate === 'function') {
			key = iterate(el);
		} else if(typeof iterate === 'string'){
			key = el[iterate];
		} else {
			throw new Error('Неверный тип');
		}
		if(key in obj) {
			obj[key].push(el);
		} else {
			obj[key] = [el];
		}
	});
	return obj;
}

console.log(
	"groupBy([6.1, 4.2, 6.3], Math.floor)",
	groupBy([6.1, 4.2, 6.3], Math.floor)
);
console.log(
	"groupBy(['one', 'two', 'three'], length)",
	groupBy(['one', 'two', 'three'], 'length')
);
