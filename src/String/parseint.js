const und = require('underscore');
const lod = require('lodash');

/**
 * parseInt - Преобразует строку в целое число по указанной системе счисления.
 */

// lodash
console.log("lod.parseInt('08')", lod.parseInt('08'));
console.log("lod.map(['6', '08', '10'], lod.parseInt)", lod.map(['6', '08', '10'], lod.parseInt));

// es6
console.log("parseInt('08')", parseInt('08'));
console.log("['6', '08', '10'].map(el => parseInt(el, 10))", ['6', '08', '10'].map(el => parseInt(el, 10)));