// function firstDuplicate()
// {
//     let arr =[1,2,2,5,5];
//     let data =[];
// for( var item of arr)
// {
//     if(data[item])
//     {
// return item;
//     }
//     else 
//     {
//         data[item]=item;
//         console.log(data[item]);
//     }
// }
// return -1;
// }

// function removedup(arr)
// {

//     for(let i=0; i<arr.length; i++)
//     {
//         for(let j=i+1; j<arr.length; j++)
//         {
//             if(arr[i]==arr[j])
//             {
//                 arr.splice(j,1);
//             }
//         }
    
//     }
//     console.log(arr);
// }

// removedup([1,2,2,5,5]);


function removedup(arr)
{
    let arr1=[]
for (let i=0; i<arr.length; i++)
{
   if(arr1.indexOf(arr[i])==-1)
   {
       arr1.push(arr[i])
   }
}
return arr1;
}
console.log(removedup([1,1,3,5,2,5,5]));