//methods untuk membuat object javascript
/**
 * - menggunakan object literal
 * - menggunakan keyword new
 * - menggunakan object constructor
 * - menggunakan Object.assign()
 * - menggunakan Object.create()
 * - menggunakan Object.fromEntries()
 */

//javascript object literal
/**
 * object literal adalah sekumpulan nama property names:values didalam
 * curly braces {}
 * 
 * {firstname:"aldo",age:23}
 * 
 * note : 
 * object literal juga disebut sebagai object initializer
 */

//membuat sebuah javascript object
/**
 * untuk contoh dibawah kita membuat object literal
 */
const person = {};

person.firstname = "aldo";
person.age = 23;

/**
 * selanjutnya kita akan membuat object javascript kosong dengan
 * new Object()
 */
const person2 = new Object();

person2.firstname = "alde";
person2.age = 32;

/**
 * note : 
 * contoh diatas juga memberikan hasil yang serupa dengan object literal
 * 
 * namun tidak perlu untuk menggunakan new Object()
 * 
 * untuk keterbacaan, keringkasan dan kecepatan eksekusi, gunakan metode 
 * object literal
 */

//fungsi object constructor
/**
 * terkadang kita perlu untuk membuat lebih dari satu object yang tipenya
 * sama
 * 
 * untuk membuat sebuah object type kita dapat menggunakan object 
 * constructor function
 * 
 * praktik yang bagus untuk menamai constructor function dengan huruf kapital
 * pada huruf pertamanya
 */
function Person(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

/**
 * pada constructor function, this tidak memiliki nilai
 * 
 * nilai dari this akan menjadi object baru ketika sebuah object baru dibuat
 */

/**
 * sekarang kita akan menggunakan new Person() untuk membuat banyak object 
 * baru dari Person
 */
const son = new Person("kale", "gale", 13);
const father = new Person("bale", "gale", 40);
const mother = new Person("grace", "gale", 35);

//property default values
/**
 * nilai yang diberikan pada property akan menjadi nilai default dari
 * semua object yang dibuat di constructor
 * 
 * contoh : 
 * function Person(first, last, age){
 *  this.firstname = first;
 *  this.lastname = last;
 *  this.age = age;
 *  this.nationality = "english";
 * }
 */

//javascript object methods
/**
 * javascript object methods dapat dikelompokkan menjadi
 *  - general methods
 *  - property management methods
 *  - object protection methods
 */

//general methods
/**
 * /copy properties dari source object ke target object
 * Object.assign(target, source)
 * 
 * /buat sebuah object dari object yang sudah ada
 * Object.create(object)
 * 
 * /mengembalikan sebuah array dengan pasangan key/value dari sebuah object
 * Object.entries(object)
 * 
 * /buat sebuah object dari sebuah list pasangan keys/values
 * Object.fromEntries()
 * 
 * /mengembalikan sebuah array dari keys sebuah object
 * Object.keys(object)
 * 
 * /mengembalikan sebuah array dari nilai property pada sebuah object
 * Object.values(object)
 * 
 * /kelompokkan element object tergantung dari fungsi yang mengelompokkannya
 * Object.groupBy(object, callback)
 * 
 * dan masih banyak method lainnya, ini akan dibahas pada tutorial methods
 * berikutnya
 */

//property management methods
/**
 * /menambah atau merubah property sebuah object
 * Object.defineProperty(object, property, descriptor)
 * 
 * /menambah atau mengubah satu atau lebih object property
 * Object.defineProperties(object, descriptor)
 * 
 * /mengakses sebuah property
 * Object.getOwnPropertyDescriptor(object, property)
 * 
 * /mengakses properties
 * Object.getOwnPropertyDescriptors(object)
 * 
 * /mengembalikan semua property sebagai sebuah array
 * Object.getOwnPropertyNames(object)
 * 
 * /mengakses prototype
 * Object.getPrototypeOf(object)
 * 
 * methods lainnya akan dibahas pada tutorial methods mendatang
 */

//object protection methods
/**
 * /mencegah re-assignment
 * const car = {type:"fiat", model="500"}
 * 
 * /mencegah penambahan object properties
 * Object.preventExtensions(object)
 * 
 * /mengembalikan true jika properties dapat ditambahkan ke sebuah object
 * Object.isExtensible(object)
 * 
 * /mencegah penambahan dan penghapusan object properties
 * Object.seal(object)
 * 
 * /mengembalikan true jika object terkunci
 * Object.isSealed(object)
 * 
 * /mencegah adanya perubahan pada object
 * Object.freeze(object)
 * 
 * /mengembalikan benar jika object sedang dibekukan
 * Object.isFreeze(object)
 */

//menggunakan const
/**
 * cara paling umum untuk melindungi sebuah object dari perubahan adalah 
 * dengan menggunakan keyword const
 * 
 * dengan const kita tidak dapat menetapkan ulang sebuah object, tetapi
 * kita masih bisa mengubah nilai dari propertinya, menghapus sebuah
 * property atau membuat sebuah property baru
 * 
 * object protection methods akan dibahas lebih lanjut pada 
 * materi methods selanjutnya
 */