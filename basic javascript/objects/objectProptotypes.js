/**
 * semua object javascript mewarisi properties dan method dari prototype
 * 
 * pada contoh sebelumnya kita sudah mempelajari cara kerja object
 * constructor
 */
function PersonConstructors(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

const me = new PersonConstructors("aldo", "fausta", 23);

/**
 * kita juga tahu bahwa kita tak bisa menambahkan property baru ke 
 * object constructor yang sudah ada
 * 
 * PersonConstructor.nationality = "indonesian";
 * 
 * untuk menambahkan property baru ke sebuah constructor, kita harus
 * menambahkannya ke constructor function
 * 
 * contoh : 
 * function PersonConstructor(first, last, age, eyecolor){
 *  this.firstname = first;
 *  this.lastname = last;
 *  this.age = age;
 *  this.eyecolor = eyecolor;
 *  this.nationality = "indonesian"
 * }
 */
function PersonConstructor(first, last, age, eyecolor){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eyecolor;
    this.nationality = "indonesian"
}

//prototype inheritance
/**
 * semua object javascript mewarisi properties dan method dari prototype
 * - object Date diwarisi dari Date.prototype
 * - object Array diwarisi dari Array.prototype
 * - object PersonConstructor diwarisi dari PersonConstructor.prototype
 * 
 * Object.prototype ada di urutan teratas dari prototype inheritance
 * chain
 * 
 * object Date, Array, dan PersonConstructor diwariskan dari 
 * Object.prototype
 */

//menambahkan properties dan methods ke objects
/**
 * terkadang kita ingin menambahkan properties (atau methods) baru ke
 * objects yang sudah ada dan sudah jelas typenya
 * 
 * terkadang kita ingin menambahkan properties (atau methods) baru
 * ke object constructor
 */

//menggunakan property prototype
/**
 * javascript prototype property memperbolehkan kita untuk menambahkan
 * properties baru ke object constructor
 * 
 * untuk contoh ini kita akan menggunakan PersonConstructor yang
 * sudah dibuat sebelumnya
 */
PersonConstructor.prototype.lived = "jakarta";

/**
 * javascript prototype property juga memperbolehkan kita untuk 
 * menambahkan method baru ke object constructor
 */
PersonConstructor.prototype.fullname = () => {
    return this.firstname + " " + this.lastname;
}

/**
 * hanya modifikasi prototype dari buatan kita saja, jangan memodifikasi
 * prototypes dari standard javascript objects
 */