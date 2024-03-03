function multiply(a, b) {
  // Initialize the result array with zeros, its length is the sum of lengths of a and b
  let result = Array(a.length + b.length).fill(0);

  // Reverse both numbers to simplify calculation from right to left
  a = a.split("").reverse();
  b = b.split("").reverse();

  // Perform multiplication like manual method
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      result[i + j] += parseInt(a[i]) * parseInt(b[j]);
      result[i + j + 1] += Math.floor(result[i + j] / 10); // Carry for any two-digit number
      result[i + j] %= 10;
    }
  }

  // Convert result array back to string and remove leading zeros
  let resultStr = result.reverse().join("").replace(/^0+/, "");

  // Handle case where result is 0
  return resultStr === "" ? "0" : resultStr;
}

console.log(multiply("1020303004875647366210", "2774537626200857473632627613"));
