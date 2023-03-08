// function Remove(arr, n)
// {

//        for( var i = 0; i < arr.length; i++){ 
//            if ( arr[i] === n) { 
//               arr.splice(i, 1); 
//            }
//        }
//        return arr;
//     }
// console.log(Remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],5));

function Remove(arr, n)
{

    return arr.filter(ele => ele!== n);

    }
console.log(Remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],8));