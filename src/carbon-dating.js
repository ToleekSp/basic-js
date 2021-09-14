import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
	if(!sampleActivity || typeof sampleActivity !== 'string')
	{
		return false;
	}
	
	let numeric = Number(sampleActivity);
	
	if(isNaN(numeric) || !numeric || numeric > MODERN_ACTIVITY || numeric < 0)
	{
		return false;
	}
	
	return Math.ceil(Math.log(MODERN_ACTIVITY / numeric) / (Math.LN2 / HALF_LIFE_PERIOD));
}
