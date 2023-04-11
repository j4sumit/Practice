// 1295. Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

var findNumbers = function(nums) {
    let count =0;
    for(let i=0; i<nums.length; i++)
    {
        let digit =nums[i].toString().length;
        if(digit%2==0)
        {
            count++;
        }
    }
    return count;
  
  }

console.log(findNumbers([12,345,2,6,7896]));