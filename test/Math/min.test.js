import min from '../../fn/Math/min.js'
import lod_min from '../../node_modules/lodash-es/min.js';
const lod = {};
lod.min = lod_min;
import und_min from '../../node_modules/underscore/modules/min.js';
const und = {};
und.min = und_min;


// Примеры использования
console.log('---------------underscore---------------');
console.log("_.min([4, 2, 8, 6])", und.min([4, 2, 8, 6]));

console.log('-----------------lodash-----------------');
console.log("_.min([4, 2, 8, 6])", lod.min([4, 2, 8, 6]));

console.log('-------------------ES-------------------');
console.log("min([4, 2, 8, 6])", min([4, 2, 8, 6]));

// Тесты
describe('min', function() {
	it('должен вернуть наименьшее значение из коллекции', () => {
		assert.strictEqual(min([1, 2, 3]), 1);
	});

	it('должен работать с нечисловыми значениями коллекции', () => {
		assert.strictEqual(min(['a', 'b', 'c']), 'a');
		assert.strictEqual(min(['б', 'а', 'д']), 'а');
	});

	it('должен возвращать `undefined` для пустых коллекций', () => {
		assert.strictEqual(min([]), undefined);
	});

	it('должен возвращать `undefined` для коллекций не типов number и string', () => {
		assert.strictEqual(min([Symbol(), {}]), undefined);
	});
});

