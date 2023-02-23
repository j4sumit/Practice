function outer()
{
    var a = 10;
    function inner ()
    {
        console.log (`returing fron inner ${a}`);
    }
        return inner;
}

outer()();