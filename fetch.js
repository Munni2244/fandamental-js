//JSON

const student= {
    name:'maria',
    age:21,
    color:['green', 'white']
};

const Json= JSON.stringify(student);
console.log(Json);

const normal= JSON.parse(Json);
console.log(normal);

//keys values
const keys =Object.keys(student);
console.log(keys);
const value =Object.values(student);
console.log(value);


//fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))


// for map on array
const array= [23,345,54,65,67,789];
const result=array.map(num=> num*2);
console.log(result);

 // for of on array like object
 //loop on an object using for in

 // add or remove form array like objects
 const object= [
    {name:'Phone', price:9000, brand:'canon',color:'black'},
    {name:'laptop', price:96000, brand:'lenovo',color:'black'},
    {name:'tv', price:12000, brand:'lg',color:'gray'},
    {name:'wacth', price:5000, brand:'gk',color:'white'},
    {name:'bag', price:400, brand:'gh',color:'red'},
];

const newProduct= {name:'dress', price:7000, color:'red'}
//add
const newProducts=[...object, newProduct];
// console.log(newProducts);

// remove or create a new array without one specific item
const newItem= object.filter(products=> products.name!=='Phone');

console.log(newItem);


