function longestword()
{
let name = "My name is sumit chaurasiya currentlyyy persuing frontend trainging from soal";
var words = name.split(' ');
var longest = "";
for( let word of words)
{
    if (word.length> longest.length)
    {
        longest =word;
    }
}

return longest;
}

console.log(longestword());