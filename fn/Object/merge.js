const und = require('underscore');
const lod = require('lodash');

/**
 * merge — Этот метод аналогичен _.assign, за исключением того, что он рекурсивно объединяет собственные и унаследованные перечисляемые строковые свойства исходных объектов с целевым объектом.
 */

const object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
const other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

// lodash
console.log("lod.merge(object, other)", lod.merge(object, other));
console.log(
	"lod.merge({ cpp: \"12\" }, { cpp: \"23\" }, { java: \"23\" }, { python:\"35\" })\n",
	lod.merge({ cpp: "12" }, { cpp: "23" }, { java: "23" }, { python:"35" })
);

// es6
const object1 = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

object1.a.map((el, i) => Object.assign(el, other.a[i]));

console.log('object1', object1);
console.log(
	"Object.assign({ cpp: \"12\" }, { cpp: \"23\" }, { java: \"23\" }, { python:\"35\" })\n",
	Object.assign({ cpp: "12" }, { cpp: "23" }, { java: "23" }, { python:"35" })
);