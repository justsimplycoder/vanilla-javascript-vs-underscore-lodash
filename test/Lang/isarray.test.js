import isArray from '../../src/Lang/isArray.js'
import lod_isArray from '../../node_modules/lodash-es/isArray.js';
import und_isArray from '../../node_modules/underscore/modules/isarray.js';
const lod = {};
lod.isArray = lod_isArray;
const und = {};
und.isArray = und_isArray;


// Примеры использования
console.log('---------------underscore---------------');
console.log("_.isArray([1, 2, 3])", und.isArray([1, 2, 3]));
console.log("_.isArray('abc')", und.isArray('abc'));

console.log('-----------------lodash-----------------');
console.log("_.isArray([1, 2, 3])", lod.isArray([1, 2, 3]));
console.log("_.isArray('abc')", lod.isArray('abc'));

console.log('-------------------ES-------------------');
console.log("isArray([1, 2, 3])", isArray([1, 2, 3]));
console.log("isArray('abc')", isArray('abc'));


// Тесты
let assert = chai.assert;

describe('isArray', function() {
	it('должен возвращать `true` для массивов', function() {
		assert.strictEqual(isArray([1, 2, 3]), true);
	});

	it('должен возвращать `false` для не-массивов', function() {
		assert.strictEqual(isArray({}), false);
		assert.strictEqual(isArray(new Set([1, 2, 3])), false);
		assert.strictEqual(isArray(true), false);
		assert.strictEqual(isArray(new Date), false);
		assert.strictEqual(isArray(new Error), false);
		assert.strictEqual(isArray({ '0': 1, 'length': 1 }), false);
		assert.strictEqual(isArray(1), false);
		assert.strictEqual(isArray(/x/), false);
		assert.strictEqual(isArray('a'), false);
		assert.strictEqual(isArray(Symbol('x')), false);
	});
});

mocha.run();