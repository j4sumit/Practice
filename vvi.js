//1.    Anagram String
function Anagram(str1, str2)
{
let s1=str1.toLowerCase().split("").sort().join("");
let s2=str2.toLowerCase().split("").sort().join("")
if(s1===s2)
{
    return "String in Anagram"
}else{
    return "String is not Anagram"
}
}
// console.log(Anagram("Dad","awdd"));

//2.    ArmStrong program

function ArmStrong(num)
{
 let temp=0, newnum=num;
while(newnum>0)
{
    let rem=newnum%10;
    console.log(rem)
    temp=temp + rem**3;
    console.log(temp)
    newnum= Math.floor(newnum/10);
    console.log(newnum)
}
if(temp===num){
    return "number is ArmSTrong"
}else{
    return "Number is not ArmStrong";
}
}
console.log(ArmStrong(153));