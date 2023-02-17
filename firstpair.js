function firstpair()
{
let arr = [11,-4,5,11,6,-5,-4,12,10];
for(let i=0; i<arr.length-1;i++)
{
    for (let j=0;j<arr.length-1;j++)
    {
        if(arr[i]+arr[j]== 0)
        {
        return [arr[i], arr[j]];
        }
    }
}
}

let c = firstpair();
console.log(c);
