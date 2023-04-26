// function Sum(a)
// {
//     return function(b)
//     {
//         return function(c)
//         {
            
//                 return a+b+c;
                 
//             }
//     }
// }

// console.log(Sum(2)(12)(8));

function mul(a)
{
    return function(b)
    {
        return function(c)
        {
            return a*b*c;
        }
    }
}

console.log(mul(2)(3)(5));