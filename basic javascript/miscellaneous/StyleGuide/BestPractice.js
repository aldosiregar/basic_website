//javscript best practice
/**
 * hindari global variable, hindari new, hindari ==, hindari eval()
 */

//hindari global variable
/**
 * kurangi penggunaan global variable
 * 
 * termasuk semua data types, objects, dan function
 * 
 * global variables dan function dapat terhapus oleh script lain
 * 
 * gunakan local variable, dan pelajari cara kerja closure (tutor selanjutnya)
 */

//selalu deklarasikan local variables
/**
 * semua variable yang digunakan di function harus dideklarasikan
 * sebagai local variable
 * 
 * local variable harus dideklarasikan dengan var, let, atau const keyword,
 * jika tidak, mereka akan menjadi global variables 
 */

//declarations di atas
/**
 * adalah praktik yang bagus untuk menempatkan semua deklarasi pada bagian
 * atas dari setiap script dan function
 */
let firstname, lastname;

firstname = "joko";
lastname = "jake";

/**
 * dan ini juga berlaku pada loop variable
 */
for(let i = 0; i < 10; i++){}

//menginisiasi variable
/**
 * juga adalah praktik yang bagus untuk langsung menginisiasi variable
 * ketika variable dibuat
 * 
 * ini akan :
 *  1. membuat kode lebih bersih
 *  2. menyediakan satu tempat untuk menginisiasi variable
 *  3. menghindari undefined value
 */
let tanker = 80;
const dataArray = [];

//mendeklarasikan object dengan const
/**
 * mendeklarasikan variable dengan const akan mencegah adanya 
 * ketidaksengajaan penggantian type data 
 */
const objects = {firstname:"kala", lastname:"haris"};
//objects = "20"; /tidak akan bisa terubah

//mendeklarasikan array dengan const
/**
 * mendeklarasikan array dengan const akan mencegah adanya
 * ketidaksengajaan penggantian type data
 */
const arrays = ["kale", "lake", 80];
//arrays = "80"; /tidak akan bisa diubah

//jangan gunakan new Object()
/**
 * gunakan "" daripada new String()
 * gunakan 0 daripada new Number()
 * gunakan false daripada new Boolean()
 * gunakan {} daripada new Object()
 * gunakan [] daripada new Array()
 * gunakan /()/ daripada new RegExp()
 * gunakan function () {} daripada new Function()
 */

//berhati-hati terhadap automatic type conversions
/**
 * javascript termasuk loosely type
 * 
 * sebuah variable dapat berisi semua jenis data
 * 
 * sebuah variable dapat mengubah type datanya
 */
let fullnames = 80;
fullnames = firstname + lastname;

/**
 * berhati-hatilah karena number dapat berubah menjadi NaN
 * 
 * ketika melakukan proses matematika, javascript dapat mengubah
 * number menjadi string
 * 
 * contoh : 
 * let x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
 * let x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
 * let x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
 * let x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
 * let x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
 * let x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
 * let x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number
 * 
 * mengurangi string dengan string tidak akan mengeluarkan error,
 * tetapi akan memberikan NaN
 * 
 * let x = "hello" - "black"; //ini akan mengembalikan NaN
 * */ 

//menggunakan comparison ===
/**
 * comparison == selalu mengkonversi (ke type yang sesuai) sebelum membandingkan
 * 
 * comparison === akan memaksa comparison nilai dan type
 * 
 * contoh :
 * 0 == "";        // true
 * 1 == "1";       // true
 * 1 == true;      // true
 * 
 * 0 === "";       // false
 * 1 === "1";      // false
 * 1 === true;     // false
 */

//menggunakan parameter default
/**
 * jika sebuah function dipanggil dengan missing argument, nilai dari missing
 * value akan di-set ke undefined
 * 
 * undefined value dapat merusak kode kita, adalah kebiasaan yang baik
 * untuk menentukan default values ke argument
 */
function ujicoba(a, b){
    if(a == undefined){
        return false;
    }
    //blok kode
}

/**
 * pada ECMAScript 2015, kita diperbolehkan untuk menambahkan default parameter
 * pada function definition
 */
function ujicoba2(a=1,b=2){/*blok kode*/}

//akhiri switch dengan default
/**
 * selalu akhiri switch statement dengan default, bahkan jika kita tidak 
 * membutuhkannya
 */
switch(tanker){
    case 1:
        console.log(1);
    default:
        console.log("unknown");
}

//hindari Number, String, dan Boolean sebagai object
/**
 * selalu tangani Number, String, dan Boolean sebagai primitive value,
 * bukan objects
 * 
 * mendeklarasikan type ini sebagai object akan memperlambat proses
 * eksekusi, dan menghasilkan efek yang tidak diinginkan
 * 
 * contoh :
 * let x = "John";             
 * let y = new String("John");
 * (x === y) // is false because x is a string and y is an object.
 * 
 * atau yang lebih parah :
 * let x = new String("John");             
 * let y = new String("John");
 * (x == y) // is false because you cannot compare objects.
 */

//hindari menggunakan eval()
/**
 * eval() function digunakan untuk menjalankan text sebagai kode, pada
 * hampir setiap kasus, ini tidaklah dibutuhkan
 * 
 * karena ini akan memperbolehkan arbitrary code untuk berjalan, dan
 * akan terjadi masalah security
 */