/**
 * terkadang kita ingin membuat object dengan tipe yang sama
 * 
 * untuk membuat object type kita dapat menggunakan object constructor function
 * 
 * ada baiknya menulis nama constructor function dengan huruf kapital diawalnya
 */
function ConstructorFunction(nama, umur, pekerjaan, alamat){
    this.named = nama;
    this.age = umur;
    this.job = pekerjaan;
    this.address = alamat;
}
/**
 * note:
 * dalam constructor function, this tidak memiliki nilai
 * 
 * nilai dari this akan menjadi object baru ketika object baru dibuat
 * 
 * sekarang kita dapat mengisi constructor function dengan data baru
 */
const constructData1 = ConstructorFunction("aldi", 23, "developer", "jln mawar");
const constructData2 = ConstructorFunction("aldo", 22, "database admin", "jln jawa");
console.log(constructData1);
console.log(constructData2);

//property defalut value
/**
 * nilai yang diberikan di dalam constructor akan menjadi nilai default dari constructor tersebut
 */
function constructorFunction2(nama, umur, pekerjaan, alamat){
    this.named = nama;
    this.age = umur;
    this.job = pekerjaan;
    this.address = alamat;
    this.nationality = "indonesia";
}

//menambahkan property ke object constructor
/**
 * cara menambahkan property baru ke dalam object constructor yang telah dibuat sama dengan
 * menambahkan property object pada umumnya
 * 
 * note:
 * property yang ditambahkan ke constructData1 hanya akan berpengaruh pada object itu saja, tidak
 * ada penambahan properties pada seluruh object yang dibuat dengan object constructor mereka
 */
constructData1.nationality = "indonesia";

//menambah property baru ke dalam object constructor
/**
 * kita tidak dapat menambah property baru ke dalam object constructor yang telah dibuat
 * 
 * untuk menambahkan property baru, kita harus menambahkan function prototype kepada object constructor
 */
constructorFunction.prototype.nationality = "indonesian";

//constructor function method
/**
 * kita juga dapat menambahkan method kepada constructor function
 * 
 * caranya sama saja dengan pembuatan method pada object biasa
 * 
 * kita juga menambahkan method baru kepada object construct yang telah dibuat, tetapi sama dengan
 * pembuatan property sebelumnua, method yang dibuat di hasil object construct hanya akan berubah
 * di object baru tersebut
 */

//menambah method baru ke object constructor
/**
 * sama seperti penambahan property baru ke object construct yang telah dibuat
 * 
 * kita harus menggunakan prototype function untuk menambahkan method baru ke
 * object constructornya
 */
constructorFunction.prototype.multiplyAgeTimesOneHundred = function(){
    return this.age * 100;
}

//built-in javascript constructor
/**
 * javascript memiliki built-in function untuk semua native object
 * 
 * new Object()   // A new Object object
 * new Array()    // A new Array object
 * new Map()      // A new Map object
 * new Set()      // A new Set object
 * new Date()     // A new Date object
 * new RegExp()   // A new RegExp object
 * new Function() // A new Function object
 */

//intermezo
/**
 * gunakan object literals {} daripada new Object()
 * 
 * gunakan array literals [] daripada new Array()
 * 
 * gunakan patern literals /()/ daripada new RegExp()
 * 
 * gunakan function expression () {} daripada new Function()
 */