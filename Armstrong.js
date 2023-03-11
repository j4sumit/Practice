function Armstrong(num)
{
let temp= num;
let res=0;
let r=0;
while(temp>0)
{
    r=temp%10;

    res =res+ r*r*r;
    temp = Math.floor(temp/10);
}
if(res==num)
{
 return true;
}
else {
    return false;
}
}

console.log(Armstrong(153));