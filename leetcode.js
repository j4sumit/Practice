// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// function shuffle(nums, n)
// {
// let newarr =[];
// for(let i=0; i<n; i++)
// {
//     newarr.push(nums[i]);
//     newarr.push(nums[i+n]);
// }
// return newarr;
// }

// console.log(shuffle([2,5,1,3,4,7], 3));

//******************************************************************** */

function Varoperation(operation)
{
    let val=0;
for(let i=0; i<operation.length; i++)
{
    if(operation[i][1] == '+')
{
    val = val+1;
}
else{
    val= val-1;
}
}
return val;
}

console.log(Varoperation(["++X","++X","X++"]));