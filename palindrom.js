// function checkPalindrome(){
    // const string = "madan";
    // let arr= string.split('').reverse().join('')
    // //console.log(arr)
    // if (string==arr){
    //     console.log("Palindrome")
    // }
    // else{
    //     console.log("Not Palindrome")
    // }
  
// const string = "madam";
// let len =string.length;

// for(let i=0; i<len/2; i++)
// {
//     if(string[i] !== string[len-1-i])
//     {
// return "not palindrome";
//     }
//     else{
//         return "palindrome";
//     }
// }

// }


// console.log( checkPalindrome());


function isPalindrome(str) 
{
let cleanStr= str.replace(/[^A-Z0-9]/ig,"").toLowerCase();
console.log(cleanStr);
let revStr = cleanStr.split('').reverse().join(''); 
return cleanStr === revStr; 
}


console.log(isPalindrome("Dad@%^%$@#ad"));