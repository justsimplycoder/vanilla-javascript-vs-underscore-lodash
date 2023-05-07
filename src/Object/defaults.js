const und = require('underscore');
const lod = require('lodash');

/**
 * defaults - Назначает собственные и унаследованные перечисляемые строковые свойства исходных объектов целевому объекту для всех свойств назначения, которые разрешаются в значение undefined.
 */

function Foo() {
	this.a = 111;
}

Foo.prototype.c = 3;

// lodash
console.log(
	"lod.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })",
	lod.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
);
console.log(
	"lod.defaults({ 'a': 1 }, { 'b': 2 }, new Foo(), { 'a': 3 })",
	lod.defaults({ 'a': 1 }, { 'b': 2 }, new Foo(), { 'a': 3 })
);

// es6
function defaults(object, ...objects) {
	let obj = Object.assign({}, object);
	objects.forEach(o => {
		for (let prop in o) {
			if(!(prop in obj)) obj[prop] = o[prop];
		}
	});
	return obj;
}

console.log(
	"defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })",
	defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
);
console.log(
	"defaults({ 'a': 1 }, { 'b': 2 }, new Foo(), { 'a': 3 })",
	defaults({ 'a': 1 }, { 'b': 2 }, new Foo(), { 'a': 3 })
);

