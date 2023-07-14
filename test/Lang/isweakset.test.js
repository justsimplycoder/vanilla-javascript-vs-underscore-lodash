import isWeakSet from '../../fn/Lang/isWeakSet.js'
import lod_isWeakSet from '../../node_modules/lodash-es/isWeakSet.js';
const lod = {};
lod.isWeakSet = lod_isWeakSet;
import und_isWeakSet from '../../node_modules/underscore/modules/isWeakSet.js';
const und = {};
und.isWeakSet = und_isWeakSet;

// Примеры использования
console.log('---------------underscore---------------');
console.log("und.isWeakSet(new WeakSet)", und.isWeakSet(new WeakSet));
console.log("und.isWeakSet(new Set)", und.isWeakSet(new Set));

console.log('-----------------lodash-----------------');
console.log("lod.isWeakSet(new WeakSet)", lod.isWeakSet(new WeakSet));
console.log("lod.isWeakSet(new Set)", lod.isWeakSet(new Set));

console.log('-------------------ES-------------------');
console.log("isWeakSet(new WeakSet)", isWeakSet(new WeakSet));
console.log("isWeakSet(new Set)", isWeakSet(new Set));

// Тесты
describe('isWeakSet', function() {
	it('должен возвращать `true` для WeakSet', function() {
		if (WeakSet) {
			assert.strictEqual(isWeakSet(new WeakSet()), true);
		}
	});

	it('должен возвращать `false` для не WeakSet', function() {
		assert.strictEqual(isWeakSet(null), false);
		assert.strictEqual(isWeakSet([1, 2, 3]), false);
		assert.strictEqual(isWeakSet(new Date), false);
		assert.strictEqual(isWeakSet(new Error), false);
		assert.strictEqual(isWeakSet(Array.prototype.slice), false);
		assert.strictEqual(isWeakSet({ 'a': 1 }), false);
		assert.strictEqual(isWeakSet(1), false);
		assert.strictEqual(isWeakSet(/x/), false);
		assert.strictEqual(isWeakSet('a'), false);
		let symbol = Symbol();
		assert.strictEqual(isWeakSet(symbol), false);
		assert.strictEqual(isWeakSet(new Set([1, 2, 3])), false);
	});
});

