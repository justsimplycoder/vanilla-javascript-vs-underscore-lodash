import isFiniteValue from '../../fn/Lang/isFinite.js'
import lod_isFinite from '../../node_modules/lodash-es/isFinite.js';
const lod = {};
lod.isFinite = lod_isFinite;
import und_isFinite from '../../node_modules/underscore/modules/isFinite.js';
const und = {};
und.isFinite = und_isFinite;

// Примеры использования
console.log('---------------underscore---------------');
console.log("und.isFinite(3)", und.isFinite(3));
console.log("und.isFinite(Number.MIN_VALUE)", und.isFinite(Number.MIN_VALUE));
console.log("und.isFinite(Infinity)", und.isFinite(Infinity));
console.log("und.isFinite('3')", und.isFinite('3'));

console.log('-----------------lodash-----------------');
console.log("lod.isFinite(3)", lod.isFinite(3));
console.log("lod.isFinite(Number.MIN_VALUE)", lod.isFinite(Number.MIN_VALUE));
console.log("lod.isFinite(Infinity)", lod.isFinite(Infinity));
console.log("lod.isFinite('3')", lod.isFinite('3'));

console.log('-------------------ES-------------------');
console.log("isFiniteValue(3)", isFiniteValue(3));
console.log("isFiniteValue(Number.MIN_VALUE)", isFiniteValue(Number.MIN_VALUE));
console.log("isFiniteValue(Infinity)", isFiniteValue(Infinity));
console.log("isFiniteValue('3')", isFiniteValue('3'));

// Тесты
describe('isFinite', function() {
	it('должен возвращать `true` для конечных значений', function() {
		const values = [0, 1, 3.14, -1, Number(1)];
		for (let elem of values) {
			assert.strictEqual(isFiniteValue(elem), true);
		}
	});

	it('должен возвращать `false` для неконечных значений', function() {
		const values = [NaN, Infinity, -Infinity, Object(1)];
		for (let elem of values) {
			assert.strictEqual(isFiniteValue(elem), false);
		}
	});

	it('должен возвращать `false` для числовых строковых значений', function() {
		const values = ['0', '1', '3.14'];
		for (let elem of values) {
			assert.strictEqual(isFiniteValue(elem), false);
		}
	});

	it('должен возвращать `false` для нечисловых значений', function() {
		assert.strictEqual(isFiniteValue([1, 2, 3]), false);
		assert.strictEqual(isFiniteValue(true), false);
		assert.strictEqual(isFiniteValue(new Date), false);
		assert.strictEqual(isFiniteValue(new Error), false);
		assert.strictEqual(isFiniteValue({ 'a': 1 }), false);
		assert.strictEqual(isFiniteValue(/x/), false);
		assert.strictEqual(isFiniteValue('a'), false);
		assert.strictEqual(isFiniteValue(''), false);
		assert.strictEqual(isFiniteValue(' '), false);
		assert.strictEqual(isFiniteValue(null), false);
		assert.strictEqual(isFiniteValue(undefined), false);
		let symbol = Symbol();
		assert.strictEqual(isFiniteValue(symbol), false);
	});
});

