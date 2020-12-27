//new array only with the unique values of the original one:

const originalArr = [1, 5, 88, 4, 1, 5, 66, 88, 16];
let onlyUnique = [...new Set(originalArr)];

//test:
console.log(onlyUnique);
