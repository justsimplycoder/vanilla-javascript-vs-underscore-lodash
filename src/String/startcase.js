const und = require('underscore');
const lod = require('lodash');

/**
 * startCase - преобразует строку к start case
 */

// lodash
console.log("lod.startCase('--foo-bar')", lod.startCase('--foo-bar'));
console.log("lod.startCase('fooBar')", lod.startCase('fooBar'));
console.log("lod.startCase('fooBAR')", lod.startCase('fooBAR'));
console.log("lod.startCase('__foo_bar__')", lod.startCase('__foo_bar__'));
console.log("lod.startCase('--123-12bb-bar')", lod.startCase('--123-12bb-bar'));
console.log("lod.startCase('текстДоп')", lod.startCase('текстДоп')); // -> ТекстДоп

// es6
function startCase(str) {
	let arrStr = str.match(/\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
	if(arrStr === null) {
		return str[0].toUpperCase() + str.slice(1);
	} else {
		return arrStr.map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(' ');
	}
}

console.log("startCase('--foo-bar')", startCase('--foo-bar'));
console.log("startCase('fooBar')", startCase('fooBar'));
console.log("startCase('fooBAR')", startCase('fooBAR'));
console.log("startCase('__foo_bar__')", startCase('__foo_bar__'));
console.log("startCase('--123-12bb-bar')", startCase('--123-12bb-bar'));
console.log("startCase('текстДоп')", startCase('текстДоп'));