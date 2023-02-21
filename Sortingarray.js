function Sortingarray(arr)
{
// return arr.sort();
return arr.sort((a,b)=> {return a-b;});

}

// console.log(Sortingarray(["d","g","y","e","r","p"]));

console.log(Sortingarray([1,11,2,4,5,6,7,10,9,12,14,121,17,30,3]));