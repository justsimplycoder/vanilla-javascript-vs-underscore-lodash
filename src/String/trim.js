const und = require('underscore');
const lod = require('lodash');

/**
 * trim - Удаляет начальные и конечные пробелы или указанные символы из строки.
 */

// lodash
console.log("lod.trim('  abc  ')", lod.trim('  abc  '));
console.log("lod.trim('-_-abc-_-', '_-')", lod.trim('-_-abc-_-', '_-'));
console.log("lod.trim(' -_-abc-_-', '_-')", lod.trim(' -_-abc-_-', '_-'));

// es6
function trim(str, value) {
	if(value === undefined) {
		return str.trim();
	} else {
		let reg = new RegExp("^[" + value + "]+|[" + value + "]+$", "g");
		return str.replace(reg, '');
	}
}

console.log("trim('  abc  ')", trim('  abc  '));
console.log("trim('-_-abc-_-', '_-')", trim('-_-abc-_-', '_-'));
console.log("trim(' -_-abc-_-', '_-')", trim(' -_-abc-_-', '_-'));