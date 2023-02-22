const number =[2,4,1,9,6,45,37,9,66,87,89,144,5,3];
const number2=[45,78, 98,65,46];

// console.log(Math.min(3,2,1,8,9));

// console.log(Math.min(number));  (not work it)

// console.log(...number);

// console.log(Math.min(...number));
// console.log(Math.max(...number));

// const newArray =[234,67,88,55,...number2];
// const newArray =[234,67,88,55,...number2 ,00,11];
// console.log(newArray);

// const x=5;
// let y =x;
//   y=8;
// console.log(x);
// console.log(y);

// const array1 =[1,2,3,4];

// // If it can't be kept like this then the value will go to 2 places
// // const array2=array1; 

// //  is ok now
// const array2 =[...array1];  

// array1.push(10);
// array2.push(20);

// console.log(array1);
// console.log(array2);

// const arr =[1,2,3,4,5,6,7,8,9]

// const first =arr[0];
// const second =arr[1];

// const first =arr[4];
// const second =arr[5];

const arr =[1,2,3,4,5,6,7,8,9]

const [first,second, ...remaining]  =arr;

// first,second any name( sororte array theke 2 ta value niche .,.amar ja icche tai dite parbo) and remaining other value to add other array  

console.log(first,second,remaining);



