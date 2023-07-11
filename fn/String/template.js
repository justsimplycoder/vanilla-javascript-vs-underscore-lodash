const und = require('underscore');
const lod = require('lodash');

/**
 * template - шаблоны
 */

// Underscore
const compilUnd1 = und.template('hello <%= user %>!');
console.log("compilUnd1({ 'user': 'fred' })", compilUnd1({ 'user': 'fred' }));

const compilUnd2 = und.template('<b><%- value %></b>');
console.log("compilUnd2({ 'value': '<script>' })", compilUnd2({ 'value': '<script>' }));

const compilUnd3 = und.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
console.log("compilUnd3({ 'users': ['fred', 'barney'] })", compilUnd3({'users': ['fred', 'barney'] }));

// lodash
const compilLod1 = lod.template('hello <%= user %>!');
console.log("compilLod1({ 'user': 'fred' })", compilLod1({ 'user': 'fred' }));

const compilLod2 = lod.template('<b><%- value %></b>');
console.log("compilLod2({ 'value': '<script>' })", compilLod2({ 'value': '<script>' }));

const compilLod3 = lod.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
console.log("compilLod3({ 'users': ['fred', 'barney'] })", compilLod3({'users': ['fred', 'barney'] }));

// es6
function escape(str) {
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
	return str;
}

const o = {
	user: 'fred'
};

console.log(`hello \${o.user}!`, `hello ${o.user}!`);
console.log("`<b>${escape('<script>')}</b>`", `<b>${escape('<script>')}</b>`);
console.log("`${['fred', 'barney'].map((el)=> '<li>'+el+'</li>').join('')}`", `${['fred', 'barney'].map((el)=> '<li>'+el+'</li>').join('')}`);

