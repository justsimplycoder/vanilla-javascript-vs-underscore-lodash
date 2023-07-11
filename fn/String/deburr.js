const und = require('underscore');
const lod = require('lodash');

/**
 * deburr - Удаляет заусенцы в строке путем преобразования букв Latin-1 Supplement и Latin Extended-A в основные латинские буквы и удаления комбинированных диакритических знаков.
 */

// lodash
console.log("lod.deburr('déjà vu')", lod.deburr('déjà vu'));
console.log("lod.deburr('ąśćńżółźćę')", lod.deburr('ąśćńżółźćę'));

// es6
function deburr(str) {
	str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	return str.replace(/\u0142/g, "l");
}

console.log("deburr('déjà vu')", deburr('déjà vu'));
console.log("deburr('ąśćńżółźćę')", deburr('ąśćńżółźćę'));

// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/18391901 - ещё примеры