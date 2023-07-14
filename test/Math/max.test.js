import max from '../../fn/Math/max.js'
import lod_max from '../../node_modules/lodash-es/max.js';
const lod = {};
lod.max = lod_max;
import und_max from '../../node_modules/underscore/modules/max.js';
const und = {};
und.max = und_max;


// Примеры использования
console.log('---------------underscore---------------');
console.log("und.max([4, 2, 8, 6])", und.max([4, 2, 8, 6]));

console.log('-----------------lodash-----------------');
console.log("lod.max([4, 2, 8, 6])", lod.max([4, 2, 8, 6]));

console.log('-------------------ES-------------------');
console.log("Math.max(...[4, 2, 8, 6])", Math.max(...[4, 2, 8, 6]));

// Тесты
describe('max', function() {
	it('должен вернуть наибольшее значение из коллекции', () => {
		assert.strictEqual(max([1, 2, 3]), 3);
	});

	it('должен возвращать `undefined` для пустых коллекций', () => {
		assert.strictEqual(max([]), undefined);
	});

	it('должен работать с нечисловыми значениями коллекции', () => {
		assert.strictEqual(max(['a', 'b']), 'b');
	});
});

