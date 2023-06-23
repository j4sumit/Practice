function Alterchar(SirName)
{
let str = SirName.toLowerCase().split();
for(let i=0;i<str.length; i=i+2)
{
    str[i] = str[i].toUpperCase();
    
}
return str.join("");
}

console.log(Alterchar("chaurasiya"));