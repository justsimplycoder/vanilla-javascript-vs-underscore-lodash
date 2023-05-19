import isArrayBuffer from '../../src/Lang/isArrayBuffer.js'
import lod_isArrayBuffer from '../../node_modules/lodash-es/isArrayBuffer.js';
const lod = {};
lod.isArrayBuffer = lod_isArrayBuffer;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("_.isArrayBuffer(new ArrayBuffer(2))", lod.isArrayBuffer(new ArrayBuffer(2)));
console.log("_.isArrayBuffer(new Array(2))", lod.isArrayBuffer(new Array(2)));

console.log('-------------------ES-------------------');
console.log("isArrayBuffer(new ArrayBuffer(2))", isArrayBuffer(new ArrayBuffer(2)));
console.log("isArrayBuffer(new Array(2))", isArrayBuffer(new Array(2)));


// Тесты
let assert = chai.assert;

describe('isArrayBuffer', function() {
	it('должен возвращать `true` для ArrayBuffer', function() {
		assert.strictEqual(isArrayBuffer(new ArrayBuffer(2)), true);
	});

	it('должен возвращать `false` для не-ArrayBuffer', function() {
		assert.strictEqual(isArrayBuffer([]), false);
		assert.strictEqual(isArrayBuffer({}), false);
		assert.strictEqual(isArrayBuffer(new Set([1, 2, 3])), false);
		assert.strictEqual(isArrayBuffer(true), false);
		assert.strictEqual(isArrayBuffer(new Date), false);
		assert.strictEqual(isArrayBuffer(new Error), false);
		assert.strictEqual(isArrayBuffer({ '0': 1, 'length': 1 }), false);
		assert.strictEqual(isArrayBuffer(1), false);
		assert.strictEqual(isArrayBuffer(/x/), false);
		assert.strictEqual(isArrayBuffer('a'), false);
		assert.strictEqual(isArrayBuffer(Symbol('x')), false);
	});
});

mocha.run();
