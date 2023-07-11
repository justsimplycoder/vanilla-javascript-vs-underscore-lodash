const und = require('underscore');
const lod = require('lodash');

/**
 * xorBy - Этот метод похож на _.xor, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента каждого массива, чтобы сгенерировать критерий, по которому они сравниваются.
 */

// lodash
console.log(
	"lod.xorBy([2.1, 1.2], [2.3, 3.4, 2.2], Math.floor)",
	lod.xorBy([2.1, 1.2], [2.3, 3.4, 2.2], Math.floor)
);
console.log(
	"lod.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')",
	lod.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')
);

// es6
const strategyXor = {};

strategyXor.functionXor = (arr1, arr2, comparator) => {
	const countElement = {};
	[...arr1, ...arr2].forEach(el => {
		countElement[comparator(el)] ? countElement[comparator(el)].push(el) : countElement[comparator(el)] = [el];
	})

	const result = [];
	for (let prop in countElement) {
		if (countElement[prop].length === 1) {
			result.push(countElement[prop][0]);
		}
	}
	return result;
}

strategyXor.stringXor = (arr1, arr2, comparator) => {
	const countElement = {};
	[...arr1, ...arr2].forEach(el => {
		const key = el[comparator];
		countElement[key] ? countElement[key].push(el) : countElement[key] = [el];
	})

	const result = [];
	for (let prop in countElement) {
		if (countElement[prop].length === 1) {
			result.push(countElement[prop][0]);
		}
	}
	return result;
}

function xorBy(arr1, arr2, comparator) {
	return strategyXor[typeof comparator + 'Xor'](arr1, arr2, comparator);
}

console.log(
	"xorBy([2.1, 1.2], [2.3, 3.4, 2.2], Math.floor)",
	xorBy([2.1, 1.2], [2.3, 3.4, 2.2], Math.floor)
);
console.log(
	"xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')",
	xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')
);
