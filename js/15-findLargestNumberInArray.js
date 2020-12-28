//test array:
const arr = [15, 9, 17, 110, 5, 1, 581];

//with Math.max:
console.log(Math.max(...arr));

//with for:
const findLargest = (arr) => {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) highest = arr[i];
  }
  return highest;
};

console.log(findLargest(arr));
