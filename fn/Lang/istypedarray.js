const und = require('underscore');
const lod = require('lodash');

/**
 * isTypedArray - Проверяет, классифицируется ли значение как типизированный массив.
 */

// lodash
console.log("lod.isTypedArray(new Int8Array)", lod.isTypedArray(new Int8Array));
console.log("lod.isTypedArray(new Uint8Array)", lod.isTypedArray(new Uint8Array));
console.log("lod.isTypedArray(new Uint8ClampedArray)", lod.isTypedArray(new Uint8ClampedArray));
console.log("lod.isTypedArray(new Int16Array)", lod.isTypedArray(new Int16Array));
console.log("lod.isTypedArray(new Uint16Array)", lod.isTypedArray(new Uint16Array));
console.log("lod.isTypedArray(new Int32Array)", lod.isTypedArray(new Int32Array));
console.log("lod.isTypedArray(new Uint32Array)", lod.isTypedArray(new Uint32Array));
console.log("lod.isTypedArray(new Float32Array)", lod.isTypedArray(new Float32Array));
console.log("lod.isTypedArray(new Float64Array)", lod.isTypedArray(new Float64Array));
console.log("lod.isTypedArray([])", lod.isTypedArray([]));

// es6
console.log("ArrayBuffer.isView(new Int8Array)", ArrayBuffer.isView(new Int8Array));
console.log("ArrayBuffer.isView(new Uint8Array)", ArrayBuffer.isView(new Uint8Array));
console.log("ArrayBuffer.isView(new Uint8ClampedArray)", ArrayBuffer.isView(new Uint8ClampedArray));
console.log("ArrayBuffer.isView(new Int16Array)", ArrayBuffer.isView(new Int16Array));
console.log("ArrayBuffer.isView(new Uint16Array)", ArrayBuffer.isView(new Uint16Array));
console.log("ArrayBuffer.isView(new Int32Array)", ArrayBuffer.isView(new Int32Array));
console.log("ArrayBuffer.isView(new Uint32Array)", ArrayBuffer.isView(new Uint32Array));
console.log("ArrayBuffer.isView(new Float32Array)", ArrayBuffer.isView(new Float32Array));
console.log("ArrayBuffer.isView(new Float64Array)", ArrayBuffer.isView(new Float64Array));
console.log("ArrayBuffer.isView([])", ArrayBuffer.isView([]));