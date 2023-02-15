// function removeStr(){

// var String1 = "Sumit uAmtitxyx";
// // var String1='priya riya supriya'
 
// var str = String1.split('').filter((item, index, array) => { return array.indexOf(item) == index; }).join('');


// console.log(str);
// }

// removeStr();

var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];
var uniquue = [... new Set(arr)];
console.log(uniquue);