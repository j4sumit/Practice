function largestpairsum(numbers)
{
let num =numbers.sort((a,b) => {return b - a})
console.log(num);
return num[0]+num[1];
}

const result = largestpairsum([9,7,15,11,8,4,5,6,1,2,3]);
console.log(result);