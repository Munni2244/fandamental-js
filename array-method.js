const object= [
    {name:'Phone', price:9000, brand:'canon',color:'black'},
    {name:'laptop', price:96000, brand:'lenovo',color:'black'},
    {name:'tv', price:12000, brand:'lg',color:'gray'},
    {name:'wacth', price:5000, brand:'gk',color:'white'},
    {name:'bag', price:400, brand:'gh',color:'red'},
];

const brands=object.map(product=> product.brand);
// const brands2=object.map(product=> product);

// console.log(brands);

//for each
object.forEach(product=>console.log(product.color))

//filter matching products
const brands2=object.filter(product=> product.color==='black');
console.log(brands2);

const brands3=object.filter(product=> product.name.includes('t'));
console.log(brands3);


//find matching first  products
const brands4=object.find(product=> product.name.includes('t'));
console.log(brands4);