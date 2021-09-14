import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
	let rows = matrix.length;
	let cols = matrix[0].length;
	let result = new Array(rows).fill(0).map(val => new Array(cols).fill(0));
	
	for(let i = 0; i < matrix.length; i++)
	{
		for(let j = 0; j < matrix[0].length; j++)
		{
			let mines = 0;
			
			if(checkField(i - 1, j - 1)) mines++;				
			if(checkField(i - 1, j)) mines++;			
			if(checkField(i - 1, j + 1)) mines++;

			if(checkField(i, j - 1)) mines++;						
			if(checkField(i, j + 1)) mines++;

			if(checkField(i + 1, j - 1)) mines++;				
			if(checkField(i + 1, j)) mines++;			
			if(checkField(i + 1, j + 1)) mines++;

			result[i][j] = mines;
		}
	}

	function checkField(i, j)
	{
		if(i < 0 || j < 0 || i > rows - 1 || j > cols - 1) return false;
		return (typeof matrix[i][j] !== undefined && matrix[i][j] === true);
	}

  return result;
}
