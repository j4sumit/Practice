// function sortByParity(arr){
//     let even =[];
//     let odd =[];
//     let result=[];
//     for(let i=0; i<arr.length; i++){
      
//           arr[i]%2 !==0 ? even.push(arr[i]) : odd.push(arr[i]);
//     }
// //     console.log(even);
// //     console.log(odd);
//    result = even.concat(odd);
//    return result
//    }

//    console.log(sortByParity([1,2,3,4,5,6,7,8,9]));

function Eveoddparity(arr)
{
      let odd =[];
      let even =[];
      let res=[];
for(let i=0; i<arr.length;i++)
{
      arr[i]%2 ===0 ? even.push(arr[i]) : odd.push(arr[i]);
}
res= odd.concat(even);
return res;
}

console.log(Eveoddparity([1,2,3,4,5,6,7,8,9]))