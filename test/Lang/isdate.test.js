import isDate from '../../fn/Lang/isDate.js'
import lod_isDate from '../../node_modules/lodash-es/isDate.js';
const lod = {};
lod.isDate = lod_isDate;
import und_isDate from '../../node_modules/underscore/modules/isDate.js';
const und = {};
und.isDate = und_isDate;


// Примеры использования
console.log('---------------underscore---------------');
console.log("_.isDate(new Date)", und.isDate(new Date));
console.log("_.isDate('Mon April 23 2012')", und.isDate('Mon April 23 2012'));

console.log('-----------------lodash-----------------');
console.log("_.isDate(new Date)", lod.isDate(new Date));
console.log("_.isDate('Mon April 23 2012')", lod.isDate('Mon April 23 2012'));

console.log('-------------------ES-------------------');
console.log("isDate(new Date)", isDate(new Date));
console.log("isDate('Mon April 23 2012')", isDate('Mon April 23 2012'));

// Тесты
describe('isDate', function() {
	it('должен возвращать `true` для дат', function() {
		assert.strictEqual(isDate(new Date), true);
	});

	it('должен возвращать `false` для не дат', function() {
		assert.strictEqual(isDate({}), false);
		assert.strictEqual(isDate(new Set([1, 2, 3])), false);
		assert.strictEqual(isDate(true), false);
		assert.strictEqual(isDate(new Error), false);
		assert.strictEqual(isDate({ '0': 1, 'length': 1 }), false);
		assert.strictEqual(isDate(1), false);
		assert.strictEqual(isDate(/x/), false);
		assert.strictEqual(isDate('a'), false);
		assert.strictEqual(isDate(Symbol('x')), false);
	});
});

