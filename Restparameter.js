function aver(...numbers)
{
let sum =0;
for(let number  of numbers)
{
sum = sum+number;
}
return sum/numbers.length;
}

console.log(aver(3,5,12,43,43,2,3,4,5,6,6,12,64));