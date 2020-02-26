module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let depth = 1;
      arr.forEach(item => {
        if (Array.isArray(item)) {
          depth += this.calculateDepth(item);
        }
      });
    return depth;
  }
};