const und = require('underscore');
const lod = require('lodash');

/**
 * minBy - минимальное значение массива состоящего из объектов
 */

const objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 3 }, { 'n' : 2 }];

// lodash
console.log("lod.minBy(objects, function(o) { return o.n; })", lod.minBy(objects, function(o) { return o.n; }));
console.log("lod.minBy(objects, 'n')", lod.minBy(objects, 'n'));

// es6
console.log(
	objects.reduce((acc, cur) => {
		if(acc.n > cur.n) acc = cur;
		return acc;
	})
);