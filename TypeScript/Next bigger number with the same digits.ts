/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
*/

function nextBigger(n: number): number {
  let arr = n.toString().split("");
  let i = arr.length - 1;
  while (i > 0) {
    if (arr[i] > arr[i - 1]) break;
    i--;
  }
  if (i === 0) return -1;
  let right = arr.splice(i).sort();
  let left = arr.splice(arr.length - 1, 1)[0];
  for (let i = 0; i < right.length; i++) {
    if (right[i] > left) {
      arr.push(right[i]);
      right[i] = left;
      break;
    }
  }
  return +arr.concat(right).join("");
}

console.log(nextBigger(59884848459853), 59884848483559);
