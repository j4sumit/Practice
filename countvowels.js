function vowels()
{
    let vowels = ['a','e','i','o','u'];
    let string = "sumitaaaUUUU";
    let count=0;

for (let i of string.toLowerCase())
{
    if (vowels.includes(i))
    {
        count++;
        console.log(i);
        
    }
}
return count;
}

console.log(vowels());