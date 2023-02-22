const person ={
    name :'Rafan',
    age :26,
    contact:{
        phone:621525806,
        email:"rafsan1652@gmail.com",

    },
    education:{
        schoolName:"EKhon na pore janabo",
        sub:[
            {name:'Bangla',mark:65},
            {name:'English',mark:75},
            {name:'math',mark:85},

        ]
    }
}


//  three way

// /*/ const age1 =person.age;
// console.log(age1);

// / /*/  const age2 =person['age'];
// console.log(age2);

// /*/ const property ='age'
// const myAge =person[property];

// console.log(myAge);

console.log(person.education.sub[1].mark);
