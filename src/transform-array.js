module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;

  let array = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case ("--discard-next"):
        i++;
        break;
      case ("--discard-prev"):
        if (array.length !== 0 && arr[i - 2] !== '--discard-next') {
          array.pop();
        }
        break;
      case ("--double-next"):
        if (i < arr.length - 1) {
          array.push(arr[i + 1]);
        }
        break;
      case ("--double-prev"):
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          array.push(arr[i - 1])
        }
        break;
      default:
        array.push(arr[i])
        break;
    }
  }
  return array;
};