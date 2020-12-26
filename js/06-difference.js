//to get the difference between two arrays and return only the ones that aren't in both:
const difference = (first, second) => {
    const compare = new Set(second)
    return first.filter(x=> !compare.has(x))
}

//test:
const result = difference([1, 2, 3], [3, 4, 5]);
console.log(result);