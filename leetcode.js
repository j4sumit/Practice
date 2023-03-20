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


// function Sumarr(nums) {
//     let res =[];
//     let sum=0;
//     for(let i=0; i<nums.length; i++)
//     {
// for(let j=0; j<=i; j++)
// {
//     sum=sum+nums[j];
// }
// res.push(sum);
// sum=0;
//     }
//     return res;
// };

// console.log(Sumarr([1,2,3,4]));


// function sum (candies, extraCandies) {
//        let newarr =[];
//     let res =[];
//     for(let i=0;i<candies.length; i++)
//     {
        
// newarr.push(candies[i]+extraCandies);

//          }
//     for(let j=0; j<newarr.length; j++)
//     {
//         if(newarr[j]>= Math.max(...candies))
//         {
//             res.push(true);
//          }
//          else
//          { res.push(false);}
//     }
//     return res;
// } 
// console.log(sum([4,2,1,1,2],1));

// 2114. Maximum Number of Words Found in Sentences
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation: 
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

// function mostWordsFound(sentences) {
    
//     let count=0;
//     for(let i=0; i<sentences.length; i++)
//     {
//       let len =sentences[i].split(' ').length;
//       if(len>count)
//       {
//         count = len;
//       }
//     }
//     return count;

// }

// console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));

// 1365. How Many Numbers Are Smaller Than the Current Number
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

// function smallerNumbersThanCurrent(nums) {
//   let newarr=[];
//   let count=0;
// for(let i=0;i<nums.length; i++)
// {
//   for(let j=0; j<nums.length; j++)
//   {
//       if(nums[i]>nums[j])
//       {
//           count++;
//       }
      
//    }
//    newarr.push(count);
//    count=0;
// }
// return newarr;
// }

// console.log(smallerNumbersThanCurrent([8,1,2,2,3]));

//  function decompressRLElist(nums) {
//   let res=[];
  
//   for(let i=0; i<nums.length; i=i+2)
//   {
// for(let j=0; j<nums[i];j++)
// {
//   res.push(nums[i+1]);
// }
//   }
//   return res;

// };

// console.log(decompressRLElist([1,2,3,4]));

// 2535. Difference Between Element Sum and Digit Sum of an Array
// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.

// function differenceOfSum(nums) {
//   let snum=0;
//   let sum=0;
//   let res=0;
//   for(let i=0; i<nums.length; i++)
//   {
//       snum=snum+nums[i];
//       }
// for(let num of nums)
// {   while (num>0) {
//           sum += num % 10;
//           num = Math.floor(num / 10);
//       }
// }

// console.log(sum);
// console.log(snum);
// res = snum-sum;
// return res;
// }

// console.log(differenceOfSum([1,15,6,3]));

// 1528. Shuffle String
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// function restoreString(s, indices) {
//   let newstr=[];
  
// for(let i=0; i<indices.length; i++)
// {
// newstr[indices[i]]=s[i];
// }
// let arrtostr= newstr.join('');
// return arrtostr;
// };

// console.log(restoreString([4,5,6,7,0,2,1,3]));

// 2367. Number of Arithmetic Triplets
// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.

// function arithmeticTriplets(nums, diff) {
//   let count = 0;
//       for ( let num of nums)
//           if (nums.includes(num + diff) && nums.includes(num + diff*2))
//               count += 1;
//       return count
// }

// console.log(arithmeticTriplets([4,5,6,7,8,9],2))

// 1662. Check If Two String Arrays are Equivalent
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.


function arrayStringsAreEqual(word1, word2) {
  let word11= word1.sort((a,b)=>a-b);
  let word22 = word2.sort((a,b)=>a-b);
  let str1='';
  let str2='';
  for(let i=0; i<word11.length;i++)
  {
      str1=str1+word11[i];
  }
  for(let j=0; j<word22.length; j++)
  {
      str2= str2+word22[j];
  }
if(str1.toLowerCase() === str2.toLowerCase())
{
  return true;
}
else{
  return false;
}

}

console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]))