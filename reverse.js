// function reverse()
// {
//     var string = "My name is Sumit Chaurasiya";
//     // var str1 =string.split('').reverse().join('').split(' ').reverse().join(' ');
//     var str1 =string.split('').reverse().join('');
//     return str1;
// }

// console.log(reverse());




function reverse(num)
{
    let res=0;
    while(num>0)
    {
res = res*10 + num%10;
num = Math.floor(num/10);
    }
return res;
}

console.log(reverse(12345643));