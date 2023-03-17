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

// function Varoperation(operation)
// {
//     let val=0;
// for(let i=0; i<operation.length; i++)
// {
//     if(operation[i][1] == '+')
// {
//     val = val+1;
// }
// else{
//     val= val-1;
// }
// }
// return val;
// }

// console.log(Varoperation(["++X","++X","X++"]));


// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

function leftrightSumdiff(nums) {
    let len = nums.length;
 
     let leftSum = [0];
     let rightSum = [0];
     for (let i = 0; i < len - 1; i++) {
         leftSum.push(nums[i] + leftSum[leftSum.length - 1]);
         rightSum.push(nums[len - 1 - i] + rightSum[rightSum.length - 1]);
        }
 
     let res = [];
     for (let i = 0; i < len; i++) {
         res.push(Math.abs(leftSum[i] - rightSum[len - 1 - i]));
     }
     return res;
 };
console.log(leftrightSumdiff([10,4,8,3]));
