function CheckChar(string, substr)
{
  let Str= string.toLowerCase();
  let subst =substr.toLowerCase();
  for(let char of subst)
  {
if(Str.indexOf(char)==-1)
{
  return false;
}
  }
 return true; 
}

console.log(CheckChar("Sumit","sum"));