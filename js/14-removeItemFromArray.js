//original array:
const arr = [1, 5, false, "16", "hiccup", 1701, NaN, 'ok'];

//option 1, removes last element from array and returns the erased value:
const a = arr.pop()

//same but at the start:

const b = arr.shift()

//remove a particular index, second value is how many items to remove:
const c = arr.splice(1, 1)

//with a HOC, return everything but one item:
const d = arr.filter(x => x !== false)

//test
console.log(d)