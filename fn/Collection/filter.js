const und = require('underscore');
const lod = require('lodash');

/**
 * fitler - Перебирает элементы коллекции, возвращая массив всех элементов, которые предикат возвращает истинно для.
 */

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

// underscore
console.log(
  "und.filter(users, function(o) {return !o.active})\n",
  und.filter(users, function(o) {return !o.active})
);
console.log(
  "und.filter(users, { 'age': 36, 'active': true })\n",
  und.filter(users, { 'age': 36, 'active': true })
);
console.log(
  "und.filter(users, {'active': false})\n",
  und.filter(users, {'active': false})
);
console.log(
  "und.filter(users, 'active')\n",
  und.filter(users, 'active')
);

console.log('-----------------------------------------------------');

// lodash
console.log(
  "lod.filter(users, function(o) {return !o.active})\n",
  lod.filter(users, function(o) {return !o.active})
);
console.log(
  "lod.filter(users, { 'age': 36, 'active': true })\n",
  lod.filter(users, { 'age': 36, 'active': true })
);
console.log(
  "lod.filter(users, ['active', false])\n",
  lod.filter(users, ['active', false])
);
console.log(
  "lod.filter(users, 'active')\n",
  lod.filter(users, 'active')
);

console.log('-----------------------------------------------------');

// es6
console.log(
  "users.filter(el => !el.active)\n",
  users.filter(el => !el.active)
);
console.log(
  "users.filter(el => el['age'] == 36 && el['active'] === true)\n",
  users.filter(el => el['age'] == 36 && el['active'] === true)
);
console.log(
  "users.filter(el => el['active'] === false)\n",
  users.filter(el => el['active'] === false)
);
console.log(
  "users.filter(el => el['active'])\n",
  users.filter(el => el['active'])
);
