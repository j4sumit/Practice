function reverseStr(){
    var str ="My name is Sumit Chaurasiya";
    var res = str.split('').reverse().join('').split(' ').reverse().join(' ');
    console.log(res);
}

reverseStr();
