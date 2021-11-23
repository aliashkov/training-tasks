const UNIQUE_NAME = 'Mark';

function sayHello(name){
    if (name === UNIQUE_NAME)
       return `Hi ${name}`;
    else
       return `Hello ${name}`;
}

let result = sayHello('Andrew');
console.log(result);
