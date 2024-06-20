/**
 * object
 * 
 * dalam kehidupan nyata, object bisa dikatakan sebagai : rumah, mobil, orang, binatang, dsb
 * 
 * semua bagian tentang bagaimana sebuah karakteristik dan perilaku benda masuk dalam suatu objek
 * konsep ini juga berlaku pada object javascript
 */

//object properties
/**
 * semua benda di dunia nyata memiliki property atau sifat
 * 
 * contohnya pada sebuah rumah, sebuah rumah memiliki sifat yang sama sebagai sebuah rumah
 * walau memiliki sifat yang berbeda, seperti warna ataupun besar yang berbeda-beda 
 * 
 * dalam javascript, konsep sifat ini disebut property dalam objectnya
 */

//object methods
/**
 * sebuah benda juga dapat memiliki sebuah tindakan yang dapat dilakukannya
 * 
 * contohnya seperti mobil, mobil dapat berjalan, berhenti, menyalakan mesin dsb
 * 
 * tindakan ini dalam javascript disebut sebagai method
 */

//javascript object
/**
 * object juga merupakan sebuah variabel, tetapi object dapat menampung lebih dari satu data
 * 
 * note:
 *  akan lebih baik untuk membuat object dalam bentuk const, agar tidak dapat diubah
 * seseorang setelah object ini dibuat
 */

//javascript object definition
/**
 * bagaimana kita membuat sebuah object : 
 *  1. menggunakan object literals
 *  2. menggunakan keyword new
 *  3. menggunakan object constructor
 */

//object literals
/**
 * sebuah object literals berisi pasangan name:value didalam curly brackets {}
 * 
 * name:value juga bisa disebut pasangan key:value  
 * 
 * object literals juga bisa disebut object initializers
 */

const mobil = {nama:"mercedes", kapasitas:4, jarakTempuh: 100};
document.getElementById("carName").innerHTML = mobil.nama;
document.getElementById("carCapacity").innerHTML = mobil.kapasitas;
document.getElementById("carTravel").innerHTML = mobil.jarakTempuh;

//using new keyword
/**
 * contoh lain dari menggunakan keyword new untuk membuat object
 * 
 * note: 
 *  diatas ini hanya sebagai contoh, untuk keterbacaan kode selalu gunakan objects literals
 * 
 * dibawah ini juga diberikan contoh mengakses objects dengan objects[key]
 */
const pesawat = new Object();
pesawat.name = "boeing 737";
pesawat.capacity = 100;
pesawat.travel = 1000;
for(let key in pesawat){
    document.getElementById("plane").innerHTML += "<p>" + pesawat[key] + "</p>";
}

//javascript object methods
/**
 * method adalah tindakan yang dapat dilakukan dalam sebuah objects
 * 
 * method adalah fungsi yang disimpan sebagai nilai properties
 */
const dataDiri = {
    nama : "aldo",
    umur : function (){
        return 2024 - 2001;
    },
    jabatan : "IT Developers"
}

for(let key in dataDiri){
    if(typeof dataDiri[key] == "function"){
        document.getElementById("personalData").innerHTML += "<p>" + dataDiri[key]() + "</p>";
        continue;
    }
    document.getElementById("personalData").innerHTML += "<p>" + dataDiri[key] + "</p>";
}

//dalam javascript, object adalah inti
/**
 * jika kita paham akan objects, kita akan mengerti inti dari javascripts
 * 
 *  1. objects adalah penampung untuk properties dan method
 *  2. properties adalah nilai yang bernama
 *  3. methods adalah fungsi yang disimpan sebagai properties
 *  4. properties dapat berbentuk primitive values, fungsi, atau bahkan object lain
 * 
 * dalam javascripts, hampir semuanya adalah objects
 *  1. objects adalah objects
 *  2. maths adalah objects
 *  3. function adalah objects
 *  4. dates adalah objects
 *  5. arrays adalah objects
 *  6. maps adalah objects
 *  7. sets adalah objects
 * 
 * semua nilai javascripts, kecuali primitive values, adalah objects
 */

//javascripts primitive
/**
 * sebuah primitive values adalah nilai yang tidak properties atau method
 * 
 * javascripts memiliki 7 jenis primitive values
 * `1. string
 * `2. number
 *  3. boolean
 *  4. null
 *  5. undefined
 *  6. symbol
 *  7. bigint
 */

//immutable
/**
 * primitive values bersifat immutable (mereka termasuk hardcode dan tak dapat diubah)
 * 
 * jika x = 3.14, kita dapat merubah variabel x, namun kita tidak dapat mengubah nilai 3.14
 * itu sendiri
 */

//javascript objects bersifat mutable
/**
 * sedangkan objects bersifat mutable, mereka dapat diadrressed dengan refrence, bukan dengan nilainya
 * 
 * jika seseorang adalah object, statement dibawah ini tidak akan membuat copy dari orang tersebut
 * 
 * const x = person;
 * 
 * object x bukanlah kopian dari person, object x adalah person itu sendiri
 * 
 * object x dan person berbagi alamat memori yang sama
 * 
 * artinya, semua perubahan di x akan berpengaruh juga di person
 */
const person = {
    name : "aldora",
    pekerjaan : "frontend developer",
    umur : 23
}

const orang = person;

for(let key in orang){
    document.getElementById("person").innerHTML += "<p>" + orang[key] + "</p>";
}