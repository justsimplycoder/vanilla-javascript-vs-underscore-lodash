import gte from '../../fn/Lang/gte.js'
import lod_gte from '../../node_modules/lodash-es/gte.js';
const lod = {};
lod.gte = lod_gte;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.gte(1, 3)", lod.gte(1, 3));
console.log("lod.gte(3, 3)", lod.gte(3, 3));
console.log("lod.gte(3, 1)", lod.gte(3, 1));

console.log('-------------------ES-------------------');
console.log("gte(1, 3)", gte(1, 3));
console.log("gte(3, 3)", gte(3, 3));
console.log("gte(3, 1)", gte(3, 1));

// Тесты
describe('gte', function() {
	it('должен возвращать `true`, если `value` >= `other`', function() {
		assert.strictEqual(gte(3, 1), true);
		assert.strictEqual(gte(3, 3), true);
		assert.strictEqual(gte('def', 'abc'), true);
		assert.strictEqual(gte('def', 'def'), true);
	});

	it('должен возвращать `false`, если `value` < `other`.', function () {
		assert.strictEqual(gte(1, 3), false);
		assert.strictEqual(gte('abc', 'def'), false);
	})
});
