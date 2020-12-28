//original array:
const arr = [1, 5, false, "16", "hiccup"];

//option 1, old way:
const copyArr1 = arr.slice();

//option2, ES6 way:
const copyArr2 = [...arr];

//test
console.log(copyArr1);
console.log(copyArr2);
