import toString from '../../fn/Lang/toString.js'
import lod_toString from '../../node_modules/lodash-es/toString.js';
const lod = {};
lod.toString = lod_toString;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.toString([1, 2, 3])", lod.toString([1, 2, 3]));
console.log("lod.toString(-0)", lod.toString(-0));
console.log("lod.toString(0)", lod.toString(0));
console.log("lod.toString('text')", lod.toString('text'));

console.log('-------------------ES-------------------');
console.log("toString([1, 2, 3])", toString([1, 2, 3]));
console.log("toString(-0)", toString(-0));
console.log("toString(0)", toString(0));
console.log("toString('text')", toString('text'));

// Тесты
// let assert = chai.assert;

describe('toString', function() {
	it('должен обрабатывать нулевые значения как пустые строки', function() {
		assert.strictEqual(toString(null), '');
		assert.strictEqual(toString(undefined), '');
		assert.strictEqual(toString(), '');
	});

	it('должен сохранять знак `0`', function() {
		assert.strictEqual(toString(-0), '-0');
		assert.strictEqual(toString(Object(-0)), '-0');
		assert.strictEqual(toString(0), '0');
		assert.strictEqual(toString(Object(0)), '0');
	});

	it('должен сохранять знак `0` в массиве', function() {
		const values = [-0, Object(-0), 0, Object(0)];
		assert.strictEqual(toString(values), '-0,-0,0,0');
	});

	it('должен обрабатывать символы', function() {
		assert.strictEqual(toString(Symbol('x')), 'Symbol(x)');
	});

	it('должен обрабатывать массив символов', function() {
		assert.strictEqual(toString([Symbol('x'), Symbol('y')]), 'Symbol(x),Symbol(y)');
	});
});

