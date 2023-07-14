import gt from '../../fn/Lang/gt.js'
import lod_gt from '../../node_modules/lodash-es/gt.js';
const lod = {};
lod.gt = lod_gt;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.gt(1, 3)", lod.gt(1, 3));
console.log("lod.gt(3, 3)", lod.gt(3, 3));
console.log("lod.gt(3, 1)", lod.gt(3, 1));

console.log('-------------------ES-------------------');
console.log("gt(1, 3)", gt(1, 3));
console.log("gt(3, 3)", gt(3, 3));
console.log("gt(3, 1)", gt(3, 1));

// Тесты
describe('gt', function() {
	it('должен возвращать `true`, если `value` > `other`', function() {
		assert.strictEqual(gt(3, 1), true);
		assert.strictEqual(gt('def', 'abc'), true);
	});

	it('должен возвращать `false`, если `value` <= `other`', function () {
		assert.strictEqual(gt(1, 3), false);
		assert.strictEqual(gt(3, 3), false);
		assert.strictEqual(gt('abc', 'def'), false);
		assert.strictEqual(gt('def', 'def'), false);
	})
});
