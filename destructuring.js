//array destructuring
const numbers=[45,67,65];
const [x,y]=numbers;
console.log(x,y);

// function destructuring ///
function boxify(num1, num2){
    const nums=[num1, num2];
    return nums;
}

const [p,q]=boxify(90,56)
console.log(p,q);

//object array destructuring
const student= {
    name:'maria',
    age:21,
    color:['green', 'white']
};

const[first, last] =student.color;
console.log(first,last);

//object sorthand destructuring
const {name, color}={name:'alu', age:23, color:'red'};
console.log(name, color);


//multiple object destructuring
const employ= {
    name:'maria',
    age:21,
    color:['green', 'white'],
    hobby:{
        job:'programming',
        wish:'be good women'
    }
};
const {job, wish}= employ.hobby;
console.log(job,wish);

const [c]= employ.color;
console.log(c);
console.log(job,wish);
