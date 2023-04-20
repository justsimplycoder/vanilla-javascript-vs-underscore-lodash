const und = require('underscore');
const lod = require('lodash');

/**
 * trimEnd - Удаляет завершающие пробелы или указанные символы из строки.
 */

// lodash
console.log("lod.trimEnd('  abc  ')", lod.trimEnd('  abc  '));
console.log("lod.trimEnd('-_-abc-_-', '_-')", lod.trimEnd('-_-abc-_-', '_-'));

// es6
function trimEnd(str, value) {
	if(value === undefined) {
		return str.trimEnd();
	} else {
		let reg = new RegExp("[" + value + "]+$", "g");
		return str.replace(reg, '');
	}
}

console.log("trimEnd('  abc  ')", trimEnd('  abc  '));
console.log("trimEnd('-_-abc-_-', '_-')", trimEnd('-_-abc-_-', '_-'));
