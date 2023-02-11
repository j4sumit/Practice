function reverse (){
    var string = "My name is sumit chaurasiya";
    var Str ='';
    for (var i=string.length-1; i>=0; i--){
        Str = Str + string[i];
    } 
    return Str;
}

console.log(reverse());

// function Reverse(){
//     var string ="India is my country";
//     var result="";
//     for( var i=string.length-1; i>=0 ; i-- ) {
//        result=result+string[i] }
//     return result
//  }
//  console.log(Reverse())
