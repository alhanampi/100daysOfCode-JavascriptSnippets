//separate entries of an array into one that matches the condition and one that doesn't:
const bifurcate = (arr, fn) =>
  arr.reduce((acc, val) => (acc[fn(val) ? 0 : 1].push(val), acc), [[], []]);

//test:
const results = bifurcate(
  ["jan", "feb", "march", "april", "jun", "december"],
  (x) => x[1] === "a"
);
console.log(results);
