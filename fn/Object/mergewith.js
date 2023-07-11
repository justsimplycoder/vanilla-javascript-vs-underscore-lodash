const und = require('underscore');
const lod = require('lodash');

/**
 * mergeWith — Этот метод похож на _.merge, за исключением того, что он принимает настройщик, который вызывается для создания объединенных значений свойств назначения и источника.
 */

var other = {
  'amit': [{ 'chinmoy': 30 }, { 'kripamoy': 50 }]
};

// lodash
var object = {
  'amit': [{ 'susanta': 20 }, { 'durgam': 40 }]
};

console.log("lod.mergeWith(object, other)", lod.mergeWith(object, other));

function customizer(obj, src) {
  if (lod.isArray(obj)) {
    return obj.concat(src);
  }
}

var object1 = {
  'amit': [{ 'susanta': 20 }, { 'durgam': 40 }]
};

console.log("lod.mergeWith(object1, other, customizer)", lod.mergeWith(object1, other, customizer));

// es6
var object2 = {
  'amit': [{ 'susanta': 20 }, { 'durgam': 40 }]
};

object2.amit.map((el, i) => Object.assign(el, other.amit[i]));
console.log(object2);

var object3 = {
  'amit': [{ 'susanta': 20 }, { 'durgam': 40 }]
};

object3.amit = object3.amit.concat(other.amit);
console.log("object3", object3);
