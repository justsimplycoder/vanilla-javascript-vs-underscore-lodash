const und = require('underscore');
const lod = require('lodash');

/**
 * transform - Альтернатива _.reduce; этот метод преобразует объект в новый объект-аккумулятор, который является результатом запуска каждого из его собственных перечисляемых строковых свойств с ключом через итерацию, при этом каждый вызов потенциально мутирует объект-аккумулятор.
 */

// lodash
const transformObj = lod.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});

console.log("transformObj", transformObj);

const transformArr = lod.transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, []);

console.log("transformArr", transformArr);

// es6
function transform(obj, callback, result = {}) {
	if(Array.isArray(result)) {
		for(let el of obj) {
			let isBreak = callback(result, el);
			if(!isBreak) break;
		}
	} else {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				callback(result, obj[key], key);
			}
		}
	}
	return result;
}

const transformObj2 = transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});

console.log("transformObj2", transformObj2);

const trransformArr2 = transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, [])

console.log("trransformArr2", trransformArr2);

