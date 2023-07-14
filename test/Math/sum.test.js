import sum from '../../fn/Math/sum.js'
import lod_sum from '../../node_modules/lodash-es/sum.js';
const lod = {};
lod.sum = lod_sum;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.sum([4, 2, 8, 6])", lod.sum([4, 2, 8, 6]));

console.log('-------------------ES-------------------');
console.log("sum([4, 2, 8, 6])", sum([4, 2, 8, 6]));

// Тесты
describe('sum', function() {
	it('метод sum должен возвращать сумму массива чисел', function() {
		assert.strictEqual(sum([1, 2, 3]), 6);
	});

	it('метод sum должен возвращать `0` при передаче пустых значений `массива`', function() {
		assert.strictEqual(sum([]), 0);
	});

	it('метод sum следует пропускать `неопределенные` значения', function() {
		assert.strictEqual(sum([1, undefined]), 1);
	});

	it('метод sum не следует пропускать значения `NaN`', function() {
		assert.deepStrictEqual(sum([1, NaN]), NaN);
	});

	it('метод sum не следует приводить значения к числам', function() {
		assert.deepStrictEqual(sum(['1', '2']), '12');
	});
});

