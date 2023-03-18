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

// function leftrightSumdiff(nums) {
//     let len = nums.length;
 
//      let leftSum = [0];
//      let rightSum = [0];
//      for (let i = 0; i < len - 1; i++) {
//          leftSum.push(nums[i] + leftSum[leftSum.length - 1]);
//          rightSum.push(nums[len - 1 - i] + rightSum[rightSum.length - 1]);
//         }
 
//      let res = [];
//      for (let i = 0; i < len; i++) {
//          res.push(Math.abs(leftSum[i] - rightSum[len - 1 - i]));
//      }
//      return res;
//  };
// console.log(leftrightSumdiff([10,4,8,3]));

// 1512. Number of Good Pairs
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// function Goodpairs(nums) {
//     let count=0;
//     for(let i=0; i<nums.length;i++)
//     {
//         for(let j=1;j<nums.length;j++)
//         {
//             if(nums[i]==nums[j] & (i<j))
//             {
//                 count=count+1;
//             }
//         }
//     }
//     return count;
// };

// console.log(Goodpairs([1,2,3,1,1,3]));


// . Richest Customer Wealth
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// function maxsumofsubarray(accounts) {
//     let sum=0;
//     let final=[];
//     for(let i=0;i<accounts.length; i++)
//     {
//         for(let j=0;j<accounts[i].length; j++)
//     {
// sum= sum + accounts[i][j];

//     }
//         final.push(sum);
//         sum=0;
//     }

//     final.sort((a,b) => a-b);
//     return final[final.length-1];

// }

// console.log(maxsumofsubarray([[1,5], [7,3],[3,5]]));


function Sumarr(nums) {
    let res =[];
    let sum=0;
    for(let i=0; i<nums.length; i++)
    {
for(let j=0; j<=i; j++)
{
    sum=sum+nums[j];
}
res.push(sum);
sum=0;
    }
    return res;
};

console.log(Sumarr([1,2,3,4]));