/**
 * javascript memiliki 8 jenis tipe data
 *  1. String
 *  2. Number
 *  3. BigInt
 *  4. Boolean
 *  5. Undefined
 *  6. Null
 *  7. Symbol
 *  8. Object
 * 
 * tipe data object
 * tipe data object dapat berisi built-in object dan user defined object
 * built in object dapat berupa :
 * objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, dan lain sebagainya
 */

//konsep dari tipe data
/**
 * dalam programming, tipe data merupakan konsep yang penting
 * untuk dapat melakukan operasi pada variabel, penting untuk mengetahui tipenya
 * jika tidak, computer tidak dapat menyelesaikan persoalan seperti dibawah ini
 * 
 * let x = 14 + "silver";
 * 
 * tentunya tidak masuk akal untuk menambahkan angka 14 kepada kata "silver"
 * maka untuk itu, javascript akan mengoprasikan tugas diatas sebagai 
 * 
 * let x = "14" + "silver";
 * 
 * javascript mengerjakan tugas dari kiri ke kanan, seperti dibawah ini
 */
let order;
order = 14 + 20 + "silver";
document.getElementById("numberFirst").innerHTML = order;
order = "silver" + 14 + 20;
document.getElementById("stringFirst").innerHTML = order;

//tipe data javascipt merupakan tipe dinamis
/**
 * tipe data javascript adalah tipe yang dinamis, artinya variabel yang sama dapat
 * menampung tipe data yang berbeda
 */
order = 15;
order = "jean";

//javascript string
/**
 * sebuah string (atau text string) adalah sekumpulan kata seperti "john doe"
 * string ditulis dengan quotes, bisa menggunakan single quote ataupun double quotes
 * 
 * kita dapat menggunakan quotes didalam string, selama quotes yang digunakan tidak sama
 * dengan yang kita gunakan untuk membuat variabel string tersebut
 */
order = "jeanee";
order = "joan";
order = "joane 'jeane'";

//javascript numbers
/**
 * semua javascripts number disimpan dalam bilangan desimal (floating point)
 * numbers bisa ditulis dengan, atau tanpa desimal
 */
order = 0;
order = 0.33;

//notasi exponential
/**
 * angka yang sangat besar atau sangat kecil dapat ditulis dengan scientific (exponential) notation
 * 
 * note: 
 *  untuk tipe data number, selalu bernilai double (64-bit floating-point)
 */
order = 31e5; //3100000
order = 43e-5; //0.00043

//javascript bigint
/**
 * semua javascript number disimpan dalam format 64-bit floating-point
 * 
 * javascript bigint adalah tipe data baru (ES2020) yang dapat digunakan untuk
 * menyimpan angka interger yang terlalu besar untuk direpresentasikan
 * dalam javascript number biasa 
 */
order = BigInt("123456789012345678901234567890");

//javascript boolean
/**
 * booleans hanya berisi 2 nilai, yaitu true atau false
 * 
 * booleans biasanya digunakan untuk tes kondisional
 */
order = true;
order = false;

//javascript arrays
/**
 * javascript arrays ditulis dengan square brackets ([])
 * 
 * isi dari array dipisahkan dengan koma
 */
order = ["jaka", 15, "duda"];

//javascripts object
/**
 * javascripts object ditulis dengan curly brackets ({})
 * 
 * isi dari objects ditulis dengan pasangan name:values, dan dipisahkan dengan koma 
 */
order = {nama : "jaka", umur: 20, alamat: "jalan mawar"};

//typeof operator
/**
 * kita dapat menggunakan operator typeof untuk mengetahui tipe dari variabel javascripts
 * 
 * operator typeof akan mengembalikan tipe dari variabel atau sebuah expression
 */
typeof "string"; //return string
typeof (3 + 15); //return numbers

//undefined
/**
 * dalam javascript, sebuah variabel tanpa nilai memiliki nilai undefined.
 * 
 * kita juga bisa mengosongkan variabel dengan mengisinya undefined
 */
let boys; //undefined 
console.log(typeof boys);
order = undefined;

//empty values
/**
 * sebuah empty values berbeda dengan undefined
 * 
 * sebuah string empty adalah nilai dan legal dan sebuah tipe data
 */
order = ""; //nilainya "", dan typeofnya adalah string
console.log(typeof order);