function reverse()
{
    var string = "My name is Sumit Chaurasiya";
    var str1 =string.split('').reverse().join('').split(' ').reverse().join(' ');
    return str1;
}

console.log(reverse());