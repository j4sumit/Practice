function anagram()
{
var a ="Sumit kumar chaurasiya";
var b ="sUMIT CHAURASIYA kuMAR"
var a1 = a.toLowerCase().split('').sort().join('').split(' ').reverse().join(' ');
var b1 = b.toLowerCase().split('').sort().join('').split(' ').reverse().join(' ');
if(a1 == b1)
{
    console.log("Anagram");
}
else {
    console.log("Not anagram");
}
}
anagram();

// Out put:- Anagram
