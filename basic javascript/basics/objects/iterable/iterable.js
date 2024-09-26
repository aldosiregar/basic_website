//javascript iterables
/**
 * iterables adalah object yang dapat diiterasi
 * 
 * iterables dapat diakses dengan kode yang simple dan efisien
 * 
 * iterables dapat diiterasi dengan for...of loops
 */
console.log("javascripts iterables : ");

//for of loop
/**
 * javascript for...of statement meng-loop semua elements yang ada pada
 * iterable object
 * 
 * for(variable of iterables){
 *  /blok kode
 * }
 */

//iterating
/**
 * konsep iterating cukup mudah dipahami
 * 
 * iterasi simplenya adalah looping pada urutan element
 * 
 * ini adalah beberapa contohnya : 
 *  1. iterating pada strings
 *  2. iterating pada arrays
 */

//iterating pada string
/**
 * kita dapat menggunakan for...of loop untuk melakukan iterasi pada elements dari string
 */
let iterableString = "jakamabar";
let text = "";
for(let x of iterableString){
    text += x;
}
console.log(text);

//iterating pada arrays
/**
 * kita dapat menggunakan for...of loop untuk melakukan iterasi pada element arrays
 */
let iterableArrays = [10, 4, 3, 20, 3];
let sum = 0;
for(let x of iterableArrays){
    sum += x;
}
console.log(sum);

//iterating pada set
/**
 * kita dapat menggunakan for...of loop untuk melakukan iterasi pada set
 */
const iterableSet = new Set(["a", "b", "c"]);
for(let x of iterableSet){
    console.log(x);
}

//iterating pada map
/**
 * kita dapat menggunakan for...of loop untuk melakukan iterasi pada elements map
 */
const cars = new Map([
    ["name", "kensworth"],
    ["maxspeed", 80],
    ["tank", 1000]
]);

for(let x of cars){
    console.log(x);
}

//javscript iterators
/**
 * iterator protocol menentukan bagaimana memproduksi urutan nilai dari sebuah object
 * 
 * object akan menjadi iterators ketika diimplementasikan next() method
 * 
 * next() method harus mengembalikan object dengan 2 properties
 *  1. value (nilai selanjutnya)
 *  2. done (benar atau salah)
 * 
 * value    nilai dikembalikan dari iterator (dapat dihilangkan jika done bernilai benar)
 * 
 * done     benar jika iterator telah selesai, false jika iterator memproduksi nilai baru
 */

/**
 * note : 
 * secara teknis, iterables harus mengimplementasi method Symbol.iterator
 * 
 * string, array, typearray, map, dan set semuanya iterable, karena prototype objects memiliki
 * method Symbol.iterator
 */

//home made iterable
/**
 * iterable mengembalikan urutan tak berakhir : 10, 20, 30, 40 ... setiap next() dipanggil
 */
function homeMadeIterable(){
    let n = 0;
    return {
        next : function (){
            n += 10;
            return {value : n, done : false};
        }
    };
}

const madedIterables = homeMadeIterable();
console.log(madedIterables.next());
console.log(madedIterables.next());
console.log(madedIterables.next());

/**
 * kelemahan dari home made iterable adalah 
 * 
 * tidak disupportnya javascript for...or statement
 */

/**
 * javascript iterable adalah objec yang memiliki Symbol.iterator
 * 
 * Symbol.iterator adalah function yang mengembalikan next() function
 * 
 * sebuah iterable dapat diiterasi berulang kali dengan kode for (const x of iterables) {}
 */

homeMadeIterable = {};

homeMadeIterable[Symbol.iterator] = function (){
    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if (n > 100) {done = true}
            return {value : n, done : done};
        }
    }
}

for (const x of homeMadeIterable){
    console.log(x);
}

/**
 * Symbol.iterator method dipanggil secara otomatis oleh for...of
 * 
 * tetapi kita juga dapat melakukannya secara manual
 */
let iterator = homeMadeIterable[Symbol.iterator]();

while(true){
    const result = iterator.next();
    if(result.done) break;
    console.log(result);
}