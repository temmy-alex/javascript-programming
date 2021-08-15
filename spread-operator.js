let fruits = ['apple', 'orange', 'mango'];
// console.log(fruits);
// console.log(...fruits);

let numbers1 = [1,2,3];
let numbers2 = [4,5,6];
let summaryNumbers = [...numbers1, 4,5,6];
let summaryWithConcat = numbers1.concat(numbers2);
// console.log(summaryNumbers)
// console.log(summaryWithConcat)

function sum(num1,num2,num3) {
    console.log(num1 + num2 + num3)
}

// sum(numbers1)
// sum(numbers1[0], numbers1[1], numbers1[2])
// Use spread operator
sum(...numbers1)