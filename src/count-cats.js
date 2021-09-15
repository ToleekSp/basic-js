import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
	let rows = matrix.length;

	if(!rows) return 0;

	let cols = matrix[0].length;
	let count = 0;

	for(let i = 0; i < rows; i++)
	{
		for(let j = 0; j < cols; j++)
		{
			if(matrix[i][j] == '^^')
			{
				count++;
			}
		}
	}

	return count;
}
