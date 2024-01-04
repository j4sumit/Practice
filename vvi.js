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
//  callbackFun(5,10,res1);

//6.    Duplicate array Element
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
// console.log(duplicatCountInArr([19,7,12,32,12,4,3,5,3,4,7]))

//6.    Duplicate word in String
function wordExist(arr, str){
    let status ="Duplicate False"
    for (let data of arr){
        if(data===str)
        {
            status="Duplicate true"
        }
    }
    return status;
}
// console.log(wordExist(["Sumit", "Raju", "Amit", "Shyam"],"Sum12it"));

//7.    Remove Special character from String

function removeSpecialChar(str){
    return str.replace(/[^a-z ]/gi,"");
    
}
// const sentence = `%I $am@% 999 a %tea@cher%, &and& 123 I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
// console.log(removeSpecialChar(sentence))

//8.    Closure example
function parent()
{
let name="Sumit"
function child()
{
return fullName=`${name} Chaurasiya`
}
return child;
}

let res=parent();
// console.log(res)
// console.log(res());

//9.    Converting One Dimension array to MultiDimension array

function arrayConversion(arr,num){
    let newarr=[];
while(arr.length>=num){
newarr.push(arr.slice(0,num));
arr=arr.slice(num);
}
return newarr;
}
// console.log(arrayConversion([1,2,3,4,5,6,7,8,9,0,11,12,13,14],2))

// 10.  Count character is string
function countChar(str, char){
    // let count=0;
    // for(let c of str)
    // {
    //     if(c===char)
    //     {
    //         count++;
    //     }
    // }
    // return count;
let res=[...str].reduce((acc,cur)=>{
    if(cur===char){
    acc++;
}
return acc;
},0)
return res;
}
// console.log(countChar("Sumit Kumavvvvvr", 'v'))

//11.   Count  negative number
function countNegativenum(arr){
let count =0;
for(let i=0; i<arr.length;i++)
{
    for  (let j=0; j<arr[i].length; j++)
    {
        if (arr[i][j]<0)
        {
            count++;
        }
    }
}
return count;
}
// console.log(countNegativenum([[-1,1],[1,1]]))

//12.   Count number of vowels in String
function countVowels(str){
let count=0;
let res=[];
let vowels =['a','e','i','o','u'];
for (let char of str)
{
   if(vowels.includes(char.toLowerCase())){
count++;
res.push(char);
   }
}
return `vowels are ${res} and total length is ${count}`
}
// console.log(countVowels("Sumit Achaurasiya"))

//13.   Currying Function
function currying(num1){
    return function(num2){
        return function(num3){
            return num1*num2*num3;
        }
    }

}
// console.log(currying(5)(3)(9))

//14.   Remove Duplicate array item
function removeDuplicate(arr){
return arr.filter((item,index,arr)=> arr.indexOf(item)===index);
}
// console.log(removeDuplicate([1,6,3,5,4,6,3,5,6,4,5,8,4,10,12,31]))

//15.    countEvenDigitNum

function countEvenDigitNum(arr){
let count=0;
for(let num of arr){
    digit =num.toString().length;
if(digit%2===0){
    count++
}
}
return count;
}
// console.log(countEvenDigitNum([12,345,2,6,7861,56,48,2342,4435]))

//16.   Fibonacii Series
function fibonaci(num){
let num1=0;
let num2=1;
let arr=[];
let sum=0;
while(num>=0){
    arr.push(num1);
    sum=num1+num2;
    num1=num2;
    num2=sum;
    num--;
}
return arr;
}
// console.log(fibonaci(10))

//17. Even odd Parity
function evenOddParity(arr){
let evenData=[];
let oddData=[];
for(let num of arr){
    if(num%2===0){
        evenData.push(num)
    }else{
        oddData.push(num);
    }
}
console.log(`even datas are ${evenData}`)
console.log(`odd datas are ${oddData}`)
}

// evenOddParity([1,2,3,4,5,6,7,8,9])
//18.   Identify first pari whose sum is 0
function firstpair(arr){
for(let i=0; i<arr.length;i++)
{
    for (let j=i+1; j<arr.length;j++)
    {
        if(arr[i]+arr[j]===0){
            return `First pair is ${arr[i]} ${arr[j]}`
        }
    }
}
}
console.log(firstpair([11,-4,5,11,6,-5,4,12,10]))
