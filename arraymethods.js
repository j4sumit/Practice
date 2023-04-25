// function confirmEnding(str,target){
//     return str.endsWith(target) //true
//  }
//  console.log(confirmEnding("priya","a"))
 

//  function repeatStrinNumTimes(str, num){
//     if (num<1) return "";
//     return str.repeat(num)
//     }
//     console.log(repeatStrinNumTimes("Sumit ",5))


//     Print string n times in custom way
    function repeatStr(str, num){
if(num<=0) 
return "kindly share exact number of element";
var res ="";
for(let i=0;i<num;i++)
{
   res = str + res;
}
 return res;
  }

  console.log(repeatStr("Sumit ", 6));


// function repeatStr(str, num){
//    if(num<=0) 
//    return "kindly share exact number of element";
// if(num==1) return str;
// return str+ repeatStr(str, num-1)
// }
//    console.log(repeatStr("Sumit ", 4));
   