const enckey = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

const deckey = {
  1: "a",
  2: "e",
  3: "i",
  4: "o",
  5: "u",
};

function encode(string) {
  return string
    .split("")
    .map((s) => enckey[s] || s)
    .join("");
}

function decode(string) {
  return string
    .split("")
    .map((s) => deckey[s] || s)
    .join("");
}

console.log(encode("hello"));
console.log(encode("How are you today?"));
console.log(encode("This is an encoding test."));
console.log(decode("h2ll4"));
