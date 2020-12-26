//capitalize only first character:
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");

//test:
const result = capitalize("to upper case");
console.log(result);
