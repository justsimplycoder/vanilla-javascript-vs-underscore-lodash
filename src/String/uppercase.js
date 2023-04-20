const und = require('underscore');
const lod = require('lodash');

/**
 * upperCase - Преобразует строку в виде слов, разделенных пробелами, в верхний регистр.
 */

// lodash
console.log("lod.upperCase('--foo-bar')", lod.upperCase('--foo-bar'));
console.log("lod.upperCase('fooBar')", lod.upperCase('fooBar'));
console.log("lod.upperCase('fooBAR')", lod.upperCase('fooBAR'));
console.log("lod.upperCase('__foo_bar__')", lod.upperCase('__foo_bar__'));
console.log("lod.upperCase('--123-12bb-bar')", lod.upperCase('--123-12bb-bar'));
console.log("lod.upperCase('текстДоп')", lod.upperCase('текстДоп')); // -> ТЕКСТДОП

// es6
function upperCase(str) {
	let arrStr = str.match(/\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
	if(arrStr === null)
		return str.toUpperCase();
	else
		return arrStr.map(s => s.toUpperCase()).join(' ');
}

console.log("upperCase('--foo-bar')", upperCase('--foo-bar'));
console.log("upperCase('fooBar')", upperCase('fooBar'));
console.log("upperCase('fooBAR')", upperCase('fooBAR'));
console.log("upperCase('__foo_bar__')", upperCase('__foo_bar__'));
console.log("upperCase('--123-12bb-bar')", upperCase('--123-12bb-bar'));
console.log("upperCase('текстДоп')", upperCase('текстДоп'));