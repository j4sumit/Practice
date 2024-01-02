//Anagram String
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

console.log(Anagram("Dad","awdd"));