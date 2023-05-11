const listFunction = [
{
  "key": 0,
  "title": "Array",
  "visible": true,
  "content": [
    {
      "key": "0:0",
      "name": "chunk",
      "description": "Создает массив элементов, разбитых на группы по размеру длины. Если массив не может быть разделен равномерно, последним фрагментом будут оставшиеся элементы.",
      "lodash": `
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
      `,
      "underscore": `
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
      `,
      "vanillaJavaScript": `
function chunk(arr, sizeChunk = 1) {
  const result = [[]];
  let index = 0;
  let size = sizeChunk;
  arr.forEach(el => {
    if(size <= 0) {
      size = sizeChunk;
      index++;
      result[index] = [];
    }
    result[index].push(el);
    size--;
  });
  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
      `
    },
    {
      "key": "0:1",
      "name": "compact",
      "description": "Создает массив, в котором удалены все ложные значения. Значения false, null, 0, '', undefined и NaN являются ложными.",
      "lodash": `
_.compact([0, 1, false, 2, '', undefined, null, NaN]);
// => [ 1, 2 ]
      `,
      "underscore": `
_.compact([0, 1, false, 2, '', undefined, null, NaN]);
// => [ 1, 2 ]
      `,
      "vanillaJavaScript": `
function compact(arr) {
  return arr.filter(elem => Boolean(elem) != false);
}
compact([0, 1, false, 2, '', undefined, null, NaN]);
// => [ 1, 2 ]
      `
    },
    {
      "key": "0:2",
      "name": "concat",
      "description": "Создает новый массив, объединяющий массив с любыми дополнительными массивами и/или значениями.",
      "lodash": `
const arr = [1];
_.concat(arr, 2, [3], [[4]]);
// => [ 1, 2, 3, [ 4 ]]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const arr = [1];
[...arr, 2, ...[3], ...[[4]]];
// => [ 1, 2, 3, [ 4 ]]
arr.concat(2, [3], [[4]]);
// => [ 1, 2, 3, [ 4 ]]
      `
    },
    {
      "key": "0:3",
      "name": "difference",
      "description": "Создает массив значений массива, не включенных в другие заданные массивы, используя SameValueZero для сравнения на равенство. Порядок и ссылки значений результата определяются первым массивом.",
      "lodash": `
_.difference([2, 1, 4], [2, 3, 5])
// => [ 1, 4 ]
      `,
      "underscore": `
_.difference([2, 1, 4], [2, 3, 5])
// => [ 1, 4 ]
      `,
      "vanillaJavaScript": `
function difference(arr, value) {
  return arr.filter(function(elem) {
    return value.indexOf(elem) == -1;
  });
}
difference([2, 1, 4], [2, 3, 5])
// => [ 1, 4 ]
      `
    },
    {
      "key": "0:4",
      "name": "differenceBy",
      "description": "Этот метод подобен _.difference, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента массива и значений для создания критерия, по которому они сравниваются.",
      "lodash": `
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [ 1.2 ]
_.differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x');
// => [ { x: 2 } ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function differenceBy(arr, value, comprator) {
  return arr.filter(function(elem) {
    return !value.find(function(item) {
      if(typeof comprator === 'function') {
        return comprator(item) === comprator(elem);
      } if (typeof comprator === 'string') {
        return item[comprator] === elem[comprator];
      } else {
        return false;
      }
    });
  });
}

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [ 1.2 ]
differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x');
// => [ { x: 2 } ]
      `
    },
    {
      "key": "0:5",
      "name": "differenceWith",
      "description": "Этот метод подобен _.difference, за исключением того, что он принимает компаратор, который вызывается для сравнения элементов массива со значениями.",
      "lodash": `
const arr1 = [{'x':1, 'y':2}, {'x':2, 'y':1}];
const arr2 = [{'x':1, 'y':2}];
_.differenceWith(arr1, arr2, _.isEqual)
// => [{ 'x': 2, 'y': 1 }]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
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

function differenceWith(obj1, obj2, callback) {
  var arr = [];

  for(let elem of obj2) {
    let isEqualObject = false;
    for(let item of obj1) {
      if(!callback(elem, item)) {
        arr.push(item);
      }
    }
  }

  return arr;
}

const arr1 = [{'x':1, 'y':2}, {'x':2, 'y':1}];
const arr2 = [{'x':1, 'y':2}];
differenceWith(arr1, arr2, equalObject);
// => [{ 'x': 2, 'y': 1 }]
      `
    },
    {
      "key": "0:6",
      "name": "drop",
      "description": "Создает срез массива с n элементами, отброшенными с самого начала.",
      "lodash": `
_.drop(arr);
// => [ 4, 3, 2, 1 ]
_.drop(arr, 2);
// => [ 3, 2, 1 ]
_.drop(arr, 5);
// => []
_.drop(arr, 0);
// => [ 5, 4, 3, 2, 1 ]
      `,
      "underscore": `
_.drop(arr);
// => [ 4, 3, 2, 1 ]
_.drop(arr, 2);
// => [ 3, 2, 1 ]
_.drop(arr, 5);
// => []
_.drop(arr, 0);
// => [ 5, 4, 3, 2, 1 ]

// alias
_.rest(arr);
// => [ 4, 3, 2, 1 ]
_.tail(arr);
// => [ 4, 3, 2, 1 ]
      `,
      "vanillaJavaScript": `
arr.slice(1);
// => [ 4, 3, 2, 1 ]
arr.slice(2);
// => [ 3, 2, 1 ]
arr.slice(5);
// => []
arr.slice();
// => [ 5, 4, 3, 2, 1 ]
      `
    },
    {
      "key": "0:7",
      "name": "dropRight",
      "description": "Создает срез массива с n элементами, удаленными с конца.",
      "lodash": `
_.dropRight(arr);
// => [ 5, 4, 3, 2 ]
_.dropRight(arr, 2);
// => [ 5, 4, 3 ]
_.dropRight(arr, 6);
//  => []
_.dropRight(arr, 0);
// => [ 5, 4, 3, 2, 1 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
// es6
arr.slice(0, -1);
// => [ 5, 4, 3, 2 ]
arr.slice(0, -2);
// => [ 5, 4, 3 ]
arr.slice(0, -6);
//  => []
arr.slice();
// => [ 5, 4, 3, 2, 1 ]
      `
    },
    {
      "key": "0:8",
      "name": "dropRightWhile",
      "description": "Создает срез массива, исключая элементы, удаленные с конца.",
      "lodash": `
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

_.dropRightWhile(users, function(o) { return !o.active; });
// => [ { user: 'barney', active: true } ]
_.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => [ { user: 'barney', active: true }, { user: 'fred', active: false } ]
_.dropRightWhile(users, ['active', false]);
// => [ { user: 'barney', active: true } ]
_.dropRightWhile(users, 'active');
// => [
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: false }
// ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

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

dropRightWhile(users, function(o) { return o.active; });
// => [ { user: 'barney', active: true } ]
dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => [ { user: 'barney', active: true }, { user: 'fred', active: false } ]
dropRightWhile(users, ['active', false]);
// => [ { user: 'barney', active: true } ]
dropRightWhile(users, 'active');
// => [
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: false }
// ]
      `
    },
    {
      "key": "0:9",
      "name": "dropWhile",
      "description": "Создает срез массива, исключая элементы, отброшенные с самого начала.",
      "lodash": `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.dropWhile(users, function(o) { return !o.active; });
// => [ { user: 'pebbles', active: true } ]
_.dropWhile(users, { 'user': 'barney', 'active': false });
// => [ { user: 'fred', active: false }, { user: 'pebbles', active: true } ]
_.dropWhile(users, ['active', false]);
// => [ { user: 'pebbles', active: true } ]
_.dropWhile(users, 'active');
// => [
//   { user: 'barney', active: false },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: true }
// ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
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

function dropWhile(arr, condition) {
  if(typeof condition === 'function') {
    return arr.filter(condition);
  } else if (Array.isArray(condition)) {
    return arr.filter(el => el[condition[0]] !== condition[1]);
  } else if (typeof condition === 'object' && condition !== null){
    return arr.filter(el => !equalObject(el, condition));
  } else if (typeof condition === 'string') {
    return arr.filter(el => condition in el)
  } else {
    return arr;
  }
}

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

dropWhile(users, function(o) { return o.active; });
// => [ { user: 'pebbles', active: true } ]
dropWhile(users, { 'user': 'barney', 'active': false });
// => [ { user: 'fred', active: false }, { user: 'pebbles', active: true } ]
dropWhile(users, 'active');
// => [ { user: 'pebbles', active: true } ]
dropWhile(users, ['active', false]);
// => [
//   { user: 'barney', active: false },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: true }
// ]
      `
    },
    {
      "key": "0:10",
      "name": "fill",
      "description": "Заполняет элементы массива значением от начала до конца, но не включая его.",
      "lodash": `
_.fill([5, 4, 3, 2, 1], 'js');
// => [ 'js', 'js', 'js', 'js', 'js' ]
_.fill([5, 4, 3, 2, 1], 'js', 1, 3);
// => [ 5, 'js', 'js', 2, 1 ]
_.fill(Array(4), 'js');
// => [ 'js', 'js', 'js', 'js' ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[5, 4, 3, 2, 1].fill('js');
// => [ 'js', 'js', 'js', 'js', 'js' ]
[5, 4, 3, 2, 1].fill('js', 1, 3);
// => [ 5, 'js', 'js', 2, 1 ]
Array(4).fill('js');
// => [ 'js', 'js', 'js', 'js' ]

function fill(arr, value, start=0, end=undefined) {
  if (end === undefined) end = arr.length;
  for(let i = start;i < end;i++) {
    arr[i] = value;
  }
  return arr;
}

fill([5, 4, 3, 2, 1], 'js');
// => [ 'js', 'js', 'js', 'js', 'js' ]
fill([5, 4, 3, 2, 1], 'js', 1, 3);
// => [ 5, 'js', 'js', 2, 1 ]
fill(Array(4), 'js');
// => [ 'js', 'js', 'js', 'js' ]
      `
    },
    {
      "key": "0:11",
      "name": "findIndex",
      "description": "Этот метод подобен _.find, за исключением того, что он возвращает индекс первого элемента, предикат возвращает true вместо самого элемента.",
      "lodash": `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.findIndex(users, function(o) { return o.user == 'barney'; })
// => 0
_.findIndex(users, { 'user': 'fred', 'active': false })
// => 1
_.findIndex(users, ['active', false]);
// => 0
_.findIndex(users, 'active');
// => 2
      `,
      "underscore": `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.findIndex(users, function(o) { return o.user == 'barney'; })
// => 0
_.findIndex(users, { 'user': 'fred', 'active': false })
// => 1
_.findIndex(users, ['active', false]);
// => -1 (неправльно работает)
_.findIndex(users, 'active');
// => 2
      `,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

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

users.findIndex(o => o.user === 'barney')
// => 0
users.findIndex(o => equalObject(o, { 'user': 'fred', 'active': false }))
// => 1
users.findIndex(o => o.active === false)
// => 0
users.findIndex(o => Boolean(o.active) === true)
// => 2
      `
    },
    {
      "key": "0:12",
      "name": "findLastIndex",
      "description": "Этот метод похож на _.findIndex, за исключением того, что он перебирает элементы коллекции справа налево.",
      "lodash": `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.findLastIndex(users, function(o) { return o.user == 'barney'; });
// => 0
_.findLastIndex(users, { 'user': 'fred', 'active': false });
// => 1
_.findLastIndex(users, ['active', false]);
// => 1
_.findLastIndex(users, 'active');
// => 2
      `,
      "underscore": `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.findLastIndex(users, function(o) { return o.user == 'barney'; });
// => 0
_.findLastIndex(users, { 'user': 'fred', 'active': false });
// => 1
_.findLastIndex(users, ['active', false]);
// => -1 Неправильно выводит
_.findLastIndex(users, 'active');
// => 2
      `,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

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

users.findLastIndex(o => o.user === 'barney');
// => 0
users.findLastIndex(o => equalObject(o, { 'user': 'fred', 'active': false }));
// => 1
users.findLastIndex(o => o.active === false);
// => 1
users.findLastIndex(o => Boolean(o.active) === true);
// => 2
      `
    },
    {
      "key": "0:13",
      "name": "first",
      "description": "Получает первый элемент массива.",
      "lodash": `
const arr = [5, 4, 3, 2, 1];

_.first(arr);
// => 5
_.head(arr); // alias
// => 5
      `,
      "underscore": `
const arr = [5, 4, 3, 2, 1];

_.first(arr);
// => 5
_.first(arr, 2);
// => [ 5, 4 ]
_.head(arr); // alias
// => 5
_.take(arr); // alias
// => 5
      `,
      "vanillaJavaScript": `
const arr = [5, 4, 3, 2, 1];

arr[0];
// => 5
arr.slice(0, 2);
// => [ 5, 4 ]
      `
    },
    {
      "key": "0:14",
      "name": "flatten",
      "description": "Выравнивает массив на один уровень в глубину.",
      "lodash": `
const arr = [1, [2, [3, [4]], 5]];

_.flatten(arr);
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
      `,
      "underscore": `
const arr = [1, [2, [3, [4]], 5]];

_.flatten(arr, true);
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
      `,
      "vanillaJavaScript": `
const arr = [1, [2, [3, [4]], 5]];

arr.flat(1);
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
arr.flat();
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
      `
    },
    {
      "key": "0:15",
      "name": "flattenDeep",
      "description": "Рекурсивно сглаживает массив.",
      "lodash": `
const arr = [1, [2, [3, [4]], 5]];

_.flattenDeep(arr);
// => [ 1, 2, 3, 4, 5 ]
      `,
      "underscore": `
const arr = [1, [2, [3, [4]], 5]];

_.flatten(arr);
// => [ 1, 2, 3, 4, 5 ]
      `,
      "vanillaJavaScript": `
const arr = [1, [2, [3, [4]], 5]];

arr.flat(Infinity);
// => [ 1, 2, 3, 4, 5 ]
      `
    },
    {
      "key": "0:16",
      "name": "flattenDepth",
      "description": "Рекурсивно сгладить массив до установленного уровня.",
      "lodash": `
const arr = [1, [2, [3, [4]], 5]];

_.flattenDepth(arr);
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
_.flattenDepth(arr, 1);
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
_.flattenDepth(arr, 2);
// => [ 1, 2, 3, [ 4 ], 5 ]
      `,
      "underscore": `
const arr = [1, [2, [3, [4]], 5]];

_.flatten(arr, true);
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
_.flatten(arr, 1);
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
_.flatten(arr, 2);
// => [ 1, 2, 3, [ 4 ], 5 ]
      `,
      "vanillaJavaScript": `
const arr = [1, [2, [3, [4]], 5]];

arr.flat();
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
arr.flat(1);
// => [ 1, 2, [ 3, [ 4 ] ], 5 ]
arr.flat(2);
// => [ 1, 2, 3, [ 4 ], 5 ]
      `
    },
    {
      "key": "0:17",
      "name": "fromPairs",
      "description": "Возвращает объект, состоящий из пар ключ-значение",
      "lodash": `
_.fromPairs([['x', 1], ['y', 2]]);
// =>  { x: 1, y: 2 }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
Object.fromEntries([['x', 1], ['y', 2]]);
// =>  { x: 1, y: 2 }

function fromPairs(arr) {
  let obj = {};
  for(let el of arr){
    obj[el[0]] = el[1];
  }
  return obj;
}

fromPairs([['x', 1], ['y', 2]]);
// =>  { x: 1, y: 2 }
      `
    },
    {
      "key": "0:18",
      "name": "head",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:19",
      "name": "indexOf",
      "description": "Получает индекс, по которому первое вхождение значения находится в массиве.",
      "lodash": `
const arr = [1, 2, 1, 3, 2];

_.indexOf(arr, 2);
// => 1
_.indexOf(arr, 2, 2);
// => 4
_.indexOf(arr, 4);
// => -1
      `,
      "underscore": `
const arr = [1, 2, 1, 3, 2];

_.indexOf(arr, 2);
// => 1
_.indexOf(arr, 2, 2);
// => 4
_.indexOf(arr, 4);
// => -1
      `,
      "vanillaJavaScript": `
const arr = [1, 2, 1, 3, 2];

arr.indexOf(2);
// => 1
arr.indexOf(2, 2);
// => 4
arr.indexOf(4);
// => -1
      `
    },
    {
      "key": "0:20",
      "name": "initial",
      "description": "Возвращает все кроме последнего элемента массива",
      "lodash": `
const arr = [1, 2, 3, 4, 5];

_.initial(arr);
// => [ 1, 2, 3, 4 ]
      `,
      "underscore": `
const arr = [1, 2, 3, 4, 5];

_.initial(arr);
// => [ 1, 2, 3, 4 ]
      `,
      "vanillaJavaScript": `
const arr = [1, 2, 3, 4, 5];

arr.slice(0, -1);
// => [ 1, 2, 3, 4 ]
      `
    },
    {
      "key": "0:21",
      "name": "intersection",
      "description": "Возвращает массив значений из первого массива, которые присутствует во втором массиве",
      "lodash": `
_.intersection([2, 1], [2, 3]);
// => [ 2 ]
      `,
      "underscore": `
_.intersection([2, 1], [2, 3]);
// => [ 2 ]
      `,
      "vanillaJavaScript": `
intersection([2, 1], [2, 3]);
// => [ 2 ]
      `
    },
    {
      "key": "0:22",
      "name": "intersectionBy",
      "description": "Этот метод подобен _.intersection, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента каждого массива, чтобы сгенерировать критерий, по которому они сравниваются. ",
      "lodash": `
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [ { x: 1 } ]
_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [ 2.1 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function intersectionBy(arr, value, comprator) {
  return arr.filter(function(elem) {
    return value.find(function(item) {
      if (typeof comprator === 'string') {
        return item[comprator] === elem[comprator];
      } else if (typeof comprator === 'function') {
        return comprator(elem) === comprator(item);
      } else {
        return false;
      }
    });
  });
}

intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [ { x: 1 } ]
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [ 2.1 ]
      `
    },
    {
      "key": "0:23",
      "name": "intersectionWith",
      "description": "Этот метод похож на _.intersection, за исключением того, что он принимает компаратор, который вызывается для сравнения элементов массивов.",
      "lodash": `
const arr1 = [{'x':1, 'y':2}, {'x':2, 'y':1}];
const arr2 = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.intersectionWith(arr1, arr2, _.isEqual);
// => [ { x: 1, y: 2 } ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const arr1 = [{'x':1, 'y':2}, {'x':2, 'y':1}];
const arr2 = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

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

function intersectionWith(obj1, obj2, callback) {
  var arr = [];

  for(let elem of obj2) {
    let isEqualObject = false;
    for(let item of obj1) {
      if(callback(elem, item)) {
        arr.push(item);
      }
    }
  }

  return arr;
}

intersectionWith(arr1, arr2, equalObject);
// => [ { x: 1, y: 2 } ]
      `
    },
    {
      "key": "0:24",
      "name": "join",
      "description": "Преобразует все элементы массива в строку, разделенную разделителем.",
      "lodash": `
_.join(['a', 'b', 'c'], '~');
// => a~b~c
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
['a', 'b', 'c'].join('~');
// => a~b~c
      `
    },
    {
      "key": "0:25",
      "name": "last",
      "description": "Получает последний элемент массива.",
      "lodash": `
const arr = [5, 4, 3, 2, 1];

_.last(arr);
// => 1
      `,
      "underscore": `
const arr = [5, 4, 3, 2, 1];

_.last(arr);
// => 1
_.last(arr, 2);
// => [2, 1]
      `,
      "vanillaJavaScript": `
const arr = [5, 4, 3, 2, 1];

arr[arr.length - 1];
// => 1
arr.slice(-1)[0];
// => 1
arr.slice(-2);
// => [2, 1]
      `
    },
    {
      "key": "0:26",
      "name": "lastIndexOf",
      "description": "Этот метод похож на _.indexOf, за исключением того, что он перебирает элементы массива справа налево.",
      "lodash": `
const arr = [1, 2, 1, 3, 2];

_.lastIndexOf(arr, 2);
// => 4
_.lastIndexOf(arr, 2, 2);
// => 1
      `,
      "underscore": `
const arr = [1, 2, 1, 3, 2];

_.lastIndexOf(arr, 2);
// => 4
_.lastIndexOf(arr, 2, 2);
// => 1
      `,
      "vanillaJavaScript": `
const arr = [1, 2, 1, 3, 2];

arr.lastIndexOf(2);
// => 4
arr.lastIndexOf(2, 2);
// => 1
      `
    },
    {
      "key": "0:27",
      "name": "nth",
      "description": "Получает элемент с индексом n массива. Если n отрицательно, возвращается n-й элемент с конца.",
      "lodash": `
_.nth(arr, 1);
// => b
_.nth(arr, -2);
// => c
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
arr[1];
// => b
arr[arr.length - 2];
// => c
arr.slice(-2)[0];
// => c
      `
    },
    {
      "key": "0:28",
      "name": "pull",
      "description": "Удаляет все заданные значения из массива",
      "lodash": `
const arr = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pull(arr, 'a', 'c');
// => [ 'b', 'b' ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const arr = ['a', 'b', 'c', 'a', 'b', 'c'];

function pull(arr, ...value) {
  return arr.filter(function(elem) {
    return value.indexOf(elem) == -1;
  });
}

pull(arr, 'a', 'c');
// => [ 'b', 'b' ]
      `
    },
    {
      "key": "0:29",
      "name": "pullAll",
      "description": "Этот метод похож на _.pull, за исключением того, что он принимает массив значений для удаления.",
      "lodash": `
const arr = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pullAll(arr, ['a', 'c']);
// => [ 'b', 'b' ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const arr = ['a', 'b', 'c', 'a', 'b', 'c'];

function pull(arr, ...value) {
  return arr.filter(function(elem) {
    return value.indexOf(elem) == -1;
  });
}

pullAll(arr, ['a', 'c']);
// => [ 'b', 'b' ]
      `
    },
    {
      "key": "0:30",
      "name": "pullAllBy",
      "description": "Этот метод подобен _.pullAll, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента массива и значений для создания критерия, по которому они сравниваются.",
      "lodash": `
var arr = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

_.pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], 'x');
// => [ { x: 2 } ]
      `,
      "underscore": `

      `,
      "vanillaJavaScript": `
var arr = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

function pullAllBy(arr, value, comprator) {
  return arr.filter(function(elem) {
    return !value.find(function(item) {
      return item[comprator] === elem[comprator];
    });
  });
}

pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], 'x');
// => [ { x: 2 } ]
      `
    },
    {
      "key": "0:31",
      "name": "pullAllWith",
      "description": "Этот метод подобен _.pullAll, за исключением того, что он принимает компаратор, который вызывается для сравнения элементов массива со значениями.",
      "lodash": `
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
// => [ { x: 1, y: 2 }, { x: 5, y: 6 } ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
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

var array2 = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
array2 = array2.filter(el => !equalObject(el, { 'x': 3, 'y': 4 }))
// => [ { x: 1, y: 2 }, { x: 5, y: 6 } ]
      `
    },
    {
      "key": "0:32",
      "name": "pullAt",
      "description": "",
      "lodash": `
var arr = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(arr, [1, 3]);

console.log("arr", arr);
// => arr [ 'a', 'c' ]
console.log('pulled', pulled);
// => pulled [ 'b', 'd' ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var arr = ['a', 'b', 'c', 'd'];

function pullAt(arr, value) {
  var array = [];
  value[0]++; // необходимо для правельной работы цикла
  // за каждый проход создаётся массив искомых элементов и уменьшается исходный
  value.forEach((elem, index) => {
    array.push(arr[elem - 1]);
    arr.splice(elem - 1, 1);
  });
  return array;
}

var pulled = pullAt(arr, [1, 3]);

console.log("arr", arr);
// => arr [ 'a', 'c' ]
console.log('pulled', pulled);
// => pulled [ 'b', 'd' ]
      `
    },
    {
      "key": "0:33",
      "name": "remove",
      "description": "Удаляет все элементы из массива, для которого предикат возвращает истину, и возвращает массив удаленных элементов.",
      "lodash": `
const arr = [1, 2, 3, 4];
const evens = _.remove(arr, n => n % 2 == 0);

console.log(evens);
// => [ 2, 4 ]
console.log(arr);
// => [ 1, 3 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const arr = [1, 2, 3, 4];
const evens2 = arr2.filter(function(elem, index, arr) {
  if(elem % 2 == 0){
    arr.splice(index, 1);
    return true;
  } else {
    return false;
  }
});

console.log(evens);
// => [ 2, 4 ]
console.log(arr);
// => [ 1, 3 ]
      `
    },
    {
      "key": "0:34",
      "name": "reverse",
      "description": "Переворачивает массив таким образом, что первый элемент становится последним, второй элемент становится предпоследним и так далее.",
      "lodash": `
_.reverse([1, 2, 3, 4]);
// => [ 4, 3, 2, 1 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[1, 2, 3, 4].reverse();
// => [ 4, 3, 2, 1 ]
      `
    },
    {
      "key": "0:35",
      "name": "slice",
      "description": "",
      "lodash": `
_.slice([1, 2, 3, 4], 1, 2);
// => [2]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[1, 2, 3, 4].slice(1, 2);
// => [2]
      `
    },
    {
      "key": "0:36",
      "name": "sortedIndex",
      "description": "Использует двоичный поиск для определения наименьшего индекса, по которому значение должно быть вставлено в массив, чтобы сохранить его порядок сортировки.",
      "lodash": `
_.sortedIndex([10, 30, 50, 60, 70], 40);
// => 2
_.sortedIndex([10, 30, 50, 60, 70], 80);
// => 5
      `,
      "underscore": `
_.sortedIndex([10, 30, 50, 60, 70], 40);
// => 2
_.sortedIndex([10, 30, 50, 60, 70], 80);
// => 5
      `,
      "vanillaJavaScript": `
function sortedIndex(arr, value) {
  const length = arr.length;
  for(let i = 0, j = 1; i < length; i++, j++){
    if(arr[i] <= value && value <= arr[j] || length === j) {
      return j;
    }
  }
  return arr;
}

sortedIndex([10, 30, 50, 60, 70], 40);
// => 2
sortedIndex([10, 30, 50, 60, 70], 80);
// => 5
      `
    },
    {
      "key": "0:37",
      "name": "sortedIndexBy",
      "description": "Этот метод подобен _.sortedIndex, за исключением того, что он принимает итерацию, которая вызывается для значения и каждого элемента массива для вычисления их ранжирования сортировки.",
      "lodash": `
_.sortedIndexBy([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x');
// => 1
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function sortedIndexBy(arr, value, prop) {
  return arr.findIndex(elem => elem[prop] == value[prop]);
}

sortedIndexBy([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x');
// => 1
      `
    },
    {
      "key": "0:38",
      "name": "sortedIndexOf",
      "description": "Этот метод похож на _.indexOf, за исключением того, что он выполняет двоичный поиск в отсортированном массиве.",
      "lodash": `
_.sortedIndexOf([4, 5, 5, 5, 6], 5);
// => 1
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[4, 5, 5, 5, 6].indexOf(5);
// => 1
      `
    },
    {
      "key": "0:39",
      "name": "sortedLastIndex",
      "description": "Этот метод похож на _.sortedIndex, за исключением того, что он возвращает самый высокий индекс, по которому значение должно быть вставлено в массив, чтобы сохранить порядок сортировки.",
      "lodash": `
_.sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[4, 5, 5, 5, 6].lastIndexOf(5) + 1;
// => 4
      `
    },
    {
      "key": "0:40",
      "name": "sortedLastIndexBy",
      "description": "Этот метод похож на _.sortedLastIndex, за исключением того, что он принимает итерацию, которая вызывается для значения и каждого элемента массива для вычисления их ранжирования сортировки.",
      "lodash": `
var objects = [{ 'x': 4 }, { 'x': 5 }, { 'x': 5 }, { 'x': 6 }];

_.sortedLastIndexBy(objects, { 'x': 5 }, function(o) { return o.x; });
// => 3
_.sortedLastIndexBy(objects, { 'x': 5 }, 'x');
// => 3
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var objects = [{ 'x': 4 }, { 'x': 5 }, { 'x': 5 }, { 'x': 6 }];

function sortedLastIndexBy(arr, value, comparator) {
  if (typeof comparator === 'function') {
    return 1 + arr.findLastIndex(el => comparator(el) === comparator(value))
  } else if (typeof comparator === 'string') {
    return 1 + arr.findLastIndex(el => value[comparator] === el[comparator])
  } else {
    return false;
  }
}

sortedLastIndexBy(objects, { 'x': 5 }, function(o) { return o.x; });
// => 3
sortedLastIndexBy(objects, { 'x': 5 }, 'x');
// => 3
      `
    },
    {
      "key": "0:41",
      "name": "sortedLastIndexOf",
      "description": "Этот метод похож на _.lastIndexOf, за исключением того, что он выполняет двоичный поиск в отсортированном массиве.",
      "lodash": `
_.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
// => 3
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[4, 5, 5, 5, 6].lastIndexOf(5);
// => 3
      `
    },
    {
      "key": "0:42",
      "name": "sortedUniq",
      "description": "Этот метод похож на _.uniqBy, за исключением того, что он разработан и оптимизирован для отсортированных массивов.",
      "lodash": `
const arr = [1, 1, 2, 2, 3, 4, 4];
_.sortedUniq(arr);
// => [ 1, 2, 3, 4 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const arr = [1, 1, 2, 2, 3, 4, 4];
[...new Set(arr)];
// => [ 1, 2, 3, 4 ]
      `
    },
    {
      "key": "0:43",
      "name": "sortedUniqBy",
      "description": "Этот метод похож на _.uniqBy, за исключением того, что он разработан и оптимизирован для отсортированных массивов.",
      "lodash": `
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [ 1.1, 2.3 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function sortedUniqBy(arr, fn) {
  const uniqArr = [arr[0]];
  for (let i = 1; i < arr.length - 1; i++) {
    if(fn(arr[i]) !== fn(arr[i - 1])) uniqArr.push(arr[i])
  }
  return uniqArr;
}

sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [ 1.1, 2.3 ]
      `
    },
    {
      "key": "0:44",
      "name": "tail",
      "description": "Получает все, кроме первого элемента массива.",
      "lodash": `
_.tail([1, 2, 3]);
// => [ 2, 3 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[1, 2, 3].slice(1);
// => [ 2, 3 ]
      `
    },
    {
      "key": "0:45",
      "name": "take",
      "description": "Создает срез массива с n элементами, взятыми с самого начала.",
      "lodash": `
_.take([1, 2, 3]);
// => [ 1 ]
_.take([1, 2, 3], 2);
// => [ 1, 2 ]
_.take([1, 2, 3], 5);
// => [ 1, 2, 3 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[1, 2, 3].slice(0, 1);
// => [ 1 ]
[1, 2, 3].slice(0, 2);
// => [ 1, 2 ]
[1, 2, 3].slice(0, 5);
// => [ 1, 2, 3 ]
      `
    },
    {
      "key": "0:46",
      "name": "takeRight",
      "description": "Создает срез массива с n элементами, взятыми с конца.",
      "lodash": `
_.takeRight([1, 2, 3]);
// => [ 3 ]
_.takeRight([1, 2, 3], 2);
// => [ 2, 3 ]
_.takeRight([1, 2, 3], 5);
// => [ 1, 2, 3 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[1, 2, 3].slice(-1);
// => [ 3 ]
[1, 2, 3].slice(-2);
// => [ 2, 3 ]
[1, 2, 3].slice(-5);
// => [ 1, 2, 3 ]
      `
    },
    {
      "key": "0:47",
      "name": "takeRightWhile",
      "description": "Создает срез массива с элементами, взятыми с конца",
      "lodash": `
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

_.takeRightWhile(users, function(o) { return !o.active; });
// => [ { user: 'fred', active: false }, { user: 'pebbles', active: false } ]
_.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
// => [ { user: 'pebbles', active: false } ]
_.takeRightWhile(users, ['active', false]);
// => [ { user: 'fred', active: false }, { user: 'pebbles', active: false } ]
_.takeRightWhile(users, 'active');
// => []
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
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

function takeRightWhile(arr, condition){
  const result = [];

  if(typeof condition === 'function') {
    for (let i = arr.length - 1; i >= 0; --i) {
      if(condition(arr[i])) {
        result.unshift(arr[i]);
      } else {
        break;
      }
    }
  } else if (Array.isArray(condition)) {
    for (let i = arr.length - 1; i >= 0; --i) {
      if(arr[i][condition[0]] === condition[1]) {
        result.unshift(arr[i]);
      } else {
        break;
      }
    }
  } else if (typeof condition === 'object' && condition !== null){
    for (let i = arr.length - 1; i >= 0; --i) {
      if(equalObject(arr[i], condition)) {
        result.unshift(arr[i]);
      } else {
        break;
      }
    }
  } else if (typeof condition === 'string') {
    for (let i = arr.length - 1; i >= 0; --i) {
      if(!(condition in arr[i])) {
        result.unshift(arr[i]);
      } else {
        break;
      }
    }
  }

  return result;
}

takeRightWhile(users, function(o) { return !o.active; });
// => [ { user: 'fred', active: false }, { user: 'pebbles', active: false } ]
takeRightWhile(users, { 'user': 'pebbles', 'active': false });
// => [ { user: 'pebbles', active: false } ]
takeRightWhile(users, ['active', false]);
// => [ { user: 'fred', active: false }, { user: 'pebbles', active: false } ]
takeRightWhile(users, 'active');
// => []
      `
    },
    {
      "key": "0:48",
      "name": "takeWhile",
      "description": "Создает срез массива с элементами, взятыми с самого начала. Элементы берутся до тех пор, пока предикат не вернет false.",
      "lodash": `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.takeWhile(users, function(o) { return !o.active; });
// => [ { user: 'barney', active: false }, { user: 'fred', active: false } ]
_.takeWhile(users, { 'user': 'barney', 'active': false });
// => [ { user: 'barney', active: false } ]
_.takeWhile(users, ['active', false]);
// => [ { user: 'barney', active: false }, { user: 'fred', active: false } ]
_.takeWhile(users, 'active');
// => []
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

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

takeWhile(users, function(o) { return !o.active; });
// => [ { user: 'barney', active: false }, { user: 'fred', active: false } ]
takeWhile(users, { 'user': 'barney', 'active': false });
// => [ { user: 'barney', active: false } ]
takeWhile(users, ['active', false]);
// => [ { user: 'barney', active: false }, { user: 'fred', active: false } ]
takeWhile(users, 'active');
// => []
      `
    },
    {
      "key": "0:49",
      "name": "union",
      "description": "Создает массив уникальных значений по порядку из всех заданных массивов, используя SameValueZero для сравнения на равенство.",
      "lodash": `
_.union([2], [1, 2, 3, 4]);
// => [ 2, 1, 3, 4 ]
_.union([2, 3], [1, 2, 3, 4]);
//=> [ 2, 3, 1, 4 ]
      `,
      "underscore": `
_.union([2], [1, 2, 3, 4]);
// => [ 2, 1, 3, 4 ]
_.union([2, 3], [1, 2, 3, 4]);
//=> [ 2, 3, 1, 4 ]
      `,
      "vanillaJavaScript": `
function union(arr, arrInsert) {
  let setUnionElem = new Set([...arr, ...arrInsert]);
  return Array.from(setUnionElem);
}

union([2], [1, 2, 3, 4]);
// => [ 2, 1, 3, 4 ]
union([2, 3], [1, 2, 3, 4]);
//=> [ 2, 3, 1, 4 ]
      `
    },
    {
      "key": "0:50",
      "name": "unionBy",
      "description": "Этот метод подобен _.union, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента каждого массива, чтобы сгенерировать критерий, по которому вычисляется уникальность.",
      "lodash": `
_.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }] //
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function unionBy(arr1, arr2, comparator) {
  const result = [...arr1];

    if(typeof comparator === 'function') {
      arr2.forEach(el => {
        if( comparator(el) !== comparator(arr1[0]) ) {
          result.push(el);
        }
      });
    } else if (typeof comparator === 'string') {
      arr2.forEach(el => {
        if( el[comparator] !== arr1[0][comparator]) {
          result.push(el);
        }
      });
    }

  return result;
}

unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }] //
      `
    },
    {
      "key": "0:51",
      "name": "unionWith",
      "description": "Этот метод похож на _.unzip, за исключением того, что он принимает итерацию, чтобы указать, как следует комбинировать перегруппированные значения.",
      "lodash": `
var objectsUnionWith = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var othersUnionWith = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.unionWith(objectsUnionWith, othersUnionWith, _.isEqual);
// => [ { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 } ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var objectsUnionWith = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var othersUnionWith = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

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

function unionWith(arr1, arr2, callback) {
  const result = [...new Set(arr1)];

  result.forEach(elArr1 => {
    const findElement = arr2.find(elArr2 => {
      if(callback(elArr1, elArr2) === true) {
        return elArr2;
      } else {
        return undefined;
      }
    });
    if(findElement !== undefined) {
      result.push(findElement);
    }
  });

  return result;
}

unionWith(objectsUnionWith, othersUnionWith, equalObject);
// => [ { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 } ]
      `
    },
    {
      "key": "0:52",
      "name": "uniq",
      "description": "Создает версию массива без дубликатов, используя SameValueZero для сравнения на равенство, в котором сохраняется только первое вхождение каждого элемента.",
      "lodash": `
_.uniq([2, 1, 2, 3, 1]);
// => [ 2, 1, 3 ]
      `,
      "underscore": `
_.uniq([2, 1, 2, 3, 1]);
// => [ 2, 1, 3 ]
_.unique([2, 1, 2, 3, 1]); // alias
// => [ 2, 1, 3 ]
      `,
      "vanillaJavaScript": `
[...new Set([2, 1, 2, 3, 1])];
// => [ 2, 1, 3 ]
      `
    },
    {
      "key": "0:53",
      "name": "uniqBy",
      "description": "Этот метод подобен _.uniq, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента в массиве, чтобы сгенерировать критерий, по которому вычисляется уникальность.",
      "lodash": `
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }] //
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const strategyUniq = {};

strategyUniq.functionUniq = (arr, comparator) => {
  const result = arr.reduce((acc, item) => {
    if (acc.some(el => comparator(el) === comparator(item))) {
      return acc; // если значение уже есть, то просто возвращаем аккумулятор
    }
    return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
  }, []);
  return result;
}

strategyUniq.stringUniq = (arr, comparator) => {
  const result = arr.reduce((acc, item) => {
    if (acc.some(el => el[comparator] === item[comparator])) {
      return acc; // если значение уже есть, то просто возвращаем аккумулятор
    }
    return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
  }, []);
  return result;
}

function uniqBy(arr, comparator) {
  return strategyUniq[typeof comparator + 'Uniq'](arr, comparator);
}

uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }] //
      `
    },
    {
      "key": "0:54",
      "name": "uniqWith",
      "description": "",
      "lodash": `
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.uniqWith(objects, _.isEqual);
// => [ { x: 1, y: 2 }, { x: 2, y: 1 } ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

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

function uniqWith(arr, comparator) {
  const result = objects.reduce((acc, item) => {
    if (acc.some(el => comparator(el, item))) {
      return acc;
    }
    return [...acc, item];
  }, []);

  return result;
}

uniqWith(objects, equalObject);
// => [ { x: 1, y: 2 }, { x: 2, y: 1 } ]
      `
    },
    {
      "key": "0:55",
      "name": "unzip",
      "description": "Этот метод подобен _.zip, за исключением того, что он принимает массив сгруппированных элементов и создает массив, перегруппировывая элементы до их конфигурации до архивирования.",
      "lodash": `
_.unzip([ [ 'a', 1, true ], [ 'b', 2, false ] ]);
// => [ [ 'a', 'b' ], [ 1, 2 ], [ true, false ] ]
      `,
      "underscore": `
_.unzip([ [ 'a', 1, true ], [ 'b', 2, false ] ]);
// => [ [ 'a', 'b' ], [ 1, 2 ], [ true, false ] ]
      `,
      "vanillaJavaScript": `
function unzip(arr) {
  var arrUnzip = [];
  arr[0].forEach(function (elem, index) {
    arrUnzip.push([elem, arr[1][index]]);
  });
  return arrUnzip;
}

unzip([ [ 'a', 1, true ], [ 'b', 2, false ] ]);
// => [ [ 'a', 'b' ], [ 1, 2 ], [ true, false ] ]
      `
    },
    {
      "key": "0:56",
      "name": "unzipWith",
      "description": "Этот метод похож на _.unzip, за исключением того, что он принимает итерацию, чтобы указать, как следует комбинировать перегруппированные значения.",
      "lodash": `
_.unzipWith([[1, 10, 100], [2, 20, 200]], _.add);
// => [ 3, 30, 300 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function unzipWith(arr, callback) {
  return arr[0].map(function (elem, index) {
    return callback(elem, arr[1][index]);
  });
}

unzipWith([[1, 10, 100], [2, 20, 200]], (a, b) => a + b);
// => [ 3, 30, 300 ]
      `
    },
    {
      "key": "0:57",
      "name": "without",
      "description": "Создает массив, исключая все заданные значения, используя SameValueZero для сравнения на равенство.",
      "lodash": `
_.without([2, 1, 2, 3, 1, 4], 1, 2);
// => [ 3, 4 ]
      `,
      "underscore": `
_.without([2, 1, 2, 3, 1, 4], 1, 2);
// => [ 3, 4 ]
      `,
      "vanillaJavaScript": `
function without(arr, ...value) {
  return arr.filter(elem => !value.includes(elem))
}

without([2, 1, 2, 3, 1, 4], 1, 2);
// => [ 3, 4 ]
      `
    },
    {
      "key": "0:58",
      "name": "xor",
      "description": "Создает массив уникальных значений, представляющих собой симметричную разность заданных массивов.",
      "lodash": `
_.xor([2, 1], [2, 3]);
// => [ 1, 3 ]
_.xor([2, 1, 2], [2, 3, 1]);
// => [ 3 ]
_.xor([2, 1, 1], [2, 3, 3]);
// => [ 1, 3 ]
_.xor([2, 2], [2, 4]);
// => [ 4 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function xor(arr1, arr2) {
  let s1 = new Set(arr1);
  let s2 = new Set(arr2);
  s1.forEach(elem => {
    if(s2.has(elem)) {
      s1.delete(elem);
      s2.delete(elem);
    }
  });
  return [...s1, ...s2];
}

xor([2, 1], [2, 3]);
// => [ 1, 3 ]
xor([2, 1, 2], [2, 3, 1]);
// => [ 3 ]
xor([2, 1, 1], [2, 3, 3]);
// => [ 1, 3 ]
xor([2, 2], [2, 4]);
// => [ 4 ]
      `
    },
    {
      "key": "0:59",
      "name": "xorBy",
      "description": "Этот метод похож на _.xor, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента каждого массива, чтобы сгенерировать критерий, по которому они сравниваются.",
      "lodash": `
_.xorBy([2.1, 1.2], [2.3, 3.4, 2.2], Math.floor);
// => [ 1.2, 3.4 ]
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [ { x: 2 } ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const strategyXor = {};

strategyXor.functionXor = (arr1, arr2, comparator) => {
  const countElement = {};
  [...arr1, ...arr2].forEach(el => {
    countElement[comparator(el)] ? countElement[comparator(el)].push(el) : countElement[comparator(el)] = [el];
  })

  const result = [];
  for (let prop in countElement) {
    if (countElement[prop].length === 1) {
      result.push(countElement[prop][0]);
    }
  }
  return result;
}

strategyXor.stringXor = (arr1, arr2, comparator) => {
  const countElement = {};
  [...arr1, ...arr2].forEach(el => {
    const key = el[comparator];
    countElement[key] ? countElement[key].push(el) : countElement[key] = [el];
  })

  const result = [];
  for (let prop in countElement) {
    if (countElement[prop].length === 1) {
      result.push(countElement[prop][0]);
    }
  }
  return result;
}

function xorBy(arr1, arr2, comparator) {
  return strategyXor[typeof comparator + 'Xor'](arr1, arr2, comparator);
}

xorBy([2.1, 1.2], [2.3, 3.4, 2.2], Math.floor);
// => [ 1.2, 3.4 ]
xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [ { x: 2 } ]
      `
    },
    {
      "key": "0:60",
      "name": "xorWith",
      "description": "Этот метод похож на _.xor, за исключением того, что он принимает компаратор, который вызывается для сравнения элементов массивов",
      "lodash": `
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.xorWith(objects, others, _.isEqual);
// => [ { x: 2, y: 1 }, { x: 1, y: 1 } ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

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

function xorWith(arr1, arr2, comparator) {
  let array1 = [...arr1];
  let array2 = [...arr2];

  array1.forEach((el, index) => {
    const length = array2.length;
    array2 = array2.filter(item => equalObject(el, item));
    if(length !== array2.length) {
      array1.splice(index, 1)
    }
  });

  return [...array1, ...array2];
}

xorWith(objects, others, equalObject);
// => [ { x: 2, y: 1 }, { x: 1, y: 1 } ]
      `
    },
    {
      "key": "0:61",
      "name": "zip",
      "description": "Создает массив сгруппированных элементов, первый из которых содержит первые элементы заданных массивов, второй из которых содержит вторые элементы заданных массивов и так далее.",
      "lodash": `
_.zip(['a', 'b'], [1, 2], [true, false]);
// => [ [ 'a', 1, true ], [ 'b', 2, false ] ]
_.zip([1, 2], [3, 4], [5, 6], [7, 8]);
// => [ [ 1, 3, 5, 7 ], [ 2, 4, 6, 8 ] ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function zip(...arr) {
  var arrZip = [[], []];
  arr.forEach(function (elem) {
    arrZip[0].push(elem[0]);
    arrZip[1].push(elem[1]);
  });
  return arrZip;
}

zip(['a', 'b'], [1, 2], [true, false]);
// => [ [ 'a', 1, true ], [ 'b', 2, false ] ]
zip([1, 2], [3, 4], [5, 6], [7, 8]);
// => [ [ 1, 3, 5, 7 ], [ 2, 4, 6, 8 ] ]
      `
    },
    {
      "key": "0:62",
      "name": "zipObject",
      "description": "Этот метод подобен _.fromPairs, за исключением того, что он принимает два массива, один из идентификаторов свойств и один из соответствующих значений.",
      "lodash": `
_.zipObject(['b', 'a'], [1, 2]);
// => { b: 1, a: 2 }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function zipObject(arr1, arr2) {
  var obj = {};
  for(let i = 0;i < arr1.length;i++) {
    obj[arr1[i]] = arr2[i];
  }
  return obj;
}

zipObject(['b', 'a'], [1, 2]);
// => { b: 1, a: 2 }
      `
    },
    {
      "key": "0:63",
      "name": "zipObjectDeep",
      "description": "Этот метод похож на _.zipObject, за исключением того, что он поддерживает пути к свойствам.",
      "lodash": `
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function zipObjectDeep(pathes, value) {
  const obj = {};
  let currentPath = undefined;

  pathes.forEach((el, index) => {
    // Путь в виде массива
    const path = el.replace('[', '.')
      .replace(']', '')
      .split('.');
    // i для текущего элемента, j для следующего элемента
    // нужно чтобы определить, является ли следующий элемент массивом
    for (let i = 0, j = 1; i < path.length; i++, j++) {
      if(currentPath === undefined) currentPath = obj;
      // Последний элемент присваиваем просто значение
      if(i === path.length - 1) {
        currentPath[path[i]] = value[index];
        currentPath = undefined;
        break;
      }
      if(!currentPath[path[i]]) {
        // Проверка является ли следующий элемент массивом
        if(/\d+/.test(path[j])) {
          currentPath[path[i]] = [];
        } else {
          currentPath[path[i]] = {};
        }
      }
      currentPath = currentPath[path[i]];
    }
  });

  return obj;
}

zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
      `
    },
    {
      "key": "0:64",
      "name": "zipWith",
      "description": "Этот метод похож на _.zip, за исключением того, что он принимает итерацию, чтобы указать, как следует комбинировать сгруппированные значения",
      "lodash": `
_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
// => [111, 222]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function zipWith(...args) {
  const callback = args.splice(-1, 1)[0];
  return args.reduce(callback)
}

zipWith([1, 2], [10, 20], [100, 200], (acc, cur) => {
  acc[0] += cur[0];
  acc[1] += cur[1];
  return acc;
});
// => [111, 222]
      `
    }
  ]
},
{
  "key": 1,
  "title": "Collection",
  "visible": true,
  "content": [
    {
      "key": "1:0",
      "name": "countBy",
      "description": "Создает объект, состоящий из ключей, сгенерированных по результатам прохождения каждого элемента коллекции через итерацию. Соответствующее значение каждого ключа — это количество раз, когда ключ возвращался итерацией.",
      "lodash": `
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function countBy(arr, fn) {
  let obj = {};
  arr.forEach(el => {
    let key = undefined;
    if(typeof fn === 'function') {
      key = fn(el);
    } else if(typeof fn === 'string'){
      key = el[fn];
    } else {
      throw new Error('Неверный тип');
    }
    if(key in obj) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
  });
  return obj;
}

countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
      `
    },
    {
      "key": "1:1",
      "name": "each",
      "description": "Перебирает элементы коллекции и вызывает iteratee для каждого элемента. Итерируемый объект вызывается с тремя аргументами: (значение, индекс|ключ, коллекция). Итерируемые функции могут выйти из итерации досрочно, явно возвращая false.",
      "lodash": `
// alias
_.forEach([1, 2], (value) => {
  console.log(value * 2);
});
// => 2, 4
_.each({ 'a': 1, 'b': 2 }, (value, key) => {
  console.log(key);
});
// => a, b
      `,
      "underscore": `
_.each([1, 2], (value) => {
  console.log(value * 2);
});
// => 2, 4
_.each({ 'a': 1, 'b': 2 }, (value, key, list) => {
  console.log(key);
});
// => a, b
      `,
      "vanillaJavaScript": `
[1, 2].forEach(value => {
  console.log(value * 2)
});
// => 2, 4
Object.keys({ 'a': 1, 'b': 2 }).forEach(key => {
  console.log(key)
});
// => a, b
      `
    },
    {
      "key": "1:2",
      "name": "eachRight",
      "description": "",
      "lodash": `
_.forEachRight([1, 2], function(value) {
  console.log(value);
});
// => 2, 1
_.eachRight([11, 22], function(value) {
  console.log(value);
});
// => 22, 11
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[1, 2].reduceRight((_, el) => console.log(el), 0);
// => 2, 1
let arr = [11, 22];
for (let i = arr.length - 1; i >= 0; --i) {
  console.log(arr[i]);
}
// => 22, 11
      `
    },
    {
      "key": "1:3",
      "name": "every",
      "description": "Проверяет, возвращает ли предикат истину для всех элементов коллекции. Итерация останавливается, как только предикат возвращает false.",
      "lodash": `
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_d.every([true, 1, null, 'yes'], Boolean);
// => false
_d.every(users, { 'user': 'barney', 'active': false });
// => false
_d.every(users, ['active', false]);
// => true
_d.every(users, 'active');
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];

[true, 1, null, 'yes'].every(Boolean);
// => false
users.every(el => el['user'] === 'barney' && el['active'] === false);
// => false
users.every(el => el['active'] === false);
// => true
users.every(el => el['active']);
// => false
      `
    },
    {
      "key": "1:4",
      "name": "filter",
      "description": "Перебирает элементы коллекции, возвращая массив всех элементов, которые предикат возвращает истинно для",
      "lodash": `
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, function(o) {return !o.active});
// => [ { user: 'fred', age: 40, active: false } ]
_.filter(users, { 'age': 36, 'active': true });
// => [ { user: 'barney', age: 36, active: true } ]
_.filter(users, ['active', false]);
// => [ { user: 'fred', age: 40, active: false } ]
_.filter(users, 'active');
// => [ { user: 'barney', age: 36, active: true } ]
      `,
      "underscore": `
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, function(o) {return !o.active});
// => [ { user: 'fred', age: 40, active: false } ]
_.filter(users, { 'age': 36, 'active': true });
// => [ { user: 'barney', age: 36, active: true } ]
_.filter(users, {'active': false});
// => [ { user: 'fred', age: 40, active: false } ]
_.filter(users, 'active');
// => [ { user: 'barney', age: 36, active: true } ]
      `,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

users.filter(el => !el.active);
// => [ { user: 'fred', age: 40, active: false } ]
users.filter(el => el['age'] == 36 && el['active'] === true);
// => [ { user: 'barney', age: 36, active: true } ]
users.filter(el => el['active'] === false);
// => [ { user: 'fred', age: 40, active: false } ]
users.filter(el => el['active']);
// => [ { user: 'barney', age: 36, active: true } ]
      `
    },
    {
      "key": "1:5",
      "name": "find",
      "description": "Перебирает элементы коллекции, возвращая первый элемент, предикат возвращает истину для.",
      "lodash": `
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

_.find(users, function(o) { return o.age < 40; });
// => { user: 'barney', age: 36, active: true }
_.find(users, { 'age': 1, 'active': true });
// => { user: 'pebbles', age: 1, active: true }
_.find(users, ['active', false]);
// => { user: 'fred', age: 40, active: false }
_.find(users, 'active');
// => { user: 'barney', age: 36, active: true }
      `,
      "underscore": `
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

_.find(users, function(o) { return o.age < 40; });
// => { user: 'barney', age: 36, active: true }
_.find(users, { 'age': 1, 'active': true });
// => { user: 'pebbles', age: 1, active: true }
_.find(users, {'active': false});
// => { user: 'fred', age: 40, active: false }
_.find(users, 'active');
// => { user: 'barney', age: 36, active: true }
      `,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

users.find(el => el.age < 40);
// => { user: 'barney', age: 36, active: true }
users.find(el => el.age == 1 && el.active === true);
// => { user: 'pebbles', age: 1, active: true }
users.find(el => el.active === false);
// => { user: 'fred', age: 40, active: false }
users.find(el => el.active);
// => { user: 'barney', age: 36, active: true }
      `
    },
    {
      "key": "1:6",
      "name": "findLast",
      "description": "Этот метод похож на _.find, за исключением того, что он перебирает элементы коллекции справа налево.",
      "lodash": `
_.findLast([1, 2, 3, 4], (n) => n % 2 == 1);
// => 3
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function findLast(arr, callback) {
  for (let i = arr.length - 1; i >= 0; --i) {
    if(callback(arr[i])) return arr[i]
  }
}

findLast([1, 2, 3, 4], (n) => n % 2 === 1);
// => 3
      `
    },
    {
      "key": "1:7",
      "name": "flatMap",
      "description": "Создает сглаженный массив значений, пропуская каждый элемент в коллекции через итерацию и сглаживая сопоставленные результаты.",
      "lodash": `
_.flatMap([1, 2], n => [n, n]);
// => [ 1, 1, 2, 2 ]
_.flatMap([1, [2]], n => n**2);
// => [ 1, 4 ]
_.flatMap([1, [2, [3]]], n => n);
// => [ 1, 2, [ 3 ] ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function flatMap(arr, fn) {
  return arr.map(fn).flat(1);
}

flatMap([1, 2], n => [n, n]);
// => [ 1, 1, 2, 2 ]
flatMap([1, [2]], n => n**2);
// => [ 1, 4 ]
flatMap([1, [2, [3]]], n => n);
// => [ 1, 2, [ 3 ] ]
      `
    },
    {
      "key": "1:8",
      "name": "flatMapDeep",
      "description": "Этот метод подобен _.flatMap, за исключением того, что он рекурсивно сглаживает сопоставленные результаты.",
      "lodash": `
_.flatMapDeep([1, 2], n => [n, n]);
// => [ 1, 1, 2, 2 ]
_.flatMapDeep([1, [2]], n => n);
// => [ 1, 2 ]
_.flatMapDeep([1, [2, [3]]], n => n);
// => [ 1, 2, 3 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function flatMapDeep(arr, fn) {
  return arr.map(fn).flat(Infinity);
}

flatMapDeep([1, 2], n => [n, n]);
// => [ 1, 1, 2, 2 ]
flatMapDeep([1, [2]], n => n);
// => [ 1, 2 ]
flatMapDeep([1, [2, [3]]], n => n);
// => [ 1, 2, 3 ]
      `
    },
    {
      "key": "1:9",
      "name": "flatMapDepth",
      "description": "Этот метод подобен _.flatMap, за исключением того, что он рекурсивно сглаживает сопоставленные результаты до глубины времени.",
      "lodash": `
_.flatMapDepth([1, 2], n => [[[n, n]]], 2);
// => [ [ 1, 1 ], [ 2, 2 ] ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function flatMapDepth(arr, fn, depth) {
  return arr.map(fn).flat(depth);
}

flatMapDepth([1, 2], n => [[[n, n]]], 2);
// => [ [ 1, 1 ], [ 2, 2 ] ]
      `
    },
    {
      "key": "1:10",
      "name": "forEach",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "1:11",
      "name": "forEachRight",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "1:12",
      "name": "groupBy",
      "description": "Создает объект, состоящий из ключей, сгенерированных по результатам прохождения каждого элемента коллекции через итерацию. Порядок сгруппированных значений определяется порядком их появления в коллекции. Соответствующее значение каждого ключа представляет собой массив элементов, отвечающих за генерацию ключа..",
      "lodash": `
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': [ 'one', 'two' ], '5': [ 'three' ] }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function groupBy(arr, iterate) {
  let obj = {};
  arr.forEach(el => {
    let key = undefined;
    if(typeof iterate === 'function') {
      key = iterate(el);
    } else if(typeof iterate === 'string'){
      key = el[iterate];
    } else {
      throw new Error('Неверный тип');
    }
    if(key in obj) {
      obj[key].push(el);
    } else {
      obj[key] = [el];
    }
  });
  return obj;
}

groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }
groupBy(['one', 'two', 'three'], 'length');
// => { '3': [ 'one', 'two' ], '5': [ 'three' ] }
      `
    },
    {
      "key": "1:13",
      "name": "includes",
      "description": "Проверяет, находится ли значение в коллекции.",
      "lodash": `
_.includes([1, 2, 3], 1);
// true
_.includes([1, 2, 3], 1, 2);
// false
_.includes({ 'a': 1, 'b': 2 }, 1);
// true
_.includes('abcd', 'bc');
// true
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
// es6
[1, 2, 3].includes(1);
// true
[1, 2, 3].includes(1, 2);
// false
Object.values({'a':1, 'b':2}).includes(1);
// true
'abcd'.includes('bc');
// true
      `
    },
    {
      "key": "1:14",
      "name": "invokeMap",
      "description": "Вызывает метод по пути каждого элемента в коллекции, возвращая массив результатов каждого вызванного метода.",
      "lodash": `
_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
// => [ [ 1, 5, 7 ], [ 1, 2, 3 ] ]
_.invokeMap([123, 456], String.prototype.split, '');
// => [ [ 1, 5, 7 ], [ 1, 2, 3 ] ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[[5, 1, 7], [3, 2, 1]].map(el => el.sort());
// => [ [ 1, 5, 7 ], [ 1, 2, 3 ] ]
[123, 456].map(el => new String(el).split(''));
// => [ [ 1, 5, 7 ], [ 1, 2, 3 ] ]
      `
    },
    {
      "key": "1:15",
      "name": "keyBy",
      "description": "Создает объект, состоящий из ключей, сгенерированных по результатам прохождения каждого элемента коллекции через итерацию.",
      "lodash": `
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

_.keyBy(array, o => String.fromCharCode(o.code));
// => { a: { dir: 'left', code: 97 }, d: { dir: 'right', code: 100 } }
_.keyBy(array, 'dir');
// => { left: { dir: 'left', code: 97 }, right: { dir: 'right', code: 100 } }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

function keyBy(arr, key) {
  let obj = {};
  arr.forEach(el => {
    if(typeof key === 'function') {
      obj[key(el)] = el;
    } else if (typeof key === 'string') {
      obj[el[key]] = el;
    } else {
      throw new Error('Неверный тип');
    }
  });
  return obj;
}

keyBy(array, o => String.fromCharCode(o.code));
// => { a: { dir: 'left', code: 97 }, d: { dir: 'right', code: 100 } }
keyBy(array, 'dir');
// => { left: { dir: 'left', code: 97 }, right: { dir: 'right', code: 100 } }
      `
    },
    {
      "key": "1:16",
      "name": "map",
      "description": "Создает массив значений, запуская каждый элемент в коллекции через итерацию.",
      "lodash": `
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

_.map([4, 8], n => n**2);
// => [ 16, 64 ]
_.map({ 'a': 4, 'b': 8 }, n => n**2);
// => [ 16, 64 ]
_.map(users, 'user');
// => [ 'barney', 'fred' ]
      `,
      "underscore": `
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

_.map([4, 8], n => n**2);
// => [ 16, 64 ]
_.map({ 'a': 4, 'b': 8 }, n => n**2);
// => [ 16, 64 ]
_.map(users, 'user');
// => [ 'barney', 'fred' ]
      `,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

[4, 8].map(n => n * n);
// => [ 16, 64 ]
Object.values({ 'a': 4, 'b': 8 }).map(n => n**2);
// => [ 16, 64 ]
users.map(el => el.user);
// => [ 'barney', 'fred' ]
      `
    },
    {
      "key": "1:17",
      "name": "orderBy",
      "description": "Этот метод похож на _.sortBy, за исключением того, что он позволяет указать порядок сортировки итераций для сортировки.",
      "lodash": `
var users = [
  { 'user': 'fred', 'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred', 'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => [
// =>   { user: 'barney', age: 36 },
// =>   { user: 'barney', age: 34 },
// =>   { user: 'fred', age: 48 },
// =>   { user: 'fred', age: 40 }
// => ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
// Вариант 1
function compare(field, order) {
  var len = arguments.length;
  if (len === 0) {
    return (a, b) => (a < b && -1) || (a > b && 1) || 0;
  }
  if (len === 1) {
    switch (typeof field) {
      case 'number':
        return field < 0 ?
          ((a, b) => (a < b && 1) || (a > b && -1) || 0) :
          ((a, b) => (a < b && -1) || (a > b && 1) || 0);
      case 'string':
        return (a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0;
    }
  }
  if (len === 2 && typeof order === 'number') {
    return order < 0 ?
      ((a, b) => (a[field] < b[field] && 1) || (a[field] > b[field] && -1) || 0) :
      ((a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0);
  }
  var fields, orders;
  if (typeof field === 'object') {
    fields = Object.getOwnPropertyNames(field);
    orders = fields.map(key => field[key]);
    len = fields.length;
  } else {
    fields = new Array(len);
    orders = new Array(len);
    for (let i = len; i--;) {
      fields[i] = arguments[i];
      orders[i] = 1;
    }
  }
  return (a, b) => {
    for (let i = 0; i < len; i++) {
      if (a[fields[i]] < b[fields[i]]) return orders[i];
      if (a[fields[i]] > b[fields[i]]) return -orders[i];
    }
    return 0;
  };
}

users.sort(compare({ user: -1, age: 1 }))
// => [
// =>   { user: 'barney', age: 36 },
// =>   { user: 'barney', age: 34 },
// =>   { user: 'fred', age: 48 },
// =>   { user: 'fred', age: 40 }
// => ]

// Вариант 2
users.sort(function(a, b) {
  if (b.user > a.user) return -1;
  if (b.user < a.user) return 1;
  if (a.age > b.age) return -1;
  if (a.age < b.age) return 1;
  return 0;
})
// => [
// =>   { user: 'barney', age: 36 },
// =>   { user: 'barney', age: 34 },
// =>   { user: 'fred', age: 48 },
// =>   { user: 'fred', age: 40 }
// => ]
      `
    },
    {
      "key": "1:18",
      "name": "partition",
      "description": "Создает массив элементов, разбитых на две группы, первая из которых содержит элементы, возвращающие предикат truey for, вторая из которых содержит элементы, возвращаемые предикатом falsey for.",
      "lodash": `
var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

_.partition(users, function(o) { return o.active; });
// => [
// =>   [ { user: 'fred', age: 40, active: true } ],
// =>   [
// =>     { user: 'barney', age: 36, active: false },
// =>     { user: 'pebbles', age: 1, active: false }
// =>   ]
// => ]
_.partition(users, { 'age': 1, 'active': false });
// => [
// =>   [ { user: 'pebbles', age: 1, active: false } ],
// =>   [
// =>     { user: 'barney', age: 36, active: false },
// =>     { user: 'fred', age: 40, active: true }
// =>   ]
// => ]
_.partition(users, ['active', false]);
// => [
// =>   [
// =>     { user: 'barney', age: 36, active: false },
// =>     { user: 'pebbles', age: 1, active: false }
// =>   ],
// =>   [ { user: 'fred', age: 40, active: true } ]
// => ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

users.reduce((acc, cur) => {
  cur.active ? acc[0].push(cur) : acc[1].push(cur)
  return acc;
}, [[],[]])
// => [
// =>   [ { user: 'fred', age: 40, active: true } ],
// =>   [
// =>     { user: 'barney', age: 36, active: false },
// =>     { user: 'pebbles', age: 1, active: false }
// =>   ]
// => ]
users.reduce((acc, cur) => {
  cur.age === 1 && cur.active === false ? acc[0].push(cur) : acc[1].push(cur)
  return acc;
}, [[],[]])
// => [
// =>   [ { user: 'pebbles', age: 1, active: false } ],
// =>   [
// =>     { user: 'barney', age: 36, active: false },
// =>     { user: 'fred', age: 40, active: true }
// =>   ]
// => ]
users.reduce((acc, cur) => {
  cur.active === false ? acc[0].push(cur) : acc[1].push(cur)
  return acc;
}, [[],[]])
// => [
// =>   [
// =>     { user: 'barney', age: 36, active: false },
// =>     { user: 'pebbles', age: 1, active: false }
// =>   ],
// =>   [ { user: 'fred', age: 40, active: true } ]
// => ]
      `
    },
    {
      "key": "1:19",
      "name": "reduce",
      "description": "Сокращает коллекцию до значения, которое является накопленным результатом прохождения каждого элемента в коллекции через итерацию, где каждому последующему вызову предоставляется возвращаемое значение предыдущего.",
      "lodash": `
_.reduce([1, 2], (sum, n) => sum + n, 0);
// => 3
_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': [ 'a', 'c' ], '2': [ 'b' ] }
      `,
      "underscore": `
_.reduce([1, 2], (sum, n) => sum + n, 0);
// => 3
_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': [ 'a', 'c' ], '2': [ 'b' ] }
      `,
      "vanillaJavaScript": `
[1, 2].reduce((sum, n) => sum + n);
// => 3
Object.entries({ 'a': 1, 'b': 2, 'c': 1 }).reduce((acc, cur) => {
  (acc[cur[1]] || (acc[cur[1]] = [])).push(cur[0]);
  return acc;
}, {});
// => { '1': [ 'a', 'c' ], '2': [ 'b' ] }
      `
    },
    {
      "key": "1:20",
      "name": "reduceRight",
      "description": "Этот метод подобен _.reduce, за исключением того, что он перебирает элементы коллекции справа налево.",
      "lodash": `
var array = [[0, 1], [2, 3], [4, 5]];
_.reduceRight(array, (flattened, other) => flattened.concat(other), []);
// => [ 4, 5, 2, 3, 0, 1 ]
      `,
      "underscore": `
var array = [[0, 1], [2, 3], [4, 5]];
_.reduceRight(array, (flattened, other) => flattened.concat(other), []);
// => [ 4, 5, 2, 3, 0, 1 ]
      `,
      "vanillaJavaScript": `
var array = [[0, 1], [2, 3], [4, 5]];
array.reduceRight((flattened, other) => flattened.concat(other), []);
// => [ 4, 5, 2, 3, 0, 1 ]
      `
    },
    {
      "key": "1:21",
      "name": "reject",
      "description": "Противоположность _.filter; этот метод возвращает элементы коллекции, для которых предикат не возвращает истину.",
      "lodash": `
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

// lodash
_.reject(users, o => !o.active);
// => [ { user: 'fred', age: 40, active: true } ]
_.reject(users, { 'age': 40, 'active': true });
// => [ { user: 'barney', age: 36, active: false } ]
_.reject(users, ['active', false]);
// => [ { user: 'fred', age: 40, active: true } ]
_.reject(users, 'active');
// => [ { user: 'barney', age: 36, active: false } ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

users.filter(o => o.active);
// => [ { user: 'fred', age: 40, active: true } ]
users.filter(o => o.age != 40 && o.active !== true);
// => [ { user: 'barney', age: 36, active: false } ]
users.filter(o => o.active !== false);
// => [ { user: 'fred', age: 40, active: true } ]
users.filter(o => !o.active);
// => [ { user: 'barney', age: 36, active: false } ]
      `
    },
    {
      "key": "1:22",
      "name": "sample",
      "description": "Получает случайный элемент из коллекции.",
      "lodash": `
_.sample([1, 2, 3, 4]);
// => 2
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function sample(arr) {
  let randomIndex = Math.floor( Math.random( ) * (arr.length) );
  return arr[randomIndex];
}

sample([1, 2, 3, 4]);
// => 2
      `
    },
    {
      "key": "1:23",
      "name": "sampleSize",
      "description": "Получает n случайных элементов по уникальным ключам из коллекции вплоть до размера коллекции.",
      "lodash": `
_.sampleSize([1, 2, 3], 2);
// => [ 2, 3 ]
_.sampleSize([1, 2, 3], 4);
// => [ 3, 1, 2 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function sampleSize(arr, size) {
  if(arr.length < size) size = arr.length;
  let setArray = new Set();
  while(setArray.size < size) {
    let randomIndex = Math.floor( Math.random() * (arr.length) );
    setArray.add(arr[randomIndex]);
  }
  return [...setArray];
}

sampleSize([1, 2, 3], 2);
// => [ 2, 3 ]
sampleSize([1, 2, 3], 4);
// => [ 3, 1, 2 ]
      `
    },
    {
      "key": "1:24",
      "name": "shuffle",
      "description": "Создает массив перетасованных значений, используя версию перетасовки Фишера-Йейтса.",
      "lodash": `
_.shuffle([1, 2, 3, 4, 5, 6]);
// => [ 2, 3, 6, 4, 1, 5 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffle([1, 2, 3, 4, 5, 6]);
// => [ 2, 3, 6, 4, 1, 5 ]
      `
    },
    {
      "key": "1:25",
      "name": "size",
      "description": "Получает размер коллекции, возвращая ее длину для значений, подобных массиву, или количество собственных перечисляемых строковых свойств с ключом для объектов.",
      "lodash": `
_.size([1, 2, 3]);
// => 3
_.size({ 'a': 1, 'b': 2 });
// => 2
_.size('pebbles');
// => 7
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[1, 2, 3].length;
// => 3
Object.keys({'a':1, 'b':2}).length;
// => 2
'pabbles'.length;
// => 7
      `
    },
    {
      "key": "1:26",
      "name": "some",
      "description": "Проверяет, возвращает ли предикат истину для какого-либо элемента коллекции. ",
      "lodash": `
var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];

_.some([null, 0, 'yes', false], Boolean);
// => true
_.some(users, { 'user': 'barney', 'active': false });
// => false
_.some(users, ['active', false]);
// => true
_.some(users, 'active');
// => true
      `,
      "underscore": `
var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];

_.some([null, 0, 'yes', false], Boolean);
// => true
_.some(users, o => o.user == 'barney' && o.active === false);
// => false
_.some(users, o => o.active === false);
// => true
_.some(users, o => 'active' in o);
// => true
      `,
      "vanillaJavaScript": `
var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];

[null, 0, 'yes', false].some(Boolean);
// => true
users.some(o => o.user == 'barney' && o.active === false);
// => false
users.some(o => o.active === false);
// => true
users.some(o => o['active']);
// => true
      `
    },
    {
      "key": "1:27",
      "name": "sortBy",
      "description": "Создает массив элементов, отсортированных в порядке возрастания по результатам выполнения каждого элемента в коллекции через каждую итерацию.",
      "lodash": `
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 56 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

_.sortBy(users, [(o) => o.user ]);
// => [
// =>   { user: 'barney', age: 56 },
// =>   { user: 'barney', age: 34 },
// =>   { user: 'fred', age: 48 },
// =>   { user: 'fred', age: 40 }
// => ]
_.sortBy(users, ['user', 'age']);
// => [
// =>   { user: 'barney', age: 34 },
// =>   { user: 'barney', age: 56 },
// =>   { user: 'fred', age: 40 },
// =>   { user: 'fred', age: 48 }
// => ]
      `,
      "underscore": `
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 56 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

_.sortBy(users, (o) => o.user);
// => [
// =>   { user: 'barney', age: 56 },
// =>   { user: 'barney', age: 34 },
// =>   { user: 'fred', age: 48 },
// =>   { user: 'fred', age: 40 }
// => ]
_.sortBy(users, 'user');
// => [
// =>   { user: 'barney', age: 56 },
// =>   { user: 'barney', age: 34 },
// =>   { user: 'fred', age: 48 },
// =>   { user: 'fred', age: 40 }
// => ]

// !!!Сортивровки по нескольким полям нет!!!
      `,
      "vanillaJavaScript": `
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 56 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

function sortUser(a, b) {
  if (a.user > b.user) return 1;
  if (a.user < b.user) return -1;
  return 0;
}

users.sort(sortUser);
// => [
// =>   { user: 'barney', age: 56 },
// =>   { user: 'barney', age: 34 },
// =>   { user: 'fred', age: 48 },
// =>   { user: 'fred', age: 40 }
// => ]

function sortUserAge(a, b) {
  if (a.user > b.user) return 1;
  if (a.user < b.user) return -1;
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;
  return 0;
}

users.sort(sortUserAge);
// => [
// =>   { user: 'barney', age: 34 },
// =>   { user: 'barney', age: 56 },
// =>   { user: 'fred', age: 40 },
// =>   { user: 'fred', age: 48 }
// => ]
      `
    }
  ]
},
{
  "key": 2,
  "title": "Date",
  "visible": true,
  "content": [
    {
      "key": "2:0",
      "name": "now",
      "description": "Получает временную метку числа миллисекунд, прошедших с эпохи Unix (1 января 1970 г., 00:00:00 UTC).",
      "lodash": `
_.now();
// Метка времени в миллисекундах
new Date(_.now());
// Текущая дата
      `,
      "underscore": `
_.now();
// Метка времени в миллисекундах
new Date(_.now());
// Текущая дата
      `,
      "vanillaJavaScript": `
Date.now();
// Метка времени в миллисекундах
new Date(Date.now());
// Текущая дата
      `,
    }
  ]
},
{
  "key": 3,
  "title": "Function",
  "visible": true,
  "content": [
    {
      "key": "3:0",
      "name": "after",
      "description": "Противоположность _.before; этот метод создает функцию, которая вызывает func после ее вызова n или более раз.",
      "lodash": `
const saves = ['profile', 'settings'];

const done = _.after(saves.length, () => console.log('lodash after'));

done();
// => undefined
done();
// => lodash after
done();
// => lodash after
      `,
      "underscore": `
const saves = ['profile', 'settings'];

const done = _.after(saves.length, () => console.log('underscore after'));

done();
// => undefined
done();
// => underscore after
done();
// => underscore after
      `,
      "vanillaJavaScript": `
const saves = ['profile', 'settings'];

function after(funCallLength = 1, callback) {
  let callLength = 1;

  return function (){
    if(callLength !== funCallLength) {
      callLength++;
      return undefined;
    } else {
      return callback();
    }
  };
}

const done = after(saves.length, () => console.log('my after'));

done();
// => undefined
done();
// => my after
done();
// => my after
      `,
    },
    {
      "key": "3:1",
      "name": "ary",
      "description": "Создает функцию, которая вызывает func с аргументами до n, игнорируя любые дополнительные аргументы.",
      "lodash": `
function numberSquare(...args) {
  return args.reduce((acc, cur) => {
    acc.push(cur**2);
    return acc;
  }, []);
}

numberSquare(1, 2, 3, 4);
// => [ 1, 4, 9, 16 ]

const fAry = _.ary(numberSquare, 2);

fAry(1, 2, 3, 4);
// => [ 1, 4 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function numberSquare(...args) {
  return args.reduce((acc, cur) => {
    acc.push(cur**2);
    return acc;
  }, []);
}

numberSquare(1, 2, 3, 4);
// => [ 1, 4, 9, 16 ]

function ary(fn, len) {
  return function(){
    let arg = Array.prototype.slice.call(arguments, 0, len);
    return fn(...arg);
  };
}

const myFAry = ary(numberSquare, 2);

myFAry(1, 2, 3, 4);
// => [ 1, 4 ]
      `,
    },
    {
      "key": "3:2",
      "name": "before",
      "description": "Создает функцию, которая вызывает func, с привязкой this и аргументами созданной функции, хотя она вызывается менее n раз.",
      "lodash": `
const step  _.before(3, () => {
  console.log('lodash before')
  return 'return lodash before'
});

console.log(step);
// => lodash before
// => return lodash before
console.log(step);
// => lodash before
// => return lodash before
console.log(step);
// => return lodash before
console.log(step);
// => return lodash before
      `,
      "underscore": `
const step =  _.before(3, () => {
  console.log('underscore before')
  return 'return underscore before'
});

console.log(step());
// => underscore before
// => return underscore before
console.log(step());
// => underscore before
// => return underscore before
console.log(step());
// => return underscore before
console.log(step());
// => return underscore before
      `,
      "vanillaJavaScript": `
function before(funCallLength = 1, callback) {
  let callLength = 1;
  let result = undefined;

  return function (){
    if(callLength !== funCallLength) {
      callLength++;
      result = callback();
    }
    return result;
  };
}

const step = before(3, () => {
  console.log('my before');
  return 'return my before';
});

console.log(step());
// => my before
// => return my before
console.log(step());
// => my before
// => return my before
console.log(step());
// => return my before
console.log(step());
// => return my before
      `,
    },
    {
      "key": "3:3",
      "name": "bind",
      "description": "Создает функцию, которая вызывает func с привязкой this для thisArg и партиалов, добавленных перед аргументами, которые она получает.",
      "lodash": `
function greet(greeting) {
  return greeting + ' ' + this.user;
}

const object = { 'user': 'Fred' };

_.bind(greet, object, 'hi')();
// => hi Fred
      `,
      "underscore": `
function greet(greeting) {
  return greeting + ' ' + this.user;
}

const object = { 'user': 'Fred' };

_.bind(greet, object, 'hi')();
// => hi Fred
      `,
      "vanillaJavaScript": `
function greet(greeting) {
  return greeting + ' ' + this.user;
}

const object = { 'user': 'Fred' };

greet.bind(object)('hi');
// => hi Fred
      `,
    },
    {
      "key": "3:4",
      "name": "bindKey",
      "description": "Создает функцию, которая вызывает метод в object[key] с частью аргументов",
      "lodash": `
const object = {
  'user': 'Fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};

const bound = _.bindKey(object, 'greet', 'Hi');
bound('!');
// => Hi Fred!
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const object = {
  'user': 'Fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};

const bound = object.greet.bind(object, 'Hi');
bound('!');
// => Hi Fred!
      `,
    },
    {
      "key": "3:5",
      "name": "curry",
      "description": "Каррирование",
      "lodash": `
const abc = function (a, b, c) {
  return [a, b, c];
};

const curried = _.curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]
curried(1, 2)(3);
// => [1, 2, 3]
curried(1, 2, 3);
// => [1, 2, 3]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const abc = function (a, b, c) {
  return [a, b, c];
};

function curry(func) {
  return function curried(...args) {
    if(args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curried = curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]
curried(1, 2)(3);
// => [1, 2, 3]
curried(1, 2, 3);
// => [1, 2, 3]
      `,
    },
    {
      "key": "3:6",
      "name": "curryRight",
      "description": "Каррирование, меняется порядок аргументов на обратный",
      "lodash": `
const abc = function (a, b, c) {
  return [a, b, c];
};

const curried = _.curryRight(abc);

curried(1)(2)(3);
// => [ 3, 2, 1 ]
curried(1)(2, 3);
// => [ 2, 3, 1 ]
curried(1, 2, 3);
// => [ 1, 2, 3 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function curryRight(func) {
  return function curried(...args) {
    if(args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        args.unshift(...args2);
        return curried.apply(this, args);
      };
    }
  };
}

const curried = curryRight(abc);

curried(1)(2)(3);
// => [ 3, 2, 1 ]
curried(1)(2, 3);
// => [ 2, 3, 1 ]
curried(1, 2, 3);
// => [ 1, 2, 3 ]
      `,
    },
    {
      "key": "3:7",
      "name": "debounce",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "3:8",
      "name": "defer",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "3:9",
      "name": "delay",
      "description": "Вызывает функцию с задержкой",
      "lodash": `
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
console.log('at first');
// => at first
// => later
      `,
      "underscore": `
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
console.log('at first');
// => at first
// => later
      `,
      "vanillaJavaScript": `
setTimeout(function(text) {
  console.log(text);
}, 1000, 'later');
console.log('at first');
// => at first
// => later
      `,
    },
    {
      "key": "3:10",
      "name": "flip",
      "description": "Создает функцию, которая вызывает func с перевернутыми аргументами.",
      "lodash": `
const flipped = _.flip(function () {
  return _.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => [ 'd', 'c', 'b', 'a' ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function flip(callback) {
  return function () {
    arguments = [].reverse.apply(arguments);
    return callback(...arguments);
  };
}

const flipped = flip(function () {
  return [...arguments];
});

flipped('a', 'b', 'c', 'd');
// => [ 'd', 'c', 'b', 'a' ]
      `,
    },
    {
      "key": "3:11",
      "name": "memoize",
      "description": "Мемоизация",
      "lodash": `
const fibonacci = _.memoize(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});

fibonacci(1000); // => 4.346655768693743e+208
// => 7.174ms
fibonacci(1000); // => 4.346655768693743e+208
// => 3.729ms
      `,
      "underscore": `
const fibonacci = _.memoize(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});

fibonacci(1000); // => 4.346655768693743e+208
// => 36.929ms
fibonacci(1000); // => 4.346655768693743e+208
// => 0.581ms
      `,
      "vanillaJavaScript": `
function memoize(fn){
  const cache = new Map();
  return function(value){
    if(!cache.has(value)) cache.set(value, fn(value));
    return cache.get(value);
  };
}

const fibonacci = memoize(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});

fibonacci(1000); // => 4.346655768693743e+208
// => 4.928ms
fibonacci(1000); // => 4.346655768693743e+208
// => 2.18ms
      `,
    },
    {
      "key": "3:12",
      "name": "negate",
      "description": "Создает функцию, которая инвертирует результат предиката func.",
      "lodash": `
function isEven(n) {
  return n % 2 == 0;
}

const arr = [1, 2, 3, 4, 5, 6];

_.filter(arr, isEven);
// => [ 2, 4, 6 ]
_.filter(arr, _.negate(isEven));
// => [ 1, 3, 5 ]
      `,
      "underscore": `
function isEven(n) {
  return n % 2 == 0;
}

const arr = [1, 2, 3, 4, 5, 6];

_.filter(arr, isEven);
// => [ 2, 4, 6 ]
_.filter(arr, _.negate(isEven));
// => [ 1, 3, 5 ]
      `,
      "vanillaJavaScript": `
function isEven(n) {
  return n % 2 == 0;
}

const arr = [1, 2, 3, 4, 5, 6];

arr.filter(isEven);
// => [ 2, 4, 6 ]
arr.filter(e => !isEven(e));
// => [ 1, 3, 5 ]
      `,
    },
    {
      "key": "3:13",
      "name": "once",
      "description": "Создает функцию, которая ограничена однократным вызовом func.",
      "lodash": `
function createApplication(number){
  return 'application ' + number;
}

const initialize = _.once(createApplication);

initialize(1);
// => application 1
initialize(2);
// => application 1
      `,
      "underscore": `
function createApplication(number){
  return 'application ' + number;
}

const initialize = _.once(createApplication);

initialize(1);
// => application 1
initialize(2);
// => application 1
      `,
      "vanillaJavaScript": `
function createApplication(number){
  return 'application ' + number;
}

function once(callback) {
  let init = null;
  return function(args) {
    if (init === null) {
      init = callback(args);
    }
    return init;
  };
}

const initialize = once(createApplication);

initialize(1);
// => application 1
initialize(2);
// => application 1
      `,
    },
    {
      "key": "3:14",
      "name": "overArgs",
      "description": "Создает функцию, которая вызывает func с преобразованными аргументами.",
      "lodash": `
function doubled(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

const func = _.overArgs((x, y) => [x, y], [square, doubled]);

func(9, 3);
// => [ 81, 6 ]
func(10, 5);
// => [ 100, 10 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function doubled(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

function overArgs(fn, arrFn) {
  return function(...arg){
    let newArg = arg.map((el, index) => {
      return arrFn[index](el);
    });
    return fn(...newArg);
  };
}

const func = overArgs((x, y) => [x, y], [square, doubled]);

func(9, 3);
// => [ 81, 6 ]
func(10, 5);
// => [ 100, 10 ]
      `,
    },
    {
      "key": "3:15",
      "name": "partial",
      "description": "Создает функцию, которая вызывает func с частичными элементами, добавленными к аргументам, которые она получает.",
      "lodash": `
function greet(greeting, name) {
  return greeting + ' ' + name;
}

const sayHelloTo = _.partial(greet, 'Hello');
sayHelloTo('Fred');
// => Hello Fred

function sum(a, b, c) {
  return a + b + c;
}

const s = _.partial(sum, _, 2, _);
s(1, 3);
// => 6
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function partial(fn, ...args) {
  return function(...args2){
    let eArgs2 = args2.values();

    let argFn = Array.from(Array(fn.length))
      .map((el, index) => {
        if(args[index] !== '_' && args[index] !== undefined) {
          return el = args[index];
        } else {
          return el = eArgs2.next().value;
        }
      });

    return fn.apply(this, [...argFn]);
  };
}

function greet(greeting, name) {
  return greeting + ' ' + name;
}

const sayHelloTo = partial(greet, 'Hello');
sayHelloTo('Fred');
// => Hello Fred

function sum(a, b, c) {
  return a + b + c;
}

const s = partial(sum, '_', 2, '_');
s(1, 3);
// => 6
      `,
    },
    {
      "key": "3:16",
      "name": "partialRight",
      "description": "Этот метод подобен _.partial, за исключением того, что частично примененные аргументы добавляются к аргументам, которые он получает.",
      "lodash": `
function greet(greeting, name) {
  return greeting + ' ' + name;
}

const sayHelloTo = _.partialRight(greet, 'Fred');
sayHelloTo('Hello');
// => Hello Fred

const sayHiTo = _.partialRight(greet, 'Hi', _);
sayHiTo('Fred');
// => Hi Fred
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function greet(greeting, name) {
  return greeting + ' ' + name;
}

function partialRight(fn, ...args) {
  return function(...args2){
    if(fn.length !== args.length) {
      return fn.apply(this, [...args, ...args2].reverse());
    }

    let eArgs2 = args2.values();

    let argFn = Array.from(Array(fn.length))
      .map((el, index) => {
        if(args[index] !== '_' && args[index] !== undefined) {
          return el = args[index];
        } else {
          return el = eArgs2.next().value;
        }
      });

    return fn.apply(this, [...argFn]);
  };
}

const sayHelloTo = partialRight(greet, 'Fred');
sayHelloTo('Hello');
// => Hello Fred

const sayHiTo = partialRight(greet, 'Hi', '_');
sayHiTo('Fred');
// => Hi Fred
      `,
    },
    {
      "key": "3:17",
      "name": "rearg",
      "description": "Создает функцию, которая вызывает func с аргументами, расположенными в соответствии с указанными индексами, где значение аргумента по первому индексу предоставляется в качестве первого аргумента, значение аргумента по второму индексу предоставляется в качестве второго аргумента и так далее.",
      "lodash": `
const rearged = _.rearg(function(a, b, c) {
  return [a, b, c];
}, [2, 0, 1]);

rearged('b', 'c', 'a');
// => [ 'a', 'b', 'c' ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function rearg(callback, order) {
  return function(...arg) {
    const reargArg = [];
    order.forEach((i) => {
      reargArg.push(arg[i]);
    });
    return callback(...reargArg);
  };
}

const rearged = rearg(function(a, b, c) {
  return [a, b, c];
}, [2, 0, 1]);

rearged('b', 'c', 'a');
// => [ 'a', 'b', 'c' ]
      `,
    },
    {
      "key": "3:18",
      "name": "rest",
      "description": "Создает функцию, которая вызывает func с привязкой this созданной функции и аргументами от начала и далее, предоставленными в виде массива.",
      "lodash": `
const write = _.rest(function(author, portal) {
  return author + '---' + portal;
});

write(['MySQL', 'Mongoodb'], ['JavaScript', 'PHP'], 'HTML', 'CSS');
// => MySQL,Mongoodb---JavaScript,PHP,HTML,CSS
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function rest(callback) {
  return function(...args) {
    const newArgs = [];
    for (let i = 0; i < callback.length; i++) {
      if(i === callback.length - 1) {
        newArgs.push(args.splice(i));
      } else {
        newArgs.push(args[i]);
      }
    }
    return callback(...newArgs);
  }
}

const write = rest(function(author, portal) {
  return author + '---' + portal;
})

write(['MySQL', 'Mongoodb'], ['JavaScript', 'PHP'], 'HTML', 'CSS');
// => MySQL,Mongoodb---JavaScript,PHP,HTML,CSS
      `,
    },
    {
      "key": "3:19",
      "name": "spread",
      "description": "Создает функцию, которая вызывает func с привязкой this функции create и массивом аргументов, очень похожим на Function#apply.",
      "lodash": `
const sum = (x, y) => x + y;

const addition = _.spread(sum);
addition([56, 44]);
// => 100
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const sum = (x, y) => x + y;

sum(...[56, 44]);
// => 100
      `,
    },
    {
      "key": "3:20",
      "name": "throttle",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "3:21",
      "name": "unary",
      "description": "Создает функцию, которая принимает до одного аргумента, игнорируя любые дополнительные аргументы.",
      "lodash": `
function argumArray(a, b, c) {
  return [...arguments];
}

const unaryArg = _.unary(argumArray);
unaryArg(1, 2, 3);
// => [1]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function argumArray(a, b, c) {
  return [...arguments];
}

function unary(fn) {
  return function(...args) {
    return fn(args[0]);
  };
}

const unaryArg = unary(argumArray);
unaryArg(1, 2, 3);
// => [1]
      `,
    },
    {
      "key": "3:22",
      "name": "wrap",
      "description": "Создает функцию, которая передает значение оболочке в качестве первого аргумента.",
      "lodash": `
const p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});
p('fred, barney, & pebbles');
// <p>fred, barney, &amp; pebbles</p>
      `,
      "underscore": `
const p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});
p('fred, barney, & pebbles');
// <p>fred, barney, &amp; pebbles</p>
      `,
      "vanillaJavaScript": `
function escape(tag, str) {
  let arr = [
    ["&", "&amp;"],
    ["<", "&lt;"],
    [">", "&gt;"],
    ['"', "&quot;"],
    ["'", "&#39;"]
  ];
  arr.forEach((el, index) => {
    str = str.replace(el[0], el[1]);
  });
  return \`\${tag[0]}\${str}\${tag[1]}\`;
}
escape\`<p>\${'fred, barney, & pebbles'}</p>\`;
// <p>fred, barney, &amp; pebbles</p>
      `,
    }
  ]
},
{
  "key": 4,
  "title": "Lang",
  "visible": true,
  "content": [
    {
      "key": "4:0",
      "name": "castArray",
      "description": "Преобразует значение в виде массива, если это не так.",
      "lodash": `
_.castArray(1);
// => [1]
_.castArray({ 'a': 1 });
// => [{ 'a': 1 }]
_.castArray('abc');
// => ['abc']
_.castArray(null);
// => [null]
_.castArray(undefined);
// => [undefined]
_.castArray();
// => []
_.castArray([1, 2, 3]);
// => [1, 2, 3]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function castArray(prop) {
  if(arguments.length === 0) return [];
  if(Array.isArray(prop)) return prop;
  return [prop]
}

castArray(1);
// => [1]
castArray({ 'a': 1 });
// => [{ 'a': 1 }]
castArray('abc');
// => ['abc']
castArray(null);
// => [null]
castArray(undefined);
// => [undefined]
castArray();
// => []
castArray([1, 2, 3]);
// => [1, 2, 3]
      `,
    },
    {
      "key": "4:1",
      "name": "clone",
      "description": `Клонирование объектов, все вложенные объекты или массивы будут скопированы "по ссылке"`,
      "lodash": `
const objects = [{ 'a': 1 }, { 'b': 2 }];

const clone = _.clone(objects);
clone === objects;
// => false
clone[0] === objects[0];
// => true
      `,
      "underscore": `
const objects = [{ 'a': 1 }, { 'b': 2 }];

const clone = _.clone(objects);
clone === objects;
// => false
clone[0] === objects[0];
// => true
      `,
      "vanillaJavaScript": `
const objects = [{ 'a': 1 }, { 'b': 2 }];

const newObjects1 = [...objects];
newObjects1 === objects;
// => false
newObjects1[0] === objects[0];
// => true

const newObjects2 = Object.assign([], objects);
newObjects2 === objects;
// => false
newObjects2[0] === objects[0];
// => true
      `,
    },
    {
      "key": "4:2",
      "name": "cloneDeep",
      "description": "Этот метод похож на _.clone, за исключением того, что он рекурсивно клонирует значение.",
      "lodash": `
const objects = [{ 'a': 1 }, { 'b': 2 }];

const deep = _.cloneDeep(objects);

deep === objects;
// => false
deep[0] === objects[0];
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const objects = [{ 'a': 1 }, { 'b': 2 }];

function copy(aObject) {
  if (!aObject) {
    return aObject;
  }

  let v;
  let bObject = Array.isArray(aObject) ? [] : {};
  for (const k in aObject) {
    v = aObject[k];
    bObject[k] = (typeof v === "object") ? copy(v) : v;
  }

  return bObject;
}

const deep = copy(objects);

deep === objects;
// => false
deep[0] === objects[0];
// => false
      `,
    },
    {
      "key": "4:3",
      "name": "cloneDeepWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "4:4",
      "name": "cloneWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "4:5",
      "name": "conformsTo",
      "description": "Проверяет, соответствует ли объект переданному значению",
      "lodash": `
var object = { 'a': 1, 'b': 2 };

_.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true
_.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var object = { 'a': 1, 'b': 2 };

function conformsTo(obj, objFn) {
  let arr = Object.entries(objFn)[0];
  return arr[1](obj[arr[0]]);
}

conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true
conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false
      `,
    },
    {
      "key": "4:6",
      "name": "eq",
      "description": "Проверяет является значения эквивалентными",
      "lodash": `
var object = { 'a': 1 };
var other = { 'a': 1 };

_.eq(object, object);
// => true
_.eq(object, other);
// => false
_.eq('a', 'a');
// => true
_.eq('a', Object('a'));
// => false
_.eq(NaN, NaN);
// => true
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var object = { 'a': 1 };
var other = { 'a': 1 };

Object.is(object, object);
// => true
Object.is(object, other);
// => false
Object.is('a', 'a');
// => true
Object.is('a', Object('a'));
// => false
Object.is(NaN, NaN);
// => true
      `,
    },
    {
      "key": "4:7",
      "name": "gt",
      "description": "Проверяет является ли первый параметр больше второго",
      "lodash": `
_.gt(1, 3);
// => false
_.gt(3, 3);
// => false
_.gt(3, 1);
// => true
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function gt(el1, el2) {
  return el1 > el2;
}

gt(1, 3);
// => false
gt(3, 3);
// => false
gt(3, 1);
// => true
      `,
    },
    {
      "key": "4:8",
      "name": "gte",
      "description": "Проверяет является ли первый параметр больше или равен второму",
      "lodash": `
_.gte(1, 3);
// => false
_.gte(3, 3);
// => true
_.gte(3, 1);
// => true
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function gte(el1, el2) {
  return el1 >= el2;
}

gte(1, 3);
// => false
gte(3, 3);
// => true
gte(3, 1);
// => true
      `,
    },
    {
      "key": "4:9",
      "name": "isArguments",
      "description": "Проверяет, является ли значение, вероятно, объектом аргументов.",
      "lodash": `
_.isArguments(function() { return arguments; }());
// => true
_.isArguments([1, 2, 3]);
// => false
      `,
      "underscore": `
_.isArguments(function() { return arguments; }());
// => true
_.isArguments([1, 2, 3]);
// => false
      `,
      "vanillaJavaScript": `
function isArguments(arg) {
  if(Object.prototype.toString.call(arg) === '[object Arguments]') return true;
  else return false;
}

isArguments(function() { return arguments; }());
// => true
isArguments([1, 2, 3]);
// => false
      `,
    },
    {
      "key": "4:10",
      "name": "isArray",
      "description": "Проверяет, классифицируется ли значение как объект Array.",
      "lodash": `
_.isArray([1, 2, 3]);
// => true
_.isArray('abc');
// => false
      `,
      "underscore": `
_.isArray([1, 2, 3]);
// => true
_.isArray('abc');
// => false
      `,
      "vanillaJavaScript": `
Array.isArray([1, 2, 3]);
// => true
Array.isArray('abc');
// => false
      `,
    },
    {
      "key": "4:11",
      "name": "isArrayBuffer",
      "description": "Проверяет, классифицируется ли значение как объект ArrayBuffer.",
      "lodash": `
_.isArrayBuffer(new ArrayBuffer(2));
// => true
_.isArrayBuffer(new Array(2));
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function isArrayBuffer(arg) {
  if(Object.prototype.toString.call(arg) === '[object ArrayBuffer]') return true;
  else return false;
}

isArrayBuffer(new ArrayBuffer(2));
// => true
isArrayBuffer(new Array(2));
// => false
      `,
    },
    {
      "key": "4:12",
      "name": "isArrayLike",
      "description": "Проверяет, является ли значение массивоподобным.",
      "lodash": `
_.isArrayLike([1, 2, 3]);
// => true
_.isArrayLike(document.body.children);
// => true
_.isArrayLike('abc');
// => true
_.isArrayLike(_.noop);
// => false
_.isArrayLike(function(a, b){});
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function isArrayLike(value) {
  if((value).length === undefined || typeof value === 'function') return false;
  return true;
}

isArrayLike([1, 2, 3]);
// => true
isArrayLike(document.body.children);
// => true
isArrayLike('abc');
// => true
isArrayLike(_.noop);
// => false
isArrayLike(function(a, b){});
// => false
      `,
    },
    {
      "key": "4:13",
      "name": "isArrayLikeObject",
      "description": "Этот метод похож на _.isArrayLike, за исключением того, что он также проверяет, является ли значение объектом.",
      "lodash": `
_.isArrayLikeObject([1, 2, 3]);
// => true
_.isArrayLikeObject(document.body.children);
// => true
_.isArrayLikeObject(new Map());
// => false
_.isArrayLikeObject({});
// => false
_.isArrayLikeObject('abc');
// => false
_.isArrayLikeObject(_.noop);
// => false
_.isArrayLikeObject(function(a, b){});
// => false
_.isArrayLikeObject(null);
// => false
_.isArrayLikeObject(undefined);
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function isArrayLikeObject(value) {
  if(
    value == null ||
    (value).length === undefined ||
    typeof value === 'function'
  ) {
    return false;
  }
  if(typeof value === 'object') return true;
  return false;
}

isArrayLikeObject([1, 2, 3]);
// => true
isArrayLikeObject(document.body.children);
// => true
isArrayLikeObject(new Map());
// => false
isArrayLikeObject({});
// => false
isArrayLikeObject('abc');
// => false
isArrayLikeObject(_.noop);
// => false
isArrayLikeObject(function(a, b){});
// => false
isArrayLikeObject(null);
// => false
isArrayLikeObject(undefined);
// => false
      `,
    },
    {
      "key": "4:14",
      "name": "isBoolean",
      "description": "Проверяет, классифицируется ли значение как логический примитив или объект.",
      "lodash": `
_.isBoolean(false);
// => true
_.isBoolean(null);
// => false
      `,
      "underscore": `
_.isBoolean(false);
// => true
_.isBoolean(null);
// => false
      `,
      "vanillaJavaScript": `
typeof false === 'boolean';
// => true
typeof null === 'boolean';
// => false
      `,
    },
    {
      "key": "4:15",
      "name": "isBuffer",
      "description": "Проверяет, является ли значение буфером.",
      "lodash": `
_.isBuffer(new Buffer(2));
// => true
_.isBuffer(new Uint8Array(2));
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
Buffer.isBuffer(new Buffer(2));
// => true
Buffer.isBuffer(new Uint8Array(2));
// => false
      `,
    },
    {
      "key": "4:16",
      "name": "isDate",
      "description": "Проверяет, классифицируется ли значение как объект Date.",
      "lodash": `
_.isDate(new Date);
// => true
_.isDate('Mon April 23 2012');
// => false
      `,
      "underscore": `
_.isDate(new Date);
// => true
_.isDate('Mon April 23 2012');
// => false
      `,
      "vanillaJavaScript": `
function isDate(value) {
  if(Object.prototype.toString.call(value) === '[object Date]') return true;
  return false;
}

isDate(new Date);
// => true
isDate('Mon April 23 2012');
// => false
      `,
    },
    {
      "key": "4:17",
      "name": "isElement",
      "description": "Проверяет, вероятно ли значение является элементом DOM.",
      "lodash": `
_.isElement(document.body);
// => true
_.isElement('<body>');
// => false
      `,
      "underscore": `
_.isElement(document.body);
// => true
_.isElement('<body>');
// => false
      `,
      "vanillaJavaScript": `
function isElement(value) {
  if(value.nodeType === 1) return true;
  return false;
}

isElement(document.body);
// => true
isElement('<body>');
// => false
      `,
    },
    {
      "key": "4:18",
      "name": "isEmpty",
      "description": "Проверяет, является ли значение пустым объектом, коллекцией, map или set.",
      "lodash": `
_.isEmpty(null);
// => true
_.isEmpty(undefined);
// => true
_.isEmpty('abc');
// => false
_.isEmpty(new Set());
// => true
_.isEmpty(new Set([1, 2, 3]));
// => false
_.isEmpty(new Map());
// => true
_.isEmpty(new Map([['a', 1]]));
// => false
_.isEmpty(() => {});
// => true
_.isEmpty({});
// => true
_.isEmpty({'a': 1});
// => false
_.isEmpty([]);
// => true
_.isEmpty([1, 2, 3]);
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function isEmpty(value) {
  // null or undefined
  if(value == null) return true;
  // function
  if(typeof value === 'function') return true;
  // Map or Set
  if(value.size !== undefined) {
    if(value.size === 0) {
      return true;
    } else {
      return false;
    }
  }
  // Object or Array
  if(typeof value === 'object' && Object.entries(value).length === 0) return true;
  return false;
}

isEmpty(null);
// => true
isEmpty(undefined);
// => true
isEmpty('abc');
// => false
isEmpty(new Set());
// => true
isEmpty(new Set([1, 2, 3]));
// => false
isEmpty(new Map());
// => true
isEmpty(new Map([['a', 1]]));
// => false
isEmpty(() => {});
// => true
isEmpty({});
// => true
isEmpty({'a': 1});
// => false
isEmpty([]);
// => true
isEmpty([1, 2, 3]);
// => false
      `,
    },
    {
      "key": "4:19",
      "name": "isEqual",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "4:20",
      "name": "isEqualWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "4:21",
      "name": "isError",
      "description": "Проверяет, является ли значение объектом Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError или URIError.",
      "lodash": `
_.isError(new Error);
// => true
_.isError(Error);
// => false
_.isError(new EvalError);
// => true
      `,
      "underscore": `
_.isError(new Error);
// => true
_.isError(Error);
// => false
_.isError(new EvalError);
// => true
      `,
      "vanillaJavaScript": `
function isError(value) {
  if(Object.prototype.toString.call(value) === '[object Error]') return true;
  return false;
}

isError(new Error);
// => true
isError(Error);
// => false
isError(new EvalError);
// => true
      `,
    },
    {
      "key": "4:22",
      "name": "isFinite",
      "description": "Проверяет, является ли значение конечным примитивным числом.",
      "lodash": `
_.isFinite(3);
// => true
_.isFinite(Number.MIN_VALUE);
// => true
_.isFinite(Infinity);
// => false
_.isFinite('3');
// => false
      `,
      "underscore": `
_.isFinite(3);
// => true
_.isFinite(Number.MIN_VALUE);
// => true
_.isFinite(Infinity);
// => false
_.isFinite('3');
// => true - хотя это строка
      `,
      "vanillaJavaScript": `
function isFiniteValue(value) {
  return isFinite(value) && typeof value !== 'string';
}

isFinite(3);
// => true
isFinite(Number.MIN_VALUE);
// => true
isFinite(Infinity);
// => false
isFinite('3');
// => false
      `,
    },
    {
      "key": "4:23",
      "name": "isFunction",
      "description": "Проверяет, классифицируется ли значение как объект Function.",
      "lodash": `
_.isFunction(lod);
// => true
_.isFunction(/abc/);
// => false
_.isFunction(String);
// => true
      `,
      "underscore": `
_.isFunction(lod);
// => true
_.isFunction(/abc/);
// => false
_.isFunction(String);
// => true
      `,
      "vanillaJavaScript": `
typeof lod === 'function';
// => true
typeof /abc/ === 'function';
// => false
typeof String === 'function';
// => true
      `,
    },
    {
      "key": "4:24",
      "name": "isInteger",
      "description": "Проверяет, является ли значение целым числом.",
      "lodash": `
_.isInteger(3);
// => true
_.isInteger(Number.MIN_VALUE);
// => false
_.isInteger(Infinity);
// => false
_.isInteger('3');
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
parseInt(3) === 3;
// => true
parseInt(Number.MIN_VALUE) === Number.MIN_VALUE;
// => false
parseInt(Infinity) === Infinity;
// => false
parseInt('3') === '3';
// => false

Number.isInteger(3);
// => true
Number.isInteger(Number.MIN_VALUE);
// => false
Number.isInteger(Infinity);
// => false
Number.isInteger('3');
// => false
      `,
    },
    {
      "key": "4:25",
      "name": "isLength",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "4:26",
      "name": "isMap",
      "description": "Проверяет, классифицируется ли значение как объект Map.",
      "lodash": `
_.isMap(new Map);
// => true
_.isMap(new WeakMap);
// => false
      `,
      "underscore": `
_.isMap(new Map);
// => true
_.isMap(new WeakMap);
// => false
      `,
      "vanillaJavaScript": `
function isMap(value) {
  if(Object.prototype.toString.call(value) === '[object Map]') return true;
  return false;
}

isMap(new Map);
// => true
isMap(new WeakMap);
// => false
      `,
    },
    {
      "key": "4:27",
      "name": "isMatch",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "4:28",
      "name": "isMatchWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "4:29",
      "name": "isNaN",
      "description": "Проверяет, является ли значение NaN.",
      "lodash": `
_.isNaN(NaN);
// => true
_.isNaN(new Number(NaN));
// => true
_.isNaN(undefined);
// => false
_.isNaN(null);
// => false
      `,
      "underscore": `
_.isNaN(NaN);
// => true
_.isNaN(new Number(NaN));
// => true
_.isNaN(undefined);
// => false
_.isNaN(null);
// => false
      `,
      "vanillaJavaScript": `
isNaN(NaN);
// => true
isNaN(new Number(NaN));
// => true
isNaN(undefined);
// => true
isNaN(null);
// => false

Number.isNaN(NaN);
// => true
Number.isNaN(new Number(NaN));
// => false
Number.isNaN(undefined);
// => false
Number.isNaN(null);
// => false

function isNotANumber(value) {
  if(value === undefined) return false;
  return isNaN(value);
}

isNotANumber(NaN);
// => true
isNotANumber(new Number(NaN));
// => true
isNotANumber(undefined);
// => false
isNotANumber(null);
// => false
      `,
    },
    {
      "key": "4:30",
      "name": "isNative",
      "description": "Проверяет, является ли значение нетронутой нативной функцией.",
      "lodash": `
_.isNative(Array.prototype.push);
// => true
_.isNative(lod);
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
// Взято https://davidwalsh.name/detect-native-function

// Used to resolve the internal \`[[Class]]\` of values
var toString = Object.prototype.toString;

// Used to resolve the decompiled source of functions
var fnToString = Function.prototype.toString;

// Used to detect host constructors (Safari > 4; really typed array specific)
var reHostCtor = /^\\[object .+?Constructor\\]$/;

// Compile a regexp using a common native method as a template.
// We chose \`Object#toString\` because there's a good chance it is not being mucked with.
var reNative = RegExp('^' +
  // Coerce \`Object#toString\` to a string
  String(toString)
  // Escape any special regexp characters
  .replace(/[.*+?^\${}()|[\\]\\/\\\\]/g, '\\\\$&')
  // Replace mentions of \`toString\` with \`.*?\` to keep the template generic.
  // Replace thing like \`for ...\` to support environments like Rhino which add extra info
  // such as method arity.
  .replace(/toString|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'
);

function isNative(value) {
  var type = typeof value;
  return type == 'function'
    // Use \`Function#toString\` to bypass the value's own \`toString\` method
    // and avoid being faked out.
    ? reNative.test(fnToString.call(value))
    // Fallback to a host object check because some environments will represent
    // things like typed arrays as DOM methods which may not conform to the
    // normal native pattern.
    : (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
}

isNative(Array.prototype.push);
// => true
isNative(lod);
// => false
      `,
    },
    {
      "key": "4:31",
      "name": "isNil",
      "description": "Проверяет, является ли значение null или undefined.",
      "lodash": `
_.isNil(null);
// => true
_.isNil(undefined);
// => true
_.isNil(void 0);
// => true
_.isNil(NaN);
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function isNil(value) {
  if(value == null) return true;
  return false;
}

isNil(null);
// => true
isNil(undefined);
// => true
isNil(void 0);
// => true
isNil(NaN);
// => false
      `,
    },
    {
      "key": "4:32",
      "name": "isNull",
      "description": "Проверяет, является ли значение null.",
      "lodash": `
_.isNull(null);
// => true
_.isNull(undefined);
// => false
_.isNull(void 0);
// => false
      `,
      "underscore": `
_.isNull(null);
// => true
_.isNull(undefined);
// => false
_.isNull(void 0);
// => false
      `,
      "vanillaJavaScript": `
function isNull(value) {
  if(value === null) return true;
  return false;
}

isNull(null);
// => true
isNull(undefined);
// => false
isNull(void 0);
// => false
      `,
    },
    {
      "key": "4:33",
      "name": "isNumber",
      "description": "Проверяет, классифицируется ли значение как числовой примитив или объект.",
      "lodash": `
_.isNumber(3);
// => true
_.isNumber(Number.MIN_VALUE);
// => true
_.isNumber(Infinity);
// => true
_.isNumber('3');
// => false
_.isNumber({});
// => false
      `,
      "underscore": `
_.isNumber(3);
// => true
_.isNumber(Number.MIN_VALUE);
// => true
_.isNumber(Infinity);
// => true
_.isNumber('3');
// => false
_.isNumber({});
// => false
      `,
      "vanillaJavaScript": `
function isNumber(n){
  return Number(n) === n;
}

isNumber(3);
// => true
isNumber(Number.MIN_VALUE);
// => true
isNumber(Infinity);
// => true
isNumber('3');
// => false
isNumber({})
// => false
      `,
    },
    {
      "key": "4:34",
      "name": "isObject",
      "description": "Проверяет, является ли значение языковым типом объекта. (например, array, function, object, regexp, new Number(0) и String(''))",
      "lodash": `
_.isObject({});
// => true
_.isObject(() => {});
// => true
_.isObject([1, 2, 3]);
// => true
_.isObject(new Number(0));
// => true
_.isObject(new String(''));
// => true
_.isObject(/\w/);
// => true
_.isObject(null);
// => false
_.isObject(undefined);
// => false
      `,
      "underscore": `
_.isObject({});
// => true
_.isObject(() => {});
// => true
_.isObject([1, 2, 3]);
// => true
_.isObject(new Number(0));
// => true
_.isObject(new String(''));
// => true
_.isObject(/\w/);
// => true
_.isObject(null);
// => false
_.isObject(undefined);
// => false
      `,
      "vanillaJavaScript": `
function isObject(value) {
  return typeof value === 'object' && value !== null || typeof value === 'function';
}

isObject({});
// => true
isObject(() => {});
// => true
isObject([1, 2, 3]);
// => true
isObject(new Number(0));
// => true
isObject(new String(''));
// => true
isObject(/\w/);
// => true
isObject(null);
// => false
isObject(undefined);
// => false
      `,
    },
    {
      "key": "4:35",
      "name": "isObjectLike",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "4:36",
      "name": "isPlainObject",
      "description": "Проверяет, является ли value простым объектом, то есть объектом, созданным конструктором Object, или объектом с [[Prototype]] равным null.",
      "lodash": `
function Foo() {
  this.a = 1;
}

_.isPlainObject(new Foo);
// => false
_.isPlainObject([1, 2, 3]);
// => false
_.isPlainObject({ 'x': 0, 'y': 0 });
// => true
_.isPlainObject(Object.create(null));
// => true
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
}

function isPlainObject(obj) {
  return Object.getPrototypeOf(obj) === Object.prototype || Object.getPrototypeOf(obj) === null;
}

isPlainObject(new Foo);
// => false
isPlainObject([1, 2, 3]);
// => false
isPlainObject({ 'x': 0, 'y': 0 });
// => true
isPlainObject(Object.create(null));
// => true
      `,
    },
    {
      "key": "4:37",
      "name": "isRegExp",
      "description": "Проверяет, классифицируется ли значение как объект RegExp.",
      "lodash": `
_.isRegExp(/abc/);
// => true
_.isRegExp('/abc/');
// => false
      `,
      "underscore": `
_.isRegExp(/abc/);
// => true
_.isRegExp('/abc/');
// => false
      `,
      "vanillaJavaScript": `
let re = /abc/;
/abc/ instanceof RegExp
re instanceof RegExp;
// => true
re.constructor === RegExp;
// => false
let str = '/abc/';
str instanceof RegExp;
// => true
str.constructor === RegExp;
// => false
      `,
    },
    {
      "key": "4:38",
      "name": "isSafeInteger",
      "description": "Проверяет является ли выражение безопасным целым числом",
      "lodash": `
_.isSafeInteger(3);
// => true
_.isSafeInteger(Number.MIN_VALUE);
// => false
_.isSafeInteger(Infinity);
// => false
_.isSafeInteger('3');
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
Number.isSafeInteger(3);
// => true
Number.isSafeInteger(Number.MIN_VALUE);
// => false
Number.isSafeInteger(Infinity);
// => false
Number.isSafeInteger('3');
// => false
      `,
    },
    {
      "key": "4:39",
      "name": "isSet",
      "description": "Проверяет, является ли значение объектом Set",
      "lodash": `
_.isSet(new Set);
// => true
_.isSet(new WeakSet);
// => false
      `,
      "underscore": `
_.isSet(new Set);
// => true
_.isSet(new WeakSet);
// => false
      `,
      "vanillaJavaScript": `
function isSet(value) {
  if(Object.prototype.toString.call(value) === '[object Set]') return true;
  return false;
}

isSet(new Set);
// => true
isSet(new WeakSet);
// => false
      `,
    },
    {
      "key": "4:40",
      "name": "isString",
      "description": "Проверяет, является ли значение примитивом типа String или объектом String.",
      "lodash": `
_.isString('abc');
// => true
_.isString(new String('abc'));
// => true
_.isString(1);
// => false
      `,
      "underscore": `
_.isString('abc');
// => true
_.isString(new String('abc'));
// => true
_.isString(1);
// => false
      `,
      "vanillaJavaScript": `
function isString(value) {
  if(Object.prototype.toString.call(value) === '[object String]') return true;
  return false
}

isString('abc');
// => true
isString(new String('abc'));
// => true
isString(1);
// => false
      `,
    },
    {
      "key": "4:41",
      "name": "isSymbol",
      "description": "Проверяет является ли выражение типом Symbol",
      "lodash": `
let sym = Symbol('abc');

_.isSymbol(Symbol.iterator);
// => true
_.isSymbol(sym);
// => true
_.isSymbol('abc');
// => false
      `,
      "underscore": `
let sym = Symbol('abc');

_.isSymbol(Symbol.iterator);
// => true
_.isSymbol(sym);
// => true
_.isSymbol('abc');
// => false
      `,
      "vanillaJavaScript": `
let sym = Symbol('abc');

function isSymbol(value) {
  if(Object.prototype.toString.call(value) === '[object Symbol]') return true;
  return false;
}

isSymbol(Symbol.iterator);
// => true
isSymbol(sym);
// => true
isSymbol('abc');
// => false
      `,
    },
    {
      "key": "4:42",
      "name": "isTypedArray",
      "description": "Проверяет, классифицируется ли значение как типизированный массив.",
      "lodash": `
_.isTypedArray(new Int8Array);
// => true
_.isTypedArray(new Uint8Array);
// => true
_.isTypedArray(new Uint8ClampedArray);
// => true
_.isTypedArray(new Int16Array);
// => true
_.isTypedArray(new Uint16Array);
// => true
_.isTypedArray(new Int32Array);
// => true
_.isTypedArray(new Uint32Array);
// => true
_.isTypedArray(new Float32Array);
// => true
_.isTypedArray(new Float64Array);
// => true
_.isTypedArray([]);
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
ArrayBuffer.isView(new Int8Array);
// => true
ArrayBuffer.isView(new Uint8Array);
// => true
ArrayBuffer.isView(new Uint8ClampedArray);
// => true
ArrayBuffer.isView(new Int16Array);
// => true
ArrayBuffer.isView(new Uint16Array);
// => true
ArrayBuffer.isView(new Int32Array);
// => true
ArrayBuffer.isView(new Uint32Array);
// => true
ArrayBuffer.isView(new Float32Array);
// => true
ArrayBuffer.isView(new Float64Array);
// => true
ArrayBuffer.isView([]);
// => false
      `,
    },
    {
      "key": "4:43",
      "name": "isUndefined",
      "description": "Проверяет является ли выражение undefined",
      "lodash": `
_.isUndefined(void 0);
// => true
_.isUndefined(null);
// => false
      `,
      "underscore": `
_.isUndefined(void 0);
// => true
_.isUndefined(null);
// => false
      `,
      "vanillaJavaScript": `
function isUndefined(value) {
  if(value === undefined) return true;
  return false
}

isUndefined(void 0);
// => true
isUndefined(null);
// => false
      `,
    },
    {
      "key": "4:44",
      "name": "isWeakMap",
      "description": "Проверяет является ли выражение WeakMap",
      "lodash": `
_.isWeakMap(new WeakMap);
// => true
_.isWeakMap(new Map);
// => false
      `,
      "underscore": `
_.isWeakMap(new WeakMap);
// => true
_.isWeakMap(new Map);
// => false
      `,
      "vanillaJavaScript": `
function isWeakMap(value) {
  if(Object.prototype.toString.call(value) === '[object WeakMap]') return true;
  return false;
}

isWeakMap(new WeakMap);
// => true
isWeakMap(new Map);
// => false
      `,
    },
    {
      "key": "4:45",
      "name": "isWeakSet",
      "description": "Проверяет является ли выражение WeakSet",
      "lodash": `
_.isWeakSet(new WeakSet);
// => true
_.isWeakSet(new Set);
// => false
      `,
      "underscore": `
_.isWeakSet(new WeakSet);
// => true
_.isWeakSet(new Set);
// => false
      `,
      "vanillaJavaScript": `
function isWeakSet(value) {
  if(Object.prototype.toString.call(value) === '[object WeakSet]') return true;
  return false;
}

isWeakSet(new WeakSet);
// => true
isWeakSet(new Set);
// => false
      `,
    },
    {
      "key": "4:46",
      "name": "lt",
      "description": "Проверяет является ли первый параметр меньше второго",
      "lodash": `
_.lt(1, 3);
// => true
_.lt(3, 3);
// => false
_.lt(3, 1);
// => false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function lt(el1, el2) {
  return el1 < el2;
}

lt(1, 3);
// => true
lt(3, 3);
// => false
lt(3, 1);
// => false
      `,
    },
    {
      "key": "4:47",
      "name": "lte",
      "description": "Проверяет является ли первый параметр меньше или равен второму",
      "lodash": `
_.lte(1, 3);
// true
_.lte(3, 3);
// true
_.lte(3, 1);
// false
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function lte(el1, el2) {
  return el1 <= el2;
}

lte(1, 3);
// true
lte(3, 3);
// true
lte(3, 1);
// false
      `,
    },
    {
      "key": "4:48",
      "name": "toArray",
      "description": "Конвертирует выражение в массив",
      "lodash": `
_.toArray({ 'a': 1, 'b': 2 });
// => [ 1, 2 ]
_.toArray('abc');
// => [ 'a', 'b', 'c' ]
_.toArray(1);
// => []
_.toArray(null);
// => []
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function toArray(value) {
  if(value === null || value === undefined) return [];
  return Array.from(value);
}

toArray({ 'a': 1, 'b': 2 });
// => [ 1, 2 ]
toArray('abc');
// => [ 'a', 'b', 'c' ]
toArray(1);
// => []
toArray(null);
// => []
      `,
    },
    {
      "key": "4:49",
      "name": "toFinite",
      "description": "Конвертирует значение в конечное число.",
      "lodash": `
_.toFinite(3.2);
// => 3.2
_.toFinite(Number.MIN_VALUE);
// => 5e-324
_.toFinite(Number.MAX_VALUE);
// => 1.7976931348623157e+308
_.toFinite(Infinity);
// => 1.7976931348623157e+308
_.toFinite(-Infinity);
// => -1.7976931348623157e+308
_.toFinite('3.2');
// => 3.2
_.toFinite(NaN);
// => 0
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function toFinite(value) {
  if(isFinite(value)) {
    return parseFloat(value);
  } else if(value === Infinity){
    return Number.MAX_VALUE;
  } else if(value === -Infinity) {
    return -Number.MAX_VALUE;
  } else {
    return 0;
  }
}

toFinite(3.2);
// => 3.2
toFinite(Number.MIN_VALUE);
// => 5e-324
toFinite(Number.MAX_VALUE);
// => 1.7976931348623157e+308
toFinite(Infinity);
// => 1.7976931348623157e+308
toFinite(-Infinity);
// => -1.7976931348623157e+308
toFinite('3.2');
// => 3.2
toFinite(NaN);
// => 0
      `,
    },
    {
      "key": "4:50",
      "name": "toInteger",
      "description": "Конвертирует значение в целое число.",
      "lodash": `
_.toInteger(3.2);
// => 3
_.toInteger(-3.2);
// => -3
_.toInteger(3.7);
// => 3
_.toInteger(Number.MIN_VALUE);
// => 0
_.toInteger(Infinity);
// => 1.7976931348623157e+308
_.toInteger(-Infinity);
// => -1.7976931348623157e+308
_.toInteger('3.2');
// => 3
_.toInteger(NaN);
// => 0
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
  };
}

function toInteger(value) {
  if(isFinite(value)) {
    return Math.trunc(value)
  } else if(value === Infinity){
    return Number.MAX_VALUE;
  } else if(value === -Infinity){
    return -Number.MAX_VALUE;
  } else {
    return 0;
  }
}

toInteger(3.2);
// => 3
toInteger(-3.2);
// => -3
toInteger(3.7);
// => 3
toInteger(Number.MIN_VALUE);
// => 0
toInteger(Infinity);
// => 1.7976931348623157e+308
toInteger(-Infinity);
// => -1.7976931348623157e+308
toInteger('3.2');
// => 3
toInteger(NaN);
// => 0
      `,
    },
    {
      "key": "4:51",
      "name": "toLength",
      "description": "Преобразует значение в целое число, подходящее для использования в качестве длины объекта, подобного массиву.",
      "lodash": `
_.toLength(3.2);
// => 3
_.toLength(Number.MIN_VALUE);
// => 0
_.toLength(Infinity);
// => 4294967295
_.toLength('3.2');
// => 3
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
  };
}

function toLength(value) {
  if(Math.abs(value) === Infinity) return 4294967295;
  return Math.trunc(value);
}

toLength(3.2);
// => 3
toLength(Number.MIN_VALUE);
// => 0
toLength(Infinity);
// => 4294967295
toLength('3.2');
// => 3
      `,
    },
    {
      "key": "4:52",
      "name": "toNumber",
      "description": "Конвертирует значение в число",
      "lodash": `
_.toNumber(3.2);
// => 3.2
_.toNumber(Number.MIN_VALUE);
// => 5e-324
_.toNumber(Infinity);
// => Infinity
_.toNumber('3.2');
// => 3.2
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
parseFloat(3.2);
// => 3.2
parseFloat(Number.MIN_VALUE);
// => 5e-324
parseFloat(Infinity);
// => Infinity
parseFloat('3.2');
// => 3.2
      `,
    },
    {
      "key": "4:53",
      "name": "toPlainObject",
      "description": "Конвертирует объект в новый, но со свойствами прототипа",
      "lodash": `
function Foo() {
  this.b = 2;
}

Foo.prototype.c = 3;

_.assign({ 'a': 1 }, new Foo);
// => { a: 1, b: 2 }
_.assign({ 'a': 1 }, _.toPlainObject(new Foo));
// => { a: 1, b: 2, c: 3 }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.b = 2;
}

Foo.prototype.c = 3;

function toPlainObject(obj) {
  const objNew = {};
  for (let prop in obj) {
    objNew[prop] = obj[prop]
  }
  return objNew;
}

Object.assign({ 'a': 1 }, new Foo);
// => { a: 1, b: 2 }
Object.assign({ 'a': 1 }, toPlainObject(new Foo));
// => { a: 1, b: 2, c: 3 }
      `,
    },
    {
      "key": "4:54",
      "name": "toSafeInteger",
      "description": "Преобразует значение в безопасное целое число. ",
      "lodash": `
_.toSafeInteger(3.2);
// => 3
_.toSafeInteger(Number.MIN_VALUE);
// => 0
_.toSafeInteger(Infinity);
// => 9007199254740991
_.toSafeInteger(-Infinity);
// => -9007199254740991
_.toSafeInteger('3.2');
// => 3
_.toSafeInteger(NaN);
// => 0
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
  };
}

function toSafeInteger(value) {
  if(value === Infinity) {
    return Number.MAX_SAFE_INTEGER;
  }
  if(value === -Infinity) {
    return -Number.MAX_SAFE_INTEGER;
  }
  value = Math.trunc(value);
  if(Number.isSafeInteger(value)) {
    return value;
  }
  return 0;
}

toSafeInteger(3.2);
// => 3
toSafeInteger(Number.MIN_VALUE);
// => 0
toSafeInteger(Infinity);
// => 9007199254740991
toSafeInteger(-Infinity);
// => -9007199254740991
toSafeInteger('3.2');
// => 3
toSafeInteger(NaN);
// => 0
      `,
    },
    {
      "key": "4:55",
      "name": "toString",
      "description": "Преобразует значение в строку",
      "lodash": `
_.toString(null);
// => ''
_.toString(undefined);
// => ''
_.toString([1, 2, 3]);
// => 1,2,3
_.toString(-0);
// => '-0'
_.toString(0);
// => '0'
_.toString();
// => ''
_.toString('');
// => ''
_.toString('text');
// => 'text'
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function toString(value) {
  if(value == null) {
    return '';
  }
  if(Object.is(-0, value)) return '-0';
  return (value).toString();
}

toString(null);
// => ''
toString(undefined);
// => ''
toString([1, 2, 3]);
// => 1,2,3
toString(-0);
// => '-0'
toString(0);
// => '0'
toString();
// => ''
toString('');
// => ''
toString('text');
// => 'text'
      `,
    }
  ]
},
{
  "key": 5,
  "title": "Math",
  "visible": true,
  "content": [
    {
      "key": "5:0",
      "name": "add",
      "description": "складывание 2-х чисел",
      "lodash": `
_.add(4, 6);
// => 10
_.add('4', '6');
// => '46'
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
4 + 6;
// => 10
'4' + '6';
// => '46'
      `,
    },
    {
      "key": "5:1",
      "name": "ceil",
      "description": "Округляет число в большую сторону",
      "lodash": `
_.ceil(4.006);
// => 5
_.ceil(6.004, 2);
// => 6.01
_.ceil(6040, -2);
// => 6100
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function ceil(value, decimals) {
  if(decimals === undefined || +decimals === 0) {
    return Math.ceil(value);
  }
  if (isNaN(value) || !(typeof decimals === 'number' && decimals % 1 === 0)) {
    return NaN;
  }
  if (decimals > 0) {
    return Number(Math.ceil(value+'e'+decimals)+'e-'+decimals);
  }
  if (decimals < 0) {
    return Number(Math.ceil(value+'e'+decimals)+'e'+ Math.abs(decimals));
  }
}

ceil(4.006);
// => 5
ceil(6.004, 2);
// => 6.01
ceil(6040, -2);
// => 6100
      `,
    },
    {
      "key": "5:2",
      "name": "divide",
      "description": "Разделить два числа",
      "lodash": `
_.divide(6, 4);
// => 1.5
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
6 / 4;
// => 1.5
      `,
    },
    {
      "key": "5:3",
      "name": "floor",
      "description": "Округляет число в меньшую стороун",
      "lodash": `
_.floor(4.006);
// => 4
_.floor(0.046, 2);
// => 0.04
_.floor(4060, -2);
// => 4000
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function floor(value, decimals) {
  if(decimals === undefined || +decimals === 0) {
    return Math.floor(value);
  }
  if (isNaN(value) || !(typeof decimals === 'number' && decimals % 1 === 0)) {
    return NaN;
  }
  if (decimals > 0) {
    return Number(Math.floor(value+'e'+decimals)+'e-'+decimals);
  }
  if (decimals < 0) {
    return Number(Math.floor(value+'e'+decimals)+'e'+ Math.abs(decimals));
  }
}

floor(4.006);
// => 4
floor(0.046, 2);
// => 0.04
floor(4060, -2);
// => 4000
      `,
    },
    {
      "key": "5:4",
      "name": "max",
      "description": "Максимальное значение массива",
      "lodash": `
_.max([4, 2, 8, 6]);
// => 8
      `,
      "underscore": `
_.max([4, 2, 8, 6]);
// => 8
      `,
      "vanillaJavaScript": `
Math.max(...[4, 2, 8, 6]);
// => 8
      `,
    },
    {
      "key": "5:5",
      "name": "maxBy",
      "description": "Максимальное значение массива состоящего из объектов",
      "lodash": `
const objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 3 }, { 'n' : 2 }];

_.maxBy(objects, function(o) { return o.n; });
// => {n: 3}
_.maxBy(objects, 'n');
// => {n: 3}
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 3 }, { 'n' : 2 }];

objects.reduce((acc, cur) => {
  if(acc.n < cur.n) acc = cur;
  return acc;
})
// => {n: 3}
      `,
    },
    {
      "key": "5:6",
      "name": "mean",
      "description": "Среднее значение массива",
      "lodash": `
const arr = [4, 2, 8, 6];

_.mean(arr);
// => 5
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const arr = [4, 2, 8, 6];

arr.reduce((sum, current) => sum + current) / arr.length;
// => 5
      `,
    },
    {
      "key": "5:7",
      "name": "meanBy",
      "description": "Среднее значение массива состоящее из объектов",
      "lodash": `
const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

_.meanBy(objects, 'n');
// => 5
_.meanBy(objects, o => o.n);
// => 5
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

objects.reduce((sum, current) => sum + current.n, 0) / objects.length;
// => 5
      `,
    },
    {
      "key": "5:8",
      "name": "min",
      "description": "Минимальное значение массива",
      "lodash": `
_.min([4, 2, 8, 6]);
// => 2
      `,
      "underscore": `
_.min([4, 2, 8, 6]);
// => 2
      `,
      "vanillaJavaScript": `
Math.min(...[4, 2, 8, 6]);
// => 2
      `,
    },
    {
      "key": "5:9",
      "name": "minBy",
      "description": "Минимальное значение массива состоящего из объектов",
      "lodash": `
const objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 3 }, { 'n' : 2 }];

_.minBy(objects, function(o) { return o.n; });
// => {n: 1}
_.minBy(objects, 'n';
// => {n: 1}
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 3 }, { 'n' : 2 }];

objects.reduce((acc, cur) => {
  if(acc.n > cur.n) acc = cur;
  return acc;
})
// => {n: 1}
      `,
    },
    {
      "key": "5:10",
      "name": "multiply",
      "description": "Умножение",
      "lodash": `
_.multiply(6, 4);
// => 24
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
6 * 4;
// => 24
      `,
    },
    {
      "key": "5:11",
      "name": "round",
      "description": "Округляет число до ближайшего числа",
      "lodash": `
_.round(4.006);
// => 4
_.round(6.004, 2);
// => 6
_.round(6040, -2);
// => 6000
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function round(value, decimals) {
  if(decimals === undefined || +decimals === 0) {
    return Math.round(value);
  }
  if (isNaN(value) || !(typeof decimals === 'number' && decimals % 1 === 0)) {
    return NaN;
  }
  if (decimals > 0) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }
  if (decimals < 0) {
    return Number(Math.round(value+'e'+decimals)+'e'+ Math.abs(decimals));
  }
}

round(4.006);
// => 4
round(6.004, 2);
// => 6
round(6040, -2);
// => 6000
      `,
    },
    {
      "key": "5:12",
      "name": "subtract",
      "description": "Вычитание",
      "lodash": `
_.subtract(6, 4);
// => 2
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
6 - 4;
// => 2
      `,
    },
    {
      "key": "5:13",
      "name": "sum",
      "description": "Сумма всех элементов массива",
      "lodash": `
_.sum([4, 2, 8, 6]);
// => 20
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
[4, 2, 8, 6].reduce((sum, current) => sum + current);
// => 20
      `,
    },
    {
      "key": "5:14",
      "name": "sumBy",
      "description": "Сумма всех элементов массива состоящего из объектов",
      "lodash": `
const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

_.sumBy(objects, function(o) { return o.n; });
// => 20
_.sumBy(objects, 'n');
// => 20
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

objects.reduce((sum, current) => sum + current.n, 0);
// => 20
      `,
    }
  ]
},
{
  "key": 6,
  "title": "Number",
  "visible": true,
  "content": [
    {
      "key": "6:0",
      "name": "clamp",
      "description": "Возвращает число если оно входит в диапазон, если нет то верхнюю или нижнюю границу в зависимости от того, число положительное или отрицательное.",
      "lodash": `
_.clamp(-10, -5, 5);
// => -5
_.clamp(-3, -5, 5);
// => -3
_.clamp(0, -5, 5);
// => 0
_.clamp(4, -5, 5);
// => 4
_.clamp(10, -5, 5);
// => 5
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function clamp(num, lower, upper) {
  if(num >= lower && num <= upper) return num;
  if(num < lower) return lower;
  if(num > upper) return upper;
}

clamp(-10, -5, 5);
// => -5
clamp(-3, -5, 5);
// => -3
clamp(0, -5, 5);
// => 0
clamp(4, -5, 5);
// => 4
clamp(10, -5, 5);
// => 5
      `,
    },
    {
      "key": "6:1",
      "name": "inRange",
      "description": "Проверяет входит ли число в заданный диапазон",
      "lodash": `
_.inRange(4, 8);
// => true
_.inRange(-4, 8);
// => false
_.inRange(3, 2, 4);
// => true
_.inRange(4, 2);
// => false
_.inRange(2, 2);
// => false
_.inRange(-3, -2, -6);
// => true
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function inRange(num, start, end){
  if(arguments.length <= 1) return false
  if(arguments.length == 2) {
    end = start;
    start = 0;
  }
  if(end < start) [start, end] = [end, start];
  if(num > start && num < end) return true;
  return false;
}

inRange(4, 8);
// => true
inRange(-4, 8);
// => false
inRange(3, 2, 4);
// => true
inRange(4, 2);
// => false
inRange(2, 2);
// => false
inRange(-3, -2, -6);
// => true
      `,
    },
    {
      "key": "6:2",
      "name": "random",
      "description": "Возвращает случайное число",
      "lodash": `
_.random(0, 5);
// => целое число от 0 до 5
_.random(1.2, 5.2);
// => число с плавающей точкой между 1.2 и 5.2
_.random(5);
// => целое число от 0 до 5
_.random(5.2);
// => число с плавающей точкой между 0 и 5.2
_.random(5, true);
// => число с плавающей точкой между 0 и 5
      `,
      "underscore": `
_.random(0, 5);
// => целое число от 0 до 5
_.random(1.2, 5.2);
// => число с плавающей точкой между 1.2 и 5.2
      `,
      "vanillaJavaScript": `
function random(start, end) {
  if(end === undefined)
    if(Number.isInteger(start))
      return Math.floor( Math.random( ) * (start+1) );
    else
      return Math.random() * (start+1);
  if(end === true)
    return Math.random( ) * (start+1);
  if(Number.isInteger(start) && Number.isInteger(end) )
    return Math.floor(Math.random( ) * (start - end + 1)) + end;
  else
    return Math.random( ) * (start - end + 1) + end;
}

random(0, 5);
// => целое число от 0 до 5
random(1.2, 5.2);
// => число с плавающей точкой между 1.2 и 5.2
random(5);
// => целое число от 0 до 5
random(5.2);
// => число с плавающей точкой между 0 и 5.2
random(5, true);
// => число с плавающей точкой между 0 и 5
      `,
    }
  ]
},
{
  "key": 7,
  "title": "Object",
  "visible": true,
  "content": [
    {
      "key": "7:0",
      "name": "assign",
      "description": "Присваивает собственные перечисляемые строковые свойства исходных объектов целевому объекту.",
      "lodash": `
function Foo() {
  this.a = 1;
}

Foo.prototype.b = 2;

function Bar() {
  this.c = 3;
}

Bar.prototype.d = 4;

_.assign({ 'a': 0 }, new Foo, new Bar);
// => { a: 1, c: 3 }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
}

Foo.prototype.b = 2;

function Bar() {
  this.c = 3;
}

Bar.prototype.d = 4;

Object.assign({ 'a': 0 }, new Foo, new Bar);
// => { a: 1, c: 3 }
{...{'a': 0}, ...new Foo, ...new Bar};
// => { a: 1, c: 3 }
      `,
    },
    {
      "key": "7:1",
      "name": "assignIn",
      "description": "Этот метод похож на _.assign, за исключением того, что он перебирает собственные и унаследованные исходные свойства.",
      "lodash": `
function Foo() {
  this.a = 1;
}

Foo.prototype.b = 2;

function Bar() {
  this.c = 3;
}

Bar.prototype.d = 4;

_.assignIn({ 'a': 0 }, new Foo, new Bar);
// => { a: 1, b: 2, c: 3, d: 4 }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
}

Foo.prototype.b = 2;

function Bar() {
  this.c = 3;
}

Bar.prototype.d = 4;

function assignIn(...objects) {
  let newObj = {};
  objects.forEach(obj => {
    for (let prop in obj) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
}

assignIn({ 'a': 0 }, new Foo, new Bar);
// => { a: 1, b: 2, c: 3, d: 4 }
      `,
    },
    {
      "key": "7:2",
      "name": "assignInWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:3",
      "name": "assignWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:4",
      "name": "at",
      "description": "Создает массив значений, соответствующих путям объекта.",
      "lodash": `
const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

_.at(object, ['a[0].b.c', 'a[1]', 'a[3]']);
// => [ 3, 4, undefined ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

[object.a[0].b.c, object.a[1], object.a[3]];
// => [ 3, 4, undefined ]

function at(obj, arr) {
  arr = arr.map(patch => {
    let el = patch.replace(']', '').split(/\\.|\\[/);
    let o = obj;
    el.forEach(pop => {
      o = o[pop];
    });
    return o;
  });
  return arr;
}

at(object, ['a[0].b.c', 'a[1]', 'a[3]']);
// => [ 3, 4, undefined ]
      `,
    },
    {
      "key": "7:5",
      "name": "create",
      "description": "Создает объект, который наследуется от объекта-прототипа.",
      "lodash": `
function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});

const circle = new Circle();

circle instanceof Circle;
// => true
circle instanceof Shape;
// => true
      `,
      "underscore": `
function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});

const circle = new Circle();

circle instanceof Circle;
// => true
circle instanceof Shape;
// => true
      `,
      "vanillaJavaScript": `
function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = Object.create(Shape.prototype, {
  'constructor': {
    value: Circle
  }
});

const circle = new Circle();

circle instanceof Circle;
// => true
circle instanceof Shape;
// => true
      `,
    },
    {
      "key": "7:6",
      "name": "defaults",
      "description": "Назначает собственные и унаследованные перечисляемые строковые свойства исходных объектов целевому объекту для всех свойств назначения, которые разрешаются в значение undefined. ",
      "lodash": `
function Foo() {
  this.a = 111;
}

Foo.prototype.c = 3;

_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { a: 1, b: 2 }
_.defaults({ 'a': 1 }, { 'b': 2 }, new Foo(), { 'a': 3 });
// => { a: 1, b: 2, c: 3 }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 111;
}

Foo.prototype.c = 3;

function defaults(object, ...objects) {
  let obj = Object.assign({}, object);
  objects.forEach(o => {
    for (let prop in o) {
      if(!(prop in obj)) obj[prop] = o[prop];
    }
  });
  return obj;
}

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { a: 1, b: 2 }
defaults({ 'a': 1 }, { 'b': 2 }, new Foo(), { 'a': 3 });
// => { a: 1, b: 2, c: 3 }
      `,
    },
    {
      "key": "7:7",
      "name": "defaultsDeep",
      "description": "Этот метод похож на _.defaults, за исключением того, что он рекурсивно присваивает свойства по умолчанию.",
      "lodash": `
_.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// => { a: { b: 2, c: 3 } }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function defaultsDeep(object, ...objects) {
  objects.forEach(obj => {
    for (let prop in obj) {
      if(
        Object.prototype.toString.call(obj[prop]) === "[object Object]" &&
        obj[prop] !== null
      ) {
        object[prop] = Object.assign(obj[prop], object[prop]);
      } else {
        object[prop] = obj[prop];
      }
    }
  });
  return object;
}

defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// => { a: { b: 2, c: 3 } }
      `,
    },
    {
      "key": "7:8",
      "name": "entries -> toPairs",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:9",
      "name": "entriesIn -> toPairsIn",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:10",
      "name": "extend -> assignIn",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:11",
      "name": "extendWith -> assignInWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:12",
      "name": "findKey",
      "description": "Этот метод подобен _.find, за исключением того, что он возвращает ключ первого элемента, предикат возвращает true вместо самого элемента.",
      "lodash": `
var users = {
  'barney':  { 'age': 36, 'active': true },
  'pebbles': { 'age': 1,  'active': true },
  'fred':    { 'age': 40, 'active': false }
};

_.findKey(users, function(o) { return o.age < 40; });
// => barney
_.findKey(users, { 'age': 1, 'active': true });
// => pebbles
_.findKey(users, { 'age': 1, });
// => pebbles
_.findKey(users, ['active', false]);
// => fred
_.findKey(users, 'active');
// => barney
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var users = {
  'barney':  { 'age': 36, 'active': true },
  'pebbles': { 'age': 1,  'active': true },
  'fred':    { 'age': 40, 'active': false }
};

const strategy = {};

strategy.functionFindKey = (obj, value) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if(value(obj[prop])) return prop;
    }
  }
  return false;
}

strategy.stringFindKey = (obj, value) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if(obj[prop][value] !== undefined) return prop;
    }
  }
  return false;
}

strategy.arrayFindKey = (obj, value) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if(obj[prop][value[0]] === value[1]) return prop;
    }
  }
  return false;
}

strategy.objectFindKey = (obj, value) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      let isEqual = false;
        for (let p in value) {
          if(obj[prop][p] === value[p]) isEqual = true;
          if(isEqual === false) break;
        }
        if(isEqual === true) return prop;
    }
  }
  return false;
}

function findKey(obj, value) {
  if(Array.isArray(value)) return strategy['arrayFindKey'](obj, value);
  return strategy[typeof value + 'FindKey'](obj, value);
}

findKey(users, function(o) { return o.age < 40; });
// => barney
findKey(users, { 'age': 1, 'active': true });
// => pebbles
findKey(users, { 'age': 1, });
// => pebbles
findKey(users, ['active', false]);
// => fred
findKey(users, 'active');
// => barney
      `,
    },
    {
      "key": "7:13",
      "name": "findLastKey",
      "description": "Этот метод похож на _.findKey, за исключением того, что он перебирает элементы коллекции в обратном порядке.",
      "lodash": `
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findLastKey(users, function(o) { return o.age < 40; });
// => pebbles
_.findLastKey(users, { 'age': 36, 'active': true });
// => barney
_.findLastKey(users, ['active', false]);
// => fred
_.findLastKey(users, 'active');
// => pebbles
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

const strategy = {};

strategy.functionFindKey = (obj, value) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if(value(obj[prop])) return prop;
    }
  }
  return false;
}

strategy.stringFindKey = (obj, value) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if(obj[prop][value] !== undefined) return prop;
    }
  }
  return false;
}

strategy.arrayFindKey = (obj, value) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if(obj[prop][value[0]] === value[1]) return prop;
    }
  }
  return false;
}

strategy.objectFindKey = (obj, value) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      let isEqual = false;
        for (let p in value) {
          if(obj[prop][p] === value[p]) isEqual = true;
          if(isEqual === false) break;
        }
        if(isEqual === true) return prop;
    }
  }
  return false;
}

function findLastKey(obj, value) {
  let arrObj = Object.entries(obj).reverse();
  obj = Object.fromEntries(arrObj);
  if(Array.isArray(value)) return strategy['arrayFindKey'](obj, value);
  return strategy[typeof value + 'FindKey'](obj, value);
}

findLastKey(users, function(o) { return o.age < 40; });
// => pebbles
findLastKey(users, { 'age': 36, 'active': true });
// => barney
findLastKey(users, ['active', false]);
// => fred
findLastKey(users, 'active');
// => pebbles
      `,
    },
    {
      "key": "7:14",
      "name": "forIn",
      "description": "Перебирает собственные и унаследованные перечисляемые строковые свойства объекта и вызывает итерацию для каждого свойства.",
      "lodash": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forIn(new Foo, function(value, key) {
  console.log(key, value);
});
// => a 1
// => b 2
// => c 3
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

function forIn(obj, callback) {
  for (let key in obj) {
    callback(obj[key], key);
  }
}

forIn(new Foo, function (value, key) {
  console.log(key, value);
});
// => a 1
// => b 2
// => c 3
      `,
    },
    {
      "key": "7:15",
      "name": "forInRight",
      "description": "Этот метод похож на _.forIn, за исключением того, что он перебирает свойства объекта в обратном порядке.",
      "lodash": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forInRight(new Foo, function(value, key) {
  console.log(key, value);
});
// => c 3
// => b 2
// => a 1
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

function forInRight(obj, fn) {
  let arr = [];
  for (let prop in obj) {
    arr.push([prop, obj[prop]]);
  }
  for (let i = arr.length - 1; i >= 0; --i) {
    callback(arr[i][1], arr[i][0])
  }
}

forInRight(new Foo, function (value, key) {
  console.log(key, value);
});
// => c 3
// => b 2
// => a 1
      `,
    },
    {
      "key": "7:16",
      "name": "forOwn",
      "description": "Перебирает собственные перечисляемые свойства объекта.",
      "lodash": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forOwn(new Foo, function(value, key) {
  console.log(key, value);
});
// => a 1
// => b 2
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

function forOwn(obj, callback) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      callback(obj[key], key);
    }
  }
}

forOwn(new Foo, function (value, key) {
  console.log(key, value);
});
// => a 1
// => b 2
      `,
    },
    {
      "key": "7:17",
      "name": "forOwnRight",
      "description": "Этот метод похож на _.forOwn, за исключением того, что он перебирает свойства объекта в обратном порядке.",
      "lodash": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forOwnRight(new Foo, function(value, key) {
  console.log(key, value);
});
// => b 2
// => a 1
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

function forOwnRight(obj, callback) {
  let arr = Object.entries(obj);
  for (let i = arr.length - 1; i >= 0; --i) {
    callback(arr[i][1], arr[i][0])
  }
}

forOwnRight(new Foo, function (value, key) {
  console.log(key, value);
});
// => b 2
// => a 1
      `,
    },
    {
      "key": "7:18",
      "name": "functions",
      "description": "Создает массив имен свойств функции из собственных перечисляемых свойств объекта.",
      "lodash": `
function Foo() {
  this.a = () => 'a';
  this.b = function() { return 'b' };
  this.c = 'c';
}

Foo.prototype.d = function() { return 'd' };

_.functions(new Foo);
// => [ 'a', 'b' ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = () => 'a';
  this.b = function() { return 'b' };
  this.c = 'c';
}

Foo.prototype.d = function() { return 'd' };

function functions(obj) {
  const result = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] === 'function') {
      result.push(prop);
    }
  }
  return result;
}

functions(new Foo);
// => [ 'a', 'b' ]
      `,
    },
    {
      "key": "7:19",
      "name": "functionsIn",
      "description": "Создает массив имен свойств функций из собственных и унаследованных перечисляемых свойств объекта.",
      "lodash": `
function Foo() {
  this.a = () => 'a';
  this.b = function() { return 'b' };
  this.c = 'c';
}

Foo.prototype.d = function() { return 'd' };

_.functionsIn(new Foo);
// => [ 'a', 'b', 'd' ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = () => 'a';
  this.b = function() { return 'b' };
  this.c = 'c';
}

Foo.prototype.d = function() { return 'd' };

function functionsIn(obj) {
  const result = [];
  for (let prop in obj) {
    if (typeof obj[prop] === 'function') {
      result.push(prop);
    }
  }
  return result;
}

functionsIn(new Foo);
// => [ 'a', 'b', 'd' ]
      `,
    },
    {
      "key": "7:20",
      "name": "get",
      "description": "Получает значение по пути объекта. ",
      "lodash": `
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

_.get(object, 'a[0].b.c');
// => 3
_.get(object, ['a', '0', 'b', 'c']);
// => 3
_.get(object, 'a.b.c', 'default');
// => default
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

function get(obj, patch, defaultValue = undefined) {
  let o = obj;
  if(typeof patch === 'string') patch = patch.replace('[', '.').replace(']', '').split('.');
  if (Array.isArray(patch)) {
    for (let i = 0; i < patch.length; i++) {
      if(patch[i] in o) {
        o = o[patch[i]];
      } else {
        return defaultValue;
      }
    }
    return o;
  } else {
    return defaultValue;
  }
}

get(object, 'a[0].b.c');
// => 3
get(object, ['a', '0', 'b', 'c']);
// => 3
get(object, 'a.b.c', 'default');
// => default
      `,
    },
    {
      "key": "7:21",
      "name": "has",
      "description": "Проверяет есть ли собственное свойство в объекте",
      "lodash": `
const object = { 'a': { 'b': 2 } };
const other = _.create({ 'a': _.create({ 'b': 2 }) });

_.has(object, 'a');
// => true
_.has(object, 'a.b');
// => true
_.has(other, 'a');
// => false
      `,
      "underscore": `
const object = { 'a': { 'b': 2 } };
const other = _.create({ 'a': _.create({ 'b': 2 }) });

_.has(object, 'a');
// => true
_.has(object, 'a.b');
// => false
_.has(other, 'a');
// => false
      `,
      "vanillaJavaScript": `
const object = { 'a': { 'b': 2 } };
const other = Object.create({ 'a': Object.create({'b': 2}) });

object.hasOwnProperty('a');
// => true
object.a.hasOwnProperty('b');
// => true
other.hasOwnProperty('a');
// => false

Object.hasOwn(object, 'a');
// => true
Object.hasOwn(object.a, 'b');
// => true
Object.hasOwn(other, 'a');
// => false
      `,
    },
    {
      "key": "7:22",
      "name": "hasIn",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:23",
      "name": "invert",
      "description": "Создает объект, состоящий из инвертированных ключей и значений объекта.",
      "lodash": `
_.invert({ 'a': 1, 'b': 2, 'c': 1 });
// => { '1': 'c', '2': 'b' }
      `,
      "underscore": `
_.invert({ 'a': 1, 'b': 2, 'c': 1 });
// => { '1': 'c', '2': 'b' }
      `,
      "vanillaJavaScript": `
function invert(obj) {
  let newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[obj[prop]] = prop;
    }
  }
  return newObj;
}

invert({ 'a': 1, 'b': 2, 'c': 1 });
// => { '1': 'c', '2': 'b' }
      `,
    },
    {
      "key": "7:24",
      "name": "invertBy",
      "description": "Меняет местами ключи и значения, значение ключа можно изменить с помощью переданной функции",
      "lodash": `
var object = { 'a': 1, 'b': 2, 'c': 1};

_.invertBy(object);
// => { '1': [ 'a', 'c' ], '2': [ 'b' ] }
_.invertBy(object, value => 'group' + value);
// => { group1: [ 'a', 'c' ], group2: [ 'b' ] }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var object = { 'a': 1, 'b': 2, 'c': 1};

function invertBy(obj, fn = (value) => value) {
  let newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if(!Array.isArray(newObj[fn(obj[prop])]))
        newObj[fn(obj[prop])] = [];
      newObj[fn(obj[prop])].push(prop)
    }
  }
  return newObj;
}

invertBy(object);
// => { '1': [ 'a', 'c' ], '2': [ 'b' ] }
invertBy(object, value => 'group' + value);
// => { group1: [ 'a', 'c' ], group2: [ 'b' ] }
      `,
    },
    {
      "key": "7:25",
      "name": "invoke",
      "description": "Вызывает метод по пути объекта.",
      "lodash": `
var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

_.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [ 2, 3 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

object.a[0].b.c.slice(1, 3);
// => [ 2, 3 ]

function invoke(obj, pathAndMethod, ...args) {
  let pam = pathAndMethod.replace(']', '').split(/\\.|\\[/);
  let o = obj;
  pam.slice(0, -1).forEach(pop => {
    o = o[pop];
  });
  const funcName = pam[pam.length - 1];
  return o[funcName](...args);
}

invoke(object, 'a[0].b.c.slice', 1, 3);
// => [ 2, 3 ]
      `,
    },
    {
      "key": "7:26",
      "name": "keys",
      "description": "Создает массив имен собственных перечисляемых свойств объекта.",
      "lodash": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.keys(new Foo);
// => [ 'a', 'b' ]
_.keys('hi');
// => [ '0', '1' ]
      `,
      "underscore": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.keys(new Foo);
// => [ 'a', 'b' ]
_.keys('hi');
// => []
      `,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

Object.keys(new Foo);
// => [ 'a', 'b' ]
Object.keys('hi');
// => [ '0', '1' ]
      `,
    },
    {
      "key": "7:27",
      "name": "keysIn",
      "description": "Создает массив имен собственных и унаследованных перечисляемых свойств объекта.",
      "lodash": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.keysIn(new Foo);
// => [ 'a', 'b', 'c' ]
      `,
      "underscore": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.allKeys(new Foo);
// => [ 'a', 'b', 'c' ]
      `,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

function keysIn(obj) {
  let arr = [];
  for (let prop in obj) {
    arr.push(prop);
  }
  return arr;
}

keysIn(new Foo);
// => [ 'a', 'b', 'c' ]
      `,
    },
    {
      "key": "7:28",
      "name": "mapKeys",
      "description": "Возвращает изменённый объект с новыми значениями свойств",
      "lodash": `
_.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { a1: 1, b2: 2 }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function mapKeys(obj, callback) {
  let objKey = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      objKey[callback(obj[prop], prop)] = obj[prop];
    }
  }
  return objKey;
}

mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { a1: 1, b2: 2 }
      `,
    },
    {
      "key": "7:29",
      "name": "mapValues",
      "description": "Создаёт объект с теми же ключами, но с изменёнными значениями",
      "lodash": `
var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};

_.mapValues(users, function(o) { return o.age; });
// => { fred: 40, pebbles: 1 }
_.mapValues(users, 'age');
// => { fred: 40, pebbles: 1 }
_.mapValues(users, function(o) {return 12;});
// => { fred: 12, pebbles: 12 }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};

function mapValues(obj, value) {
  let newObj = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if(typeof value === 'function'){
        newObj[prop] = value(obj[prop]);
      } else {
        newObj[prop] = obj[prop][value];
      }
    }
  }
  return newObj;
}

mapValues(users, function(o) { return o.age; });
// => { fred: 40, pebbles: 1 }
mapValues(users, 'age');
// => { fred: 40, pebbles: 1 }
mapValues(users, function(o) {return 12;});
// => { fred: 12, pebbles: 12 }
      `,
    },
    {
      "key": "7:30",
      "name": "merge",
      "description": "Этот метод аналогичен _.assign, за исключением того, что он рекурсивно объединяет собственные и унаследованные перечисляемые строковые свойства исходных объектов с целевым объектом.",
      "lodash": `
const object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
const other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

_.merge(object, other);
// => { a: [ { b: 2, c: 3 }, { d: 4, e: 5 } ] }
_.merge({ cpp: "12" }, { cpp: "23" }, { java: "23" }, { python:"35" });
// => { cpp: '23', java: '23', python: '35' }
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
const object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
const other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

object.a.map((el, i) => Object.assign(el, other.a[i]));
object;
// => { a: [ { b: 2, c: 3 }, { d: 4, e: 5 } ] }
Object.assign({ cpp: "12" }, { cpp: "23" }, { java: "23" }, { python:"35" });
// => { cpp: '23', java: '23', python: '35' }
      `,
    },
    {
      "key": "7:31",
      "name": "mergeWith",
      "description": "Этот метод похож на _.merge, за исключением того, что он принимает настройщик, который вызывается для создания объединенных значений свойств назначения и источника.",
      "lodash": `
var object = {
  'amit': [{ 'susanta': 20 }, { 'durgam': 40 }]
};

var other = {
  'amit': [{ 'chinmoy': 30 }, { 'kripamoy': 50 }]
};

_.mergeWith(object, other)
// => { ‘amit’: [{‘chinmoy’: 30, ‘susanta’: 20 }, { ‘durgam’: 40, ‘kripamoy’: 50 }] }

function customizer(obj, src) {
  if (_.isArray(obj)) {
    return obj.concat(src);
  }
}

var object1 = {
  'amit': [{ 'susanta': 20 }, { 'durgam': 40 }]
};

_.mergeWith(object1, other, customizer);
// => { ‘amit’: [{‘susanta’: 20 }, { ‘durgam’: 40}, {‘chinmoy’: 30}, {‘kripamoy’: 50 } ]}
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
var object = {
  'amit': [{ 'susanta': 20 }, { 'durgam': 40 }]
};

var other = {
  'amit': [{ 'chinmoy': 30 }, { 'kripamoy': 50 }]
};

object.amit.map((el, i) => Object.assign(el, other.amit[i]));
object;
// => { ‘amit’: [{‘chinmoy’: 30, ‘susanta’: 20 }, { ‘durgam’: 40, ‘kripamoy’: 50 }] }

var object1 = {
  'amit': [{ 'susanta': 20 }, { 'durgam': 40 }]
};

object1.amit = object1.amit.concat(other.amit);
object1;
// => { ‘amit’: [{‘susanta’: 20 }, { ‘durgam’: 40}, {‘chinmoy’: 30}, {‘kripamoy’: 50 } ]}
      `,
    },
    {
      "key": "7:32",
      "name": "omit",
      "description": "Противоположность _.pick; этот метод создает объект, состоящий из собственных и унаследованных перечисляемых путей свойств объекта, которые не опущены.",
      "lodash": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omit(object, ['a', 'c']);
// => { b: '2' }
      `,
      "underscore": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omit(object, 'a', 'c');
// => { b: '2' }
_.omit(object, ['a', 'c']);
// => { b: '2' }
      `,
      "vanillaJavaScript": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

function omit(obj, arr) {
  let newObj = {};
  for (let prop in obj) {
    if (!arr.includes(prop) && obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}

omit(object, ['a', 'c']);
// => { b: '2' }
      `,
    },
    {
      "key": "7:33",
      "name": "omitBy",
      "description": "Противоположность _.pickBy; этот метод создает объект, состоящий из собственных и унаследованных перечисляемых строковых свойств с ключом объекта, для которого предикат не возвращает истинности.",
      "lodash": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omit(object, (value, key, obj) => ['a', 'c'].includes(key));
// => { b: '2' }
      `,
      "underscore": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omit(object, (value, key, obj) => ['a', 'c'].includes(key));
// => { b: '2' }
      `,
      "vanillaJavaScript": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

function omitBy(obj, fn) {
  let newObj = {};
  for (let prop in obj) {
    if (!fn(obj[prop], prop, obj) && obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}

omitBy(object, (value, key, obj) => ['a', 'c'].includes(key));
// => { b: '2' }
      `,
    },
    {
      "key": "7:34",
      "name": "pick",
      "description": "Создает объект, состоящий из выбранных свойств объекта.",
      "lodash": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pick(object, ['a', 'c']);
// => { a: 1, c: 3 }
      `,
      "underscore": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pick(object, 'a', 'c');
// => { a: 1, c: 3 }
_.pick(object, ['a', 'c']);
// => { a: 1, c: 3 }
      `,
      "vanillaJavaScript": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

function pick(obj, arr) {
  let newObj = {};
  for (let prop in obj) {
    if (arr.includes(prop) && obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}

pick(object, ['a', 'c']);
// => { a: 1, c: 3 }
      `,
    },
    {
      "key": "7:35",
      "name": "pickBy",
      "description": "Создаёт объект удовлетворяющим свойствам переданной функции",
      "lodash": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pickBy(object, (value, key, obj) => ['a', 'c'].includes(key));
// => { a: 1, c: 3 }
      `,
      "underscore": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pick(object, (value, key, obj) => ['a', 'c'].includes(key));
// => { a: 1, c: 3 }
      `,
      "vanillaJavaScript": `
var object = { 'a': 1, 'b': '2', 'c': 3 };

function pickBy(obj, fn) {
  let newObj = {};
  for (let prop in obj) {
    if (fn(obj[prop], prop, obj) && obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}

pickBy(object, (value, key, obj) => ['a', 'c'].includes(key));
// => { a: 1, c: 3 }
      `,
    },
    {
      "key": "7:36",
      "name": "result",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:37",
      "name": "set",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:38",
      "name": "setWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:39",
      "name": "toPairs",
      "description": "Создает массив собственных перечисляемых пар ключ-значение",
      "lodash": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.toPairs(new Foo);
// => [ [ 'a', 1 ], [ 'b', 2 ] ]
_.entries(new Foo); // alias
// => [ [ 'a', 1 ], [ 'b', 2 ] ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

Object.entries(new Foo);
// => [ [ 'a', 1 ], [ 'b', 2 ] ]
      `,
    },
    {
      "key": "7:40",
      "name": "toPairsIn",
      "description": "Создает массив собственных и унаследованных перечислимых пар ключ-значение строки для объекта",
      "lodash": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.toPairsIn(new Foo);
// => [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
_.entriesIn(new Foo); // alias
// => [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

function toPairsIn(obj) {
  let arr = [];
  for(let prop in obj) {
    arr.push([prop, obj[prop]]);
  }
  return arr;
}

toPairsIn(new Foo);
// => [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
      `,
    },
    {
      "key": "7:41",
      "name": "transform",
      "description": "Альтернатива _.reduce; этот метод преобразует объект в новый объект-аккумулятор, который является результатом запуска каждого из его собственных перечисляемых строковых свойств с ключом через итерацию, при этом каждый вызов потенциально мутирует объект-аккумулятор.",
      "lodash": `
_.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': [ 'a', 'c' ], '2': [ 'b' ] }

_.transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, []);
// => [ 4, 9 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function transform(obj, callback, result = {}) {
  if(Array.isArray(result)) {
    for(let el of obj) {
      let isBreak = callback(result, el);
      if(!isBreak) break;
    }
  } else {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        callback(result, obj[key], key);
      }
    }
  }
  return result;
}

transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': [ 'a', 'c' ], '2': [ 'b' ] }

transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, [])
// => [ 4, 9 ]
      `,
    },
    {
      "key": "7:42",
      "name": "unset",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:43",
      "name": "update",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:44",
      "name": "updateWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "7:45",
      "name": "values",
      "description": "Создает массив значений собственных перечисляемых строковых ключей объекта.",
      "lodash": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.values(new Foo);
// => [ 1, 2 ]
_.values('hi');
// => [ 'h', 'i' ]
      `,
      "underscore": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.values(new Foo);
// => [ 1, 2 ]
_.values('hi');
// -> []
      `,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

Object.values(new Foo);
// => [ 1, 2 ]
Object.values('hi');
// => [ 'h', 'i' ]
      `,
    },
    {
      "key": "7:46",
      "name": "valuesIn",
      "description": "Создает массив собственных и унаследованных перечисляемых строковых значений свойств объекта.",
      "lodash": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.valuesIn(new Foo);
// => [ 1, 2, 3 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

function valuesIn(obj) {
  let arr = [];
  for (let prop in obj) {
    arr.push(obj[prop]);
  }
  return arr;
}

valuesIn(new Foo);
// => [ 1, 2, 3 ]
      `,
    }
  ]
},
{
  "key": 8,
  "title": "Seq",
  "visible": true,
  "content": [
    {
      "key": "8:0",
      "name": "_",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:1",
      "name": "_.chain",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:2",
      "name": "_.tap",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:3",
      "name": "_.thru",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:4",
      "name": "_.prototype[Symbol.iterator]",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:5",
      "name": "_.prototype.at",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:6",
      "name": "_.prototype.chain",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:7",
      "name": "_.prototype.commit",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:8",
      "name": "_.prototype.next",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:9",
      "name": "_.prototype.plant",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:10",
      "name": "_.prototype.reverse",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:11",
      "name": "_.prototype.toJSON -> value",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:12",
      "name": "_.prototype.value",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "8:13",
      "name": "_.prototype.valueOf -> value",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    }
  ]
},
{
  "key": 9,
  "title": "String",
  "visible": true,
  "content": [
    {
      "key": "9:0",
      "name": "camelCase",
      "description": "Преобразует строку к верблюжьей нотацией",
      "lodash": `
_.camelCase('--foo-bar');
// => fooBar
_.camelCase('foo Bar');
// => fooBar
_.camelCase('fooBAR');
// => fooBar
_.camelCase('fooBar');
// => fooBar
_.camelCase('__foo_bar__');
// => fooBar
_.camelCase('--123-12bb-bar');
// => 12312BbBar
_.camelCase('текстДоп');
// => текстдоп
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function camelCase(str) {
  let arrStr = str.match(/\\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
  if(arrStr === null) {
    return str.toLowerCase();
  } else {
    let strCamelCase = arrStr.map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join('');
    return strCamelCase[0].toLowerCase() + strCamelCase.slice(1);
  }
}

camelCase('--foo-bar');
// => fooBar
camelCase('foo Bar');
// => fooBar
camelCase('fooBAR');
// => fooBar
camelCase('fooBar');
// => fooBar
camelCase('__foo_bar__');
// => fooBar
camelCase('--123-12bb-bar');
// => 12312BbBar
camelCase('текстДоп');
// => текстдоп
      `,
    },
    {
      "key": "9:1",
      "name": "capitalize",
      "description": "Преобразует первый символ строки в верхний регистр, а остальные — в нижний.",
      "lodash": `
_.capitalize('FRED');
// => Fred
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

capitalize('FRED');
// => Fred
      `,
    },
    {
      "key": "9:2",
      "name": "deburr",
      "description": "Удаляет заусенцы в строке путем преобразования букв Latin-1 Supplement и Latin Extended-A в основные латинские буквы и удаления комбинированных диакритических знаков.",
      "lodash": `
_.deburr('déjà vu');
// => deja vu
_.deburr('ąśćńżółźćę');
// => ascnzolzce
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function deburr(str) {
  str = str.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "");
  return str.replace(/\\u0142/g, "l");
}

deburr('déjà vu');
// => deja vu
deburr('ąśćńżółźćę');
// => ascnzolzce
      `,
    },
    {
      "key": "9:3",
      "name": "endsWith",
      "description": "Проверяет, заканчивается ли строка заданной целевой строкой.",
      "lodash": `
_.endsWith('abc', 'c');
// => true
_.endsWith('abc', 'b');
// => false
_.endsWith('abc', 'b', 2);
// => true
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
'abc'.endsWith('c');
// => true
'abc'.endsWith('b');
// => false
'abc'.endsWith('b', 2);
// => true
      `,
    },
    {
      "key": "9:4",
      "name": "escape",
      "description": `Преобразует символы "&", "<", ">", "\"", "'" в HMLL спецсимволы`,
      "lodash": `
_.escape(\` & < > ' текст " text\`);
// => &amp; &lt; &gt; &#39; текст &quot; text
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function escape(str) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  };
  return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}

escape(\` & < > ' текст " text\`);
// => &amp; &lt; &gt; &#39; текст &quot; text
      `,
    },
    {
      "key": "9:5",
      "name": "escapeRegExp",
      "description": `Экранирование символов в RegExp "^", "$", "'", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", "|"`,
      "lodash": `
_.escapeRegExp('[lodash](https://lodash.com/)');
// \\[lodash\\]\\(https://lodash\\.com/\\)
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function escapeRegExp(str) {
  return str.replace(/[|\\\\{}()[\]^$+*?.-]/g, "\\$&");
}
escapeRegExp('[lodash](https://lodash.com/)');
// \\[lodash\\]\\(https://lodash\\.com/\\)
      `,
    },
    {
      "key": "9:6",
      "name": "kebabCase",
      "description": "Преобразует строку к шашлычной нотации",
      "lodash": `
_.kebabCase('--foo-bar');
// => foo-bar
_.kebabCase('fooBar');
// => foo-bar
_.kebabCase('fooBAR');
// => foo-bar
_.kebabCase('__foo_bar__');
// => foo-bar
_.kebabCase('--123-12bb-bar');
// => 123-12-bb-bar
_.kebabCase('текстДоп');
// => текстдоп
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function kebabCase(str) {
  let arrStr = str.match(/\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
  if(arrStr === null)
    return str.toLowerCase();
  else
    return arrStr.map(s => s.toLowerCase()).join('-');
}

kebabCase('--foo-bar');
// => foo-bar
kebabCase('fooBar');
// => foo-bar
kebabCase('fooBAR');
// => foo-bar
kebabCase('__foo_bar__');
// => foo-bar
kebabCase('--123-12bb-bar');
// => 123-12-bb-bar
kebabCase('текстДоп');
// => текстдоп
      `,
    },
    {
      "key": "9:7",
      "name": "lowerCase",
      "description": "Преобразует строку в виде слов, разделенных пробелами, в нижний регистр.",
      "lodash": `
_.lowerCase('--foo-bar');
// => foo bar
_.lowerCase('fooBar');
// => foo bar
_.lowerCase('fooBAR');
// => foo bar
_.lowerCase('__foo_bar__');
// => foo bar
_.lowerCase('--123-12bb-bar');
// => 123 12 bb bar
_.lowerCase('текстДоп');
// => текстдоп
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function lowerCase(str) {
  let arrStr = str.match(/\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
  if(arrStr === null)
    return str.toLowerCase();
  else
    return arrStr.map(s => s.toLowerCase()).join(' ');
}

lowerCase('--foo-bar');
// => foo bar
lowerCase('fooBar');
// => foo bar
lowerCase('fooBAR');
// => foo bar
lowerCase('__foo_bar__');
// => foo bar
lowerCase('--123-12bb-bar');
// => 123 12 bb bar
lowerCase('текстДоп');
// => текстдоп
      `,
    },
    {
      "key": "9:8",
      "name": "lowerFirst",
      "description": "Преобразует первый символ строки в нижний регистр.",
      "lodash": `
_.lowerFirst('Fred');
// => fred
_.lowerFirst('FRED');
// => fRED
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function lowerFirst(match) {
  return match.toLowerCase();
}

'Fred'.replace(/(\w)/, lowerFirst);
// => fred
'FRED'.replace(/(\w)/, lowerFirst);
// => fRED
      `,
    },
    {
      "key": "9:9",
      "name": "pad",
      "description": "Добавляет пробельные символы вокруг строки, если она короче длины",
      "lodash": `
_.pad('abc', 8);
// => '  abc   '
_.pad('abc', 8, '_-');
// => '_-abc_-_'
_.pad('abc', 3);
// => 'abc'
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function pad(str='', length=0, chars=' ') {
  let strLength = str.length;
  // количество символов на отступы с обоих сторон
  let paddingSrt = length - strLength;

  if(paddingSrt <= 0) return str;

  let paddingLeft = strLength + Math.floor((paddingSrt) / 2);
  let paddingRight = paddingLeft + Math.ceil((paddingSrt) / 2);

  return str.padStart(paddingLeft, chars).padEnd(paddingRight, chars);
}

pad('abc', 8);
// => '  abc   '
pad('abc', 8, '_-');
// => '_-abc_-_'
pad('abc', 3);
// => 'abc'
      `,
    },
    {
      "key": "9:10",
      "name": "padEnd",
      "description": "Добавляет пробельные символы в конце строки, если она короче длины",
      "lodash": `
_.padEnd('abc', 6);
// => 'abc   '
_.padEnd('abc', 6, '_-');
// => 'abc_-_'
_.padEnd('abc', 3);
// => 'abc'
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
'abc'.padEnd(6);
// => 'abc   '
'abc'.padEnd(6, '_-');
// => 'abc_-_'
'abc'.padEnd(3);
// => 'abc'
      `,
    },
    {
      "key": "9:11",
      "name": "padStart",
      "description": " Добавляет пробельные символы в начало строки, если она короче длины",
      "lodash": `
_.padStart('abc', 6);
// =>    abc
_.padStart('abc', 6, '_-');
// => _-_abc
_.padStart('abc', 3);
// => abc
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
'abc'.padStart(6);
// =>    abc
'abc'.padStart(6, '_-');
// => _-_abc
'abc'.padStart(3);
// => abc
      `,
    },
    {
      "key": "9:12",
      "name": "parseInt",
      "description": "Преобразует строку в целое число по указанной системе счисления.",
      "lodash": `
_.parseInt('08');
// => 8
_.map(['6', '08', '10'], _.parseInt);
// => [ 6, 8, 10 ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
parseInt('08');
// => 8
['6', '08', '10'].map(el => parseInt(el, 10));
// => [ 6, 8, 10 ]
      `,
    },
    {
      "key": "9:13",
      "name": "repeat",
      "description": "Повторяет заданную строку n раз.",
      "lodash": `
_.repeat('*', 3);
// => ***
_.repeat('abc', 2);
// => abcabc
_.repeat('abc', 0);
// =>
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
'*'.repeat(3);
// => ***
'abc'.repeat(2);
// => abcabc
'abc'.repeat(0);
// =>
      `,
    },
    {
      "key": "9:14",
      "name": "replace",
      "description": "Заменяет совпадения с шаблоном в строке заменой.",
      "lodash": `
_.replace('Hi Fred', 'Fred', 'Barney');
// => Hi Barney
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
'Hi Fred'.replace('Fred', 'Barney');
// => Hi Barney
      `,
    },
    {
      "key": "9:15",
      "name": "snakeCase",
      "description": "Преобразует строку к змеиной нотации",
      "lodash": `
_.snakeCase('--foo-bar');
// => foo_bar
_.snakeCase('fooBar');
// => foo_bar
_.snakeCase('fooBAR');
// => foo_bar
_.snakeCase('__foo_bar__');
// => foo_bar
_.snakeCase('--123-12bb-bar');
// => 123_12_bb_bar
_.snakeCase('текстДоп');
// => текстдоп
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function snakeCase(str) {
  let arrStr = str.match(/\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
  if(arrStr === null)
    return str.toLowerCase();
  else
    return arrStr.map(s => s.toLowerCase()).join('_');
}

snakeCase('--foo-bar');
// => foo_bar
snakeCase('fooBar');
// => foo_bar
snakeCase('fooBAR');
// => foo_bar
snakeCase('__foo_bar__');
// => foo_bar
snakeCase('--123-12bb-bar');
// => 123_12_bb_bar
snakeCase('текстДоп');
// => текстдоп
      `,
    },
    {
      "key": "9:16",
      "name": "split",
      "description": "Разбивает строку по разделителю.",
      "lodash": `
_.split('a-b-c-d', '-', 2);
// => [ 'a', 'b' ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
'a-b-c-d'.split('-', 2);
// => [ 'a', 'b' ]
      `,
    },
    {
      "key": "9:17",
      "name": "startCase",
      "description": "",
      "lodash": `
_.startCase('--foo-bar');
// => Foo bar
_.startCase('fooBar');
// => Foo bar
_.startCase('fooBAR');
// => Foo bar
_.startCase('__foo_bar__');
// => Foo bar
_.startCase('--123-12bb-bar');
// => 123 12 bb bar
_.startCase('текстДоп');
// => Текстдоп
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function startCase(str) {
  let arrStr = str.match(/\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
  if(arrStr === null) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return arrStr.map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(' ');
  }
}

startCase('--foo-bar');
// => Foo bar
startCase('fooBar');
// => Foo bar
startCase('fooBAR');
// => Foo bar
startCase('__foo_bar__');
// => Foo bar
startCase('--123-12bb-bar');
// => 123 12 bb bar
startCase('текстДоп');
// => Текстдоп
      `,
    },
    {
      "key": "9:18",
      "name": "startsWith",
      "description": "Проверяет, начинается ли строка с заданной целевой строки.",
      "lodash": `
_.startsWith('abc', 'a');
// => true
_.startsWith('abc', 'b');
// => false
_.startsWith('abc', 'b', 1);
// => true
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
'abc'.startsWith('a');
// => true
'abc'.startsWith('b');
// => false
'abc'.startsWith('b', 1);
// => true
      `,
    },
    {
      "key": "9:19",
      "name": "template",
      "description": "template - шаблоны",
      "lodash": `
const compil1 = und.template('hello <%= user %>!');
compil1({ 'user': 'fred' });
// => hello fred!
const compil2 = und.template('<b><%- value %></b>');
compil2({ 'value': '<script>' });
// => <b>&lt;script&gt;</b>
const compil3 = und.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compil3({'users': ['fred', 'barney'] });
// => <li>fred</li><li>barney</li>
      `,
      "underscore": `
const compil1 = und.template('hello <%= user %>!');
compil1({ 'user': 'fred' });
// => hello fred!
const compil2 = und.template('<b><%- value %></b>');
compil2({ 'value': '<script>' });
// => <b>&lt;script&gt;</b>
const compil3 = und.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compil3({'users': ['fred', 'barney'] });
// => <li>fred</li><li>barney</li>
      `,
      "vanillaJavaScript": `
function escape(str) {
  let arr = [
    ["&", "&amp;"],
    ["<", "&lt;"],
    [">", "&gt;"],
    ['"', "&quot;"],
    ["'", "&#39;"]
  ];
  arr.forEach((el, index) => {
    str = str.replace(el[0], el[1]);
  });
  return str;
}

const o = {
  user: 'fred'
};

\`hello \${o.user}!\`;
// => hello fred!
\`<b>\${escape('<script>')}</b>\`;
// => <b>&lt;script&gt;</b>
['fred', 'barney'].map((el)=> '<li>'+el+'</li>').join('');
// => <li>fred</li><li>barney</li>
      `,
    },
    {
      "key": "9:20",
      "name": "toLower",
      "description": "Преобразует строку в нижний регистр",
      "lodash": `
_.toLower('--foo-bar');
// => --foo-bar
_.toLower('fooBar');
// => foobar
_.toLower('fooBAR');
// => foobar
_.toLower('__foo_bar__');
// => __foo_bar__
_.toLower('--123-12bb-bar');
// => --123-12bb-bar
_.toLower('текстДоп');
// => текстдоп
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
'--foo-bar'.toLowerCase();
// => --foo-bar
'fooBar'.toLowerCase();
// => foobar
'fooBAR'.toLowerCase();
// => foobar
'__foo_bar__'.toLowerCase();
// => __foo_bar__
'--123-12bb-bar'.toLowerCase();
// => --123-12bb-bar
'текстДоп'.toLowerCase();
// => текстдоп
      `,
    },
    {
      "key": "9:21",
      "name": "toUpper",
      "description": "Преобразует строку в верхний регистр",
      "lodash": `
_.toUpper('--foo-bar');
// => --FOO-BAR
_.toUpper('fooBar');
// => FOOBAR
_.toUpper('fooBAR');
// => FOOBAR
_.toUpper('__foo_bar__');
// => __FOO_BAR__
_.toUpper('--123-12bb-bar');
// => --123-12BB-BAR
_.toUpper('текстДоп');
// => ТЕКСТДОП
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
'--foo-bar'.toUpperCase();
// => --FOO-BAR
'fooBar'.toUpperCase();
// => FOOBAR
'fooBAR'.toUpperCase();
// => FOOBAR
'__foo_bar__'.toUpperCase();
// => __FOO_BAR__
'--123-12bb-bar'.toUpperCase();
// => --123-12BB-BAR
'текстДоп'.toUpperCase();
// => ТЕКСТДОП
      `,
    },
    {
      "key": "9:22",
      "name": "trim",
      "description": "Удаляет начальные и конечные пробелы или указанные символы из строки.",
      "lodash": `
_.trim('  abc  ');
// => abc
_.trim('-_-abc-_-', '_-');
// => abc
_.trim(' -_-abc-_-', '_-');
// =>  -_-abc
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function trim(str, value) {
  if(value === undefined) {
    return str.trim();
  } else {
    let reg = new RegExp("^[" + value + "]+|[" + value + "]+$", "g");
    return str.replace(reg, '');
  }
}

trim('  abc  ');
// => abc
trim('-_-abc-_-', '_-');
// => abc
trim(' -_-abc-_-', '_-');
// =>  -_-abc
      `,
    },
    {
      "key": "9:23",
      "name": "trimEnd",
      "description": "Удаляет завершающие пробелы или указанные символы из строки.",
      "lodash": `
_.trimEnd('  abc  ');
// =>   abc
_.trimEnd('-_-abc-_-', '_-');
// => -_-abc
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function trimEnd(str, value) {
  if(value === undefined) {
    return str.trimEnd();
  } else {
    let reg = new RegExp("[" + value + "]+$", "g");
    return str.replace(reg, '');
  }
}

trimEnd('  abc  ');
// =>   abc
trimEnd('-_-abc-_-', '_-');
// => -_-abc
      `,
    },
    {
      "key": "9:24",
      "name": "trimStart",
      "description": "Удаляет начальные пробелы или указанные символы из строки.",
      "lodash": `
_.trimStart('  abc  ');
// => abc
_.trimStart('-_-abc-_-', '_-');
// => abc-_-
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function trimStart(str, value) {
  if(value === undefined) {
    return str.trimStart();
  } else {
    let reg = new RegExp("^[" + value + "]+", "g");
    return str.replace(reg, '');
  }
}

trimStart('  abc  ');
// => abc
trimStart('-_-abc-_-', '_-');
// => abc-_-
      `,
    },
    {
      "key": "9:25",
      "name": "truncate",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `,
    },
    {
      "key": "9:26",
      "name": "unescape",
      "description": "Преобразует спецсимволы HTML &amp; &lt; &gt; &quot; &#39; в обычные",
      "lodash": `
_.unescape("&amp; &lt; &gt; &quot; &#39; текст text");
// => & < > " ' текст text
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function unescape(str) {
  var map = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#39;": "'",
    "&quot;": '"',
  };
  return str.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, function(m) { return map[m]; });
}

unescape("&amp; &lt; &gt; &quot; &#39; текст text");
// => & < > " ' текст text
      `,
    },
    {
      "key": "9:27",
      "name": "upperCase",
      "description": "Преобразует строку в виде слов, разделенных пробелами, в верхний регистр.",
      "lodash": `
_.upperCase('--foo-bar');
// => FOO BAR
_.upperCase('fooBar');
// => FOO BAR
_.upperCase('fooBAR');
// => FOO BAR
_.upperCase('__foo_bar__');
// => FOO BAR
_.upperCase('--123-12bb-bar');
// => 123 12 BB BAR
_.upperCase('текстДоп');
// => ТЕКСТДОП
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function upperCase(str) {
  let arrStr = str.match(/\\d+|[a-z]+|[A-Z][a-z]+|[A-Z]{2,}/g);
  if(arrStr === null)
    return str.toUpperCase();
  else
    return arrStr.map(s => s.toUpperCase()).join(' ');
}

upperCase('--foo-bar');
// => FOO BAR
upperCase('fooBar');
// => FOO BAR
upperCase('fooBAR');
// => FOO BAR
upperCase('__foo_bar__');
// => FOO BAR
upperCase('--123-12bb-bar');
// => 123 12 BB BAR
upperCase('текстДоп');
// => ТЕКСТДОП
      `,
    },
    {
      "key": "9:28",
      "name": "upperFirst",
      "description": "Преобразует первый символ строки в верхний регистр.",
      "lodash": `
_.upperFirst('fred');
// => Fred
_.upperFirst('FRED');
// => FRED
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
function upperFirst(match) {
  return match.toUpperCase();
}

'fred'.replace(/(\\w)/, upperFirst);
// => Fred
'FRED'.replace(/(\\w)/, upperFirst);
// => FRED
      `,
    },
    {
      "key": "9:29",
      "name": "words",
      "description": "Разбивает строку на массив слов.",
      "lodash": `
_.words('fred, barney, & pebbles');
// => [ 'fred', 'barney', 'pebbles' ]
_.words('fred, barney, & pebbles', /[^, ]+/g);
// => [ 'fred', 'barney', '&', 'pebbles' ]
_.words('яблоки, груши, сливы');
// => [ 'яблоки,', 'груши,', 'сливы' ]
      `,
      "underscore": undefined,
      "vanillaJavaScript": `
'fred, barney, & pebbles'.match(/[^, &]+/g);
// => [ 'fred', 'barney', 'pebbles' ]
'fred, barney, & pebbles'.split(' ');
// => [ 'fred', 'barney', '&', 'pebbles' ]
'fred, barney, & pebbles'.match(/[^, ]+/g);
// => [ 'fred', 'barney', '&', 'pebbles' ]
'яблоки, груши, сливы'.split(' ');
// => [ 'яблоки,', 'груши,', 'сливы' ]
      `,
    }
  ]
},
];