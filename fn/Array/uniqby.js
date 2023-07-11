const und = require('underscore');
const lod = require('lodash');

/**
 * uniqBy - Этот метод подобен _.uniq, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента в массиве, чтобы сгенерировать критерий, по которому вычисляется уникальность.
 */

// lodash
console.log(
  "lod.uniqBy([2.1, 1.2, 2.3], Math.floor)",
  lod.uniqBy([2.1, 1.2, 2.3], Math.floor)
);
console.log(
  "lod.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x')",
  lod.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x')
);

// es6
// function uniqBy(arr, comparator) {
//   let result = [];

//   if(typeof comparator === 'function') {
//     result = arr.reduce((acc, item) => {
//       if (acc.some(el => comparator(el) === comparator(item))) {
//         return acc; // если значение уже есть, то просто возвращаем аккумулятор
//       }
//       return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
//     }, []);
//   } else if (typeof comparator === 'string') {
//     result = arr.reduce((acc, item) => {
//       if (acc.some(el => el[comparator] === item[comparator])) {
//         return acc; // если значение уже есть, то просто возвращаем аккумулятор
//       }
//       return [...acc, item];
//     }, []);
//   }

//   return result;
// }
//

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

console.log(
  "uniqBy([2.1, 1.2, 2.3], Math.floor)",
  uniqBy([2.1, 1.2, 2.3], Math.floor)
);
console.log(
  "uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x')",
  uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x')
);