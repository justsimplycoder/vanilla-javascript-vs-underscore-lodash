import isNotANumber from '../../fn/Lang/isNaN.js'
import lod_isNaN from '../../node_modules/lodash-es/isNaN.js';
const lod = {};
lod.isNaN = lod_isNaN;
import und_isNaN from '../../node_modules/underscore/modules/isNaN.js';
const und = {};
und.isNaN = und_isNaN;

// Примеры использования
console.log('---------------underscore---------------');
console.log("_.isNaN(NaN)", und.isNaN(NaN));
console.log("_.isNaN(new Number(NaN))", und.isNaN(new Number(NaN)));

console.log('-----------------lodash-----------------');
console.log("_.isNaN(NaN)", lod.isNaN(NaN));
console.log("_.isNaN(new Number(NaN))", lod.isNaN(new Number(NaN)));

console.log('-------------------ES-------------------');
console.log("isNotANumber(NaN)", isNotANumber(NaN));
console.log("isNotANumber(new Number(NaN))", isNotANumber(new Number(NaN)));

// Тесты
describe('isNaN', function() {
	it('должен возвращать `true` для NaN', function() {
		assert.strictEqual(isNotANumber(NaN), true);
		assert.strictEqual(isNotANumber(Object(NaN)), true);
		assert.strictEqual(isNotANumber(new Number(NaN)), true);
	});

	it('должен возвращать `false` для не-NaN', function() {
		assert.strictEqual(isNotANumber([1, 2, 3]), false);
		assert.strictEqual(isNotANumber(true), false);
		assert.strictEqual(isNotANumber(new Date), false);
		assert.strictEqual(isNotANumber(new Error), false);
		assert.strictEqual(isNotANumber({ 'a': 1 }), false);
		assert.strictEqual(isNotANumber(1), false);
		assert.strictEqual(isNotANumber(Object(1)), false);
		assert.strictEqual(isNotANumber(/x/), false);
		assert.strictEqual(isNotANumber('a'), false);
		assert.strictEqual(isNotANumber(null), false);
		assert.strictEqual(isNotANumber(undefined), false);
	});
});

