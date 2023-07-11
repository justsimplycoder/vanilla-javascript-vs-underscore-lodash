const und = require('underscore');
const lod = require('lodash');

/**
 * partialRight - Этот метод подобен _.partial, за исключением того, что частично примененные аргументы добавляются к аргументам, которые он получает.
 */

// lodash
function greet(greeting, name) {
  return greeting + ' ' + name;
}

const sayHelloTo = lod.partialRight(greet, 'Fred');
console.log("sayHelloTo('Hello')", sayHelloTo('Hello'));

const sayHiTo = lod.partialRight(greet, 'Hi', lod);
console.log("sayHiTo('Fred')", sayHiTo('Fred'));

// es6
function partialRight(fn, ...args) {
	return function(...args2){
		if(fn.length !== args.length) {
			return fn.apply(this, [...args, ...args2].reverse());
		}

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

const sayHelloTo2 = partialRight(greet, 'Fred');
console.log("sayHelloTo2('Hello')", sayHelloTo2('Hello'));

const sayHiTo2 = partialRight(greet, 'Hi', '_');
console.log("sayHiTo2('Fred')", sayHiTo2('Fred'));