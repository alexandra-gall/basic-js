module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (date.hasOwnProperty('toString')){
    throw new Error();
  }

  const month = date.getMonth();
  if (month >= 2 && month <= 4) {
    return 'spring';
  } 
  if (month >= 5 && month <= 7) {
    return 'summer';
  } 
  if (month >= 8 && month <= 10) {
    return 'fall';
  } 
  return 'winter'
};
