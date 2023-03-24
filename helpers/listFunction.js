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
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:5",
      "name": "differenceWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:6",
      "name": "drop",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:7",
      "name": "dropRight",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:8",
      "name": "dropRightWhile",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:9",
      "name": "dropWhile",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:10",
      "name": "fill",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:11",
      "name": "findIndex",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:12",
      "name": "findLastIndex",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:13",
      "name": "first",
      "alias": "head",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:14",
      "name": "flatten",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:15",
      "name": "flattenDeep",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:16",
      "name": "flattenDepth",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:17",
      "name": "fromPairs",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

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
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:20",
      "name": "initial",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:21",
      "name": "intersection",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:22",
      "name": "intersectionBy",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:23",
      "name": "intersectionWith",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:24",
      "name": "join",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:25",
      "name": "last",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:26",
      "name": "lastIndexOf",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:27",
      "name": "nth",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:28",
      "name": "pull",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

      `
    },
    {
      "key": "0:29",
      "name": "pullAll",
      "description": "",
      "lodash": `

      `,
      "underscore": `

      `,
      "vanillaJavaScript": `

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