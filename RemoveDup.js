// function removeStr(){

// var String1 = "Sumit uAmtitxyx";
// // var String1='priya riya supriya'
 
// var str = String1.split('').filter((item, index, array) => { return array.indexOf(item) == index; }).join('');


// console.log(str);
// }

// removeStr();

// var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];
// var uniquue = [... new Set(arr)];
// console.log(uniquue);

var myvar = ['a',2, 4,2,4,8,5,8,'a','c','d','c','e','c','d','a','b'];
var removed =myvar.filter((item, idex, arr) => {return arr.indexOf(item) == idex;});
console.log(removed);