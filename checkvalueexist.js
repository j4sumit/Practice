function checkvalueexist(arr,str)
{
    let Status="Not exist";

    for(let i=0 ; i<arr.length; i++)
{
    if(arr[i]===str)
    {
        Status="exist";
        break;
    }
}
return Status;
}

console.log(checkvalueexist(["Sumit", "Raju", "Amit", "Shyam"],"Amit"));