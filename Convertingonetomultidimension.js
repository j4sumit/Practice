function chunkArrayInGroup(arr, size){
    var group=[];
    let c;
    while(arr.length>0){
      c=arr.splice(0, size);
      console.log(c)
    group.push(c);
    }
    return group
  }
  console.log (chunkArrayInGroup(['a','b','c','d','e','f'],2)) //[["a", "b"], ["c", "d"]]