module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (i === arr.length - 1) {
          break;
        }
        i += 1;
        break;
      case "--discard-prev":
        if (i > 0) {
          finalArr.pop();
          break;
        }
        break;
      case "--double-next":
        if (i === arr.length - 1) {
          break;
        }
        finalArr.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (i > 0) {
          finalArr.push(arr[i - 1]);
          break;
        }
        break;
      default:
        finalArr.push(arr[i]);
    }
  }
  return finalArr;
}
