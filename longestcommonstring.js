function longestcommonstring(){
    let array1 = ["Sunmit", "Sunressh", "Sunmit", "Sunkesh", "Sun"];
    let word = array1.sort();
    let i =0;
while( word[0].length>0 && word[0].charAt(i)== word[word.length-1].charAt(i))
{
    i++;
}
return word[0].substring(0,i);

}
console.log(longestcommonstring());
