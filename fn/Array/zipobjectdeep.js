const und = require('underscore');
const lod = require('lodash');

/**
 * zipObjectDeep - Этот метод похож на _.zipObject, за исключением того, что он поддерживает пути к свойствам.
 */

// lodash
console.log(
	"lod.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])",
	lod.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
);

// es6
function zipObjectDeep(pathes, value) {
	const obj = {};
	let currentPath = undefined;

	pathes.forEach((el, index) => {
		// Путь в виде массива
		const path = el.replace('[', '.')
			.replace(']', '')
			.split('.');
		// i для текущего элемента, j для следующего элемента
		// нужно чтобы определить, является ли следующий элемент массивом
		for (let i = 0, j = 1; i < path.length; i++, j++) {
			if(currentPath === undefined) currentPath = obj;
			// Последний элемент присваиваем просто значение
			if(i === path.length - 1) {
				currentPath[path[i]] = value[index];
				currentPath = undefined;
				break;
			}
			if(!currentPath[path[i]]) {
				// Проверка является ли следующий элемент массивом
				if(/\d+/.test(path[j])) {
					currentPath[path[i]] = [];
				} else {
					currentPath[path[i]] = {};
				}
			}
			currentPath = currentPath[path[i]];
		}
	});

	return obj;
}

console.log(
	"zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])",
	zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
);
