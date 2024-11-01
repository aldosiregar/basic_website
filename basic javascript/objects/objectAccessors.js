//javascript accessors (getters dan setters)
/**
 * ECMAScript 5 (ES5 2009) memperkenalkan getter dan setter
 * 
 * getters dan setters memungkinkan kita untuk mendefinisikan object
 * accessor (computed properties)
 */
const accessorsDisplayer = document.getElementById("temp");

//javascript getter (get keyword)
/**
 * contoh dibawah ini menggunakan property lang untuk mengambil nilai
 * dari property language
 */
const person = {
    firstname: "aldo",
    lastname: "siregar",
    language: "Indonesian",
    get lang() {
        return this.language;
    }
};

person.lang; //result : indonesian

//javascript setter (set keyword)
/**
 * contoh dibawah ini menggunakan property lang untuk mengatur nilai
 * dari property language
 */
Object.defineProperty(person, "langReset", {
    get : function() {this.language = "";}
});

Object.defineProperty(person, "lang", {
    set : function(lang) {this.language = lang;} 
});

person.lang = "british";

person.lang; //result : british

//javascript function or getter
/**
 * apa perbedaan dari kedua contoh dibawah
 * 
 * contoh 1 :
 * const person = {
 *  firstname : "aldo",
 *  lastname : "siregar",
 *  fullname : function() {
 *      return this.firstname + " " + this.lastname;
 *  }
 * }
 * 
 * accessorsDisplayers.innertHTML = person.fullname();
 * 
 * contoh 2 :
 * const person = {
 *  firstname : "aldo",
 *  lastname : "siregar",
 *  get fullname() {
 *      this.firstname + " " + this.lastname;
 *  }
 * }
 * 
 * accessorsDisplayer.innerHTML = person.fullname;
 * 
 * contoh pertama mengakses fullname sebagai sebuah 
 * function : person.fullname();
 * 
 * contoh kedua mengakses fullname sebagai sebuah
 * property : person.fullname
 * 
 * contoh kedua memberikan syntax yang lebih simple
 */

//data quality
/**
 * javascript dapat mengamankan kualitas data lebih baik ketika menggunakan
 * getters dan setters
 */

//kenapa menggunakan getters dan setters?
/**
 * - membuat syntax menjadi lebih sederhana
 * - membuat kita memiliki syntax yang sama untuk properties dan methods
 * - dapat menjaga kualitas data
 * - berguna untuk mengerjakan sesuatu yang dibelakang layar
 */

//Object.defineProperty()
/**
 * method Object.defineProperty() juga dapat digunakan untuk menambahkan
 * getters dan setters
 * 
 * seperti contoh setters sebelumnya, kita menggunakan method ini
 */