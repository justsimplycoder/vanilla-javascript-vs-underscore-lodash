const und = require('underscore');
const lod = require('lodash');

/**
 * size - Получает размер коллекции, возвращая ее длину для значений, подобных массиву, или количество собственных перечисляемых строковых свойств с ключом для объектов.
 */


// lodash
console.log("lod.size([1, 2, 3])", lod.size([1, 2, 3]));
console.log("lod.size({ 'a': 1, 'b': 2 })", lod.size({ 'a': 1, 'b': 2 }));
console.log("lod.size('pebbles')", lod.size('pebbles'));

// es6
console.log("[1, 2, 3].length", [1, 2, 3].length);
console.log("Object.keys({'a':1, 'b':2}).length", Object.keys({'a':1, 'b':2}).length);
console.log("'pabbles'.length", 'pabbles'.length);