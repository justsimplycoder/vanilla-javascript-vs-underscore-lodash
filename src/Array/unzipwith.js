const und = require('underscore');
const lod = require('lodash');

/**
 * unzipWith - Этот метод похож на _.unzip, за исключением того, что он принимает итерацию, чтобы указать, как следует комбинировать перегруппированные значения.
  */

// lodash
console.log(
	"lod.unzipWith([[1, 10, 100], [2, 20, 200]], lod.add)",
	lod.unzipWith([[1, 10, 100], [2, 20, 200]], lod.add)
);

// es6
function unzipWith(arr, callback) {
	return arr[0].map(function (elem, index) {
		return callback(elem, arr[1][index]);
	});
}

console.log(
	"unzipWith([[1, 10, 100], [2, 20, 200]], (a, b) => a + b)",
	unzipWith([[1, 10, 100], [2, 20, 200]], (a, b) => a + b)
);
