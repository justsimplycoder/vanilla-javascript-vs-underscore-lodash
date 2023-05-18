describe('isArray', function() {
	it('должен возвращать `true` для массивов', function() {
		assert.strictEqual(isArray([1, 2, 3]), true);
	});

	it('должен возвращать `false` для не-массивов', function() {
		assert.strictEqual(isArray({}), false);
		assert.strictEqual(isArray(new Set([1, 2, 3])), false);
		assert.strictEqual(isArray(true), false);
		assert.strictEqual(isArray(new Date), false);
		assert.strictEqual(isArray(new Error), false);
		assert.strictEqual(isArray({ '0': 1, 'length': 1 }), false);
		assert.strictEqual(isArray(1), false);
		assert.strictEqual(isArray(/x/), false);
		assert.strictEqual(isArray('a'), false);
		assert.strictEqual(isArray(Symbol('x')), false);
	});
});