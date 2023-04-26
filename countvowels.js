// function vowels()
// {
//     let vowels = ['a','e','i','o','u'];
//     let string = "sumitaaaUUUU";
//     let count=0;

// for (let i of string.toLowerCase())
// {
//     if (vowels.includes(i))
//     {
//         count++;
//         console.log(i);
        
//     }
// } 
// return count;
// }

// console.log(vowels());

function countv(str)
{
 let vowels =['a','e','i','o','u'];
 let count=0;
 for(let i=0; i<str.length; i++)
 {
     if(vowels.includes(str[i]))
     {
         count++;
     }
 }
console.log(count);
}
countv("Sumit kumar chaurasiya");