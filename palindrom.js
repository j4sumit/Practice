function checkPalindrome(){
    const string = "madam";
    let arr= string.split('').reverse().join('')
    //console.log(arr)
    if (string==arr){
        console.log("Palindrome")
    }
    else{
        console.log("Not Palindrome")
    }
  }

  checkPalindrome()