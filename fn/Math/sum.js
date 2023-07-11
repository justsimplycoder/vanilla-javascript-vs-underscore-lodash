/**
 * sum - сумма всех элементов массива
 */

// es6
function sum(arr) {
	let start = 0;
	if(typeof arr[0] === 'string') {
		start = '';
	}
	return arr.reduce((sum, current) => {
		if(current == undefined) return sum;
		return sum + current
	}, start);
}

export default sum;