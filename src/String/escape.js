const und = require('underscore');
const lod = require('lodash');

/**
 * escape - Преобразует символы "&", "<", ">", '"', "'" в HMLL спецсимволы
 */

// lodash
console.log(`lod.escape(" & < > ' текст " text")`, lod.escape(` & < > ' текст " text`));

// es6
function escape(str) {
	const map = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	};
	return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}
console.log(`escape(" & < > ' текст " text")`, escape(` & < > ' текст " text`));
