function RepeatStr(str, num)
{
if(num<=0)
{
  return "";
}
if(num==0)
{
  return num;
}
else{
  return str.repeat(num);
}
}
console.log(RepeatStr("Sumit",4));