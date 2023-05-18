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