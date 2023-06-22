import toInteger from '../../src/Lang/toInteger.js'
import lod_toInteger from '../../node_modules/lodash-es/toInteger.js';
const lod = {};
lod.toInteger = lod_toInteger;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("toInteger(3.2)", lod.toInteger(3.2));
console.log("lod.toInteger(-3.2)", lod.toInteger(-3.2));
console.log("lod.toInteger(3.7)", lod.toInteger(3.7));
console.log("lod.toInteger(Number.MIN_VALUE)", lod.toInteger(Number.MIN_VALUE));
console.log("lod.toInteger(Infinity)", lod.toInteger(Infinity));
console.log("lod.toInteger(-Infinity)", lod.toInteger(-Infinity));
console.log("lod.toInteger('3.2')", lod.toInteger('3.2'));
console.log("lod.toInteger(NaN)", lod.toInteger(NaN));

console.log('-------------------ES-------------------');
console.log("toInteger(3.2)", toInteger(3.2));
console.log("toInteger(-3.2)", toInteger(-3.2));
console.log("toInteger(3.7)", toInteger(3.7));
console.log("toInteger(Number.MIN_VALUE)", toInteger(Number.MIN_VALUE));
console.log("toInteger(Infinity)", toInteger(Infinity));
console.log("toInteger(-Infinity)", toInteger(-Infinity));
console.log("toInteger('3.2')", toInteger('3.2'));
console.log("toInteger(NaN)", toInteger(NaN));

// Тесты
let assert = chai.assert;

describe('toInteger', function() {
	it('должен преобразовывать значения в целые числа', function() {
		assert.strictEqual(toInteger(-5.6), -5);
		assert.strictEqual(toInteger('5.6'), 5);
		assert.strictEqual(toInteger(), 0);
		assert.strictEqual(toInteger(NaN), 0);
		assert.strictEqual(toInteger('abc'), 0);
		assert.strictEqual(toInteger({}), 0);
		assert.strictEqual(toInteger(Infinity), Number.MAX_VALUE);
		assert.strictEqual(toInteger(-Infinity), -Number.MAX_VALUE);
	});

	it('должен поддерживать значение `-0`', function() {
		assert.strictEqual(1 / toInteger(-0), -Infinity);
	});
});

mocha.run();