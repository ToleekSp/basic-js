import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  
  options.repeatTimes = options.repeatTimes ?? 1;
  options.separator = options.separator ?? '+';
  options.additionRepeatTimes = options.additionRepeatTimes ?? 1;
  options.additionSeparator = options.additionSeparator ?? '|';
  
  if(options.addition === undefined)
  {
	  options.addition = '';
  }
  else
  {
	  options.addition = String(options.addition);
  }
  
  let addition = new Array(options.additionRepeatTimes).fill(String(options.addition)).join(options.additionSeparator);
  
  return new Array(options.repeatTimes).fill(`${str}${addition}`).join(options.separator);
}
