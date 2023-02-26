let a = [  7,4, 2, 9,-3, 5,-1, ,3, 1,2,0,6, 4 ];
 
  let newarr =[... new Set(a)];
  let res =[];
  for(let i=0; i< newarr.length; i++)
  {
  for(let j=i+1; j<=newarr.length; j++)
  {
    for(let k = j+1; k<= newarr.length; k++)
    {
    for (let l=k+1; k<= newarr.length; k++)
    {
      if(newarr[i]+newarr[j]+newarr[k]+newarr[l] ==0)
      {
      res.push(newarr[i]);
        res.push(newarr[j]);
        res.push(newarr[k]);
        res.push(newarr[l]);
 
      }

    }

  }

  }
  }
console.log(res.sort());