// function firstDuplicate()
// {
//     let arr =[1,2,2,5,5,];
//     let data ={};
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

function firstDuplicate() {
    let arr = [1,2,2,5,5];
    for (let i=0;i<arr.length; i++) {
for (let j=i+1; j<arr.length; j++)
{
    if(arr[i]==arr[j])
    {
        return j;
    }
}
            }  
        }
console.log(firstDuplicate());