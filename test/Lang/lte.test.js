import lte from '../../src/Lang/lte.js'
import lod_lte from '../../node_modules/lodash-es/lte.js';
const lod = {};
lod.lte = lod_lte;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.lte(1, 3)", lod.lte(1, 3));
console.log("lod.lte(3, 3)", lod.lte(3, 3));
console.log("lod.lte(3, 1)", lod.lte(3, 1));

console.log('-------------------ES-------------------');
console.log("lte(1, 3)", lte(1, 3));
console.log("lte(3, 3)", lte(3, 3));
console.log("lte(3, 1)", lte(3, 1));

// Тесты
let assert = chai.assert;

describe('lte', function() {
	it('должен возвращать `true`, если `value` <= `other`', function() {
		assert.strictEqual(lte(1, 3), true);
		assert.strictEqual(lte(3, 3), true);
		assert.strictEqual(lte('abc', 'def'), true);
		assert.strictEqual(lte('def', 'def'), true);
	});

	it('должен возвращать `false`, если `value` > `other`', function () {
		assert.strictEqual(lte(3, 1), false);
		assert.strictEqual(lte('def', 'abc'), false);
	})
});

mocha.run();