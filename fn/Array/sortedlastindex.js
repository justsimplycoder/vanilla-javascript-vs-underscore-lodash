const und = require('underscore');
const lod = require('lodash');

/**
 * sortedLastIndex - Этот метод похож на _.sortedIndex, за исключением того, что он возвращает самый высокий индекс, по которому значение должно быть вставлено в массив, чтобы сохранить порядок сортировки.
 */

// lodash
console.log("lod.sortedLastIndex([4, 5, 5, 5, 6], 5)", lod.sortedLastIndex([4, 5, 5, 5, 6], 5));

// es6
console.log('[4, 5, 5, 5, 6].lastIndexOf(5) + 1', [4, 5, 5, 5, 6].lastIndexOf(5) + 1);