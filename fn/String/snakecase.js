const und = require('underscore');
const lod = require('lodash');

/**
 * snakeCase - Преобразует строку к змеиной нотации
 */

// lodash
console.log("lod.snakeCase('--foo-bar')", lod.snakeCase('--foo-bar'));
console.log("lod.snakeCase('fooBar')", lod.snakeCase('fooBar'));
console.log("lod.snakeCase('fooBAR')", lod.snakeCase('fooBAR'));
console.log("lod.snakeCase('__foo_bar__')", lod.snakeCase('__foo_bar__'));
console.log("lod.snakeCase('--123-12bb-bar')", lod.snakeCase('--123-12bb-bar'));
console.log("lod.snakeCase('текстДоп')", lod.snakeCase('текстДоп'));

// es6
function snakeCase(str) {
	let arrStr = str.match(/\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
	if(arrStr === null)
		return str.toLowerCase();
	else
		return arrStr.map(s => s.toLowerCase()).join('_');
}

console.log("snakeCase('--foo-bar')", snakeCase('--foo-bar'));
console.log("snakeCase('fooBar')", snakeCase('fooBar'));
console.log("snakeCase('fooBAR')", snakeCase('fooBAR'));
console.log("snakeCase('__foo_bar__')", snakeCase('__foo_bar__'));
console.log("snakeCase('--123-12bb-bar')", snakeCase('--123-12bb-bar'));
console.log("snakeCase('текстДоп')", snakeCase('текстДоп'));