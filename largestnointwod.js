function largestFromArray(arr){
    var max=[];
    for(var i=0; i<arr.length;i++){
      var tempMax =arr[i][0] 
      for(var j=0; j<arr[i].length; j++){
         var currElement = arr[i][j];
         if(currElement>=tempMax){
           tempMax = currElement
         }
      }
       max.push(tempMax)
    }
   console.log(max)
    return max;
 }
 largestFromArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]]);