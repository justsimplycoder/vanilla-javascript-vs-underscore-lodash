const und = require('underscore');
const lod = require('lodash');

/**
 * dropRightWhile - Создает срез массива, исключая элементы, удаленные с конца.
 */

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

// lodash
console.log("lod.dropRightWhile(users, function(o) { return !o.active; })", lod.dropRightWhile(users, function(o) { return !o.active; }));
// => [ { user: 'barney', active: true } ]
console.log("lod.dropRightWhile(users, { 'user': 'pebbles', 'active': false })", lod.dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
// => [ { user: 'barney', active: true }, { user: 'fred', active: false } ]
console.log("lod.dropRightWhile(users, ['active', false])", lod.dropRightWhile(users, ['active', false]));
// => [ { user: 'barney', active: true } ]
console.log("lod.dropRightWhile(users, 'active')", lod.dropRightWhile(users, 'active'));
// => [
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: false }
// ]

// es6
function equalObject(...objects) {
  var arrEqual = objects.map(function (elem) {
    return Object.entries(elem).sort(function(a, b) {
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
      return 0;
    });
  });
  return JSON.stringify(arrEqual[0]) == JSON.stringify(arrEqual[1]);
}

function dropRightWhile(arr, condition) {
  const arrLocal = [...arr];
  if(typeof condition === 'function') {
    return arrLocal.reverse().filter(condition);
  } else if (Array.isArray(condition)) {
    return arrLocal.reverse().filter(el => el[condition[0]] !== condition[1]);
  } else if (typeof condition === 'object' && condition !== null){
    return arrLocal.reverse().filter(el => !equalObject(el, condition));
  } else if (typeof condition === 'string') {
    console.log('sdf');
    return arrLocal.filter(el => condition in el)
  } else {
    return arrLocal;
  }
}

console.log("dropRightWhile(users, function(o) { return !o.active; })", dropRightWhile(users, function(o) { return o.active; }));
// => [ { user: 'barney', active: true } ]
console.log("dropRightWhile(users, { 'user': 'pebbles', 'active': false })", dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
// => [ { user: 'barney', active: true }, { user: 'fred', active: false } ]
console.log("dropRightWhile(users, ['active', false])", dropRightWhile(users, ['active', false]));
// => [ { user: 'barney', active: true } ]
console.log("dropRightWhile(users, 'active')", dropRightWhile(users, 'active'));
// => [
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: false }
// ]