function missingarrayitem()
{
var a = [1,9,16,36];
var missingarr =[];
for (let i=1; i<=a[a.lentgh-1]; i++)
{
    if(a.indexOf(i)== -1)
    {
missingarr.push(i);
    }
}
return missingarr;
}

console.log(missingarrayitem());

