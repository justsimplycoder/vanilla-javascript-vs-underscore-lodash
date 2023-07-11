const und = require('underscore');
const lod = require('lodash');

/**
 * isUndefined - проверяет является ли выражение undefined
 */

// underscore
console.log("und.isUndefined(void 0)", und.isUndefined(void 0));
console.log("und.isUndefined(null)", und.isUndefined(null));

// lodash
console.log("lod.isUndefined(void 0)", lod.isUndefined(void 0));
console.log("lod.isUndefined(null)", lod.isUndefined(null));

// es6
function isUndefined(value) {
  if(value === undefined) return true;
  return false
}

console.log("isUndefined(void 0)", isUndefined(void 0));
console.log("isUndefined(null)", isUndefined(null));
