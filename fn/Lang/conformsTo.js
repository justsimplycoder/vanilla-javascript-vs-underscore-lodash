const und = require('underscore');
const lod = require('lodash');

/**
 * conformsTo - проверяет, соответствует ли объект переданному значению
 */

var object = { 'a': 1, 'b': 2 };

// lodash
console.log("lod.conformsTo(object, { 'b': function(n) { return n > 1; } })", lod.conformsTo(object, { 'b': function(n) { return n > 1; } }));
console.log("lod.conformsTo(object, { 'b': function(n) { return n > 2; } })", lod.conformsTo(object, { 'b': function(n) { return n > 2; } }));

// es6
function conformsTo(obj, objFn) {
	let arr = Object.entries(objFn)[0];
	return arr[1](obj[arr[0]]);
}

console.log("conformsTo(object, { 'b': function(n) { return n > 1; } })", conformsTo(object, { 'b': function(n) { return n > 1; } }));
console.log("conformsTo(object, { 'b': function(n) { return n > 2; } })", conformsTo(object, { 'b': function(n) { return n > 2; } }));
