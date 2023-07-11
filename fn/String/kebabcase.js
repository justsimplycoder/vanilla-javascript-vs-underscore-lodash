const und = require('underscore');
const lod = require('lodash');

/**
 * kebabCase - Преобразует строку к шашлычной нотации
 */

// lodash
console.log("lod.kebabCase('--foo-bar')", lod.kebabCase('--foo-bar'));
console.log("lod.kebabCase('fooBar')", lod.kebabCase('fooBar'));
console.log("lod.kebabCase('fooBAR')", lod.kebabCase('fooBAR'));
console.log("lod.kebabCase('__foo_bar__')", lod.kebabCase('__foo_bar__'));
console.log("lod.kebabCase('--123-12bb-bar')", lod.kebabCase('--123-12bb-bar'));
console.log("lod.kebabCase('текстДоп')", lod.kebabCase('текстДоп')); // -> текстдоп

// es6
function kebabCase(str) {
	let arrStr = str.match(/\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
	if(arrStr === null)
		return str.toLowerCase();
	else
		return arrStr.map(s => s.toLowerCase()).join('-');
}

console.log("kebabCase('--foo-bar')", kebabCase('--foo-bar'));
console.log("kebabCase('fooBar')", kebabCase('fooBar'));
console.log("kebabCase('fooBAR')", kebabCase('fooBAR'));
console.log("kebabCase('__foo_bar__')", kebabCase('__foo_bar__'));
console.log("kebabCase('--123-12bb-bar')", kebabCase('--123-12bb-bar'));
console.log("kebabCase('текстДоп')", kebabCase('текстДоп'));