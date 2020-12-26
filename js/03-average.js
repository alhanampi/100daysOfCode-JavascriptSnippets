//average of several values being pass. 

const average = (...nums) =>
  nums.reduce((acc, val) => acc + val) / nums.length;

//test:
const result = average(...[5, 7, 1, 8]);
const resultNoArray = average(5, 7, 1, 8);

console.log(result);
console.log(resultNoArray)
