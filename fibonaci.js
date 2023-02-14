function fibonaci ()
{
var n1=0;
var n2=1;
var n =20;
var sum =0;
console.log(n1);
console.log(n2);

for(let i =2; i<n ;i++)
{
    sum =n1+n2;
    n1=n2;
    n2=sum;
    console.log(sum);
}




fibonaci();
