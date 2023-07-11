const und = require('underscore');
const lod = require('lodash');

/**
 * spread - Создает функцию, которая вызывает func с привязкой this функции create и массивом аргументов, очень похожим на Function#apply.
 */

// lodash
const sum = (x, y) => x + y;

const addition = lod.spread(sum);
console.log("addition([56, 44])",	addition([56, 44]));

// es5
console.log("sum(...[56, 44])", sum(...[56, 44]));