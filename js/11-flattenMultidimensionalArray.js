//merge several arrays inside an array into an unique one:

let multiDimensional = [8, [16, 5], ["icecream", "gamma"], 16];
let flattened = [].concat(...multiDimensional);

//test:
console.log(flattened);
