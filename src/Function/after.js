const und = require('underscore');
const lod = require('lodash');

/**
 * after - Противоположность _.before; этот метод создает функцию, которая вызывает func после ее вызова n или более раз.
 */

const saves = ['profile', 'settings'];

// lodash
const lodDone = lod.after(saves.length, () => console.log('lodash after'));

lodDone();
lodDone();
lodDone();

// Underscore
const undDone = und.after(saves.length, () => console.log('underscore after'));

undDone();
undDone();
undDone();

// es6
function after(funCallLength = 1, callback) {
	let callLength = 1;

	return function (){
		if(callLength !== funCallLength) {
			callLength++;
			return undefined;
		} else {
			return callback();
		}
	};
}

const myDone = after(saves.length, () => console.log('my after'));

myDone();
myDone();
myDone();

