let numbers = [0,1,2,3,4,5];
// Array method
// Array filter fungsi yang digunakan untuk memanggil nilai dalam array dengan kondisi tertentu
let condition1 = numbers.filter((num) => num !== 2);
let condition2 = numbers.filter((angka) => angka % 2 == 0)
let condition3 = numbers.filter((angka) => angka % 2 !== 0)

console.log(numbers);
console.log(condition1);
console.log(condition2);
console.log(condition3);