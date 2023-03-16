function findKthSmallestOrLargest(arr, num)
{
arr.sort((a,b)=>  a-b );
console.log(arr);
console.log(`nth smallest num ${arr[num-1]}`);
console.log(`nth smallest num ${arr[arr.length-num]}`);
}

findKthSmallestOrLargest([2,1,4,3,6,5,7], 3);

// function findKthSmallestOrLargest(arr, num) {
//     arr.sort(function(a, b) { return a - b});
//     console.log(arr)
//     console.log("kth smallest", arr[num- 1]) //kth smallest
//     console.log("kth largest", arr[arr.length-num]) //kth smallest
  
//   };
//   console.log(findKthSmallestOrLargest([2,1,4,3,6,5,7], 3));