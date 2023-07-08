import isWeakMap from '../../src/Lang/isWeakMap.js'
import lod_isWeakMap from '../../node_modules/lodash-es/isWeakMap.js';
const lod = {};
lod.isWeakMap = lod_isWeakMap;
import und_isWeakMap from '../../node_modules/underscore/modules/isWeakMap.js';
const und = {};
und.isWeakMap = und_isWeakMap;

// Примеры использования
console.log('---------------underscore---------------');
console.log("und.isWeakMap(new WeakMap)", und.isWeakMap(new WeakMap));
console.log("und.isWeakMap(new Map)", und.isWeakMap(new Map));

console.log('-----------------lodash-----------------');
console.log("lod.isWeakMap(new WeakMap)", lod.isWeakMap(new WeakMap));
console.log("lod.isWeakMap(new Map)", lod.isWeakMap(new Map));

console.log('-------------------ES-------------------');
console.log("isWeakMap(new WeakMap)", isWeakMap(new WeakMap));
console.log("isWeakMap(new Map)", isWeakMap(new Map));

// Тесты
let assert = chai.assert;

describe('isWeakMap', function() {
	it('должен возвращать `true` для WeakMap', function() {
		if (WeakMap) {
			assert.strictEqual(isWeakMap(new WeakMap()), true);
		}
	});

	it('должен возвращать `false` для не WeakMap', function() {
		assert.strictEqual(isWeakMap(null), false);
		assert.strictEqual(isWeakMap([1, 2, 3]), false);
		assert.strictEqual(isWeakMap(new Date), false);
		assert.strictEqual(isWeakMap(new Error), false);
		assert.strictEqual(isWeakMap(Array.prototype.slice), false);
		assert.strictEqual(isWeakMap({ 'a': 1 }), false);
		assert.strictEqual(isWeakMap(1), false);
		assert.strictEqual(isWeakMap(/x/), false);
		assert.strictEqual(isWeakMap('a'), false);
		let symbol = Symbol();
		assert.strictEqual(isWeakMap(symbol), false);
		assert.strictEqual(isWeakMap(new Set([1, 2, 3])), false);
	});
});

mocha.run();
