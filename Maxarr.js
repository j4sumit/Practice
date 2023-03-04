let ar = [1, 2, [15, [23], [5, 12]], [100]];

function maxArr(arr)
{
let arr1 = arr.flat(3);
// console.log(arr1);
let max =0;
for (let i=0; i< arr1.length; i++)
{
    if(arr1[i] > max)
    {
        max =arr1[i];
    }
}
return max;
}

console.log(maxArr(ar));