function countchar(String, char)
{
    let count =0;
for (let i=0; i<String.length; i++)
{
    if(String.charAt(i)== char)
    {
        count++;
    }
}
return count;
}

console.log(countchar("sumiitaaa", "a"));