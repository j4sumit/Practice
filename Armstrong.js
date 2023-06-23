function ArmStrong(num)
{
    let tempnum=num;
    let res=0;
    let temp;
while(num>0)
{
    temp=num%10;
res=res+ temp*temp*temp;
num=Math.floor(num/10);
}
if(res==tempnum)
{
    return "ArmStrong";
}
else{
    return "Not ArmStrong";
}
}

console.log(ArmStrong(153));