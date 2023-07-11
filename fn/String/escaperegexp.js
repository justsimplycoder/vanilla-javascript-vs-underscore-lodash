const und = require('underscore');
const lod = require('lodash');

/**
 * escapeRegExp - Экранирование символов в RegExp "^", "$", "'", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", "|"
 */

// lodash
console.log("lod.escapeRegExp('[lodash](https://lodash.com/)')", lod.escapeRegExp('[lodash](https://lodash.com/)'));

// es6
function escapeRegExp(str) {
	return str.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&");
}
console.log("escapeRegExp('[lodash](https://lodash.com/)')", escapeRegExp('[lodash](https://lodash.com/)'));
