function josephusSurvivor(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let index = 0;
  while (arr.length > 1) {
    index = (index + k - 1) % arr.length;
    arr.splice(index, 1);
  }
  return arr[0];
}

console.log(josephusSurvivor(7, 3));
console.log(josephusSurvivor(11, 19));
console.log(josephusSurvivor(1, 300));
console.log(josephusSurvivor(14, 2));
console.log(josephusSurvivor(100, 1));
