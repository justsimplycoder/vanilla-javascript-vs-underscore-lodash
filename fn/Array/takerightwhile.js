const und = require('underscore');
const lod = require('lodash');

/**
 * takeRightWhile - Создает срез массива с элементами, взятыми с конца
 */

var users = [
	{ 'user': 'barney',  'active': true },
	{ 'user': 'fred',    'active': false },
	{ 'user': 'pebbles', 'active': false }
];

console.log(
	"lod.takeRightWhile(users, function(o) { return !o.active; })\n",
	lod.takeRightWhile(users, function(o) { return !o.active; })
);
console.log(
	"lod.takeRightWhile(users, { 'user': 'pebbles', 'active': false })\n",
	lod.takeRightWhile(users, { 'user': 'pebbles', 'active': false })
);
console.log(
	"lod.takeRightWhile(users, ['active', false])\n",
	lod.takeRightWhile(users, ['active', false])
);
console.log(
	"lod.takeRightWhile(users, 'active')\n",
	lod.takeRightWhile(users, 'active')
);

// es6
function equalObject(...objects) {
	var arrEqual = objects.map(function (elem) {
		return Object.entries(elem).sort(function(a, b) {
			if (a[0] > b[0]) {
				return 1;
			}
			if (a[0] < b[0]) {
				return -1;
			}
			return 0;
		});
	});
	return JSON.stringify(arrEqual[0]) == JSON.stringify(arrEqual[1]);
}

function takeRightWhile(arr, condition){
	const result = [];

	if(typeof condition === 'function') {
		for (let i = arr.length - 1; i >= 0; --i) {
			if(condition(arr[i])) {
				result.unshift(arr[i]);
			} else {
				break;
			}
		}
	} else if (Array.isArray(condition)) {
		for (let i = arr.length - 1; i >= 0; --i) {
			if(arr[i][condition[0]] === condition[1]) {
				result.unshift(arr[i]);
			} else {
				break;
			}
		}
	} else if (typeof condition === 'object' && condition !== null){
		for (let i = arr.length - 1; i >= 0; --i) {
			if(equalObject(arr[i], condition)) {
				result.unshift(arr[i]);
			} else {
				break;
			}
		}
	} else if (typeof condition === 'string') {
		for (let i = arr.length - 1; i >= 0; --i) {
			if(!(condition in arr[i])) {
				result.unshift(arr[i]);
			} else {
				break;
			}
		}
	}

	return result;
}

console.log(
	"takeRightWhile(users, function(o) { return !o.active; })\n",
	takeRightWhile(users, function(o) { return !o.active; })
);
console.log(
	"takeRightWhile(users, { 'user': 'pebbles', 'active': false })\n",
	takeRightWhile(users, { 'user': 'pebbles', 'active': false })
);
console.log(
	"takeRightWhile(users, ['active', false])\n",
	takeRightWhile(users, ['active', false])
);
console.log(
	"takeRightWhile(users, 'active')\n",
	takeRightWhile(users, 'active')
);
