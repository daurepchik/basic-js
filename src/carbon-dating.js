const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const a = Number(sampleActivity)
  if (1 / a === Infinity) return false;
  if (isNaN(a)) return false;
  if (typeof sampleActivity !== 'string') return false;
  if (a < 0 || a > 15) return false;

  const k = 0.693 / HALF_LIFE_PERIOD
  return Math.ceil(Math.log(15 / a) / k);
};
const dateSample = require('../src/carbon-dating.js');
console.log(dateSample(' '))
