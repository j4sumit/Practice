function removeStr(){

var String1 = "Sumit uAmtitxyx";
// var String1='priya riya supriya'
 
var str = String1.split('').filter((item, index, array) => { return array.indexOf(item) == index; }).join('');


console.log(str);
}

removeStr();