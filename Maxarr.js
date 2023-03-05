// let ar = [1, 2, [15, [23], [5, 12]], [100]];

// function maxArr(arr)
// {
// let arr1 = arr.flat(3);
// // console.log(arr1);
// let max =0;
// for (let i=0; i< arr1.length; i++)
// {
//     if(arr1[i] > max)
//     {
//         max =arr1[i];
//     }
// }
// return max;
// }

// console.log(maxArr(ar));

// function maxElement(ar) 
// { 
//     let max = ar[0]; 
//     for (let i = 0; i < ar.length; i++) 
//     { if (Array.isArray(ar[i])) 
//         { 
//             let innerMax = maxElement(ar[i]); 
//             if (innerMax > max) 
//             {
//                  max = innerMax; 
//                 }
//              }
//               else 
//               {
//                    if (ar[i] > max) 
//                    {
//                         max = ar[i]; 
//                     }
//                  }
//                  } 
//                  return max; 
//                 }

// let ar = [1, 2, [15, [23], [5, 12]], [100]]; console.log(maxElement(ar));


function getMax(arr)
{
   let max = -Infinity;
   let nestedMax =[];
    for (let i = 0; i<arr.length; i++)
    {
        if (Array.isArray(arr[i]))
            nestedMax = getMax(arr[i]);
            if (nestedMax > max)
                max = nestedMax;
        else
            if (arr[i] > max)
                max = arr[i];
    }
    return max;
}
console.log(getMax([1, 2, [15, [23], [5, 12]], [100]]));