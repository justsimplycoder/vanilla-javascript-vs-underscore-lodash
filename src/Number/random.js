const und = require('underscore');
const lod = require('lodash');

/**
 * random - возвращает случайное число
 */

// underscore
console.log("und.random(0, 5)", und.random(0, 5));
console.log("und.random(1.2, 5.2)", und.random(1.2, 5.2));

// lodash
console.log("lod.random(0, 5)", lod.random(0, 5));
console.log("lod.random(5)", lod.random(5));
console.log("lod.random(5.2)", lod.random(5.2));
console.log("lod.random(5, true)", lod.random(5, true));
console.log("lod.random(1.2, 5.2)", lod.random(1.2, 5.2));

// es6
function random(start, end) {
	if(end === undefined) //[start, end] = [0, start];
		if(Number.isInteger(start))
			return Math.floor( Math.random( ) * (start+1) );
		else
			return Math.random() * (start+1);
	if(end === true) //[start, end] = [0, start * 0.1];
		return Math.random( ) * (start+1);
	if(Number.isInteger(start) && Number.isInteger(end) )
		return Math.floor(Math.random( ) * (start - end + 1)) + end;
	else
		return Math.random( ) * (start - end + 1) + end;
}

console.log("random(0, 5)", random(0, 5));
console.log("random(5)", random(5));
console.log("random(5.2)", random(5.2));
console.log("random(5, true)", random(5, true));
console.log("random(1.2, 5.2)", random(1.2, 5.2));
