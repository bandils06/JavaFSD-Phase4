let a: number;
a = 50;

let b: number = 20;

let fname: string = "Hrithik";

console.log(a + b);
console.log(fname);

function test(num1: number, num2: number) {
    return num1 + num2;
}

console.log("Addition: " + test(5, 10));

// to run this ts file goto cmd 
// >tsc first.ts
// >node first.js