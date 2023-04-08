const und = require('underscore');
const lod = require('lodash');

/**
 * find - Перебирает элементы коллекции, возвращая первый элемент, предикат возвращает истину для.
 */

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

// underscore
console.log(
  "und.find(users, function(o) { return o.age < 40; })\n",
  und.find(users, function(o) { return o.age < 40; })
);
console.log(
  "und.find(users, { 'age': 1, 'active': true })\n",
  und.find(users, { 'age': 1, 'active': true })
);
console.log(
  "und.find(users, {'active': false})\n",
  und.find(users, {'active': false})
);
console.log(
  "und.find(users, 'active')\n",
  und.find(users, 'active')
);

console.log('-----------------------------------------------------');

// lodash
console.log(
  "lod.find(users, function(o) { return o.age < 40; })\n",
  lod.find(users, function(o) { return o.age < 40; })
);
console.log(
  "lod.find(users, { 'age': 1, 'active': true })\n",
  lod.find(users, { 'age': 1, 'active': true })
);
console.log(
  "lod.find(users, ['active', false])\n",
  lod.find(users, ['active', false])
);
console.log(
  "lod.find(users, 'active')\n",
  lod.find(users, 'active')
);

console.log('-----------------------------------------------------');

// es6
console.log(
  "users.find(el => el.age < 40)\n",
   users.find(el => el.age < 40)
);
console.log(
  "users.find(el => el.age == 1 && el.active === true)\n",
  users.find(el => el.age == 1 && el.active === true)
);
console.log(
  "users.find(el => el.active === false)\n",
  users.find(el => el.active === false)
);
console.log(
  "users.find(el => el.active)\n",
  users.find(el => el.active)
);