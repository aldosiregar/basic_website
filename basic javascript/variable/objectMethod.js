/**
 * object methods adalah aksi yang dapat dilakukan oleh sebuah object
 * 
 * sebuah method adalah definisi fungction yang disimpan sebagai object properties
 */ 

let examplePerson = {
    named : "joko",
    lastname : "tingkir",
    job : "cto",
    fullname : function() {
        return this.named + " " + this.lastname;
    }
}

/**
 * untuk mengakses method di dalam object, kita harus menambahkan parentheses setelah nama propertynya
 * 
 * jika tanpa ada parentheses, maka akan dikembalikan function definition nya
 */
console.log(examplePerson.fullname());
console.log(examplePerson.fullname);

//menambahkan method baru ke dalam object
/**
 * menambahkan method baru ke dalam object mirip dengan menambahkan property baru
 */
examplePerson.age = function () {
    return 15 + 4;
}

//menggunakan javascript methods
/**
 * kita dapat menggunakan method javascript dalam custome object method kita
 * 
 * contohnya kita akan menambahkan method toUpperCase() untuk meng-kapitalkan tulisan fullname kita
 */
examplePerson.UpperFullname = function(){
    return (this.fullname()).toUpperCase();
}
console.log(examplePerson.UpperFullname()); 