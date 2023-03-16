function sortByParity(arr){
    let even =[];
    let odd =[];
    let result=[];
    for(let i=0; i<arr.length; i++){
      
          arr[i]%2 ===0 ? even.push(arr[i]) : odd.push(arr[i]);
    }
   result = even.concat(odd)
   return result
   }

   console.log(sortByParity([1,2,3,4,5,6,7,8,9]));