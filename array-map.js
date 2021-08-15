let numbers = [1,4,9,16,25];
// Array map = memanipulasi nilai didalam array
let numberWithRoot = numbers.map(Math.sqrt);
let numberMultiplication = numbers.map((num) => num * 2)
let removeNineNumber = numbers.map((angka) => angka !== 9)

let people = [
    {nama: 'User 1', pekerjaan: 'Front End Developer'},
    {nama: 'User 2', pekerjaan: 'Back End Developer'},
    {nama: 'User 3', pekerjaan: 'Fullstack Developer'}
];

// let person = {
//     // property : value
//     nama: 'Testing',
//     email: 'test@mail.com'
// }

function personIdentity(item, index) {
    let fullIdentity = [item.nama, item.pekerjaan].join(" ");
    return fullIdentity;
}

function testMap() {
    console.log(people.map(personIdentity));

    console.log(people.map(personIdentity)[0]);
    console.log(people.map(personIdentity)[1]);
    console.log(people.map(personIdentity)[2]);
}

console.log(testMap());

// console.log(numberWithRoot);
// console.log(numberMultiplication);
// console.log(removeNineNumber);