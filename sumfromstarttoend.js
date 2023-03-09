function sumFromStartToEnd(arr){
    var start = Math.min(arr[0], arr[1])
    var end = Math.max(arr[0], arr[1])
    sum =0
    for(var i= start; i<=end; i++){
      sum+=i
    }
    return sum
  }
  console.log(sumFromStartToEnd([1,4]))