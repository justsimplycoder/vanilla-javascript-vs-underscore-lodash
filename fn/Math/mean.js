/**
 * mean - среднее значение массива
 */

function mean(arr) {
  if(!Array.isArray(arr)) return NaN;
  if(arr.length === 0) return NaN
  return arr.reduce((sum, current) => sum + current) / arr.length;
}

export default mean;