/**
 * isNumber - Проверяет, классифицируется ли значение как числовой примитив или объект.
 */

function isNumber(n){
  // console.log(Object(0) === 0);
	// return Number(n) === n;
  // console.log();
  return Object.prototype.toString.call(n) === '[object Number]';
}

export default isNumber;