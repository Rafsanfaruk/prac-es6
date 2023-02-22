const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]

// {
//     ID01: "abul vai",
//     ID02 :"babul vai"
// }

const info ={};

// info.name ='rafsan' ->> first method

// info['name']='rafsan'
// info['age'] =26;
// console.log(info);

// Persons.map(p =>{
//     info[p.id]=p.name;
    
// })
// console.log(info);

Persons.map(p => {
    const id =p.id;
    const value =p.name;

    info[id]=value;
})
console.log(info);