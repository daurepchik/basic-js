const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date = 1) {
  if (date === 1) return 'Unable to determine the time of year!';

  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error;


  const month = date.getMonth() + 1
  if ([12, 1, 2].includes(month)) return 'winter';
  else if ([3, 4, 5].includes(month)) return 'spring';
  else if ([6, 7, 8].includes(month)) return 'summer';
  else if ([9, 10, 11].includes(month)) return 'autumn';
};
