// function SetTimeOut()
// {
//     console.log("line 1 will executed first");
//     console.log("line 2 will executed second");
//     setTimeout(()=>{console.log("Line 3 will executed last")},2000);
//     console.log("line 4 will executed in 4th");
//     console.log("line 5 will executed in 5th");
// }
// SetTimeOut();

function chechnum(number)
{
    let promise = new Promise((resolve, reject) =>{
        let num=number;
        if(num%2==0)
        {
            resolve("Num is Even");
        }
        else{
            reject("Num is Odd");
        }
    });
    promise.then((res)=>{console.log(res)}, (rej)=> {console.log(rej)});
    return promise;
}

console.log(chechnum(24));