const und = require('underscore');
const lod = require('lodash');

/**
 * lowerCase - Преобразует строку в виде слов, разделенных пробелами, в нижний регистр.
 */

// lodash
console.log("lod.lowerCase('--foo-bar')", lod.lowerCase('--foo-bar'));
console.log("lod.lowerCase('fooBar')", lod.lowerCase('fooBar'));
console.log("lod.lowerCase('fooBAR')", lod.lowerCase('fooBAR'));
console.log("lod.lowerCase('__foo_bar__')", lod.lowerCase('__foo_bar__'));
console.log("lod.lowerCase('--123-12bb-bar')", lod.lowerCase('--123-12bb-bar'));
console.log("lod.lowerCase('текстДоп')", lod.lowerCase('текстДоп')); // -> текстдоп

// es6
function lowerCase(str) {
	let arrStr = str.match(/\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
	if(arrStr === null)
		return str.toLowerCase();
	else
		return arrStr.map(s => s.toLowerCase()).join(' ');
}

console.log("lowerCase('--foo-bar')", lowerCase('--foo-bar'));
console.log("lowerCase('fooBar')", lowerCase('fooBar'));
console.log("lowerCase('fooBAR')", lowerCase('fooBAR'));
console.log("lowerCase('__foo_bar__')", lowerCase('__foo_bar__'));
console.log("lowerCase('--123-12bb-bar')", lowerCase('--123-12bb-bar'));
console.log("lowerCase('текстДоп')", lowerCase('текстДоп'));