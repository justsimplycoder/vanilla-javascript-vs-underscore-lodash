const und = require('underscore');
const lod = require('lodash');

/**
 * maxBy - максимальное значение массива состоящего из объектов
 */

const objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 3 }, { 'n' : 2 }];

// lodash
console.log("lod.maxBy(objects, function(o) { return o.n; })", lod.maxBy(objects, function(o) { return o.n; }));
console.log("lod.maxBy(objects, 'n')", lod.maxBy(objects, 'n'));

// es6
console.log(
	objects.reduce((acc, cur) => {
		if(acc.n < cur.n) acc = cur;
		return acc;
	})
);