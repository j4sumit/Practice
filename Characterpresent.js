function characterPresent(arr){
    var first = arr[0].toLowerCase()
    var second = arr[1].toLowerCase()
    for (var letter of second){
      if(first.indexOf(letter)== -1){
        return false
      }
    }
    return true
  }
  console.log(characterPresent(["hello","hel"]))

// function Characterpresent(arr)
// {
// let first = arr[0].toLowerCase();
// let second =arr[1].toLowerCase();
// for(let str of second)
// {
//     if(!first.includes(str)){
//         return false;
//     }
// }
// return true;
// }

// console.log(Characterpresent(['hello', 'hel']));