function checkPalindrome(){
    // const string = "madan";
    // let arr= string.split('').reverse().join('')
    // //console.log(arr)
    // if (string==arr){
    //     console.log("Palindrome")
    // }
    // else{
    //     console.log("Not Palindrome")
    // }
  
const string = "madam";
let len =string.length;

for(let i=0; i<len/2; i++)
{
    if(string[i] !== string[len-1-i])
    {
return "not palindrome";
    }
    else{
        return "palindrome";
    }
}

}


console.log( checkPalindrome());