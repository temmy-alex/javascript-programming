// Function javascript pada umumnya
// function halo(){
//     return 'Halo';
// }

// anonymous function
// let halo = function() {
//     return 'Halo';
// }

// let halo = () => {
//     console.log('Halo')
// }

// Without parameter
let halo = () => console.log('Halo')

let pi = () => {
    return 3.14
}

let printName = (nama) => {
    console.log(`Halo ${nama}`)
}

let printFullName = (firstName, lastName) => {
    console.log(`Halo ${firstName} ${lastName}`)
}

// console.log(halo());
// console.log(pi());
console.log(printName('User'))
console.log(printFullName('Budi', 'Santoso'))