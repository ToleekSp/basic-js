import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 
export default class VigenereCipheringMachine {
	constructor(direction = true)
	{
		this.direction = direction;
		this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
		this.tabulaRecta = [];

		for (let i = 0; i < this.alphabet.length; i++)
		{
			this.tabulaRecta[i] = this.alphabet.slice(i).concat(this.alphabet.slice(0, i));
		}
	}
	
	encrypt(message, key) {
		if(message == undefined || key == undefined)
		{
			throw new Error('Incorrect arguments!');
		}
		
		message = message.toUpperCase().trim();
		key = key.toUpperCase().replace(/\s/g, '');
		
		const msgLen = message.length;
		const keyLen = key.length;
		
		let result = [];
		
		for(let i = 0, n = 0; i < msgLen; i++, n++)
		{
		  if(this.alphabet.indexOf(message[i]) === -1)
		  {
			result.push(message[i]);
			n--;
			continue;
		  }

		  result.push(this.tabulaRecta[this.alphabet.indexOf(message[i])][this.alphabet.indexOf(key[n % keyLen])]);
		}

		if(this.direction !== true)
		{
			result = result.reverse();
		}
		
		return result.join('');
	}
	
	decrypt(encryptMsg, key) {
		if(encryptMsg == undefined || key == undefined)
		{
			throw new Error('Incorrect arguments!');
		}
		
		encryptMsg = encryptMsg.toUpperCase().trim();
		key = key.toUpperCase().replace(/\s/g, '');
		
		const msgLen = encryptMsg.length;
		const keyLen = key.length;
		
		let result = [];

		for(let i = 0, n = 0; i < msgLen; i++, n++)
		{
		  if(this.alphabet.indexOf(encryptMsg[i]) === -1)
		  {
			result.push(encryptMsg[i]);
			n--;
			continue;
		  }

		  result.push(this.alphabet[this.tabulaRecta[this.alphabet.indexOf(key[n % keyLen])].indexOf(encryptMsg[i])]);
		}

		if(this.direction !== true)
		{
			result = result.reverse();
		}
		
		return result.join('');    
	}
}
