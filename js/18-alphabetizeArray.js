//test array:
let arr = [
  "pears",
  "apples",
  "Bananas",
  "screwdriver",
  "Suitcase",
  "Zeppelin",
  "cat",
];

//sort will put uppercase always before lower, so it needs an extra step:
const sorted = arr.sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);

console.log(sorted);
