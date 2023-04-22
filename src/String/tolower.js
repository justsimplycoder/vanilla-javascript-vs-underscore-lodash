const und = require('underscore');
const lod = require('lodash');

/**
 * toLower - Преобразует строку в нижний регистр
 */

// lodash
console.log("lod.toLower('--foo-bar')", lod.toLower('--foo-bar'));
console.log("lod.toLower('fooBar')", lod.toLower('fooBar'));
console.log("lod.toLower('fooBAR')", lod.toLower('fooBAR'));
console.log("lod.toLower('__foo_bar__')", lod.toLower('__foo_bar__'));
console.log("lod.toLower('--123-12bb-bar')", lod.toLower('--123-12bb-bar'));
console.log("lod.toLower('текстДоп')", lod.toLower('текстДоп')); // -> текстдоп

// es6
console.log("'--foo-bar'.toLowerCase()", '--foo-bar'.toLowerCase());
console.log("'fooBar'.toLowerCase()", 'fooBar'.toLowerCase());
console.log("'fooBAR'.toLowerCase()", 'fooBAR'.toLowerCase());
console.log("'__foo_bar__'.toLowerCase()", '__foo_bar__'.toLowerCase());
console.log("'--123-12bb-bar'.toLowerCase()", '--123-12bb-bar'.toLowerCase());
console.log("'текстДоп'.toLowerCase()", 'текстДоп'.toLowerCase());
