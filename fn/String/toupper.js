const und = require('underscore');
const lod = require('lodash');

/**
 * toUpper - Преобразует строку в верхний регистр
 */

// lodash
console.log("lod.toUpper('--foo-bar')", lod.toUpper('--foo-bar'));
console.log("lod.toUpper('fooBar')", lod.toUpper('fooBar'));
console.log("lod.toUpper('fooBAR')", lod.toUpper('fooBAR'));
console.log("lod.toUpper('__foo_bar__')", lod.toUpper('__foo_bar__'));
console.log("lod.toUpper('--123-12bb-bar')", lod.toUpper('--123-12bb-bar'));
console.log("lod.toUpper('текстДоп')", lod.toUpper('текстДоп')); // -> текстдоп

// es6
console.log("'--foo-bar'.toUpperCase()", '--foo-bar'.toUpperCase());
console.log("'fooBar'.toUpperCase()", 'fooBar'.toUpperCase());
console.log("'fooBAR'.toUpperCase()", 'fooBAR'.toUpperCase());
console.log("'__foo_bar__'.toUpperCase()", '__foo_bar__'.toUpperCase());
console.log("'--123-12bb-bar'.toUpperCase()", '--123-12bb-bar'.toUpperCase());
console.log("'текстДоп'.toUpperCase()", 'текстДоп'.toUpperCase());
