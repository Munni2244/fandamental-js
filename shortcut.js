//truthy
// 'almas', 5, true, {},[]
// falsy
// '', 0, false, null, undefined


const money=80;
const money2=100;
let food;

if (money>100) {
    food='briyani'
}
else{
    food='biskit'
}
console.log(food);

// shortcut
let foods=money>70? 'briyani' : 'cha';
console.log(foods);

let drink=(money>70 && money2===80)? 'coke' : 'water';
console.log(drink);

//number to string convert
const num1= 78;
console.log(num1);

const num2= 78+'';
console.log(num2);

//string to number
const num3= +50;
console.log(num3);

// function use tarnary
const showActive= true;
const showUser=()=>console.log('display user');
const hideUser=()=>console.log('hide user');
showActive? showUser() : hideUser();

// use && if the left side is true then right side will be excuted
showActive&& showUser()
showActive|| hideUser()


// jodi aki name variable abong value declear kora hoy tahole amra short cut a likhte pari
const name='maru';
const age=21;

const obj={
    name:name,
    age:age

}
// console.log(obj);
//shortcut
const obj1={name,age};
console.log(obj1);