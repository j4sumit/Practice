function secondh(arr)
{
let max = Math.max(...arr);
let min = Math.min(...arr);

let secondh = Math.max(...arr.filter(num => num !== max));
let secondm = Math.min(...arr.filter(num => num !== min));

// let secondh1 = Math.max(...arr.filter(num => num !== secondh));
// let secondm1 = Math.min(...arr.filter(num => num !== secondm));

console.log(secondh);
console.log(secondm);
}

secondh([3,5,5,4,1,3,45,65,565,24,2,646]);


// let numbers = [1,3,4,2,9,6,7,3,1,3,5,8,0];
// // 2nd greatest, 2nd smallest. -> 1 smallest, 8 greatest.
// let max = Math.max(...numbers); 
// let min = Math.min(...numbers);

// let secondMax = Math.max(...numbers.filter(x => x !== max)); 
// let secondMin = Math.min(...numbers.filter(x => x !== min));

// console.log(`Second max number ${secondMax} `);
// console.log(`Second min number ${secondMin}`);
  