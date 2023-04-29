// function chunkArrayInGroup(arr, size){
//     var group=[]
//     while(arr.length>0){
//     group.push(arr.slice(0, size))
//     arr = arr.slice(size)
//     }
//     console.log(group);
//   }
//   chunkArrayInGroup(['a','b','c','d'],2);

function chunkArrayInGroup(arr, size){
    var group=[]
    while(arr.length>0){
    group.push(arr.splice(0, size))
    }
    return group
  }
  console.log (chunkArrayInGroup(['a','b','c','d','e','f'],3)) //[["a", "b"], ["c", "d"]]