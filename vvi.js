//1.    Anagram String
function Anagram(str1, str2)
{
let s1=str1.toLowerCase().split("").sort().join("");
let s2=str2.toLowerCase().split("").sort().join("")
if(s1===s2)
{
    return "String in Anagram"
}else{
    return "String is not Anagram"
}
}
// console.log(Anagram("Dad","awdd"));

//2.    ArmStrong program

function ArmStrong(num)
{
 let temp=0, newnum=num;
while(newnum>0)
{
    let rem=newnum%10;
    console.log(rem)
    temp=temp + rem**3;
    console.log(temp)
    newnum= Math.floor(newnum/10);
    console.log(newnum)
}
if(temp===num){
    return "number is ArmSTrong"
}else{
    return "Number is not ArmStrong";
}
}
// console.log(ArmStrong(153));

//3 .Unique number
// function Uniquenum(arr1, arr2){
// let newarr = [...arr1,...arr2]
// let res=newarr.filter((item,index,arr)=>arr.indexOf(item)===index)
// return res;
// }
function Uniquenum(arr1, arr2){
    let newarr = new Set([...arr1,...arr2])
    return Array.from(newarr);
    }

// console.log(Uniquenum([1,2,3,5,4,7,6],[3,5,4,6,8,7]));


//4.   Promise
function checkNumWithPromise(num)
{
let promise  = new Promise((resolve,reject)=>{
if(num%2===0)
{
    resolve("number is Even");
}else{
    reject("Number is odd")
}
})
return promise;
}
// checkNumWithPromise(12).then((res)=>{console.log(res)}, ((rej)=>{console.log(rej)}));
// checkNumWithPromise(12).then((res)=>{console.log(res)}).catch((rej)=>{console.log(rej)});

//5.    Callback Function
function callbackFun(a,b,callback){
let c= a+b;
return callback(c);
}
function res1(data){
    console.log(`Sum of total is ${data}`);
}
// callbackFun(5,10,res1);

function duplicatCountInArr(arr)
{
let hashMap={};
arr.forEach((item)=>{
    if(hashMap[item]){
        hashMap[item]++;
    }else{
        hashMap[item]=1;
    }
})
console.log(hashMap);
for(let key in hashMap){
if(hashMap[key]>1)
{
    return key;
}
}
}
console.log(duplicatCountInArr([19,7,12,32,12,4,3,5,3,4,7]))

