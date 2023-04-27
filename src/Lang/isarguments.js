const und = require('underscore');
const lod = require('lodash');

/**
 * isArguments - Проверяет, является ли значение, вероятно, объектом аргументов.
 */

// underscore
console.log("und.isArguments(function() { return arguments; }())", und.isArguments(function() { return arguments; }()));
console.log("und.isArguments([1, 2, 3])", und.isArguments([1, 2, 3]));

// lodash
console.log("lod.isArguments(function() { return arguments; }())", lod.isArguments(function() { return arguments; }()));
console.log("lod.isArguments([1, 2, 3])", lod.isArguments([1, 2, 3]));

// es6
function isArguments(arg) {
	if(Object.prototype.toString.call(arg) === '[object Arguments]') return true;
	else return false;
}
console.log("isArguments(function() { return arguments; }())", isArguments(function() { return arguments; }()));
console.log("isArguments([1, 2, 3])", isArguments([1, 2, 3]));
