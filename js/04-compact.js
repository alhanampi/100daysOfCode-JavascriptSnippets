//remove all falsy values from an array
const compact = (arr) => arr.filter(Boolean);

//test:
const result = compact([0, 1, false, true, NaN, "", "value"]);

console.log(result);
