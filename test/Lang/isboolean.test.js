import isBoolean from '../../fn/Lang/isBoolean.js'
import lod_isBoolean from '../../node_modules/lodash-es/isBoolean.js';
const lod = {};
lod.isBoolean = lod_isBoolean;
import und_isBoolean from '../../node_modules/underscore/modules/isBoolean.js';
const und = {};
und.isBoolean = und_isBoolean;

// Примеры использования
console.log('---------------underscore---------------');
console.log("und.isBoolean(false)", und.isBoolean(false));
console.log("und.isBoolean(null)", und.isBoolean(null));

console.log('-----------------lodash-----------------');
console.log("lod.isBoolean(false)", lod.isBoolean(false));
console.log("lod.isBoolean(null)", lod.isBoolean(null));

console.log('-------------------ES-------------------');
console.log("isBoolean(false)", isBoolean(false));
console.log("isBoolean(null)", isBoolean(null));

// Тесты
describe('isBoolean', function() {
	it('должен возвращать `true` для логических значений', function() {
		assert.strictEqual(isBoolean(true), true);
		assert.strictEqual(isBoolean(false), true);
		assert.strictEqual(isBoolean(Object(true)), true);
		assert.strictEqual(isBoolean(Object(false)), true);
	});

	it('должен возвращать `false` для небулевых значений', function() {
		assert.strictEqual(isBoolean(null), false);
		assert.strictEqual(isBoolean([1, 2, 3]), false);
		assert.strictEqual(isBoolean(new Date), false);
		assert.strictEqual(isBoolean(new Error), false);
		assert.strictEqual(isBoolean(Array.prototype.slice), false);
		assert.strictEqual(isBoolean({ 'a': 1 }), false);
		assert.strictEqual(isBoolean(1), false);
		assert.strictEqual(isBoolean(/x/), false);
		assert.strictEqual(isBoolean('a'), false);
		let symbol = Symbol();
		assert.strictEqual(isBoolean(symbol), false);
	});
});

