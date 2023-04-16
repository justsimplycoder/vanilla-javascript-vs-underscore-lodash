const und = require('underscore');
const lod = require('lodash');

/**
 * memoize - мемоизация
 */

// underscore
const fibonacciUnd = und.memoize(function(n) {
  return n < 2 ? n: fibonacciUnd(n - 1) + fibonacciUnd(n - 2);
});

console.time("und.memoize");
console.log("fibonacci(1000)", fibonacciUnd(1000));
console.timeEnd("und.memoize");
console.time("und.memoize");
console.log("fibonacci(1000)", fibonacciUnd(1000));
console.timeEnd("und.memoize");

console.log('---------------------------------------------');

// lodash
const fibonacciLod = lod.memoize(function(n) {
  return n < 2 ? n: fibonacciLod(n - 1) + fibonacciLod(n - 2);
});

console.time("lod.memoize");
console.log("fibonacci1(1000)", fibonacciLod(1000));
console.timeEnd("lod.memoize");
console.time("lod.memoize");
console.log("fibonacci1(1000)", fibonacciLod(1000));
console.timeEnd("lod.memoize");

console.log('---------------------------------------------');

// es6
function memoize(fn){
	const cache = new Map();
	return function(value){
		if(!cache.has(value)) cache.set(value, fn(value));
		return cache.get(value);
	};
}

const fibonacci = memoize(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});

console.time("memoize");
console.log("fibonacci2(1000)", fibonacci(1000));
console.timeEnd("memoize");
console.time("memoize");
console.log("fibonacci2(1000)", fibonacci(1000));
console.timeEnd("memoize");
