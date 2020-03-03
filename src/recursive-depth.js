module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    arr.map(item =>
      Array.isArray(item)
        ? (depth = Math.max(this.calculateDepth(item), depth))
        : depth
    );
    depth += 1;
    return depth;
  }
};
