module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|'
  } = options;
  str = String(str);
  separator = String(separator);
  addition = addition !== undefined ? String(addition) : '';
  additionSeparator = String(additionSeparator);
  repeatTimes = repeatTimes ? parseInt(repeatTimes) : 1;
  additionRepeatTimes = additionRepeatTimes ? parseInt(additionRepeatTimes) : 1;
  let subStr = (addition + additionSeparator)
    .repeat(additionRepeatTimes)
    .split(additionSeparator)
    .slice(0, -1)
    .join(additionSeparator);
  let result = (str + subStr + separator)
    .repeat(repeatTimes)
    .split(separator)
    .slice(0, -1)
    .join(separator);
  return result;
};
