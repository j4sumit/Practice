// function outer()
// {
//     var a = 10;
//     function inner ()
//     {
//         console.log (`returing fron inner ${a}`);
//     }
//         return inner;
// }

// outer()();

function outer()
{
    var a= 25;
    function inner(){
        console.log(a);
    }
    return inner;
}

var result = outer();
console.log(result());
