function removeNb(n) {
  let sum = (n * (n + 1)) / 2;
  let result = [];
  for (let i = 1; i <= n; i++) {
    let j = (sum - i) / (i + 1);
    if (j === parseInt(j) && j <= n) {
      result.push([i, j]);
    }
  }
  return result;
}

console.log(removeNb(26));
console.log(removeNb(100));
