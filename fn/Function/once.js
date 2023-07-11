const und = require('underscore');
const lod = require('lodash');

/**
 * once - Создает функцию, которая ограничена однократным вызовом func.
 */

function createApplication(number){
	return 'application ' + number;
}

// underscore
const initialize1 = und.once(createApplication);
console.log("initialize1(1)", initialize1(1));
console.log("initialize1(2)", initialize1(2));

// lodash
const initialize2 = lod.once(createApplication);
console.log("initialize2(1)", initialize2(1));
console.log("initialize2(2)", initialize2(2));

// es6
function once(callback) {
	let init = null;
	return function(args) {
		if (init === null) {
			init = callback(args);
		}
		return init;
	};
}

const initialize3 = once(createApplication);
console.log("initialize3(1)", initialize3(1));
console.log("initialize3(2)", initialize3(2));