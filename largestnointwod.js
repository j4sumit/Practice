// function largestFromArray(arr){
//     var max=[];
//     for(var i=0; i<arr.length;i++){
//       var tempMax =arr[i][0] 
//       for(var j=0; j<arr[i].length; j++){
//          var currElement = arr[i][j];
//          if(currElement>=tempMax){
//            tempMax = currElement
//          }
//       }
//        max.push(tempMax)
//     }
//    console.log(max)
//     return max;
//  }
//  largestFromArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]]);

// function largestFromArray(arr){
//    var max=[0,0,0,0];
//    for(var i=0; i<arr.length;i++){
//       for(var j=0; j<arr[i].length; j++)
//       {
//           if(arr[i][j]>=max[i]){
//           max[i] = arr[i][j]
//         }
//       }
//    }
//   console.log(max)
//   return max;
// }
// largestFromArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]])


function largest2D(arr)
{
  var max =[0,0,0,0];
  for(var i=0; i<arr.length;i++)
  for(var j=0; j<arr[i].length;j++)
  {
    if(arr[i][j]>max[i])
    {
      max[i] = arr[i][j];
    }
  }
  // console.log(max);
  return max;
 }

 console.log(largest2D([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]]));