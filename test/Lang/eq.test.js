import eq from '../../src/Lang/eq.js'
import lod_eq from '../../node_modules/lodash-es/eq.js';
const lod = {};
lod.eq = lod_eq;

// Примеры использования
var object = { 'a': 1 };
var other = { 'a': 1 };

console.log('-----------------lodash-----------------');
console.log("lod.eq(object, object)", lod.eq(object, object));
console.log("lod.eq(object, other)", lod.eq(object, other));
console.log("lod.eq('a', 'a')", lod.eq('a', 'a'));
console.log("lod.eq('a', Object('a'))", lod.eq('a', Object('a')));
console.log("lod.eq(NaN, NaN)", lod.eq(NaN, NaN));

console.log('-------------------ES-------------------');
console.log("eq(object, object)", eq(object, object));
console.log("eq(object, other)", eq(object, other));
console.log("eq('a', 'a')", eq('a', 'a'));
console.log("eq('a', Object('a'))", eq('a', Object('a')));
console.log("eq(NaN, NaN)", eq(NaN, NaN));

// Тесты
let assert = chai.assert;

describe('eq', function() {
	it('должен выполнить `SameValueZero` сравнение двух значений', function() {
		assert.strictEqual(eq(), true);
		assert.strictEqual(eq(undefined), true);
		assert.strictEqual(eq(0, -0), true);
		assert.strictEqual(eq(NaN, NaN), true);
		assert.strictEqual(eq(1, 1), true);

		assert.strictEqual(eq(null, undefined), false);
		assert.strictEqual(eq(1, Object(1)), false);
		assert.strictEqual(eq(1, '1'), false);
		assert.strictEqual(eq(1, '1'), false);

		var object = { 'a': 1 };
		assert.strictEqual(eq(object, object), true);
		assert.strictEqual(eq(object, { 'a': 1 }), false);
	});
});

mocha.run();