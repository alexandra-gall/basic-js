class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  prepareKey(str, key) {
    while (str.length > key.length) {
      key += key;
    }
    return key;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }
    key = this.prepareKey(message, key.toUpperCase());
    message = message.toUpperCase();
    let result = '';
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message.charAt(i)) === -1) {
        result += message.charAt(i);
        key = key.slice(0, i) + message.charAt(i) + key.slice(i);
      } else {
        result += this.alphabet.charAt(
          (this.alphabet.indexOf(message.charAt(i)) +
            this.alphabet.indexOf(key.charAt(i))) %
            26
        );
      }
    }
    return this.type
      ? result
      : result
          .split('')
          .reverse()
          .join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }
    key = this.prepareKey(message, key.toUpperCase());
    message = message.toUpperCase();
    let result = '';
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message.charAt(i)) === -1) {
        result += message.charAt(i);
        key = key.slice(0, i) + message.charAt(i) + key.slice(i);
      } else {
        result += this.alphabet.charAt(
          (this.alphabet.indexOf(message.charAt(i)) -
            this.alphabet.indexOf(key.charAt(i)) +
            26) %
            26
        );
      }
    }
    return this.type
      ? result
      : result
          .split('')
          .reverse()
          .join('');
  }
}

module.exports = VigenereCipheringMachine;
