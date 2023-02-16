// function longestword()
// {
// let name = "My name is sumit chaurasiya currentlyyy persuing frontend trainging from soal";
// var words = name.split(' ');
// var longest = "";
// for( let word of words)
// {
//     if (word.length> longest.length)
//     {
//         longest =word;
//     }
// }

// return longest;
// }

// console.log(longestword());

function smallestword()
{
let name = "Myyy name isss sumit chaurasiya currentlyyy persuing frontend trainging from soal ok";
var words = name.split(' ');
var smallest = words[5];
for( let word of words)
{
    if (word.length< smallest.length)
    {
        smallest =word;
    }
}

return smallest;
}

console.log(smallestword());