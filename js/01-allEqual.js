//check if all elements on an array are equal to each other
const allEqual = (arr) => arr.every((val) => val === arr[0]);


//testing
const resultTrue = allEqual([2, 2, 2, 2]);
const resultFalse = allEqual([2, 17, 52, 2]);

console.log(resultTrue)
console.log(resultFalse)
