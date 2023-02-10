function reverseStr(){
    var str ="My name is Sumit Chaurasiya";
    // var res = str.split('').reverse().join('').split(' ').reverse().join(' ');

    /*    var res = str.split('').reverse().join('');
    console.log(res); */

    let word ='';
let res ='';
for(let c of str){
    if (c=== ' ')
    {
        res = res +word +c;
        word ='';
    }
    else{
        word =c +word;
    }

}
return (res + word);
}

console.log(reverseStr());
