function removeChar(){
let Str = "Sumit Amit samir";
let res = Str.split('').filter((item,index,arr) =>{ return arr.indexOf(item) == index; }).join('');
return res;

}
console.log(removeChar());

