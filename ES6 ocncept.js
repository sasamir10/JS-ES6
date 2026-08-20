// JS Function
// problem-1
function functionName(name) {
    console.log(`Hello, ${name}`);
}

functionName("Samir");
functionName("Virat");
functionName("MS Dhoni");

// problem-2
function sum(a, b) {
    return a + b;
}

let result = sum(45, 98);

console.log(result);

// problem-3
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(45));
console.log(isAdult(16));
console.log(isAdult(15));

// problem-4
function findLarger(x, y) {
    if (x > y) {
        return x;
    }

    return y;
}

console.log(findLarger(89, 67));
console.log(findLarger(3, 21));
console.log(findLarger(9, 70));

// problem-5
function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(500, 3);

console.log(total);

let phoneTotal = calculateTotal(10000, 4);
let mouseTotal = calculateTotal(300, 8);

console.log(phoneTotal);
console.log(mouseTotal);

// next level - problem-1
function chackEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(chackEvenOdd(89));
console.log(chackEvenOdd(90));
console.log(chackEvenOdd(123));

// problem-2
function calculateDiscount(price, discount) {
    let finalPrice = price - price * (discount / 100);

    return finalPrice;
}

console.log(calculateDiscount(500, 10));
console.log(calculateDiscount(4500, 15));
console.log(calculateDiscount(8000, 25));

// problem-3
function getFullName(fName, lName) {
    return `${fName} ${lName}`;
}

console.log(getFullName("Sabbir", "Ahmed"));
console.log(getFullName("MS", "Dhoni"));
console.log(getFullName("Virat", "kohli"));

// problem-4

function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 70 && marks < 80) {
        return "B";
    } else if (marks >= 60 && marks < 70) {
        return "C";
    } else if (marks >= 50 && marks < 60) {
        return "D";
    }

    return "Fail";
}

console.log(getGrade(79));
console.log(getGrade(96));
console.log(getGrade(65));
console.log(getGrade(49));
