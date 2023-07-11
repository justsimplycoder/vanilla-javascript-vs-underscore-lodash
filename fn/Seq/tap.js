const und = require('underscore');
const lod = require('lodash');

/**
 * tap — Этот метод вызывает перехватчик и возвращает значение.
 */

// lodash
var tap = lod([1, 2, 3])
	.tap(function(array) {
		array.pop();
	})
	.reverse()
	.value();
console.log("tap", tap);

// es6
class Tap {
	#arr = null;
	constructor(value){
		this.#arr = value;
	}
	tap(fn) {
		fn(this.#arr);
		return this;
	}
	reverse() {
		this.#arr.reverse();
		return this;
	}
	value() {
		return this.#arr.length === 1 ? this.#arr[0] : this.#arr;
	}
}

var tap2 = new Tap([1, 2, 3])
	.tap(function(array){
		array.pop();
	})
	.reverse()
	.value();
console.log('tap2', tap2);

