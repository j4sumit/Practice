function smallerNumbersThanCurrent(nums) {
    let newarr=[];
    let count=0;
for(let i=0;i<nums.length; i++)
{
    for(let j=0; j<nums.length; j++)
    {
        if(nums[i]>nums[j])
        {
            count++;
        }
        
     }
     newarr.push(count);
     count=0;
}
return newarr;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));