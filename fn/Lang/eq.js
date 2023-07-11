/**
 * eq - проверяет является значения эквивалентными SameValueZero
 *
 * 1. If Type(x) is different from Type(y), return false.
 * 2. If Type(x) is Number, then
 * - If x is NaN and y is NaN, return true.
 * - If x is +0 and y is -0, return true.
 * - If x is -0 and y is +0, return true.
 * - If x is the same Number value as y, return true.
 * - Return false.
 * 3. Return SameValueNonNumber(x, y).
*/

function eq(x, y) {
  return x === y || (Number.isNaN(x) && Number.isNaN(y));
}

export default eq;