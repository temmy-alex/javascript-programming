let x = function () {
    console.log('Fungsi X');
};

// Callback = fungsi yang memanggil fungsi yang lain / fungsi yang memiliki parameter fungsi yang lain
let y = function (callback) {
    console.log('Fungsi Y');
    callback();
}

// y(x);

// Callback with arrow function
let x1 = () => {
    console.log('Function X1');
};

let y1 = (callback) => {
    console.log('Function Y1');
    callback();
};

y1(x1);