import multiply from '../../src/Math/multiply.js'
import lod_multiply from '../../node_modules/lodash-es/multiply.js';
const lod = {};
lod.multiply = lod_multiply;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.multiply(6, 4)", lod.multiply(6, 4));

console.log('-------------------ES-------------------');
console.log("multiply(6, 4)", multiply(6, 4));

// Тесты
let assert = chai.assert;

describe('multiply', function() {
	it('надо умножить два числа', () => {
		assert.strictEqual(multiply(6, 4), 24);
		assert.strictEqual(multiply(-6, 4), -24);
		assert.strictEqual(multiply(-6, -4), 24);
	});

	it('следует приводить аргументы к числам', () => {
		assert.strictEqual(multiply('6', '4'), 24);
		assert.deepStrictEqual(multiply('x', 'y'), NaN);
	});
});

mocha.run();