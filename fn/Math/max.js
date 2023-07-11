/**
 * max - максимальное значение массива
 */
function max(arr) {
  if(arr.length === 0) return undefined;
  let current = arr[0];
  for (let elem of arr) {
    if(elem > current) current = elem;
  }
  return current;
}

export default max;