// //Simple Asyn function
// function sample()
// {
//     console.log("first line");
//     setTimeout(()=>{console.log("this line will be execute after seconde line"),1000})
//     console.log("Senode line");
// }

// sample();
// //Sample using Promise
// function sample(num)
// {
//     let promise= new Promise((resolve, reject)=>{

//         if(num%2==0)
//         {
//             resolve("number is even");
//         }
//         else{
//             reject("number  is odd");
//         }
//     });
//     promise.then((val)=> console.log(val),(val)=> console.log(val));
    
// }

// sample(11);




var promise= new Promise((resolve, reject)=>
{
    let num=11;
if(num%2==0)
{
resolve("num is even");
} 
else{
reject("num is odd");
}
});

promise.then((result)=>{console.log(result)},(error)=>{console.log(error)});
console.log(promise);

