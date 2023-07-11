const und = require('underscore');
const lod = require('lodash');

/**
 * toPairsIn - Создает массив собственных и унаследованных перечислимых пар ключ-значение строки для объекта
 */

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

// lodash
console.log("lod.toPairsIn(new Foo)", lod.toPairsIn(new Foo));
console.log("lod.entriesIn(new Foo)", lod.entriesIn(new Foo)); // alias

// es6
function toPairsIn(obj) {
	let arr = [];
	for(let prop in obj) {
		arr.push([prop, obj[prop]]);
	}
	return arr;
}

console.log("toPairsIn(new Foo)", toPairsIn(new Foo));