function smallestword()
{
var name = "my name is sumit chaurasiya i'm a front end developer";
let smallestword = name.split(' ').sort((a,b) => b.length - a.length);
return smallestword[smallestword.length-1];
}

console.log(smallestword());