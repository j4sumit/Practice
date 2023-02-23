function outer()
{
    var a = 10;
    function inner ()
    {
        console.log (`returing fron inner ${a}`);
    }
        return inner;
}

outer()(); //  here first `()` will return inner function and then using secong`()` to call inner function


// function outer()
// {
//     var a= 25;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// var result = outer();
// console.log(result());



function outer(b)
{
    var a = 10;
    function inner ()
    {
        console.log (`returing fron inner ${a+b}`);
    }
        return inner;
}

outer(15)();


