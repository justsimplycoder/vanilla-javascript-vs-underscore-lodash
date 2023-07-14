import divide from '../../fn/Math/divide.js'
import lod_divide from '../../node_modules/lodash-es/divide.js';
const lod = {};
lod.divide = lod_divide;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.divide(6, 4)", lod.divide(6, 4));

console.log('-------------------ES-------------------');
console.log("divide(6, 4)", divide(6, 4));

// Тесты
describe('divide', function() {
	it('надо делить два числа', () => {
		assert.strictEqual(divide(6, 4), 1.5);
		assert.strictEqual(divide(-6, 4), -1.5);
		assert.strictEqual(divide(-6, -4), 1.5);
	});

	it('следует приводить аргументы к числам', () => {
		assert.strictEqual(divide('6', '4'), 1.5);
		assert.deepStrictEqual(divide('x', 'y'), NaN);
	});
});

