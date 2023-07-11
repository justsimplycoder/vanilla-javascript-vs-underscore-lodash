const und = require('underscore');
const lod = require('lodash');

/**
 * reject - Противоположность _.filter; этот метод возвращает элементы коллекции, для которых предикат не возвращает истину.
 */

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

// lodash
console.log(
  "lod.reject(users, o => !o.active)\n",
  lod.reject(users, o => !o.active)
);
console.log(
  "lod.reject(users, { 'age': 40, 'active': true })\n",
  lod.reject(users, { 'age': 40, 'active': true })
);
console.log(
  "lod.reject(users, ['active', false])\n",
  lod.reject(users, ['active', false])
);
console.log(
  "lod.reject(users, 'active')\n",
  lod.reject(users, 'active')
);

console.log('-------------------------------------------------');

// es6
console.log(
  "users.filter(o => o.active)\n",
  users.filter(o => o.active)
);
console.log(
  "users.filter(o => o.age != 40 && o.active !== true)\n",
  users.filter(o => o.age != 40 && o.active !== true)
);
console.log(
  "users.filter(o => o.active !== false)\n",
  users.filter(o => o.active !== false)
);
console.log(
  "users.filter(o => !o.active)\n",
  users.filter(o => !o.active)
);