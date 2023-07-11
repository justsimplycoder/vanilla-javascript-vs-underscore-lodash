const und = require('underscore');
const lod = require('lodash');

/**
 * partial - Создает функцию, которая вызывает func с частичными элементами, добавленными к аргументам, которые она получает.
 */

// lodash
function greet(greeting, name) {
  return greeting + ' ' + name;
}

const sayHelloTo = lod.partial(greet, 'Hello');
console.log("sayHelloTo('fred')", sayHelloTo('Fred'));

function sum(a, b, c) {
	return a + b + c;
}

const sumLod = lod.partial(sum, lod, 2, lod);
console.log('sumLod(1, 3)', sumLod(1, 3));

// es6
function partial(fn, ...args) {
	return function(...args2){
		let eArgs2 = args2.values();

		let argFn = Array.from(Array(fn.length))
			.map((el, index) => {
				if(args[index] !== '_' && args[index] !== undefined) {
					return el = args[index];
				} else {
					return el = eArgs2.next().value;
				}
			});

		return fn.apply(this, [...argFn]);
	};
}

const sayHelloTo2 = partial(greet, 'Hello');
console.log("sayHelloTo2('fred')", sayHelloTo2('Fred'));
const sumMy = partial(sum, '_', 2, '_');
console.log('sumMy(1, 3)', sumMy(1, 3));


