// Callback structure
/* const sayHello = () => {
    return "Hello";
};

const runFunction = (callback) => {
    return callback();
};

console.log(runFunction(sayHello)); */

// p-1
const sayHello = () => {
    return "Hello";
};

// console.log(sayHello());

const runCallback = (callback) => {
    return callback();
};

console.log(runCallback(sayHello));

// p-2
const greetUser = (name) => {
    return `Hello ${name}`;
};

const processUser = (name, callback) => {
    return callback(name);
};

console.log(processUser("Samir", greetUser));

// p-3
const doubleNumber = (number) => {
    return number * 2;
};

const squareNumber = (number) => {
    return number * number;
};

const calculate = (number, callback) => {
    return callback(number);
};

console.log(calculate(5, doubleNumber));
console.log(calculate(5, squareNumber));

// p-4
const checkEven = (number) => {
    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
};

const checkPositive = (number) => {
    if (number > 0) {
        return "Positive";
    }

    return "Not Positive";
};

const checkNumber = (number, callback) => {
    return callback(number);
};

console.log(checkNumber(10, checkEven));
console.log(checkNumber(-5, checkPositive));

// p-5
const add = (a, b) => {
    return a + b;
};

const multiply = (a, b) => {
    return a * b;
};

const calculateNumbers = (a, b, callback) => {
    return callback(a, b);
};

console.log(calculateNumbers(10, 5, add));
console.log(calculateNumbers(10, 5, multiply));
