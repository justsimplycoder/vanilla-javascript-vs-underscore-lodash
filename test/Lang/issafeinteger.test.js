import isSafeInteger from '../../src/Lang/isSafeInteger.js'
import lod_isSafeInteger from '../../node_modules/lodash-es/isSafeInteger.js';
const lod = {};
lod.isSafeInteger = lod_isSafeInteger;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.isSafeInteger(3)", lod.isSafeInteger(3));
console.log("lod.isSafeInteger(Number.MIN_VALUE)", lod.isSafeInteger(Number.MIN_VALUE));
console.log("lod.isSafeInteger(Infinity)", lod.isSafeInteger(Infinity));
console.log("lod.isSafeInteger('3')", lod.isSafeInteger('3'));

console.log('-------------------ES-------------------');
console.log("Number.isSafeInteger(3)", Number.isSafeInteger(3));
console.log("Number.isSafeInteger(Number.MIN_VALUE)", Number.isSafeInteger(Number.MIN_VALUE));
console.log("Number.isSafeInteger(Infinity)", Number.isSafeInteger(Infinity));
console.log("Number.isSafeInteger('3')", Number.isSafeInteger('3'));

// Тесты
let assert = chai.assert;

describe('isSafeInteger', function() {
	it('должен возвращать `true` для целочисленных значений', function() {
		assert.strictEqual(isSafeInteger(1), true);
		assert.strictEqual(isSafeInteger(Number.MAX_SAFE_INTEGER), true);
	});
	it('должен возвращать `false` для не целых чисел', function() {
		assert.strictEqual(isSafeInteger(Number.MIN_VALUE), false);
		assert.strictEqual(isSafeInteger(NaN), false);
		assert.strictEqual(isSafeInteger(1.2), false);
		assert.strictEqual(isSafeInteger(Object(1)), false);
		assert.strictEqual(isSafeInteger(Infinity), false);
		assert.strictEqual(isSafeInteger(-Infinity), false);
	});
	it('должен возвращать `false` для нечисловых значений', function() {
		assert.strictEqual(isSafeInteger([1, 2, 3]), false);
		assert.strictEqual(isSafeInteger(true), false);
		assert.strictEqual(isSafeInteger(new Date), false);
		assert.strictEqual(isSafeInteger(new Error), false);
		assert.strictEqual(isSafeInteger({ 'a': 1 }), false);
		assert.strictEqual(isSafeInteger(/x/), false);
		assert.strictEqual(isSafeInteger('a'), false);
		assert.strictEqual(isSafeInteger('3'), false);

	});
});

mocha.run();
