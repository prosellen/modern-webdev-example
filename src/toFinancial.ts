/**
 * Ensures that a number has 2 decimal places
 * @param {number} number - A number to be converted to a string with 2 decimal places
 * @returns {number} A number with 2 decimal places
 */
export default (number: number): number => Number.parseFloat(number.toFixed(2));
