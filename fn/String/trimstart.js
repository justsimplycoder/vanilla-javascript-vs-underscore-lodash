const und = require('underscore');
const lod = require('lodash');

/**
 * trimStart - Удаляет начальные пробелы или указанные символы из строки.
 */

// lodash
console.log("lod.trimStart('  abc  ')", lod.trimStart('  abc  '));
console.log("lod.trimStart('-_-abc-_-', '_-')", lod.trimStart('-_-abc-_-', '_-'));

// es6
function trimStart(str, value) {
	if(value === undefined) {
		return str.trimStart();
	} else {
		let reg = new RegExp("^[" + value + "]+", "g");
		return str.replace(reg, '');
	}
}

console.log("trimStart('  abc  ')", trimStart('  abc  '));
console.log("trimStart('-_-abc-_-', '_-')", trimStart('-_-abc-_-', '_-'));
