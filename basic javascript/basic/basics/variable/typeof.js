//javascript typeof
/**
 * typeof operator mengembalikan datatype dari javascript variable
 */
console.log("typeof javascript : ");

//primitive data type
/**
 * pada javascript, primitive value adalah satu nilai tanpa properties atau method
 * 
 * javascript memiliki 7 primitive data types
 *  1. number
 *  2. string 
 *  3. boolean
 *  4. bigint
 *  5. symbol
 *  6. null
 *  7. undefined
 * 
 * operator typeof mengembalikan datatype dari variable atau sebuah expression
 */
console.log(typeof "John");         // Returns string
console.log(typeof ("John"+"Doe")); // Returns string
console.log(typeof 3.14);           // Returns number
console.log(typeof 33);             // Returns number
console.log(typeof (33 + 66));      // Returns number
console.log(typeof true);           // Returns boolean
console.log(typeof false);          // Returns boolean
console.log(typeof 1234n);          // Returns bigint
console.log(typeof Symbol());       // Returns symbol
console.log(typeof x);              // Returns undefined

console.log(typeof null);           // Returns object 

/**
 * note : 
 * pada javascript, null adalah primitive value. tetapi, typeof mengembalikan object
 * 
 * ini adalah bug yang dikenal pada javascript, dan sudah menjadi alasan sejarah
 */

//complex data types
/**
 * sebuah datatypes complex dapat menampung beberapa nilai dan/atau berbagai type data bersama
 * 
 * javascript memiliki 1 complex datatype
 *  1. object
 * 
 * semua type complex seperti arrays, functions, set, dan maps adalah type yang berbeda dari object
 * 
 * typeof operator hanya akan mengembalikan 2 types
 *  1. object
 *  2. function
 */
typeof {name:'John'}   // Returns object
typeof [1,2,3,4]       // Returns object
typeof new Map()       // Returns object
typeof new Set()       // Returns object

typeof function (){}   // Returns function

/**
 * note : 
 * typeof operator mengembalikan object untuk semua type objects
 *  1. objects
 *  2. arrays
 *  3. sets
 *  4. maps
 * 
 * kita tidak dapat menggunakan typeof untuk menentukan jika javascript object adalah
 * array atau date
 */

//bagaimana cara mengenali array
/**
 * bagaimana cara kita tahu jika sebuah variable adalah array ?
 * 
 * ECMAScript 5 (2009) mengenalkan method baru untuk ini : Array.isArray()
 */
const typeofArrays = [10, 5, 3 , 1, 3];
console.log(Array.isArray(typeofArrays));

//instanceof operators
/**
 * instanceof operators mengembalikan true jika sebuah object adalah turunan dari 
 * object type yang spesifik
 */
console.log(typeofArrays instanceof Array);

//undefined variable
/**
 * typeof dari sebuah variable yang belum terdefinisi adalah undefined
 */
console.log(typeof a);

/**
 * typeof dari variable tanpa value adalah undefined, nilainya juga undefined
 */
let typeofVariable;
console.log(typeof typeofArrays);

/**
 * variable juga bisa dibuat kosong, dengan mengatur nilainya ke undefined
 * 
 * type nya juga akan menjadi undefined
 */
typeofArray = undefined;
console.log(typeof typeofArrays);

//empty value
/**
 * sebuah nilai kosong tidaklah sama seperti undefined
 * 
 * sebuah string kosong adalah nilai legal dan sebuah type
 */
typeofVariable = "";
console.log(typeof typeofVariable);

//NULL
/**
 * dalam javascript, null adalah "ketiadaan". ini maksudnya adalah sesuatu yang tidak ada
 * 
 * sayangnya, pada javascript, datatype dari null adalah object
 * 
 * kita dapat mengosongkan object dengan mengaturnya ke null
 */
let employeesDataTypeof = {name : "kala", age : 25};
employeesDataTypeof = null;
console.log(employeesDataTypeof);

/**
 * selain itu, kita juga dapat mengosongkan sebuah object dengan mengaturnya ke undefined
 */
employeesDataTypeof = {name : "kala", age : 25};
employeesDataTypeof = undefined;
console.log(employeesDataTypeof);

//perbedaan antara null dan undefined
/**
 * undefined dan null bernilai sama tetapi berbeda type data
 */
console.log(typeof undefined);
console.log(typeof null);
console.log(null === undefined);
console.log(null == undefined);

//constructor property
/**
 * constructor property mengembalikan constructor function kepada semua variable javascrupt
 */
// Returns function Object() {[native code]}:
console.log(({name : 'John', age : 34}).constructor);

// Returns function Array() {[native code]}:
console.log([1,2,3,4].constructor);

// Returns function Date() {[native code]}:
console.log(new Date().constructor);

// Returns function Set() {[native code]}:
console.log(new Set().constructor);

// Returns function Map() {[native code]}:
console.log(new Map().constructor);

// Returns function Function() {[native code]}:
console.log((function () {}).constructor);

/**
 * dengan constructor, kita dapat memeriksa apakah sebuah object adalah suatu type data
 */
console.log((new Date()).constructor === Date);

//void operator
/**
 * void operator memeriksa expression dan mengembalikan undefined. operator ini sering digunakan
 * untuk mendapatkan undefined primitive value, menggunakan "void(0)" (berguna ketika
 * mengevaluasi sebuah expression tanpa perlu mengembalikan nilai)
 * 
 * tutorial ada di interface.html
 */
