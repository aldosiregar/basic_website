//javascript callbacks
/**
 * "I will call back later"
 * 
 * callback adalah sebuah function yang di passed sebagai argument pada 
 * function lainnya
 * 
 * teknik ini memperbolehkan sebuah function untuk memanggil function 
 * lain
 * 
 * sebuah callback function dapat berjalan setelah function lain sudah 
 * selesai
 */

//function sequence
/**
 * javascript functions dieksekusi dlaam sequence mereka dipanggil, 
 * bukan dimana sequence mereka didefined
 * 
 * artinya, urutan pemanggilan sebuah function menjadi sangat penting
 */

//sequence control
/**
 * terkadang, kita ingin untuk memiliki control yang lebih ketika ingin
 * mengeksekusi sebuah function
 * 
 * andai kita ingin melakukan sebuah kalkulasi, lalu menampilkan hasilnya
 * 
 * kita harus memanggil sebuah calculator function (myCalculator), 
 * menyimpan hasilnya, kemudian memanggil function lain (myDisplayer) 
 * untuk menampilkan hasilnya
 */
function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(a, b){
    return a + b;
}

let result = myCalculator(10, 5);
myDisplayer(result);

/**
 * atau, kita ingin memanggil sebuah calculator function (myCalculator), 
 * dan membiarkan calculator function memanggil display function 
 * (myDisplayer)
 */
function myDisplayer2(some){
    document.getElementById("demo").innerHTML = some;
}

function myCalculator2(a, b){
    myDisplayer2(a + b);
}

myCalculator2(5, 5);

/**
 * masalah dari contoh pertama adalah kita perlu memanggil kedua function
 * untuk menampilkan hasil
 * 
 * masalah dari contoh kedua adalah kita tidak bisa mencegah calculator 
 * function dari menampilkan hasil
 * 
 * oleh karena itu kita membutuhkan sebuah callback
 */

//javascript callback
/**
 * callback adalah sebuah function yang dipassed sebagai sebuah argument 
 * untuk function lain
 * 
 * menggunakan sebuah callback, kita dapat memanggil calculator function 
 * (myCalculator) dengan sebuah callback (myCallback), dan memperbolehkan
 * calculator function menjalankan callback setelah calculation selesai
 */
function myDisplayer3(some){
    document.getElementById("demo").innerHTML = some;
}

function myCalculator3(a, b, myCallback){
    myCallback(a + b);
}

myCalculator3(5, 3, myDisplayer3);

/**
 * pada contoh diatas, myDisplayer disebut sebagai callback function
 * 
 * ia dipassed ke myCalculator sebagai sebuah argument
 * 
 * note : 
 * ketika kita meng-pass sebuah function sebagai sebuah argument, ingat 
 * untuk tidak menggunakan parenthesis
 * 
 * benar : myCalculator(5, 5, myDisplayer)
 * 
 * salah : myCalculator(5, 5, myDisplayer())
 */

/**
 * contoh 2 :
 */

//buat sebuah array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

//panggil removeNeg dengan sebuah callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

//tampilkan hasil
document.getElementById("demo").innerHTML = posNumbers;

//hanya simpan angka positive
function removeNeg(numbers, callback){
    const myArray = [];
    for(const x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray;
}

//kapan menggunakan sebuah callback
/**
 * contoh diatas tidak terlalu seru
 * 
 * mereka disederhanakan untuk mengajari kita syntax callback
 * 
 * dimana callback bersinar adalah di asynchronous functions, ketika satu 
 * function harus menunggu untuk function lain 
 * (seperti menunggu sebuah file untuk ter-load)
 * 
 * asynchronous function akan dijelaskan pada chapter selanjutnya
 */