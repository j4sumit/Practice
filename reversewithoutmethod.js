function revesewithoutmethod()
{
    var String = "My Name is string";
    var r='';
    var w='';
    for (let c of String)
    {
if(c == '')
{
    r = r + w+ c;
    w= '';
}
else{
    w =c +w;
}
    }
    return r+w;
}

console.log(revesewithoutmethod());