// function characterPresent(arr){
//     var first = arr[0].toLowerCase()
//     var second = arr[1].toLowerCase()
//     for (var letter of second){
//       if(!first.includes(letter)){
//         return false
//       }
//     }
//     return true
//   }
//   console.log(characterPresent(["hello","hey"]))

function Characterpresent(arr)
{
let first = arr[0].toLowerCase();
let second =arr[1].toLowerCase();
for(let str of second)
{
    if(!first.includes(str)){
        return false;
    }
}
return true;
}

console.log(Characterpresent(['hello', 'hel']));