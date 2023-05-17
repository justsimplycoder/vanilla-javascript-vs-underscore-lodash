const und = require('underscore');
const lod = require('lodash');

/**
 * uniqueId - Создает уникальный идентификатор
 */

// lodash
console.log("lod.uniqueId('contact_')", lod.uniqueId('contact_'));
console.log("lod.uniqueId()", lod.uniqueId());

// es6
let uniqueId = (function () {
	let id = 0;
	return function(prefix=''){
		id++;
		return prefix + id;
	};
})();

console.log("uniqueId('contact_')", uniqueId('contact_'));
console.log("uniqueId()", uniqueId());