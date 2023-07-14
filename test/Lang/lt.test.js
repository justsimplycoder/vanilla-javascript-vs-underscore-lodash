import lt from '../../fn/Lang/lt.js'
import lod_lt from '../../node_modules/lodash-es/lt.js';
const lod = {};
lod.lt = lod_lt;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.lt(1, 3)", lod.lt(1, 3));
console.log("lod.lt(3, 3)", lod.lt(3, 3));
console.log("lod.lt(3, 1)", lod.lt(3, 1));

console.log('-------------------ES-------------------');
console.log("lt(1, 3)", lt(1, 3));
console.log("lt(3, 3)", lt(3, 3));
console.log("lt(3, 1)", lt(3, 1));

// Тесты
describe('lt', function() {
	it('должен возвращать `true`, если `value` < `other`', function() {
		assert.strictEqual(lt(1, 3), true);
    assert.strictEqual(lt('abc', 'def'), true);
	});

	it('должен возвращать `false`, если `value` >= `other`', function () {
    assert.strictEqual(lt(3, 1), false);
    assert.strictEqual(lt(3, 3), false);
    assert.strictEqual(lt('def', 'abc'), false);
    assert.strictEqual(lt('def', 'def'), false);
	})
});

