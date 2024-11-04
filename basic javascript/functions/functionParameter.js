//javascript function parameters
/**
 * javascript function tidak melakukan proses pengecekan terhadap nilai
 * parameter (argument)
 */

//function parameters dan arguments
/**
 * sebelumnya, kita telah mempelajari bahwa function dapat memiliki parameter
 * 
 * function functionName(parameter1, parameter2, parameter3){
 *  /kode yang akan dieksekusi
 * }
 * 
 * parameter function adalah nama yang terdapat pada function definition
 * 
 * function arguments adalah nilai asli yang dimasukkan (dan diterima)
 * oleh function
 */

//parameter rules
/**
 * javascript function definitions tidak menspesifikkan tipe data untuk
 * parameters
 * 
 * javascript function tidak melakukan type checking pada passed arguments
 * 
 * javascript functions tidak memeriksa berapa banyak arguments yang diterima
 */

//default parameters
/**
 * jika sebuah function dipanggil dengan missing arguments (kurang dari 
 * yang dideklarasikan), nilai yang hilang akan diset menjadi undefined
 * 
 * kadang ini diperbolehkan, tapi biasanya lebih baik untuk menetapkan
 * default value ke parameter tersebut
 */
function myFunctionParameters(x, y){
    if(y === undefined){
        y = 2;
    }
}

//default parameter value
/**
 * ES6 memperbolehkan function parameters untuk memiliki default value
 * 
 * contoh : 
 * jika y tidak diberikan nilai atau undefined, maka y = 10
 */
function myFunctionParameters(x, y = 10){
    return x + y;
}
myFunctionParameters(2); //result : 12

//function rest parameter
/**
 * rest parameter (...) membuat sebuah function untuk menangani beberapa
 * argument sebagai sebuah array, tanpa perlu menuliskan semua nama 
 * parameternya
 */
function myFunctionSums(...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

sum(3, 4, 5, 1, 2, -1); //result : 14

//arguments object
/**
 * javascript function memiliki built-in object yang disebut arguments object
 * 
 * arguments object berisi sebuah array dari arguments yang digunakan ketika
 * function dipanggil (invoked)
 * 
 * dengan cara ini kita dapat dengan mudah menggunakan sebuah function untuk
 * mencari (sebagai contoh) nilai tertinggi dari sebuah kumpulan angka
 */
function findMax(){
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

findMax(1,3,4,200,300,-500); //result : 300

/**
 * atau membuat sebuah function yang menjumlahkan semua input value
 */
function sumAll(){
    let sum = 0;
    for(let x = 0; x < arguments.length; x++){
        sum += arguments[x];
    }
    return sum;
}

sumAll(1, 3, 5, 20, 30, 100);

/**
 * note : 
 * jika sebuah function dipanggil dengan terlalu banyak arguments 
 * (lebih dari yang dideklarasi), maka arguments ini dapat digapai menggunakan
 * object arguments 
 */

//arguments diberikan dengan value
/**
 * parameter, di dalam sebuah panggilan function, adalah arguments function
 * 
 * javascript arguments di-passed dengan value : function hanya tahu tentang
 * value, bukan lokasi dari arguments tersebut
 * 
 * jika sebuah function mengubah nilai arguments, ini tidak akan mengubah
 * nilai original dari parameters
 * 
 * mengubah argument tidak akan terlihat (berpengaruh) pada nilai
 * diluar function tersebut
 */

//object yang diberikan dengan refrence
/**
 * pada javascript, object refrences adalah value
 * 
 * karena ini, object akan berperilaku seperti mereka diberikan lewat refrence
 * 
 * jika sebuah function mengubah sebuah object property, ini akan mengubah
 * nilai original dari value tersebut
 * 
 * mengubah object properties akan terlihat (berpengaruh) pada nilai
 * diluar function tersebut
 */