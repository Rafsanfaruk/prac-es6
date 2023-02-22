const petOwner ={
    name: 'Rafsan',
    contact : {
        phone :621525806,
        email:'rafan1652@yahoo.com',

    },
    pet:{
        name:'Kufa',
        info:{
            color:'white',
            width :'1.5 kg',

        },
    },
};

// console.log(petOwner.pet.name);

// console.log(petOwner.dog.name);
console.log(petOwner?.dog?.name);

console.log("Hi Joss broo");