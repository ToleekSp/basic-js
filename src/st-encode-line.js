import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let tmp = [];
  let result = '';
	str.split('');

  for(let i = 0; i <= str.length; i++)
  {
    console.log(str[i], tmp);
    if(tmp.length === 0 || tmp[tmp.length - 1] === str[i])
    {
      tmp.push(str[i]);
    }
    else
    {
      result += (tmp.length > 1 ? tmp.length : '') + tmp[0];
      tmp = [];
      tmp.push(str[i]);
    }
  }

  return result;	
}
