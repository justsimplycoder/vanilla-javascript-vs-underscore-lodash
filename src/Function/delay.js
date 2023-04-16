const und = require('underscore');
const lod = require('lodash');

/**
 * delay - Вызывает функцию с задержкой
 */

// underscore
und.delay(function(text) {
	console.log(text);
}, 1000, 'later 1');
console.log('at first 1');

// lodash
lod.delay(function(text) {
	console.log(text);
}, 1000, 'later 2');
console.log('at first 2');

// es6
setTimeout(function(text) {
	console.log(text);
}, 1000, 'later 3');
console.log('at first 3');
