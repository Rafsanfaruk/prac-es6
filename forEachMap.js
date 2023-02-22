
// const arr =[1,2,3,4,5];

const arr =[10,20,30,40,50];

// arr.forEach((number ,index,mainArray) =>{
//     console.log(number,index,mainArray);
// })
arr.map((number ,index,mainArray) =>{
    console.log(number,index,mainArray);
})

for (let n of arr){
    // console.log(n);
}

// arr.forEach(number => console.log(number) )

// arr.map(number => console.log(number*2) )

// const newArr =arr.forEach((number) => number)       (((hobe na eta)))

const newArr =arr.map((number) => number*3)
// console.log(newArr);
// console.log(arr);