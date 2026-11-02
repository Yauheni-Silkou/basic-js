const { NotImplementedError } = require('../lib');

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
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const msgUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i += 1) {
      const charCode = msgUpper.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const msgShift = charCode - 65;
        const keyShift = keyUpper.charCodeAt(keyIndex % keyUpper.length) - 65;
        
        const encryptedValue = ((msgShift + keyShift) % 26) + 65;
        result.push(String.fromCharCode(encryptedValue));
        
        keyIndex += 1;
      } else {
        result.push(msgUpper[i]);
      }
    }

    if (!this.isDirect) {
      result.reverse();
    }

    return result.join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const msgUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i += 1) {
      const charCode = msgUpper.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const msgShift = charCode - 65;
        const keyShift = keyUpper.charCodeAt(keyIndex % keyUpper.length) - 65;
        
        const decryptedValue = ((msgShift - keyShift + 26) % 26) + 65;
        result.push(String.fromCharCode(decryptedValue));
        
        keyIndex += 1;
      } else {
        result.push(msgUpper[i]);
      }
    }

    if (!this.isDirect) {
      result.reverse();
    }

    return result.join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
