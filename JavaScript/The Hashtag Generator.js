function generateHashtag(str) {
  return str.trim() === ""
    ? false
    : "#" +
        str
          .split(" ")
          .filter((c) => c)
          .map((s) => s[0].toUpperCase() + s.slice(1))
          .join("");
}
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag(""));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Codewars is nice"));
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
);
console.log(generateHashtag("a".repeat(139)));
