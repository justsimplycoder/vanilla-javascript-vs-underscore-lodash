const und = require('underscore');
const lod = require('lodash');

/**
 * assignIn - Этот метод похож на _.assign, за исключением того, что он перебирает собственные и унаследованные исходные свойства.
 */

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

console.log("lod.assignIn({ 'a': 0 }, new Foo, new Bar)", lod.assignIn({ 'a': 0 }, new Foo, new Bar));

// es6
function assignIn(...objects) {
	let newObj = {};
	objects.forEach(obj => {
		for (let prop in obj) {
			newObj[prop] = obj[prop];
		}
	});
	return newObj;
}

console.log("assignIn({ 'a': 0 }, new Foo, new Bar)", assignIn({ 'a': 0 }, new Foo, new Bar));