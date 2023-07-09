import isNative from '../../src/Lang/isNative.js'
// Ошбика isNative.js:35 Uncaught Error: Unsupported core-js use.
// Напрямую используется _baseIsNative.js
// import lod_isNative from '../../node_modules/lodash-es/isNative.js';
import lod_isNative from '../../node_modules/lodash-es/_baseIsNative.js';
const lod = {};
lod.isNative = lod_isNative;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.isNative(Array.prototype.push)", lod.isNative(Array.prototype.push));
console.log("lod.isNative(lod)", lod.isNative(() => {}));

console.log('-------------------ES-------------------');
console.log("isNative(Array.prototype.push)", isNative(Array.prototype.push));
console.log("isNative(lod)", isNative(() => {}));

// Тесты
let assert = chai.assert;

describe('isNative', function() {
	it('должен возвращать `true` для нативного метода', function() {
		assert.strictEqual(isNative(Array.prototype.map), true);
		assert.strictEqual(isNative(parseInt), true);
	});

	it('должен возвращать `false` для значений, отличных от `null`', function() {
		assert.strictEqual(isNative(undefined), false);
		assert.strictEqual(isNative(void 0), false);
		assert.strictEqual(isNative({}), false);
		assert.strictEqual(isNative(new Set([1, 2, 3])), false);
		assert.strictEqual(isNative(true), false);
		assert.strictEqual(isNative(new Date), false);
		assert.strictEqual(isNative(new Error), false);
		assert.strictEqual(isNative({ '0': 1, 'length': 1 }), false);
		assert.strictEqual(isNative(1), false);
		assert.strictEqual(isNative(/x/), false);
		assert.strictEqual(isNative('a'), false);
		assert.strictEqual(isNative(Symbol('x')), false);
	});
});

mocha.run();