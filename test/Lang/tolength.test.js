import toLength from '../../src/Lang/toLength.js'
import lod_toLength from '../../node_modules/lodash-es/toLength.js';
const lod = {};
lod.toLength = lod_toLength;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.toLength(3.2)", lod.toLength(3.2));
console.log("lod.toLength(Number.MIN_VALUE)", lod.toLength(Number.MIN_VALUE));
console.log("lod.toLength(Infinity)", lod.toLength(Infinity));
console.log("lod.toLength('3.2')", lod.toLength('3.2'));

console.log('-------------------ES-------------------');
console.log("toLength(3.2)", toLength(3.2));
console.log("toLength(Number.MIN_VALUE)", toLength(Number.MIN_VALUE));
console.log("toLength(Infinity)", toLength(Infinity));
console.log("toLength('3.2')", toLength('3.2'));

// Тесты
let assert = chai.assert;

describe('toLength', function() {
	const MAX_ARRAY_LENGTH = 4294967295;
	const MAX_INTEGER = Number.MAX_SAFE_INTEGER;

	it('должно вернуть правильную длину', function() {
		assert.strictEqual(toLength(-1), 0);
		assert.strictEqual(toLength(Number(1)), 1);
		assert.strictEqual(toLength('1'), 1);
		assert.strictEqual(toLength(1.1), 1);
		assert.strictEqual(toLength(MAX_INTEGER), MAX_ARRAY_LENGTH);
		assert.strictEqual(toLength(Infinity), MAX_ARRAY_LENGTH);
		assert.strictEqual(toLength(-Infinity), 0);
	});
	it('должен возвращать `значение`, если допустимая длина', function() {
		assert.strictEqual(toLength(0), 0);
		assert.strictEqual(toLength(3), 3);
		assert.strictEqual(toLength(MAX_ARRAY_LENGTH), MAX_ARRAY_LENGTH);
	});
	it('должен преобразовать `-0` в `0`', function() {
		assert.strictEqual(1 / toLength(-0), Infinity);
	});
	it('должен возвращать `0` если передано некорректное значение', function() {
		assert.strictEqual(toLength('abc'), 0);
		assert.strictEqual(toLength({}), 0);
		assert.strictEqual(toLength([]), 0);
		assert.strictEqual(toLength(/x/), 0);
	});
});

mocha.run();
