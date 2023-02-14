function removedupArr()
{
const myArray = [10,15,10,8,8,16,24,84,18,8];
const res = myArray.filter((item, index, arr) =>  arr.indexOf(item)== index);
return res;
}
console.log(removedupArr());


// var myArray = [10,15,10,8,8,16,24,84,18,8];
// var unique = [...new Set(myArray)];
// console.log(unique);


