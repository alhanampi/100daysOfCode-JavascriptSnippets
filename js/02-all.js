//first param is the array, second is the function that will be applied. The = Boolean is just type checking
//It will apply the function to every element of the arr and return true if ALL elements match

const all = (arr, funct = Boolean) => arr.every(funct);

//test
const resultFalse = all([2, 7, 9], (x) => x > 3);
const resultTrue = all([2, 7, 9], (x) => x > 1);
console.log(resultFalse);
console.log(resultTrue);
