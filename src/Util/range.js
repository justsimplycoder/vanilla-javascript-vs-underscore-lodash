const und = require('underscore');
const lod = require('lodash');

/**
 * range - Создает массив чисел (положительных и/или отрицательных), прогрессирующий от начала до конца, но не включая его.
 */

// lodash
console.log("lod.range(4)", lod.range(4));
console.log("lod.range(-4)", lod.range(-4));
console.log("lod.range(1, 5)", lod.range(1, 5));
console.log("lod.range(1, -5)", lod.range(1, -5));
console.log("lod.range(0, 20, 5)", lod.range(0, 20, 5));
console.log("lod.range(0, -4, -1)", lod.range(0, -4, -1));
console.log("lod.range(0, 4, 1)", lod.range(0, 4, 1));
console.log("lod.range(1, 5, 1)", lod.range(1, 5, 1));
console.log("lod.range(1, 4, 0)", lod.range(1, 4, 0));
console.log("lod.range(0, 4, 0)", lod.range(0, 4, 0));
console.log("lod.range(0)", lod.range(0));
console.log("lod.range()", lod.range());

console.log('-----------------------------------');

// es6
// Вариант 1
function range(start, length, index=1) {
	function f1(length) {
		if(length > 0) {
			return Array.from({ length: Math.abs(length) }, (v, k) => k);
		} else if(length < 0) {
			return Array.from({ length: Math.abs(length) }, (v, k) => -k);
		} else {
			return [];
		}
	}

	function f2(start, length) {
		let ind = start;
		let arr = [];
		while(ind !== length){
			arr.push(ind);
			if(length > 0)
				ind++;
			else
				ind--;
		}
		return arr;
	}

	function f3(start, length, index) {
		let i = start;
		let ind = start;
		let arr = [];
		while(i < Math.abs(length) && ind < Math.abs(length)){
			i = i + 1;
			arr.push(ind);
			ind += index;
		}
		return arr;
	}

	switch(arguments.length) {
		case 1:
			return f1(start);
			break;
		case 2:
			return f2(start, length);
			break;
		default:
			return f3(start, length, index);
	}
}

console.log("range(4)", range(4));
console.log("range(-4)", range(-4));
console.log("range(1, 5)", range(1, 5));
console.log("range(1, -5)", range(1, -5));
console.log("range(0, 20, 5)", range(0, 20, 5));
console.log("range(0, -4, -1)", range(0, -4, -1));
console.log("range(0, 4, 1)", range(0, 4, 1));
console.log("range(1, 5, 1)", range(1, 5, 1));
console.log("range(1, 4, 0)", range(1, 4, 0));
console.log("range(0, 4, 0)", range(0, 4, 0));
console.log("range(0)", range(0));
console.log("range()", range());

console.log('-----------------------------------');

// Вариант 2
function range2(from = 0, to, step = 1) {
	if(from === 0 && arguments.length === 1) return [];
	if(arguments.length === 0) return [];
	if(arguments.length === 1) {
		to = from;
		from = 0;
	}

	const iterateObj = {
		from,
		to,
		step
	}

	iterateObj[Symbol.iterator] = function() {
		return {
			start: this.from,
			current: this.from,
			last: this.to,
			step: this.step,
			next() {
				if(this.last > 0) {
					if (this.current < this.last) {
						let current = this.current;
						if(this.step === 0) {
							this.current++;
							return { done: false, value: this.start}
						} else {
							this.current += this.step;
							return { done: false, value: current };
						}
					} else {
						return { done: true };
					}
				} else {
					if (this.current > this.last) {
						let current = this.current;
						this.current -= Math.abs(this.step);
						return { done: false, value: current };
					} else {
						return { done: true };
					}
				}
			}
		};
	};

	const result = [];
	for (let num of iterateObj) {
		result.push(num);
	}
	return result;
}

console.log("range2(4)", range2(4));
console.log("range2(-4)", range2(-4));
console.log("range2(1, 5)", range2(1, 5));
console.log("range2(1, -5)", range2(1, -5));
console.log("range2(0, 20, 5)", range2(0, 20, 5));
console.log("range2(0, -4, -1)", range2(0, -4, -1));
console.log("range2(0, 4, 1)", range2(0, 4, 1));
console.log("range2(1, 5, 1)", range2(1, 5, 1));
console.log("range2(1, 4, 0)", range2(1, 4, 0));
console.log("range2(0, 4, 0)", range2(0, 4, 0));
console.log("range2(0)", range2(0));
console.log("range2()", range2());