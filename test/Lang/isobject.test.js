import isObject from '../../src/Lang/isObject.js'
import lod_isObject from '../../node_modules/lodash-es/isObject.js';
const lod = {};
lod.isObject = lod_isObject;
import und_isObject from '../../node_modules/underscore/modules/isObject.js';
const und = {};
und.isObject = und_isObject;

// Примеры использования
console.log('---------------underscore---------------');
console.log("und.isObject({})", und.isObject({}));
console.log("und.isObject(() => {})", und.isObject(() => {}));
console.log("und.isObject([1, 2, 3])", und.isObject([1, 2, 3]));
console.log("und.isObject(new Number(0))", und.isObject(new Number(0)));
console.log("und.isObject(new String(''))", und.isObject(new String('')));
console.log("und.isObject(/\w/)", und.isObject(/\w/));
console.log("und.isObject(null)", und.isObject(null));
console.log("und.isObject(undefined)", und.isObject(undefined));

console.log('-----------------lodash-----------------');
console.log("lod.isObject({})", lod.isObject({}));
console.log("lod.isObject(() => {})", lod.isObject(() => {}));
console.log("lod.isObject([1, 2, 3])", lod.isObject([1, 2, 3]));
console.log("lod.isObject(new Number(0))", lod.isObject(new Number(0)));
console.log("lod.isObject(new String(''))", lod.isObject(new String('')));
console.log("lod.isObject(/\w/)", lod.isObject(/\w/));
console.log("lod.isObject(null)", lod.isObject(null));
console.log("lod.isObject(undefined)", lod.isObject(undefined));

console.log('-------------------ES-------------------');
console.log("isObject({})", isObject({}));
console.log("isObject(() => {})", isObject(() => {}));
console.log("isObject([1, 2, 3])", isObject([1, 2, 3]));
console.log("isObject(new Number(0))", isObject(new Number(0)));
console.log("isObject(new String(''))", isObject(new String('')));
console.log("isObject(/\w/)", isObject(/\w/));
console.log("isObject(null)", isObject(null));
console.log("isObject(undefined)", isObject(undefined));

// Тесты
let assert = chai.assert;

describe('isObject', function() {
	it('должен возвращать `true` для объектов', function() {
		(function() {
			assert.strictEqual(isObject(arguments), true);
		})();
		assert.strictEqual(isObject([1, 2, 3]), true);
		assert.strictEqual(isObject(Object(false)), true);
		assert.strictEqual(isObject(new Date), true);
		assert.strictEqual(isObject(new Error), true);
		assert.strictEqual(isObject({ 'a': 1 }), true);
		assert.strictEqual(isObject(Object(0)), true);
		assert.strictEqual(isObject(/x/), true);
		assert.strictEqual(isObject(Object('a')), true);

		if (document) {
			assert.strictEqual(isObject(document.body), true);
		}
	});

	it('должен возвращать `false` для не-объектов', function() {
		assert.strictEqual(isObject(1), false);
		assert.strictEqual(isObject(true), false);
		assert.strictEqual(isObject('abc'), false);
		assert.strictEqual(isObject(null), false);
		assert.strictEqual(isObject(undefined), false);
		assert.strictEqual(isObject(Symbol('x')), false);
		assert.strictEqual(isObject(() => {}), false);
	});
});

mocha.run();
