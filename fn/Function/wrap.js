const und = require('underscore');
const lod = require('lodash');

/**
 * wrap - Создает функцию, которая передает значение оболочке в качестве первого аргумента.
 */

// lodash
const pLod = lod.wrap(lod.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});
console.log("pLod('fred, barney, & pebbles')", pLod('fred, barney, & pebbles'));

// Underscrore
pUnd = und.wrap(und.escape, function(func, text) {
  return "<p>" + func(text) + "</p>";
});
console.log("pUnd('fred, barney, & pebbles')", pUnd('fred, barney, & pebbles'));

// es6
function escape(tag, str) {
	let arr = [
		["&", "&amp;"],
		["<", "&lt;"],
		[">", "&gt;"],
		['"', "&quot;"],
		["'", "&#39;"]
	];
	arr.forEach((el, index) => {
		str = str.replace(el[0], el[1]);
	});
	return `${tag[0]}${str}${tag[1]}`;
}
console.log("escape`<p>${'fred, barney, & pebbles'}</p>`", escape`<p>${'fred, barney, & pebbles'}</p>`);