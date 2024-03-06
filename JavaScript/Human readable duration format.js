function formatDuration(seconds) {
  if (seconds === 0) return "now";
  const labels = ["year", "day", "hour", "minute", "second"];
  const times = [60 * 60 * 24 * 365, 60 * 60 * 24, 60 * 60, 60, 1];
  let duration = [];
  times.forEach((t) => {
    duration.push(Math.floor(seconds / t));
    seconds %= t;
  });
  duration = duration
    .map((d, i) => timeToString(d, labels[i]))
    .filter((d) => d);
  return duration.length > 1
    ? duration.splice(0, duration.length - 1).join(", ") +
        " and " +
        duration[duration.length - 1]
    : duration[0];
}

function timeToString(value, unit) {
  return value === 0
    ? ""
    : value === 1
    ? `${value} ${unit}`
    : value > 1
    ? `${value} ${unit}s`
    : "Negative value";
}

console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
