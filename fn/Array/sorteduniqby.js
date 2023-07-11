const und = require('underscore');
const lod = require('lodash');

/**
 * sortedUniq - Этот метод похож на _.uniqBy, за исключением того, что он разработан и оптимизирован для отсортированных массивов.
 */

// lodash
console.log(
  "lod.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)",
  lod.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
);

// es6
function sortedUniqBy(arr, fn) {
  const uniqArr = [arr[0]];
  for (let i = 1; i < arr.length - 1; i++) {
    if(fn(arr[i]) !== fn(arr[i - 1])) uniqArr.push(arr[i])
  }
  return uniqArr;
}

console.log(
  "sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)",
  sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
);