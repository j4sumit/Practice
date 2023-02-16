function missingarrayitem()
{
let arr = [1, 3, 6,7,8,15,16];

let missingSeries = [];

for (let i = 0; i < arr.length; i++) 
{ if (arr[i + 1] - arr[i] !== 1) 
    { let j = arr[i] + 1; 
        while (j < arr[i + 1]) 
        { 
            missingSeries.push(j); 
            j++; 
        } 
    } 
} 
return missingSeries;
}

console.log(missingarrayitem());