const und = require('underscore');
const lod = require('lodash');

/**
 * sortedUniq - Этот метод похож на _.uniqBy, за исключением того, что он разработан и оптимизирован для отсортированных массивов.
 */

const arr = [1, 1, 2, 2, 3, 4, 4];

// lodash
console.log("lod.sortedUniq(arr)", lod.sortedUniq(arr));

// es6
console.log("[...new Set(arr)]", [...new Set(arr)]);
