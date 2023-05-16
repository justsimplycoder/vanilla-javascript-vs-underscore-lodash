const und = require('underscore');
const lod = require('lodash');

/**
 * over - Создает функцию, которая вызывает итерации с аргументами, которые она получает, и возвращает их результаты.
 */

// lodash
const func = lod.over([Math.max, Math.min]);
console.log("func(1, 2, 3, 4)", func(1, 2, 3, 4));

// es6
function over(arr) {
	return function(...args){
		return arr.map(f => f(...args));
	};
}

const func2 = over([Math.max, Math.min]);
console.log("func2(1, 2, 3, 4)", func2(1, 2, 3, 4));