function Prime(num)
{

    for (let i =2; i<num ; i++)
    {
        if(num % i ==0)
        {
            return `Given number ${num} is not prime`;
        }
    }
    return `Given number ${num} is prime`;
}

console.log(Prime(8));