async function Display()
{
    let myPromice = new Promise(function(resolve, reject){
        let num = 9;
        if(num%2 ==0)
        {
            resolve("number is even");
        }
        else{
            reject("number is odd");
        }
    });
await myPromice;
}

Display().then(function(res){ console.log(res);}).catch(function(res){console.log(res);});
