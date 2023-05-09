const und = require('underscore');
const lod = require('lodash');

/**
 * invoke - Вызывает метод по пути объекта.
 */

var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

// lodash
console.log("lod.invoke(object, 'a[0].b.c.slice', 1, 3)", lod.invoke(object, 'a[0].b.c.slice', 1, 3));

// es6
console.log("object.a[0].b.c.slice(1, 3)", object.a[0].b.c.slice(1, 3));

function invoke(obj, pathAndMethod, ...args) {
  let pam = pathAndMethod.replace(']', '').split(/\.|\[/);
  let o = obj;
  pam.slice(0, -1).forEach(pop => {
    o = o[pop];
  });
  const funcName = pam[pam.length - 1];
  return o[funcName](...args);
}

console.log("invoke(object, 'a[0].b.c.slice', 1, 3)", invoke(object, 'a[0].b.c.slice', 1, 3));
