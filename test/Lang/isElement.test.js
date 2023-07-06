import isElement from '../../src/Lang/isElement.js'
import lod_isElement from '../../node_modules/lodash-es/isElement.js';
const lod = {};
lod.isElement = lod_isElement;
import und_isElement from '../../node_modules/underscore/modules/isElement.js';
const und = {};
und.isElement = und_isElement;

// Примеры использования
console.log('---------------underscore---------------');
console.log("und.isElement(document.body)", und.isElement(document.body));
console.log("und.isElement('<body>')", und.isElement('<body>'));

console.log('-----------------lodash-----------------');
console.log("lod.isElement(document.body)", lod.isElement(document.body));
console.log("lod.isElement('<body>')", lod.isElement('<body>'));

console.log('-------------------ES-------------------');
console.log("isElement(document.body)", isElement(document.body));
console.log("isElement('<body>')", isElement('<body>'));

// Тесты
let assert = chai.assert;

describe('isElement', function() {
	it('должен возвращать `true` для элементов', function() {
		if (document) {
			assert.strictEqual(isElement(document.body), true);
		}
	});

	it('должно возвращать `true` для непростых объектов', function () {
		function Foo() {
			this.nodeType = 1;
		}

		assert.strictEqual(isElement(new Foo), true);
	});

	it('должен возвращать `false` для элементов, отличных от DOM', function() {
		assert.strictEqual(isElement([1, 2, 3]), false);
		assert.strictEqual(isElement(true), false);
		assert.strictEqual(isElement(new Date), false);
		assert.strictEqual(isElement(new Error), false);
		assert.strictEqual(isElement({ 'a': 1 }), false);
		assert.strictEqual(isElement(1), false);
		assert.strictEqual(isElement(/x/), false);
		assert.strictEqual(isElement('a'), false);
		assert.strictEqual(isElement(() => {}), false);
		assert.strictEqual(isElement(null), false);
	});

	it('должен возвращать `false` для простых объектов', function() {
		assert.strictEqual(isElement({ 'nodeType': 1 }), false);
		assert.strictEqual(isElement({ 'nodeType': Object(1) }), false);
		assert.strictEqual(isElement({ 'nodeType': true }), false);
		assert.strictEqual(isElement({ 'nodeType': [1] }), false);
		assert.strictEqual(isElement({ 'nodeType': '1' }), false);
		assert.strictEqual(isElement({ 'nodeType': '001' }), false);
	});
});

mocha.run();