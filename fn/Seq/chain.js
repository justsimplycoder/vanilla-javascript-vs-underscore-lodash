const und = require('underscore');
const lod = require('lodash');

/**
 * chain - позволяет создавать цепочки вызовов
 */

const users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

// lodash
const youngest = lod
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();
console.log("youngest", youngest);
// => pebbles is 1

// es6
// Вариант 1
const youngest2 = users.sort((a, b) => a.age - b.age).map(el => el.user + ' is ' + el.age)[0];
console.log("youngest2", youngest2);
// => pebbles is 1

// Вариант 2
class Chain {
  #arr = null;

  constructor(arr) {
    this.#arr = JSON.parse(JSON.stringify(arr));
  }

  sortBy(prop) {
    this.#arr = this.#arr.sort((a, b) => a[prop] - b[prop]);
    return this;
  }

  map(callback) {
    this.#arr = this.#arr.map(callback);
    return this;
  }

  head() {
    this.#arr = this.#arr.slice(0, 1);
    return this;
  }

  value() {
    return this.#arr.length === 1 ? this.#arr[0] : this.#arr;
  }
}

const youngest3 = new Chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();

console.log("youngest3", youngest3);
// => pebbles is 1
