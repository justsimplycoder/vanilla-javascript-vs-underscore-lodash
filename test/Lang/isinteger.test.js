import isInteger from '../../fn/Lang/isInteger.js'
import lod_isInteger from '../../node_modules/lodash-es/isInteger.js';
const lod = {};
lod.isInteger = lod_isInteger;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("_.isInteger(3)", lod.isInteger(3));
console.log("_.isInteger(Number.MIN_VALUE)", lod.isInteger(Number.MIN_VALUE));
console.log("_.isInteger(Infinity)", lod.isInteger(Infinity));
console.log("_.isInteger('3')", lod.isInteger('3'));

console.log('-------------------ES-------------------');
console.log("isInteger(3)", isInteger(3));
console.log("isInteger(Number.MIN_VALUE)", isInteger(Number.MIN_VALUE));
console.log("isInteger(Infinity)", isInteger(Infinity));
console.log("isInteger('3')", isInteger('3'));

// Тесты
describe('isInteger', function() {
	it('должен возвращать `true` для целочисленных значений', function() {
		assert.strictEqual(isInteger(1), true);
		assert.strictEqual(isInteger(Number.MAX_VALUE), true);
	});
	it('должен возвращать `false` для не целых чисел', function() {
		assert.strictEqual(isInteger(Number.MIN_VALUE), false);
		assert.strictEqual(isInteger(NaN), false);
		assert.strictEqual(isInteger(1.2), false);
		assert.strictEqual(isInteger(Object(1)), false);
		assert.strictEqual(isInteger(Infinity), false);
		assert.strictEqual(isInteger(-Infinity), false);
	});
	it('должен возвращать `false` для нечисловых значений', function() {
		assert.strictEqual(isInteger([1, 2, 3]), false);
		assert.strictEqual(isInteger(true), false);
		assert.strictEqual(isInteger(new Date), false);
		assert.strictEqual(isInteger(new Error), false);
		assert.strictEqual(isInteger({ 'a': 1 }), false);
		assert.strictEqual(isInteger(/x/), false);
		assert.strictEqual(isInteger('a'), false);
		assert.strictEqual(isInteger('3'), false);

	});
});

