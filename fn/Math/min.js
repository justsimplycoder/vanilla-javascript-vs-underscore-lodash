/**
 * min - минимальное значение массива
 */

function min(arr) {
	if(arr.length === 0 && !Array.isArray(arr)) return undefined;
	if(typeof arr[0] === 'number') {
		return Math.min(...arr);
	}  else if(typeof arr[0] === 'string') {
		let current = arr[0];
		for (let elem of arr) {
			if(elem < current) current = elem;
		}
		return current;
	} else {
		return undefined;
	}
}

export default min;