import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
	n = String(n).split('').map(val => Number(val));
	let minIndex = 0;
	n.forEach((val, key) => val < n[minIndex] && (minIndex = key));
	return Number(n.filter((val, key) => key !== minIndex).join(''));
}
