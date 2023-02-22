// global scope 
// local scope
// block scope

// global scope 
let Name ="rafsan"
let isMale =true;

// block scope
{
    let roll= 112
    console.log(roll);
}
// do not work out of block
// console.log(roll);


// local scope
function add(){
    let a =5 ;
}
// console.log(a)


