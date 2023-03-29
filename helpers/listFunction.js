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

_.intersectionWith(arr1, arr2, lod.isEqual);
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
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:31",
      "name": "pullAllWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:32",
      "name": "pullAt",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:33",
      "name": "remove",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:34",
      "name": "reverse",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:35",
      "name": "slice",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:36",
      "name": "sortedIndex",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:37",
      "name": "sortedIndexBy",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:38",
      "name": "sortedIndexOf",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:39",
      "name": "sortedLastIndex",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:40",
      "name": "sortedLastIndexBy",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:41",
      "name": "sortedLastIndexOf",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:42",
      "name": "sortedUniq",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:43",
      "name": "sortedUniqBy",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:44",
      "name": "tail",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:45",
      "name": "take",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:46",
      "name": "takeRight",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:47",
      "name": "takeRightWhile",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:48",
      "name": "takeWhile",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:49",
      "name": "union",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:50",
      "name": "unionBy",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:51",
      "name": "unionWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:52",
      "name": "uniq",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:53",
      "name": "uniqBy",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:54",
      "name": "uniqWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:55",
      "name": "unzip",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:56",
      "name": "unzipWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:57",
      "name": "without",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:58",
      "name": "xor",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:59",
      "name": "xorBy",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:60",
      "name": "xorWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:61",
      "name": "zip",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:62",
      "name": "zipObject",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:63",
      "name": "zipObjectDeep",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:64",
      "name": "zipWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

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
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
  ]
},
];