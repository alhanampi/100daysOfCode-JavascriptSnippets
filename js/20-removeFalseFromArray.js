//test:
const arr = [1, 5, null, NaN, false, "vase", "Voyager"];

const compact = (arr) => arr.filter(Boolean);
console.log(compact(arr));
