//test strings:
const str = "Darmok and Jalad at Tanagra. Shaka, when the walls fell.";

const check = "Shaka";

//get in which index it is. If it doesn't exist it will give -1, so it can be compared to get true or false:
console.log(str.indexOf(check) !== -1);

//new way of doing it:
console.log(str.includes(check));
