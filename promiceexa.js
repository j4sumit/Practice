// let myPromice = new Promise(function(resolve, reject){
// let num =10;
// if(num%2==0)
// {
//     resolve("number is Even");
// }
// else
// {
//     reject("number  is odd");
// }
// });

// myPromice.then(function(mes){console.log(mes)}).catch(function(mes){console.log(mes);});

function isevenodd(num)
{
    return new Promise(function(resolve, reject){
        if(num%2==0)
        {
            resolve("number is Even");
        }
        else
        {
            reject("number  is odd");
        }
        });
        
}

isevenodd(5).then(function(ans){console.log(ans);}).catch(function(ans){console.log(ans);});
