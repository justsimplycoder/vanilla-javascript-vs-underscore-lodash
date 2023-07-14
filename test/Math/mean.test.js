import mean from '../../fn/Math/mean.js'
import lod_mean from '../../node_modules/lodash-es/mean.js';
const lod = {};
lod.mean = lod_mean;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.mean([4, 2, 8, 6])", lod.mean([4, 2, 8, 6]));

console.log('-------------------ES-------------------');
console.log("mean([4, 2, 8, 6])", mean([4, 2, 8, 6]));

// Тесты
describe('mean', function() {
	it('должен возвращать среднее значение массива чисел', () => {
		assert.strictEqual(mean([4, 2, 8, 6]), 5);
	});

	it('должен возвращать `NaN` при передаче пустых значений `массива`', () => {
		assert.isNaN(mean());
		assert.isNaN(mean({}));
		assert.isNaN(mean([]));
		assert.isNaN(mean(['a', 'b']));
		assert.isNaN(mean([1, 'b']));
		assert.isNaN(mean([{}, {}]));
	});
});
