import toSafeInteger from '../../src/Lang/toSafeInteger.js'
import lod_toSafeInteger from '../../node_modules/lodash-es/toSafeInteger.js';
const lod = {};
lod.toSafeInteger = lod_toSafeInteger;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.toSafeInteger(3.2)", lod.toSafeInteger(3.2));
console.log("lod.toSafeInteger(Number.MIN_VALUE)", lod.toSafeInteger(Number.MIN_VALUE));
console.log("lod.toSafeInteger(Infinity)", lod.toSafeInteger(Infinity));
console.log("lod.toSafeInteger(-Infinity)", lod.toSafeInteger(-Infinity));
console.log("lod.toSafeInteger('3.2')", lod.toSafeInteger('3.2'));
console.log("lod.toSafeInteger(NaN)", lod.toSafeInteger(NaN));

console.log('-------------------ES-------------------');
console.log("toSafeInteger(3.2)", toSafeInteger(3.2));
console.log("toSafeInteger(Number.MIN_VALUE)", toSafeInteger(Number.MIN_VALUE));
console.log("toSafeInteger(Infinity)", toSafeInteger(Infinity));
console.log("toSafeInteger(-Infinity)", toSafeInteger(-Infinity));
console.log("toSafeInteger('3.2')", toSafeInteger('3.2'));
console.log("toSafeInteger(NaN)", toSafeInteger(NaN));

// Тесты
let assert = chai.assert;

describe('toSafeInteger', function() {
	it('должен преобразовывать значения в целые числа', function() {
		assert.strictEqual(toSafeInteger(-5.6), -5);
		assert.strictEqual(toSafeInteger('5.6'), 5);
		assert.strictEqual(toSafeInteger(), 0);
		assert.strictEqual(toSafeInteger(NaN), 0);
		assert.strictEqual(toSafeInteger('abc'), 0);
		assert.strictEqual(toSafeInteger({}), 0);
		assert.strictEqual(toSafeInteger(Infinity), Number.MAX_SAFE_INTEGER);
		assert.strictEqual(toSafeInteger(-Infinity), -Number.MAX_SAFE_INTEGER);
	});

	it('должен поддерживать значение `-0`', function() {
		assert.strictEqual(1 / toSafeInteger(-0), -Infinity);
	});
});

mocha.run();