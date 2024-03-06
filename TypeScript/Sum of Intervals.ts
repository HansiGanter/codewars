export function sumOfIntervals(intervals: [number, number][]): number {
  // Step 1: Sort intervals based on their starting points.
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 2: Merge overlapping intervals.
  const merged: [number, number][] = [];
  for (let interval of intervals) {
    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1]
      );
    }
  }

  // Step 3: Calculate the sum of the intervals' lengths.
  return merged.reduce((acc, [start, end]) => acc + (end - start), 0);
}

console.log(sumOfIntervals([[1, 5]]), 4);
console.log(
  sumOfIntervals([
    [1, 5],
    [6, 10],
  ]),
  8
);
console.log(
  sumOfIntervals([
    [1, 5],
    [1, 5],
  ]),
  4
);
console.log(
  sumOfIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ]),
  7
);
console.log(sumOfIntervals([[-1e9, 1e9]]), 2e9);
console.log(
  sumOfIntervals([
    [0, 20],
    [-1e8, 10],
    [30, 40],
  ]),
  1e8 + 30
);
