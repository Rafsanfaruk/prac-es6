const person ={
    name: 'rafan',
    age: 26,
    phone:621625806,
    address:'Dhaka',
    p:[3,6,8,1,]
}
// const {address, name,age,phone} = person
// console.log(address,name,age,phone);

// new name change kora hoyche,.

// const {address:Home} =person;
// console.log(Home);

// const {address, name ,...others} = person
// console.log(others);

// const person2 =person; it's not right

// const person2 ={...person};

// person2.isMale =true;
// console.log(person2);

const {p} =person;
const [number] =p;
console.log(number);

