const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let dict = {};
  let turnsNum = Math.pow(2, disksNumber) - 1;
  let time = Math.floor(turnsNum * 3600 / turnsSpeed);
  dict["turns"] = turnsNum;
  dict["seconds"] = time;
  return dict;
};

const calculateHanoi = require("./hanoi-tower");
console.log(calculateHanoi(5, 4074));
