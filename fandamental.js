let name='maria';
name='munni';
console.log(name);

const fatherName= 'abdus salam';


const numbers=[1,3,45,67,789,54,2,345,46];
let newNumbers=0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element>newNumbers) {
        newNumbers=element;
    }

    
}
console.log(newNumbers);

const namest = 'Hero';const age = 34;

const person = {namest, age}; console.log(person);

const student={
    name: 'maru',
    age: 19,

}
const myAge= 'age';
console.log(student.age); // derect property
console.log(student['age']); // access via property name string
console.log(student[myAge]); // access via property name in a variable

