function dirReduc2(arr) {
  let reduced = true;
  while (reduced) {
    reduced = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (
        (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
        (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
        (arr[i] === "WEST" && arr[i + 1] === "EAST") ||
        (arr[i] === "EAST" && arr[i + 1] === "WEST")
      ) {
        reduced = true;
        arr.splice(i, 2);
      }
    }
  }
  return arr;
}

function dirReduc(plan) {
  var opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
