module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const arrOfStr = members.filter(member => typeof member === 'string');
  const trimArr = arrOfStr.map(item => item.trim());
  const title = trimArr.map(item => item[0].toUpperCase());
  return title.sort().join('');
};