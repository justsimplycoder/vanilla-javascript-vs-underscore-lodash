const und = require('underscore');
const lod = require('lodash');

/**
 * uniqBy - Этот метод похож на _.uniq, за исключением того, что он принимает компаратор, который вызывается для сравнения элементов массива.
 */

// lodash
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

console.log(
  "lod.uniqWith(objects, lod.isEqual)",
  lod.uniqWith(objects, lod.isEqual)
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

function uniqWith(arr, comparator) {
  const result = objects.reduce((acc, item) => {
    if (acc.some(el => comparator(el, item))) {
      return acc;
    }
    return [...acc, item];
  }, []);

  return result;
}

console.log(
  "uniqWith(objects, equalObject)",
  uniqWith(objects, equalObject)
);