const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag
    this.alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error;

    message = message.toUpperCase()
    key = key.toUpperCase()

    let encryptText = [];
    let keyCounter = 0;

    for (let i in message) {

      let msgLetterPos = this.alphabet.indexOf(message[i])

      if (msgLetterPos === -1) {
        encryptText.push(message[i]);
        continue;
      }

      let keyLetterPos = this.alphabet.indexOf(key[keyCounter % key.length])

      let x = (msgLetterPos + keyLetterPos) % 26;
      encryptText.push(this.alphabet[x])

      keyCounter++;
    }

    return this.flag ? encryptText.join('') : encryptText.reverse().join('')
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error;

    message = message.toUpperCase()
    key = key.toUpperCase()

    let encryptText = [];
    let keyCounter = 0;

    for (let i in message) {

      let msgLetterPos = this.alphabet.indexOf(message[i])

      if (msgLetterPos === -1) {
        encryptText.push(message[i]);
        continue;
      }

      let keyLetterPos = this.alphabet.indexOf(key[keyCounter % key.length])

      let x = (msgLetterPos - keyLetterPos + 26) % 26;
      encryptText.push(this.alphabet[x])

      keyCounter++;
    }

    return this.flag ? encryptText.join('') : encryptText.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
