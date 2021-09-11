const numbers =[23,43,345,56,57];

const student= {
    name:'maria',
    age:21,
    color:['green', 'white']
};
// templete string //
const about= `My name is${student.name} age of ${student.age} number has ${numbers[2]} favorite color ${student.color[0]}`
console.log(about);

 //arrow funtion////
 //0 perameter
const getfive= ()=>5;
console.log(getfive());

//perameter in
const getnum= nums=>nums*5;
console.log(getnum(5))

//even number
const geteven= x=>x%2==0;
console.log(geteven(50))

//add three perametr
const addThree= (a,b,c)=>a+b+c;
console.log(addThree(3,4,5))

// maltiline
const maltiline= (num1, num2)=>{
 const total= num1+num2;
 return total;
}
console.log(maltiline(43,56))

// spreed operator///
const array=[12,45,567,7,88,43];
const newArray=array;
const spreedArray =[...array, 80]
newArray.push(23,45)
spreedArray.push(50)
console.log(array);
console.log(newArray);
console.log(spreedArray);
