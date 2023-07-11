const und = require('underscore');
const lod = require('lodash');

/**
 * clone - Клонирование объектов, все вложенные объекты или массивы будут скопированы "по ссылке"
 */

const objects = [{ 'a': 1 }, { 'b': 2 }];

// underscore
const clone = und.clone(objects);
console.log('clone === objects', clone === objects);
console.log('clone[0] === objects[0]', clone[0] === objects[0]);

// lodash
const deep = lod.clone(objects);
console.log('deep === objects', deep === objects);
console.log('deep[0] === objects[0]', deep[0] === objects[0]);

// es6
const newObjects = [...objects];
console.log("newObjects === objects", newObjects === objects);
console.log("newObjects[0] === objects[0]", newObjects[0] === objects[0]);

const newObjects2 = Object.assign([], objects);
console.log("newObjects2 === objects", newObjects2 === objects);
console.log("newObjects2[0] === objects[0]", newObjects2[0] === objects[0]);