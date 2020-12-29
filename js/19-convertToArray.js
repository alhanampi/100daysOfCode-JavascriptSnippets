// test:
const original = "cat";

const toArr = (val) => (Array.isArray(val) ? val : [val]);

console.log(toArr(original));
