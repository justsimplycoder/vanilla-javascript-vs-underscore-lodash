const und = require('underscore');
const lod = require('lodash');

/**
 * invokeMap - Вызывает метод по пути каждого элемента в коллекции, возвращая массив результатов каждого вызванного метода.
 */

// lodash
console.log("lod.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')", lod.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'));
console.log("lod.invokeMap([123, 456], String.prototype.split, '')", lod.invokeMap([123, 456], String.prototype.split, ''));

// es6
console.log("[[5, 1, 7], [3, 2, 1]].map(el => el.sort())", [[5, 1, 7], [3, 2, 1]].map(el => el.sort()));
console.log("[123, 456].map(el => new String(el).split(''))", [123, 456].map(el => new String(el).split('')));