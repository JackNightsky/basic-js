module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) return false;
  return members.map(el=> (typeof el) === 'string' ? el.trim()[0].toUpperCase() : '').sort().join("");
  // throw 'Not implemented';
  // remove line with error and write your code here
};