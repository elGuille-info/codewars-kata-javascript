
const getMax = (a, b) => Math.max(a, b);
const getMin = (a, b) => Math.min(a, b);

// callback is invoked for each element in the array starting at index 0
const arr = [1, 100, -1, 150, 30];
console.log(arr.reduce(getMax));
console.log(arr.reduce(getMin));

