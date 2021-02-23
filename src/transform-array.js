const sequences = {
  "--discard-next": 1,
  "--discard-prev": 2,
  "--double-next": 3,
  "--double-prev": 4,
};

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (sequences[arr[i]]) {
      switch (sequences[arr[i]]) {
        case 1:
          if (i < arr.length) {
            finalArr.push(undefined);
            i += 1;
          }
          break;
        case 2:
          if (i > 0) {
            finalArr.pop();
          }
          break;
        case 3:
          if (i < arr.length) {
            finalArr.push(arr[i + 1]);
          }
          break;
        case 4:
          if (i > 0) {
            finalArr.push(finalArr[finalArr.length - 1]);
          }
          break;
      }
    } else {
      finalArr.push(arr[i]);
    }
  }

  return finalArr.filter((item) => item !== undefined);
};
