const und = require('underscore');
const lod = require('lodash');

/**
 * rest - Создает функцию, которая вызывает func с привязкой this созданной функции и аргументами от начала и далее, предоставленными в виде массива.
 */

// lodash
const write = lod.rest(function(author, portal) {
	return author + '---' + portal;
});

console.log(
	"write(['MySQL', 'Mongoodb'], ['JavaScript', 'PHP'], 'HTML', 'CSS')\n",
	write(['MySQL', 'Mongoodb'], ['JavaScript', 'PHP'], 'HTML', 'CSS')
);
// => MySQL,Mongoodb---JavaScript,PHP,HTML,CSS

function rest(callback) {
	return function(...args) {
		const newArgs = [];
		for (let i = 0; i < callback.length; i++) {
			if(i === callback.length - 1) {
				newArgs.push(args.splice(i));
			} else {
				newArgs.push(args[i]);
			}
		}
		return callback(...newArgs);
	}
}

const write1 = rest(function(author, portal) {
	return author + '---' + portal;
})

console.log(
	"write1(['MySQL', 'Mongoodb'], ['JavaScript', 'PHP'], 'HTML', 'CSS')\n",
	write1(['MySQL', 'Mongoodb'], ['JavaScript', 'PHP'], 'HTML', 'CSS')
);
// => MySQL,Mongoodb---JavaScript,PHP,HTML,CSS
