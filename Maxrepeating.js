function maxRepeating(str)
{
    let count = 0;
    let character = str[0];
    for (let i=0; i<str.length; i++)
    {
        let tempCount = 1;
        for (let j=i+1; j<str.length; j++)
        {
            if (str[i] == str[j]) //if a is equal to a
            tempCount++; //use to find out the counts of character i.e a
        }
        if (tempCount > count)
        {
            count = tempCount;
            character = str[i];
        }
    }
    console.log(count, character)
    return character;
}
maxRepeating("aaaabbaaccccccccccccccccccde");