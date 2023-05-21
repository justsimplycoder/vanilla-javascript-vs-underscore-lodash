/**
 * Запуск на сервере, так как в браузере нет объекта Buffer
 */
import chai from 'chai';
import isBuffer from '../../src/Lang/isBuffer.js'
import lod_isBuffer from '../../node_modules/lodash-es/isBuffer.js';
const lod = {};
lod.isBuffer = lod_isBuffer;
import _ from 'lodash';

// Примеры использования
console.log('-----------------lodash-----------------');
/*
lodash-es модуль isBuffer всегда возвращает false
возможно ошибка!!!
 */
console.log("lod.isBuffer(new Buffer(2))", lod.isBuffer(new Buffer(2))); // false
console.log("lod.isBuffer(Buffer.alloc(2))", lod.isBuffer(Buffer.alloc(2))); // false
console.log("lod.isBuffer(new Uint8Array(2))", lod.isBuffer(new Uint8Array(2))); // false

console.log("_.isBuffer(new Buffer(2))", _.isBuffer(new Buffer(2)));
console.log("_.isBuffer(Buffer.alloc(2))", _.isBuffer(Buffer.alloc(2)));
console.log("_.isBuffer(new Uint8Array(2))", _.isBuffer(new Uint8Array(2)));

console.log('-------------------ES-------------------');
console.log("isBuffer(new Buffer(2))", isBuffer(new Buffer(2)));
console.log("isBuffer(new Buffer(2))", isBuffer(Buffer.alloc(2)));
console.log("isBuffer(new Uint8Array(2))", isBuffer(new Uint8Array(2)));

// Тесты
let assert = chai.assert;

describe('isBuffer', function() {
	it('должен возвращать `true` для Buffer', function() {
		assert.strictEqual(isBuffer(new Buffer(2)), true);
	});

	it('должен возвращать `false` для Buffer', function() {
		assert.strictEqual(isBuffer({}), false);
		assert.strictEqual(isBuffer([1, 2, 3]), false);
		assert.strictEqual(isBuffer(new Uint8Array(2)), false);
		assert.strictEqual(isBuffer(new Set([1, 2, 3])), false);
		assert.strictEqual(isBuffer(true), false);
		assert.strictEqual(isBuffer(new Date), false);
		assert.strictEqual(isBuffer(new Error), false);
		assert.strictEqual(isBuffer({ '0': 1, 'length': 1 }), false);
		assert.strictEqual(isBuffer(1), false);
		assert.strictEqual(isBuffer(/x/), false);
		assert.strictEqual(isBuffer('a'), false);
		assert.strictEqual(isBuffer(Symbol('x')), false);
	});
});

