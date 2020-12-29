//test:
const arr = [1, 5, 1, 1, 2, 3, 8, 16, 1, 6]

const count = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

console.log(count(arr, 1))