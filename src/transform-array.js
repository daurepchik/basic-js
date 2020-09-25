const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;

  let array = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case ("--discard-next"):
        if (i !== (arr.length - 2) || i !== (arr.length - 1)) {
          i = i + 2;
        }
        break;
      case ("--discard-prev"):
        if (i !== 0) {
          array.pop()
        }
        break;
      case ("--double-next"):
        if (i !== (arr.length - 1))
          array.push(arr[i + 1])
        break;
      case ("--double-prev"):
        if (i !== 0) {
          array.push(array[array.length - 1])
        }
        break;
      default:
        array.push(arr[i])
        break;
    }
  }
  return array;
};

const transform = require('./transform-array');