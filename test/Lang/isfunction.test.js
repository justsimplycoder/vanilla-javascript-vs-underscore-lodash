import isFunction from '../../src/Lang/isFunction.js'
import lod_isFunction from '../../node_modules/lodash-es/isFunction.js';
const lod = {};
lod.isFunction = lod_isFunction;
import und_isFunction from '../../node_modules/underscore/modules/isFunction.js';
const und = {};
und.isFunction = und_isFunction;

// Примеры использования
console.log('---------------underscore---------------');
console.log("_.isFunction(/abc/)", und.isFunction(/abc/));
console.log("_.isFunction(String)", und.isFunction(String));

console.log('-----------------lodash-----------------');
console.log("_.isFunction(/abc/)", lod.isFunction(/abc/));
console.log("_.isFunction(String)", lod.isFunction(String));

console.log('-------------------ES-------------------');
console.log("isFunction(/abc/)", isFunction(/abc/));
console.log("isFunction(String)", isFunction(String));

// Тесты
let assert = chai.assert;

describe('isFunction', function() {
	it('должен возвращать `true` для функций', function() {
		assert.strictEqual(isFunction(Array.prototype.slice), true);
		assert.strictEqual(isFunction(() => {}), true);
	});

	it('должен возвращать `true` для асинхронных функций', function() {
		assert.strictEqual(isFunction(async () => {}), true);
	});

	it('должен возвращать `true` для функций генератора', function() {
		assert.strictEqual(isFunction(function* g() {}), true);
	});

	it('должен возвращать `true` для конструктора `Proxy`', function() {
		assert.strictEqual(isFunction(Proxy), true);
	});

	it('должен возвращать `false` для не-функций', function() {
		assert.strictEqual(isFunction([1, 2, 3]), false);
		assert.strictEqual(isFunction(true), false);
		assert.strictEqual(isFunction(new Date), false);
		assert.strictEqual(isFunction(new Error), false);
		assert.strictEqual(isFunction({ 'a': 1 }), false);
		assert.strictEqual(isFunction(1), false);
		assert.strictEqual(isFunction(/x/), false);
		assert.strictEqual(isFunction('a'), false);
		let symbol = Symbol();
		assert.strictEqual(isFunction(symbol), false);
	});
});

mocha.run();
