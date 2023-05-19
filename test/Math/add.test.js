describe('add', function() {
	it('нужно добавить два числа', function() {
		assert.strictEqual(add(6, 4), 10);
		assert.strictEqual(add(-6, 4), -2);
		assert.strictEqual(add(-6, -4), -10);
	});

	it('не следует приводить аргументы к числам', function() {
		assert.strictEqual(add('6', '4'), '64');
		assert.strictEqual(add('x', 'y'), 'xy');
	});
});
