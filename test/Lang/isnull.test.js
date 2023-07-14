import isNull from '../../fn/Lang/isNull.js'
import lod_isNull from '../../node_modules/lodash-es/isNull.js';
const lod = {};
lod.isNull = lod_isNull;
import und_isNull from '../../node_modules/underscore/modules/isNull.js';
const und = {};
und.isNull = und_isNull;


// Примеры использования
console.log('---------------underscore---------------');
console.log("und.isNull(null)", und.isNull(null));
console.log("und.isNull(undefined)", und.isNull(undefined));
console.log("und.isNull(void 0)", und.isNull(void 0));

console.log('-----------------lodash-----------------');
console.log("lod.isNull(null)", lod.isNull(null));
console.log("lod.isNull(undefined)", lod.isNull(undefined));
console.log("lod.isNull(void 0)", lod.isNull(void 0));

console.log('-------------------ES-------------------');
console.log("isNull(null)", isNull(null));
console.log("isNull(undefined)", isNull(undefined));
console.log("isNull(void 0)", isNull(void 0));

// Тесты
describe('isNull', function() {
	it('должен возвращать `true` для значений `null`', function() {
		assert.strictEqual(isNull(null), true);
	});

	it('должен возвращать `false` для значений, отличных от `null`', function() {
		assert.strictEqual(isNull(undefined), false);
		assert.strictEqual(isNull(void 0), false);
		assert.strictEqual(isNull({}), false);
		assert.strictEqual(isNull(new Set([1, 2, 3])), false);
		assert.strictEqual(isNull(true), false);
		assert.strictEqual(isNull(new Date), false);
		assert.strictEqual(isNull(new Error), false);
		assert.strictEqual(isNull({ '0': 1, 'length': 1 }), false);
		assert.strictEqual(isNull(1), false);
		assert.strictEqual(isNull(/x/), false);
		assert.strictEqual(isNull('a'), false);
		assert.strictEqual(isNull(Symbol('x')), false);
	});
});

