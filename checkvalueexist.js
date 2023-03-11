function checkvalueexist(arr, item)
{
var status = "not exist";
for(let i=0; i<arr.length; i++)
{
    if(arr[i]===item)
    {
        status = "exist"
        break;
    }
}
return status;
}

console.log(checkvalueexist(['amit', 'sumit', 'supriya'], 'sumit'));

