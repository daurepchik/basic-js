const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    arr.forEach(item => {
      let tmp = 1;
      if (Array.isArray(item)) {
        tmp += this.calculateDepth(item);
      }
      counter = (counter >= tmp) ? counter : tmp;
    });
    return counter;
  }
};