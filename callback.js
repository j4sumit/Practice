function Sum(a,b,callback)
{
    let  res= a+b;
    console.log(res);
    Callbackfun();
}

function Callbackfun()
{
    console.log("callback function has been executed");
}

Sum(5,10, Callbackfun);