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
// function fibonaci ()
// {
// let limit = 5;
// 	let n1 = 0; // 0,1,1,2,3,5,8
// 	let n2 = 1;
// 	let sum = 0;

// 	for (var i = 0; i < limit; i++) {
// 		console.log(n1);
// 		n1  = n1+n2;
//          n2  = sum;
//         sum = n1;

        
		
// 	}
// }
// fibonaci();

// function fibonaci(Number)
// {
// 	let n1 =0;
// 	let n2 =1;
// 	const arr =[];
// 	let next =0;
// 	arr.push(n1);
// 	arr.push(n2);
// for(let i=1; i<=Number; i++)
// {
// 	console.log(n1);
// 	next =n1+n2;
// 	n1=n2;
// 	n2=next;
// 	arr.push(next);
// }
// return arr;
// }

// console.log(fibonaci(8));


function listFibonacci(n) {
	var arr = [0, 1]
	for (var  i = 0; i < n; i++) 
    arr.push(arr[i] + arr[i + 1])

  return arr
 	}
	console.log(listFibonacci(4))
