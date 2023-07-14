import isEmpty from '../../fn/Lang/isEmpty.js'
import lod_isEmpty from '../../node_modules/lodash-es/isEmpty.js';
const lod = {};
lod.isEmpty = lod_isEmpty;
import und_isEmpty from '../../node_modules/underscore/modules/isEmpty.js';
const und = {};
und.isEmpty = und_isEmpty;


// Примеры использования
console.log('-----------------lodash-----------------');
console.log("lod.isEmpty(null)", lod.isEmpty(null));
console.log("lod.isEmpty(undefined)", lod.isEmpty(undefined));

console.log('-------------------ES-------------------');
console.log("isEmpty(null)", isEmpty(null));
console.log("isEmpty(undefined)", isEmpty(undefined));

// Тесты
describe('isEmpty', function() {
	it('должен возвращать `true` для пустых значений', function() {
		assert.strictEqual(isEmpty(null), true);
		assert.strictEqual(isEmpty(undefined), true);
		assert.strictEqual(isEmpty(new Set()), true);
		assert.strictEqual(isEmpty(new Map()), true);
		assert.strictEqual(isEmpty({}), true);
		assert.strictEqual(isEmpty([]), true);
		assert.strictEqual(isEmpty(() => {}), true);
		assert.strictEqual(isEmpty(), true);
		assert.strictEqual(isEmpty(''), true);
		assert.strictEqual(isEmpty(1), true);
		assert.strictEqual(isEmpty(NaN), true);
		assert.strictEqual(isEmpty(true), true);
		assert.strictEqual(isEmpty(/x/), true);
		let symbol = Symbol();
		assert.strictEqual(isEmpty(symbol), true);

		if(typeof Buffer === 'function') {
			assert.strictEqual(isEmpty(new Buffer(0)), true);
			assert.strictEqual(isEmpty(new Buffer(1)), false);
		}
	});

	it('должен возвращать false для непустых значений', function() {
		assert.strictEqual(isEmpty([0]), false);
		assert.strictEqual(isEmpty([1, 2, 3]), false);
		assert.strictEqual(isEmpty(new Map([['a', 1]])), false);
		assert.strictEqual(isEmpty(new Set([1, 2, 3])), false);
		assert.strictEqual(isEmpty({ 'a': 0 }), false);
		assert.strictEqual(isEmpty('a'), false);
		assert.strictEqual(isEmpty('abc'), false);
	});

	it('должен работать с объектом, у которого есть свойство `length`', function() {
		assert.strictEqual(isEmpty({'length': 0}), false);
	});

	it('должен работать с объектами-прототипами', function() {
		function Foo() {}
		Foo.prototype = { 'constructor': Foo };
		assert.strictEqual(isEmpty(Foo.prototype), true);
		Foo.prototype.a = 1;
		assert.strictEqual(isEmpty(Foo.prototype), false);
	});

	it('не следует рассматривать объекты с отрицательной длиной как массивы', function() {
		function Foo() {}
		Foo.prototype.length = -1;

		assert.strictEqual(isEmpty(new Foo), true);
	});

	it('не следует рассматривать объекты с нечисловой длиной как массивы', function() {
		assert.strictEqual(isEmpty({ 'length': '0' }), false);
	});

	it('не следует рассматривать объекты с длиной больше `MAX_SAFE_INTEGER` как подобные массиву', function() {
		function Foo() {}
		Foo.prototype.length = Number.MAX_SAFE_INTEGER + 1;

		assert.strictEqual(isEmpty(new Foo), true);
	});
});
