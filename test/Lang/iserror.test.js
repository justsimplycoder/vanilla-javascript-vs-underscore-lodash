import isError from '../../src/Lang/isError.js'
import lod_isError from '../../node_modules/lodash-es/isError.js';
const lod = {};
lod.isError = lod_isError;
import und_isError from '../../node_modules/underscore/modules/isError.js';
const und = {};
und.isError = und_isError;

// Примеры использования
console.log('---------------underscore---------------');
console.log("und.isError(new Error)", und.isError(new Error));
console.log("und.isError(Error)", und.isError(Error));
console.log("und.isError(new EvalError)", und.isError(new EvalError));

console.log('-----------------lodash-----------------');
console.log("lod.isError(new Error)", lod.isError(new Error));
console.log("lod.isError(Error)", lod.isError(Error));
console.log("lod.isError(new EvalError)", lod.isError(new EvalError));

console.log('-------------------ES-------------------');
console.log("isError(new Error)", isError(new Error));
console.log("isError(Error)", isError(Error));
console.log("isError(new EvalError)", isError(new EvalError));

// Тесты
let assert = chai.assert;

describe('isError', function() {
	it('должен возвращать `true` для объектов ошибок', function() {
		assert.strictEqual(lod.isError(new Error), true);
		assert.strictEqual(lod.isError(new EvalError), true);
		assert.strictEqual(lod.isError(new RangeError), true);
		assert.strictEqual(lod.isError(new ReferenceError), true);
		assert.strictEqual(lod.isError(new SyntaxError), true);
		assert.strictEqual(lod.isError(new TypeError), true);
		assert.strictEqual(lod.isError(new URIError), true);
	});

	it('должен возвращать `true` для значений подкласса', function() {
		class CustomError extends Error {
			constructor(message) {
				super(message);
				this.name = "CustomError";
			}
		}

		assert.strictEqual(isError(new CustomError('Упс!')), true);
	});

	it('должен возвращать `false` для объектов без ошибок', function() {
		assert.strictEqual(isError({}), false);
		assert.strictEqual(isError(new Set([1, 2, 3])), false);
		assert.strictEqual(isError(true), false);
		assert.strictEqual(isError(new Date), false);
		assert.strictEqual(isError({ '0': 1, 'length': 1 }), false);
		assert.strictEqual(isError(1), false);
		assert.strictEqual(isError(/x/), false);
		assert.strictEqual(isError('a'), false);
		assert.strictEqual(isError(Symbol('x')), false);
	});
});

mocha.run();
