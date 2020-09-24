const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = '';
  if (!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') continue;
    name = name + members[i].trim()[0];
  }
  if (name === '') return false
  return name.toUpperCase().split('').sort().join('');
};
