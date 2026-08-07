/* function sum(a, b) {
    return a + b;
}

function num(n) {
    return n;
}

const result = sum(80, num(10));

console.log(result); */

/* function calculate(a, callback) {
    return callback(a);
}

function double(n) {
    return n * 2;
}

const result = calculate(10, double);

console.log(result); */

function resgisterEntry(cb) {
    console.log("User is registering");

    return cb();
}

function userBasic() {
    let student = {
        name: "samir",
        age: 25,
    };

    // console.log(student);
    return student;
}

// console.log(resgisterEntry(userBasic));

console.log(typeof undefined);
