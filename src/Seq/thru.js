const und = require('underscore');
const lod = require('lodash');

/**
 * thru — Этот метод подобен _.tap, за исключением того, что он возвращает результат перехватчика.
 */

// lodash
var thru = lod('  abc  ')
  .chain()
  .trim()
  .thru(function(value) {
   return [value];
  })
  .value();
console.log("thru", thru);

// es6
console.log("['  abc  '.trim()]", ['  abc  '.trim()]);

class Thru {
  #str = null;
  constructor(str) {
    this.#str = str;
  }
  trim() {
    this.#str = this.#str.trim();
    return this;
  }
  thru(callback) {
    this.#str = callback(this.#str);
    return this;
  }
  value() {
    return this.#str;
  }
}

var thru2 = new Thru('  abc  ')
  .trim()
  .thru(function(value) {
   return [value];
  })
  .value();
console.log("thru2", thru2);