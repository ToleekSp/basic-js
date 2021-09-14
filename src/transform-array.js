import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    if(!Array.isArray(arr))
    {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
	
	if(!arr.length)
	{
		return [];
	}
	
	const clone = arr.slice(0);
	const len = clone.length;
	const actions = [
		'--discard-next',
		'--discard-prev',
		'--double-next',
		'--double-prev'
	];
	
	let result = [];
	
	for(let i = 0; i < len; i++)
	{
		const current = clone[i];
		
		if(actions.includes(current) || current === '--discarded')
		{
			switch(current)
			{
				case '--discard-next':
					if(i >= len - 1)
					{
						continue;
					}
					else
					{
						clone[i + 1] = '--discarded';
						i++;
					}
					break;
					
				case '--discard-prev':
					if(i === 0 || clone[i - 1] === '--discarded')
					{
						continue;
					}
					else
					{
						result.pop();
					}
					break;
					
				case '--double-next':
					if(i >= len - 1)
					{
						continue;
					}
					else
					{
						result.push(clone[i + 1]);
					}
					break;
					
				case '--double-prev':
					if(i === 0 || clone[i - 1] === '--discarded')
					{
						continue;
					}
					else
					{
						result.push(clone[i - 1]);
					}
					break;

				case '--discarded':
					continue;
					break;
			}
		}
		else
		{
			result.push(current);
		}
	}
	
	return result;
}
