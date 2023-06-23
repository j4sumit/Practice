function Anagram(str1, str2)
{
    let newstr1= str1.toLowerCase().split("").sort().join("").split("").reverse().join("");
    let newstr2= str2.toLowerCase().split("").sort().join("").split("").reverse().join("");
if(newstr1==newstr2)
{
    return "Anagram";
}    
else{
    return "Not Anagram";
}

}

console.log(Anagram("SuMIT KumAR CHAurasiYA", "sumit kumar chaurasiya"));