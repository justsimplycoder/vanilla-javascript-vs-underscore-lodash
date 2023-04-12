const und = require('underscore');
const lod = require('lodash');

/**
 * reduce - Сокращает коллекцию до значения, которое является накопленным результатом прохождения каждого элемента в коллекции через итерацию, где каждому последующему вызову предоставляется возвращаемое значение предыдущего.
 */

// underscore
console.log("und.reduce([1, 2], (sum, n) => sum + n, 0)", und.reduce([1, 2], (sum, n) => sum + n, 0));
let arr1 = und.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
console.log("arr1", arr1);

// lodash
console.log("lod.reduce([1, 2], (sum, n) => sum + n, 0)", lod.reduce([1, 2], (sum, n) => sum + n, 0));
let arr2 = lod.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
console.log("arr2", arr2);

// es6
console.log("[1, 2].reduce((sum, n) => sum + n)", [1, 2].reduce((sum, n) => sum + n));
let arr3 = Object.entries({ 'a': 1, 'b': 2, 'c': 1 }).reduce((acc, cur) => {
	(acc[cur[1]] || (acc[cur[1]] = [])).push(cur[0]);
	return acc;
}, {});
console.log('arr3', arr3);