import add from '../../fn/Math/add.js'
import lod_add from '../../node_modules/lodash-es/add.js';
const lod = {};
lod.add = lod_add;

// Примеры использования
console.log('-----------------lodash-----------------');
console.log("_.add(4, 6)", lod.add(4, 6));
console.log("_.add('4', '6')", lod.add('4', '6'));

console.log('-------------------ES-------------------');
console.log("add(4, 6)", add(4, 6));
console.log("add('4', '6')", add('4', '6'));

// Тесты
describe('add', function() {
	it('нужно добавить два числа', function() {
		assert.strictEqual(add(6, 4), 10);
		assert.strictEqual(add(-6, 4), -2);
		assert.strictEqual(add(-6, -4), -10);
	});

	it('не следует приводить аргументы к числам', function() {
		assert.strictEqual(add('6', '4'), '64');
		assert.strictEqual(add('x', 'y'), 'xy');
	});
});

