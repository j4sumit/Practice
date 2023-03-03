function uniquefromArrays(arr1, arr2){
    let arr = [...arr1, ...arr2]
    let unique = [...new Set(arr)];
    return unique
   }
   console.log(uniquefromArrays([1,2,3,4], [2,3,4,5]));