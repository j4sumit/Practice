// function diffArrayElement(arr1, arr2){
//     var result =[]
//     for(var i=0; i<arr1.length; i++){
//       if(arr2.indexOf(arr1[i]) === -1){
//         result.push(arr1[i])
//       }
//     }
//     for(var j=0; j<arr2.length; j++){
//       if(arr1.indexOf(arr2[j]) === -1){
//         result.push(arr2[j])
//       }
//     }
//     return result;
//     }
//     console.log(diffArrayElement([1,2,3,4], [2,3,4,5]))

function diffArrayElement(arr1, arr2){
    var combine = arr1.concat(arr2)
    return combine.filter( (num)=>{
      if(arr1.indexOf(num)== -1 || arr2.indexOf(num)== -1 ) return num
    })
    }
    console.log(diffArrayElement([1,2,3,4], [4,5]))