function Alternatechartoupper(str)
{
let str1 = str.toLowerCase().split('');
for(let i=0; i<str1.length; i=i+2)
{
    str1[i] = str1[i].toUpperCase();
}
return str1.join('');
}

console.log(Alternatechartoupper("Sumit Chaurasiya"));
//Out put - SuMiT ChAuRaSiYa