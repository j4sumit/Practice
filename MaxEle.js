// let nestedArray = [1,56,78,[10,24,[22,11, 67,[55]]],130,[11]];
// let arr = nestedArray.flat(3);
// // console.log(arr);
// // let res = arr.reduce((a,b)=> Math.max(a,b));
// // console.log(res);

// let res = arr.sort((a,b) => b-a);
// console.log(res[1]);


function maxElement(arr)
{
let maxE=-Infinity;
let nestedArr=[]
for(let i=0; i<arr.length;i++)
{
    if(Array.isArray(arr[i]))
    {
        nestedArr=maxElement(arr[i])
        if(nestedArr>maxE)
        {
            maxE=nestedArr;
        }
    }
    else if(arr[i]>maxE)
    {
        maxE=arr[i];
    }
}
return maxE;
}
console.log(maxElement([1,56,78,[210,24,[22,11, 67,[55]]],130,[11]]))