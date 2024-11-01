//property management methods
/**
 * /menambah atau mengubah property sebuah object
 * Object.defineProperty(object, property, descriptor)
 * 
 * /menambah atau merubah object properties
 * Object.defineProperties(object, descriptors)
 * 
 * /mengakses sebuah property
 * Object.getOwnPropertyDescriptor(object, property)
 * 
 * /mengakses properties
 * Object.getOwnPropertyDescriptors(object)
 * 
 * /mengembalikan semua properties sebagai sebuah array
 * Object.getOwnPropertyNames(object)
 * 
 * /mengakses prototype
 * Object.getPrototypeOf(object)
 */

//javascript Object.defineProperty()
/**
 * method Object.defineProperty() dapat digunakan untuk : 
 * - menambah property baru ke sebuah object
 * - merubah nilai property
 * - mengubah object getters dan setters
 * 
 * syntax : 
 * Object.defineProperty(object, property, descriptor)
 */

//menambah property baru
/**
 * untuk contoh ini dan seterusnya kita akan menggunakan object person1
 * dari tutorial objectMethods.js sebelumnya
 */
Object.defineProperty(person1, "year", {value:"2008"}); //result : 2008

//property attributes
/**
 * semua properties memiliki sebuah nama, dan juga value
 * 
 * value adalah satu dari attribute properties
 * 
 * attribute lainnya adalah : enumerable, configurable, dan writeable
 * 
 * attribute ini menjelaskan bagaimana sebuah property dapat diakses
 * (apakah bisa dibaca?, apakah bisa ditulis?)
 * 
 * pada javascript, semua attribute dapat dibaca, namun hanya attribute
 * nilai yang dapat diubah (dan hanya jika propertynya bisa ditulis)
 * 
 * (ECMAScript 5 memiliki method untuk mengambil dan mengatur semua attribute
 * property)
 */

//mengubah meta data
/**
 * property meta data ini dapat diubah
 * 
 * writeable : true     /nilai property dapat diubah
 * enumerable : true    /property dapat dienumerasi
 * configurable : true  /property dapat dikonfigurasi ulang
 * 
 * writeable : false    /nilai property tidak dapat diubah
 * enumerable : false   /property tidak dapat dienumerasi
 * configurable : false /propertu tidak dapat dikonfigurasi ulang
 * 
 * getter dan setter juga dapat diubah
 * 
 * /mendefinisikan sebuah getter
 * get: function() {return language}
 * 
 * /mendefinisikan sebuah setter
 * set: function(value) {language = value}
 * 
 * pada contoh dibawah ini language hanya bisa dibaca
 * Object.defineProperty(person1, "language", {writeable:false});
 * 
 * contoh dibawah akan membuat langeage tidak bisa dienumerasi
 * Object.defineProperty(person1, "language", {enumerable:false}); 
 */

//javascript getOwnPropertyNames()
/**
 * method Object.getOwnPropertyNames() dapat digunakan untuk : 
 * ` mengumpulkan object properties
 * 
 * syntax :
 * Object.getOwnPropertyNames(object)
 */

//list all object properties
/**
 * contoh dibawah akan mengambil semua properties dari sebuah object
 */

//ambil semua properties
Object.getOwnPropertyNames(person1); //result : firstname,lastname,age,eyecolor,year

/**
 * Object.getOwnPropertyNames() juga akan meng-list properties yang tidak
 * enumerable
 */
Object.defineProperty(person1, "year", {enumerable:false});

//mengambil semua properties
Object.getOwnPropertyNames(person1); //result : firstname,lastname,age,eyecolor,year

//javascript Object.keys()
/**
 * method Object.keys() dapat : 
 * - mengumpulkan enumerable object properties
 * 
 * syntax : 
 * Object.keys(object)
 */

//list enumerable object properties
/**
 * contoh dibawah menggunakan Object.keys() dibandingkan 
 * Object.getOwnPropertyNames()
 */
Object.keys(person1); //result : firstname,lastname,age,eyecolor

//note
/**
 * method getOwnPropertyNames() mengembalikan semua properties
 * 
 * method Object.keys() mengembalikan semua enumerable properties
 * 
 * jika kita mendefine object properties tanpa enumerable:false, kedua
 * method ini akan mengembalikan hasil yang sama
 */

//menambahkan getters dan setters
/**
 * method Object.defineProperty() juga dapat digunakan untuk menambahkan
 * getters dan setters
 */
Object.defineProperty(person1, "fullName", {
    get: function() {return this.firstname + " " + this.lastname;}
}); //result : jane doe

//contoh kedua : counter
const counters = {counter:0};

//membuat setter dan getters
Object.defineProperty(counters, "reset", {
    get : function() {this.counter = 0;}
});

Object.defineProperty(counters, "increment", {
    get : function() {this.counter++;} 
});

Object.defineProperty(counters, "decrement", {
    get : function() {this.counter--;}
});

Object.defineProperty(counters, "add", {
    set : function(value) {this.counter += value;}
});

Object.defineProperty(counters, "subtract", {
    set : function(value) {this.counter -= value;}
});

//coba counter
counters.reset;
counters.add = 5; //result : 5
counters.subtract = 2; //result : 3 
counters.increment; //result : 4
counters.decremenet; //result : 3

//prototype properties
/**
 * object javascript mewarisi properties dari prototype mereka
 * 
 * keyword delete tidak akan menghapus properties yang diwariskan, tetapi
 * jika kita menghapus sebuah property prototype, ini akan berefek
 * ke semua object yang diwariskan dari prototype tersbeut
 */