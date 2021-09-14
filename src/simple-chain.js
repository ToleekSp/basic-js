import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  result: [],
	
  getLength() {
	return this.result.length;
  },
  addLink(value) {
	this.result.push('( ' + value + ' )');
	return this;
  },
  removeLink(position) {
	if(typeof position !== 'number' || position < 1 || position > this.getLength() || this.result[position] == undefined)
	{
		this.result.length = 0;
		throw new Error("You can't remove incorrect link!");
	}
	
	this.result.splice(position - 1, 1);
	return this;
  },
  reverseChain() {
	this.result.reverse();
	return this;
  },
  finishChain() {
	let string = this.result.join('~~');
	this.result.length = 0;
	return string;
  }
};
