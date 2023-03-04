let nestedArray = [1,56,78,[10,24,[22,11, 67,[55]]],130,[11]];
let arr = nestedArray.flat(3);
// console.log(arr);
// let res = arr.reduce((a,b)=> Math.max(a,b));
// console.log(res);

let res = arr.sort((a,b) => b-a);
console.log(res[1]);