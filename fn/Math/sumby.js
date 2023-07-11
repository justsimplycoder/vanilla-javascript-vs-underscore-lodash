const und = require('underscore');
const lod = require('lodash');

/**
 * sumBy - сумма всех элементов массива состоящего из объектов
 */

const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

// lodash
console.log("lod.sumBy(objects, function(o) { return o.n; })", lod.sumBy(objects, function(o) { return o.n; }));
console.log("lod.sumBy(objects, 'n')", lod.sumBy(objects, 'n'));

// es6
console.log("objects.reduce((sum, current) => sum + current.n, 0)", objects.reduce((sum, current) => sum + current.n, 0));
