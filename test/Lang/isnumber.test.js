import isNumber from '../../fn/Lang/isNumber.js'
import lod_isNumber from '../../node_modules/lodash-es/isNumber.js';
const lod = {};
lod.isNumber = lod_isNumber;
import und_isNumber from '../../node_modules/underscore/modules/isNumber.js';
const und = {};
und.isNumber = und_isNumber;

// Примеры использования
console.log('---------------underscore---------------');
console.log("und.isNumber(3)", und.isNumber(3));
console.log("und.isNumber('3')", und.isNumber('3'));

console.log('-----------------lodash-----------------');
console.log("lod.isNumber(3)", lod.isNumber(3));
console.log("lod.isNumber('3')", lod.isNumber('3'));

console.log('-------------------ES-------------------');
console.log("isNumber(3)", isNumber(3));
console.log("isNumber('3')", isNumber('3'));

// Тесты
describe('isNumber', function() {
	it('должен возвращать `true` для чисел', function() {
		assert.strictEqual(isNumber(0), true);
		assert.strictEqual(isNumber(Infinity), true);
		assert.strictEqual(isNumber(Object(0)), true);
		assert.strictEqual(isNumber(Number(0)), true);
		assert.strictEqual(isNumber(Number.MIN_VALUE), true);
		assert.strictEqual(isNumber(NaN), true);
	});

	it('должен возвращать `false` для нечисел', function() {
		assert.strictEqual(isNumber(null), false);
		assert.strictEqual(isNumber([1, 2, 3]), false);
		assert.strictEqual(isNumber(new Date), false);
		assert.strictEqual(isNumber(new Error), false);
		assert.strictEqual(isNumber(Array.prototype.slice), false);
		assert.strictEqual(isNumber({ 'a': 1 }), false);
		assert.strictEqual(isNumber('1'), false);
		assert.strictEqual(isNumber(/x/), false);
		assert.strictEqual(isNumber('a'), false);
		let symbol = Symbol();
		assert.strictEqual(isNumber(symbol), false);
	});
});

