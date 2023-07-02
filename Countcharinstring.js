function countchar(String, str)
{
    let count = 0;
    for(let i=0; i<String.length; i++)
    {
        if(String.charAt(i)==str)
        {
            count++;
        }
    }
    return count;
}


console.log(countchar("Sumit chaurasiya", "i"));