//javascript function apply()
//method reuse
/**
 * dengan method apply(), kita dapat menulis method yang dapat digunakan
 * di object yang berbeda
 */

//javascript apply() method
/**
 * method apply() mirip dengan method call() (tutorial sebelumnya)
 * 
 * seperti pada contoh dibawah, fullname method dari person di-applied
 * pada person1
 */
const person = {
    fullname : function() {
        return this.firstname + " " + this.lastname;
    }
};

const person1 = {
    firstname : "aldo",
    lastname : "fausta"
};

person.fullName.apply(person1); //result : aldo fausta

//perbedaan antara call() dan apply()
/**
 * perbedaannya adalah : 
 * - method call() mengambil arguments secara terpisah
 * - method apply() mengambil arguments sebagai sebuah array
 * 
 * note : 
 * method apply() sangat berguna jika kita ingin menggunakan array daripada
 * list of arguments
 */

//method apply() degnan arguments
/**
 * method apply() menerima arguments dalam sebuah array
 */

const personData = {
    fullname : function(city, country){
        return this.firstname + " " + this.lastname + ", from : " +
        city + ", " + country;
    }
};

personData.fullname.apply(person1, ["jakarta", "indonesia"]); 
//result : aldo fausta, from : jakarta, indonesia

//simulasi max method pada arrays
/**
 * kita dapat mencari angka terbesar (dalam list of numbers) menggunakan
 * method Math.max();
 */
Math.max(1,2,3); //result : 3

/**
 * karena javascript arrays tidak memiliki method max(), kita dapat 
 * memasukkan method Math.max()
 */
Math.max.apply(null, [1,2,3]); //result : juga akan mengembalikan 3

/**
 * argument pertama (null) tidaklah penting, itu tidak digunakan pada
 * contoh ini 
 * 
 * karena argument pertama merujuk ke object dimana method ini akan di apply, 
 * karena tidak ada object dan kita hanya ingin gunakan
 * 
 * contoh dibawah juga akan memberikan hasil yang sama
 */
Math.max.apply(Math, [1,2,3]); //result : juga akan mengembalikan 3

Math.max.apply(" ", [1,2,3]); //result : 3

Math.max.apply(0, [1,2,3]); //result : 3

//javascript strict mode
/**
 * pada javascript strict mode, jika argument pertama dari method apply()
 * bukanlah sebuah object, arguments tersebut menjadi pemilik (object)
 * dari invoked functon, pada "non-strict" mode, ia menjadi global object
 */