import subtract from '../../src/Math/subtract.js'
import lod_subtract from '../../node_modules/lodash-es/subtract.js';
const lod = {};
lod.subtract = lod_subtract;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.subtract(6, 4)", lod.subtract(6, 4));

console.log('-------------------ES-------------------');
console.log("subtract(6, 4)", subtract(6, 4));

// Тесты
let assert = chai.assert;

describe('subtract', function() {
	it('надо вычесть два числа', () => {
		assert.strictEqual(subtract(6, 4), 2);
		assert.strictEqual(subtract(-6, 4), -10);
		assert.strictEqual(subtract(-6, -4), -2);
	});

	it('следует приводить аргументы к числам', () => {
		assert.strictEqual(subtract('6', '4'), 2);
		assert.deepStrictEqual(subtract('x', 'y'), NaN);
	});
});

mocha.run();