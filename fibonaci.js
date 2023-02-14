// function fibonaci ()
// {
// var n1=0;
// var n2=1;
// var n =20;
// var sum =0;
// console.log(n1);
// console.log(n2);

// for(let i =2; i<n ;i++)
// {
//     sum =n1+n2;
//     n1=n2;
//     n2=sum;
//     console.log(sum);
// }

// }

let limit = n;
	let n1 = 0; // 0,1,1,2,3,5,8
	let n2 = 1;
	let sum = 0;

	for (var i = 0; i < limit; i++) {
		document.write(n1);
		n1  = n1+n2;
		n2  = sum;
		sum = n1;
	}

fibonaci();
