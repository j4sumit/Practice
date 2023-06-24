function Uniquenum(num1, num2)
{
let newNum= [...num1, ...num2]
// console.log(newNum);
let uniqueNumber=new Set([...newNum]);
return uniqueNumber;
}


console.log(Uniquenum([1,2,3,5,4,7,6],[3,5,4,6,8,7]));