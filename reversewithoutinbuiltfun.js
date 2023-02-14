function reverse (){
    var string = "My name is sumit chaurasiya";
    var Str ='';
    for (var i=string.length-1; i>=0; i--){
        Str = Str + string[i];
    } 
    return Str;
}

console.log(reverse());

