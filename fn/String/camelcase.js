const und = require('underscore');
const lod = require('lodash');

/**
 * camelCase - Преобразует строку к верблюжьей нотацией
 */

// lodash
console.log("lod.camelCase('--foo-bar')", lod.camelCase('--foo-bar'));
console.log("lod.camelCase('foo Bar')", lod.camelCase('foo Bar'));
console.log("lod.camelCase('fooBAR')", lod.camelCase('fooBAR'));
console.log("lod.camelCase('fooBar')", lod.camelCase('fooBar'));
console.log("lod.camelCase('__foo_bar__')", lod.camelCase('__foo_bar__'));
console.log("lod.camelCase('--123-12bb-bar')", lod.camelCase('--123-12bb-bar'));
console.log("lod.camelCase('текстДоп')", lod.camelCase('текстДоп')); // -> текстдоп

// es6
function camelCase(str) {
	let arrStr = str.match(/\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
	if(arrStr === null) {
		return str.toLowerCase();
	} else {
		let strCamelCase = arrStr.map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join('');
		return strCamelCase[0].toLowerCase() + strCamelCase.slice(1);
	}
}

console.log("camelCase('--foo-bar')", camelCase('--foo-bar'));
console.log("camelCase('foo Bar')", camelCase('foo Bar'));
console.log("camelCase('fooBAR')", camelCase('fooBAR'));
console.log("camelCase('fooBar')", camelCase('fooBar'));
console.log("camelCase('__foo_bar__')", camelCase('__foo_bar__'));
console.log("camelCase('--123-12bb-bar')", camelCase('--123-12bb-bar'));
console.log("camelCase('текстДоп')", camelCase('текстДоп'));