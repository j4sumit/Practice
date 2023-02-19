function indexofchar(arr, char)
{
// return arr.indexOf(char);
for(let i=0; i<arr.length; i++)
{
    if(arr[i]==char)
    {
        return i;
    }
}


}

console.log(indexofchar(['a', 'b', 'c','d','e','f'], 'd'));