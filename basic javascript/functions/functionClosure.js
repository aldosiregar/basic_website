//javascript closures
/**
 * javascript variables dapat dimiliki oleh local atau global scope
 * 
 * global variable dapat dibuat local (private) dengan closures
 */

//global variables
/**
 * sebuah function dapat mengakses semua variable yang didefinisikan
 * didalam sebuah function, seperti contoh dibawah ini
 */
function myFunctions(){
    let a = 4;
    return a * a;
}

/**
 * tetapi sebuah function juga dapat mengakses variables yang didefinisikan
 * diluar function, seperti berikut
 */
let a = 4;

function myFunctions(){
    return a * a - 15;
}

/**
 * pada contoh terakhir, a adalah variable global
 * 
 * pada sebuah web page, global variable dimiliki oleh page
 * 
 * global variables dapat digunakan (dan diubah) oleh semua scripts lain
 * di page
 * 
 * pada contoh pertama, a adalah local variable
 * 
 * sebuah variable local hanya bisa digunakan didalam function dimana ia
 * didefinisikan, ia tersembunyi dari function dan scripting code lain
 * 
 * global dan local variables dengan nama yang sama adalah variable yang
 * berbeda, mengubah salah satunya tidak akan mengubah yang lainnya
 * 
 * note : 
 * variable yang dibuat tanpa sebuah keyword deklarasi (var, let, atau const)
 * selalu global, bahkan jika mereka dibuat didalam function
 */

//variable lifetime
/**
 * global variables akan tetap ada sampai page itu dihilangkan/dihapus, 
 * seperti ketika kita pindah ke page lain atau menutup window
 * 
 * local variable sifatnya short-lives, mereka akan dibuat ketika function
 * dipanggil, dan dihapus ketika function telah selesai dijalankan
 */

//a counter dilemma
/**
 * anggaplah kita ingin menggunakan sebuah variable untuk menghitung sesuatu,
 * dan kita ingin counter untuk bisa digunakan untuk semua functions
 * 
 * kita dapat menggunakan variable global, dan function untuk meningkatkan 
 * counter
 */
//inisiasi counter
let counter = 0;

//function untuk menambahkan counter
function addCounter(){
    counter++;
}

//panggil addCounter() 3 kali
addCounter();
addCounter();
addCounter();

//seharusnya counter bernilai 3 sekarang

/**
 * namua ada masalah dengan solusi diatas, semua kode pada page dapat
 * mengubah counter, tanpa memanggil addCounter()
 * 
 * counter harus local untuk function addCounter(), untuk mencegah kode
 * lain untuk merubahnya
 */
//inisiasi counter
let counter2 = 0;

//function untuk menambahkan counter
function addCounter2(){
    let counter2 = 0;
    counter2++;
}

//panggil addCounter2() 3 kali
addCounter2();
addCounter2();
addCounter2();

//counter2 seharusnya bernilai 3 sekarang, tapi ia tetaplah 0

/**
 * ini juga tidak bekerja karena kita menampilkan global counter daripada
 * local counter
 * 
 * kita dapat menghilangkan global counter dan mengakses local counter dengan
 * membiarkan function mengembalikannya
 */
//function untuk menambahkan counter
function addCounter3(){
    let counter = 0;
    counter++;
    return counter;
}

//panggil addCounter3() 3 kali
addCounter3();
addCounter3();
addCounter3();

//counter seharusnya bernilai 3 sekarang, tetapi hasilnya malah 1

/**
 * ini juga tidak bekerja karena kita mereset ulang local counter
 * setiap kali kita memanggil function tersebut
 * 
 * javascript inner function dapat mengatasi masalah ini
 */

//javascript nested functions
/**
 * semua functions dapat mengakses global scope
 * 
 * faktanya, dalam javascript, semua function dapat mengakses scope
 * yang ada "diatas" mereka
 * 
 * javascript mendukung pengimplementasian nester function, nested functions
 * memiliki akses ke scope yang ada "diatas" mereka
 * 
 * pada contoh berikut, inner function plus() memiliki akses ke
 * variable counter pada parent functionnya
 */
function addCounter4(){
    let counter = 0;
    function plus() {counter++;}
    plus();
    return counter;
}

/**
 * ini dapat menyelesaikan counter dilemma, jika kita dapat memanggil
 * plus() function dari luar
 * 
 * kita juga perlu untuk mencari sebuah cara untuk mengeksekusi counter = 0 
 * hanya sekali
 * 
 * kita membutuhkan sebuah closure
 */

//javascript closures
/**
 * ingin self-invoking function, apa yang function tersebut lakukan?
 */
const adds = (function (){
    let counters = 0;
    return function () {counters++; return counters}
})();

function recieveCounter(){
    document.getElementById("demo").innerHTML = adds();
}

//penjelasan contoh
/**
 * variable adds di buat untuk mengembalikan nilai dari self-invoking function
 * 
 * self-invoking function hanya berjalan satu kali, ia mengatur counters ke
 * zero (0), dan mengembalikan expresi function
 * 
 * dengan cara ini add menjadi sebuah function, bagian yang "menakjubkannya"
 * adalah ia dapat mengakses counters di parent scope
 * 
 * ini disebut sebagai javascript closure, ini memungkinkan sebuah function
 * untuk memiliki variable "private"
 * 
 * counter dilindungi oleh scope dari anonymous function, dan hanya dapat
 * diubah menggunakan function add
 * 
 * tip :
 * closure adalah sebuah function yang memiliki akses ke parent scope, bahkan
 * setelah parent function telah ditutup
 */