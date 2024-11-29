/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let maxArea = 0;
  const length = points.length;

  for (let a = 0; a < length; a += 1) {
    const [ax, ay] = points[a];
    for (let b = a + 1; b < length; b += 1) {
      const [bx, by] = points[b];
      for (let c = b + 1; c < length; c += 1) {
        const [cx, cy] = points[c];

        const area =
          0.5 *
          Math.abs(ax * by + bx * cy + cx * ay - (bx * ay + cx * by + ax * cy));
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};
