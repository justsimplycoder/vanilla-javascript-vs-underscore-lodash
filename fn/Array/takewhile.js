const und = require('underscore');
const lod = require('lodash');

/**
 * takeWhile - Создает срез массива с элементами, взятыми с самого начала. Элементы берутся до тех пор, пока предикат не вернет false.
 */

var users = [
	{ 'user': 'barney',  'active': false },
	{ 'user': 'fred',    'active': false },
	{ 'user': 'pebbles', 'active': true }
];

// lodash
console.log(
  "lod.takeWhile(users, function(o) { return !o.active; })\n",
  lod.takeWhile(users, function(o) { return !o.active; })
);
console.log(
  "lod.takeWhile(users, { 'user': 'barney', 'active': false })\n",
  lod.takeWhile(users, { 'user': 'barney', 'active': false })
);
console.log(
  "lod.takeWhile(users, ['active', false])\n",
  lod.takeWhile(users, ['active', false])
);
console.log(
  "lod.takeWhile(users, 'active')\n",
  lod.takeWhile(users, 'active')
);

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

function takeWhile(arr, condition){
  const result = [];

  if(typeof condition === 'function') {
    for (let i = 0; i < arr.length; i++) {
      if(condition(arr[i])) {
        result.push(arr[i]);
      } else {
        break;
      }
    }
  } else if (Array.isArray(condition)) {
    for (let i = 0; i < arr.length; i++) {
      if(arr[i][condition[0]] === condition[1]) {
        result.push(arr[i]);
      } else {
        break;
      }
    }
  } else if (typeof condition === 'object' && condition !== null){
    for (let i = 0; i < arr.length; i++) {
      if(equalObject(arr[i], condition)) {
        result.push(arr[i]);
      } else {
        break;
      }
    }
  } else if (typeof condition === 'string') {
    for (let i = 0; i < arr.length; i++) {
      if(!(condition in arr[i])) {
        result.push(arr[i]);
      } else {
        break;
      }
    }
  }

  return result;
}

console.log(
  "takeWhile(users, function(o) { return !o.active; })\n",
  takeWhile(users, function(o) { return !o.active; })
);
console.log(
  "takeWhile(users, { 'user': 'barney', 'active': false })\n",
  takeWhile(users, { 'user': 'barney', 'active': false })
);
console.log(
  "takeWhile(users, ['active', false])\n",
  takeWhile(users, ['active', false])
);
console.log(
  "takeWhile(users, 'active')\n",
  takeWhile(users, 'active')
);
