// Object terdiri dari property, value & method
let person = {
    // Property : identitas yang terikat dalam objek / variable yang terikat didalam objek
    // property : value
    firstName: 'Ardi',
    lastName: 'Ansyah',
    job: 'Developer',
    birthDate: '1995-01-01', 
    laptop: ['lenovo', 'asus'],
    // Method : fungsi yang terikat didalam objek
    // Fungsi this digunakan untuk memanggil nilai property yang terdapat dalam objek
    fullName: function () {
        return this.firstName + " " + this.lastName
    },
    // fullIdentity: () => {
    //     return this.firstName + " " + this.lastName + " " + this.job
    // }
}

console.log(person.firstName 
    + ' Memiliki laptop bermerk ' + person.laptop[0] + ' dan ' + person.laptop[1])

class Orang {
    constructor(nama, usia, pekerjaan) {
        this.nama = nama;
        this.usia = usia;
        this.pekerjaan = pekerjaan;
    }
}

let Andi = new Orang('Andi', 20, 'Developer')
// console.log(Andi.usia)

function Human(nama, usia, pekerjaan) {
    this.nama = nama;
    this.usia = usia;
    this.pekerjaan = pekerjaan;
}

let Budi = new Human('Budi', 25, 'Database Administrator')
// console.log(Budi.pekerjaan)

let Car = function(jarak, roda, warna, series) {
    this.jarak = jarak;
    this.roda = roda;
    this.warna = warna;
}

let Toyota = new Car('2000cc', '4', 'silver')
// console.log('Mobile Toyota berwarna ' + Toyota.warna)

// Menambah property baru
Toyota.tahun = 2021;
// console.log(Toyota);
// console.log('Mobil di produksi tahun ' + Toyota.tahun)

// Call property objek
// console.log(person.firstName)
// console.log(person.job)

// Call method in object
// console.log(person.fullName())
// console.log(person.fullIdentity())