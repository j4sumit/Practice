function Anagram()
{
    var Str1 = "Sumit";
    var Str2= "Miatu";
    let sortstr1 = Str1.toLowerCase().split('').sort().join('');
    let sortstr2 = Str2.toLowerCase().split('').sort().join('');
if (sortstr1 === sortstr2)
{
    console.log("Given String is Anagram");
}
else{
    console.log("Given String is not Anagram");
}
}

Anagram();

