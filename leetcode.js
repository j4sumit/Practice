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


// function arrayStringsAreEqual(word1, word2) {
//   let word11= word1.sort((a,b)=>a-b);
//   let word22 = word2.sort((a,b)=>a-b);
//   let str1='';
//   let str2='';
//   for(let i=0; i<word11.length;i++)
//   {
//       str1=str1+word11[i];
//   }
//   for(let j=0; j<word22.length; j++)
//   {
//       str2= str2+word22[j];
//   }
// if(str1.toLowerCase() === str2.toLowerCase())
// {
//   return true;
// }
// else{
//   return false;
// }

// }

// console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]))


// function sumOddLengthSubarrays(arr) {
//   let sum = 0;
//     let n = arr.length
//     for(let i=0; i < arr.length; i++){
//         let s = n - i; // number of subarrays start with arr[i]
//         let e = i + 1;  // number of subarrays end with arr[i];
//         // so the total subarray which include arr[i] is s*e
//         // so half of the sub arrays are odd so we devide it by two
//         // we multiply the number of occurence of the element in odd sub arrays with the element

 
//         sum += ((Math.ceil((s*e)/2))*arr[i]) 
//     }
//     return sum; 
// }

// console.log(sumOddLengthSubarrays([1,4,2,5,3]));

// 1816. Truncate Sentence
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"

// function truncateSentence (s, k) {
//   let arr = s.split(" ");
//   let newarr =[];
//   for(let i=0;i<k; i++)
//   {
//     newarr.push(arr[i]);
//   } 

// return newarr.join(" ");

// }
 
// console.log(truncateSentence("Hello how are you Contestant", 4));

// 2006. Count Number of Pairs With Absolute Difference K
// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
// Input: nums = [1,2,2,1], k = 1
// Output: 4 

// function countKDifference(nums, k) {
//   let count =0;
//   for(let i=0; i<nums.length; i++)
//   {
//       for(let j=0; j<nums.length; j++)
//       {
//           if(nums[i]-nums[j]==k)
//           {
//               count++;
//           }
//       }
//   } 
//   return count;
// };

// console.log(countKDifference([1,2,2,1],1));

// 804. Unique Morse Code Words
// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:
// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".

// var uniqueMorseRepresentations = function(words) {

//     const data = {a:".-", b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."}
    
//         const set =new Set();
    
//       for(let i=0;i<words.length; i++)
//       {
//         let res="";
//             for(let j=0; j<words[i].length;j++)
//           {
    
//     res =res + data[words[i][j]];
    
//           }
//            set.add(res);
                 
    
//        }
    
//       return set.size;  
    
//     };

//     console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]));

// var countConsistentStrings = function(allowed, words) {
//     let charcount;    
//     let count=0;
//   for(let i=0; i<words.length; i++)
//   {

// for(let j=0; j<allowed.length; j++)
// {
//     if(words[i].includes(allowed[j]))
//     {
//         charcount++;
//     }
// }
// if(charcount >= allowed.length)
// {
// count++;
// }
// charcount =0;
//   }  
//   return count;
// };

// console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));


// 1684. Count the Number of Consistent Strings
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.


// function countConsistentStrings(allowed, words) {
//   let charcount=0;   
//   let char1=[];
//   let str;
//   for(let i=0; i<words.length; i++)
//   {
//      str = words[i];
  
//   for(let j=0; j<str.length; j++)
//   {
  
//       if(allowed.includes(str[j]))
//       {
//   char1.push(str[j]);
//       }
//   }
//       if(char1.length == str.length)
//       {
//         charcount++;
//       }
//       char1 = [];
//   }
  
     
//     return charcount;
//   };

//   console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));


// 1913. Maximum Product Difference Between Two Pairs
// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.
// Input: nums = [5,6,2,7,4]
// Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.

// var maxProductDifference = function(nums) {
//   let sortednum = nums.sort((a,b) => a-b);
//   let firstpair= sortednum[0]*sortednum[1];
//   let secondpair=sortednum[sortednum.length-1]*sortednum[sortednum.length-2];
//   return secondpair-firstpair;
// };

// console.log(maxProductDifference([4,2,5,9,7,4,8]));


// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// var findMedianSortedArrays = function(nums1, nums2) {
//   let thirdarr = [...nums1, ...nums2].sort((a,b)=> a-b);
//   console.log(thirdarr);
//   let sum=0;
//   let count=0;
//   let median;
//   Hlength=Math.floor(thirdarr.length/2);
//   console.log(Hlength);
// for(let i=Hlength; i<Hlength+2; i++)
// {
//   sum =sum+thirdarr[i];
//   count++;
// } 
// median= sum/count;
// return median;
// };

// var findMedianSortedArrays = function(nums1, nums2) {
//   let thirdarr = [...nums1, ...nums2].sort((a,b)=> a-b);
//    let median;

// if(thirdarr.length%2==0)
// {
//     let specificPlace = Math.floor(thirdarr.length / 2);
// median = (thirdarr[specificPlace-1]+thirdarr[specificPlace])/2;
// return median;
// }
// else
// {
// Hlength=Math.floor(thirdarr.length/2);
// return thirdarr[Hlength];
// }
// return median;
// };
// console.log(findMedianSortedArrays([1,3],[2]));


// var sortPeople = function(names, heights) {
 
//      let nameHeightMatrix = []
//      let result = []
 
//      for (let i = 0; i < names.length; i++) {
//          nameHeightMatrix.push([names[i], heights[i]])
 
//         }
//  console.log(nameHeightMatrix);
//      nameHeightMatrix.sort((a, b) => b[1] - a[1])
//      console.log(nameHeightMatrix);
//      for (let [name, height] of nameHeightMatrix) {
//          result.push(name)
//      }
 
//      return result
//  };
//  console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))

// 1464. Maximum Product of Two Elements in an Array
// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 
// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
// var maxProduct = function(nums) {
//     let sortednums = nums.sort((a,b) => a-b);
    
//     return (sortednums[sortednums.length-1]-1) *(sortednums[sortednums.length-2]-1)  
//   };

//   console.log(maxProduct([3,4,5,2]));

// 2176. Count Equal and Divisible Pairs in an Array
// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
 
// Input: nums = [3,1,2,2,2,1,3], k = 2
// Output: 4
// Explanation:
// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

// var countPairs = function(nums, k) {
//     let indexes;
//     let count =0;
    
//     for(let i=0;i<nums.length; i++)
//     {
//         for(let j=i+1;j<nums.length; j++)
//         {
//             if(nums[i]===nums[j])
//             {
// indexes = i*j;
// { 
//     if(indexes%k ===0)
//     {
//         count++;
//     }
// }
//             }
//         }
//     }
//     return count;
// };
// console.log(countPairs([3,1,2,2,2,1,3],2));

// 2553. Separate the Digits in an Array
// Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

// To separate the digits of an integer is to get all the digits it has in the same order.

// For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].
// Input: nums = [13,25,83,77]
// Output: [1,3,2,5,8,3,7,7]
// Explanation: 
// - The separation of 13 is [1,3].
// - The separation of 25 is [2,5].
// - The separation of 83 is [8,3].
// - The separation of 77 is [7,7].
// answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.

// var separateDigits = function(nums) {
// //     let res = [];
//  return nums.join("").split("");
// //  for(let i=0; i<nums.length; i++)
// //  {
// //  str = nums[i]+"";
// //  for(let j=0; j<str.length; j++)
// //  {
// //      res.push(Number(str[j]));
// //  }
// //  }
// //  return res;
//  };


//  console.log(separateDigits([13,25,83,77]));

// 2108. Find First Palindromic String in the Array
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.
// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

// var firstPalindrome = function(words) {


//     let word;
//         for(let j=0; j<words.length; j++)
//         {
//             word= words[j];
//             let tempword=""; 
//     for(let i=word.length-1; i>=0; i--)
//        {
//     tempword= tempword+ word[i];
//        }

    
//          if(word=== tempword)
//             {
//                 return word;
//             }
    
//         }
//         return "";
//     };

//     console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));


// 2586. Count the Number of Vowel Strings in Range
// You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

// Input: words = ["are","amy","u"], left = 0, right = 2
// Output: 2
// Explanation: 
// - "are" is a vowel string because it starts with 'a' and ends with 'e'.
// - "amy" is not a vowel string because it does not end with a vowel.
// - "u" is a vowel string because it starts with 'u' and ends with 'u'.
// The number of vowel strings in the mentioned range is 2.

// var vowelStrings = function(words, left, right) {
//     let vowels=['a','e','i','o','u'];
//     let count =0;
//     let word;
//     // for(let i=0; i<words.length; i++)
//     for(let i=left; i<=right; i++)
//     {
//         word =words[i].toLowerCase();
//         // console.log(vowels.includes(word[0]));
//         // console.log(vowels.includes(word[word.length-1]));
        
// if(vowels.includes(word[0]) && vowels.includes(word[word.length-1]) )
// {
//         count++;
    
// }
//     }
//     return count;

// };

// console.log(vowelStrings(["are","amy","u"],0,2))

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

// var findNumbers = function(nums) {
//     let count =0;
//     for(let i=0; i<nums.length; i++)
//     {
//         let digit =nums[i].toString().length;
//         if(digit%2==0)
//         {
//             count++;
//         }
//     }
//     return count;
  
//   }

// console.log(findNumbers([12,345,2,6,7896]));

// 557. Reverse Words in a String III
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"

// var reverseWords = function(s) {
//     let res = s.split("").reverse().join("").split(" ").reverse().join(" ");
//     return res;
// };
// console.log(reverseWords("Let's take LeetCode contest"));

// 1768. Merge Strings Alternately
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// var mergeAlternately = function(word1, word2) {
//     let str1=word1.split('');
//     let str2=word2.split('');
//     let maxlen = Math.max(str1.length, str2.length)
//     let res=[];
//     for(let i=0; i<maxlen;i++)
//     {
//   res.push(str1[i]);
//   res.push(str2[i]);
//     }
  
//     return res.join('');  
//   };

//   console.log(mergeAlternately("abc", "pqr"))

// 	1119 Remove Vowels from a String

// function removevowels(str){
//   let vowels ="aeiouAEIOU";
//   let res='';
// for(let i=0; i<str.length; i++)
// {
//   if(vowels.indexOf(str[i])===-1)
//   {
// res =res + str[i];
//   }
// }
// return res;
// }

// console.log(removevowels("Sumit Kumar ChaurasiyA"));

// 1221. Split a String in Balanced Strings
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// function balancedStringSplit(s) {
//   let Lcount=0;
//   let Rcount=0;
//   let res=0;
//  for(let i=0; i<s.length; i++)
//  {
//      if(s[i]=="L")
//      {
// Lcount++
//      }
//      if(s[i]=="R")
//      {
//          Rcount++;
//      }
//      if(Lcount === Rcount)
//      {
//          res++;
//      }
//  } 
//  return res;
// }

// console.log(balancedStringSplit("RLRRLLRLRL"));
// console.log(balancedStringSplit("RLRRRLLRLL"));
// console.log(balancedStringSplit("LLLLRRRR"));

// 709. To Lower Case
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
// Example 1:
// Input: s = "Hello"
// Output: "hello"

// var toLowerCase = function(s) {
//   let res="";
//   for(let i=0; i<s.length; i++)
//   {
//     let ascii= s.charCodeAt(i);
//     if(ascii>=65 && ascii<=90)
//     {
//       res =res+String.fromCharCode(ascii+32);
//     }
//     else{
//       res =res+s.charAt(i);
//     }
//   }
//   return res;
// };

// console.log(toLowerCase("Hello"));
// console.log(toLowerCase("here"));
// console.log(toLowerCase("LOVEly"));

// 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// function revesestr(str)
// {
//   let left=0;
//   let right=str.length-1;
//   while(left<right)
//   {
//     let temp=str[left];
//     str[left]=str[right];
//     str[right]=temp;
//     left++;
//     right--;
//   }
//   return str;
// }
// console.log(revesestr(["h","e","l","l","o"]));
// console.log(revesestr(["H","a","n","n","a","h"]));



//Hoisting  example with variable and function.

console.log(a);
var a = 5;
console.log(a);

fullname();  
function fullname()
{
  console.log("Sumit Chaurasiya");
}


