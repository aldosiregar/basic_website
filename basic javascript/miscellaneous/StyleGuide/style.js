//javascript style guide
/**
 * selalu gunakan code convention yang sama pada semua project javascript kita
 */

//javascript coding conventions
/**
 * coding convention adalah paduan style untuk programming, biasanya mereka berisi
 *  1. aturan penamaan dan deklarasi untuk variable dan function 
 *  2. aturan untuk menggunakan white space, indentation, dan comments
 *  3. praktik dan prinsip pada pemrograman
 * 
 * coding convention menjaga kualitas
 *  1. meningkatkan readibilitas kode
 *  2. membuat maintenance kode menjadi lebih mudah
 * 
 * coding conventions dapat berupa aturan dokumentasi untuk diikuti sebuah tim, 
 * atau bisa juga praktik pemrograman pribadi
 * 
 * ps : 
 * tutorial ini hanya akan meng-cover general javascript code convention yang digunakan pada w3schools,
 * pada tutorial best practice selanjutnya, kita akan belajar agar tidak jatuh ke code pitfall 
 */

//variable names
/**
 * pada w3schools, mereka menggunakan camel case untuk nama identifier (variable dan function)
 * 
 * semua nama dimulai dengan huruf
 * 
 * pada akhir tutorial, akan ada diskusi lebih mendalam tentang aturan penamaan 
 */
let firstName = "john";

//space diantara operators
/**
 * selalu tambahkan space disekitar operator, dan setelah comma
 */
let summing = 30 + 29;
const array = [10, 20, 30];

//code indentation
/**
 * selalu gunakan 2 space untuk indentasi pada blok kode 
 */
function toCelcius(farenheit) {
    return (5 * 9) * (farenheit - 32);
}

/**
 * jangan gunakan tabs (tabulators) untuk indentation, code editors yang berbeda akan
 * meng-interpretasikan tabs dengan cara yang berbeda pula
 */

//statement rules
/**
 * general rules untuk statement sederhana :
 *  1. selalu akhiri statement dengan semicolon
 */
const cars = [10, 110, 20, "jj"];

const trucks = {
    name : "volvo",
    tank : 1250,
    maxSpeed : 80
};

/**
 * general rule untuk complex (compound) statements :
 *  1. tambahkan bracket pembuka pada akhir dari baris pertama
 *  2. tambahkan satu space sebelum membuka bracket
 *  3. taruh bracket penutup pada new line, tanpa space diawalnya
 *  4. jangan tambahkan semicolon pada akhir complex statement
 */
//function
function jakaBaringCity(){
    return "jaka baring city";
}

//looping
for(let i = 0; i < 10; i++){
    i += i;
}

//conditional
if(true){
    console.log(true);
} else {
    console.log(false);
}

//Object rules
/**
 * general rules untuk object definitions : 
 *  1. tempatkan opening bracket pada baris yang sama dengan nama object
 *  2. gunakan colon ditambah satu space diantara setiap property dan nilainya
 *  3. gunakan quotes disekeliling nilai string, tidak pada nilai numeric
 *  4. jangan tambahkan comma setelah pasangan terakhir property-value
 *  5. tempatkan clossing bracket pada baris baru, tanpa leading space
 *  6. selalu akhiri object definition dengan semicolon 
 */
const employees = {
    name : "jaka",
    job : "IT support",
    age : 30,
    address : "jalan mawar no. 31, jakarta timur"
};

/**
 * object yang pendek dapat diketik sebaris, dipisahkan hanya dengan space pada
 * setiap properties
 */
const singleCompany = {name:"joko", job:"manager", age:39};

//line length < 80
/**
 * untuk readibilitas, hindari baris yang berisi lebih dari 80 kata
 * 
 * jika javascript statement tidak muat pada satu line, saat terbaik untuk memecahnya
 * adalah setelah operator atau sebuah comma
 */
try{
    document.getElementById("demos").innerHTML = 
    "hello world";
} catch (err) {
    console.log(err);
}

//naming convention 
/**
 * selalu gunakan naming convention yang sama pada semua kode kita, misal : 
 *  1. nama variable dan function ditulis dengan camelCase
 *  2. global variable ditulis dengan UPPERCASE (w3school tidak, tetapi ini cukup umu)
 *  3. constant (seperti PI) ditulis dengan UPPERCASE
 * 
 * jadi, untuk nama variable apakah kita harus menggunakan hyp-hens, 
 * camelCase, atau under_scores?
 * 
 * ini pertanyaan adalah yang sering didiskusikan programmer, jawabannya tergantung
 * pada siapa kita bertanya
 * 
 * Hyphens pada html dan css :
 * HTML5 attribute dapat dimulai dengan data- (data-quantity, data-price)
 * CSS menggunakan hyphens pada property-names (font-size)
 * note : 
 * gunakan hyphens pada html dan css saja, karena tidak semua bahasa pemrograman
 * dapat membaca hyphens, biasanya malah akan terbaca sebagai proses pengurangan 
 * variable
 * 
 * Underscores : 
 * banyak programmer lebih memilih untuk menggunakan underscores (date_of_birth)
 * , terutama pada Sql database
 * underscores biasanya digunakan pada dokumentasi php
 * 
 * PascalCase : 
 * PascalCase biasanya lebih disukai programmer c
 * 
 * camelCase :
 * camelCase digunakan pada javascript, jquery, atau javascript libraries
 * 
 * note :
 * jangan mulai nama dengan $ sign, ini akan menyebabkan conflict pada berbagai
 * macam javascript libraries
 */

//loading javascript pada html
/**
 * gunakan syntax yang sederhana untuk memasukkan external script (type attribute
 * tidaklah dibutuhkan)
 * 
 * <script src="style.js"></script>
 */

//mengakses html element
/**
 * konsekuensi dari menggunakan html styles yang "tidak rapi" dapat memicu error
 * pada javascript
 * 
 * kedua statement javascript dibawah akan memberikan hasil yang berbeda :
 * 
 * const obj = document.getElementById("Demo");
 * 
 * const obj = document.getElementById("demo");
 * 
 * jika memungkinkan, gunakan naming convention yang sama seperti javascript 
 * pada html
 */

//file extension
/**
 * file HTML harus memiliki extension .html (.htm diperbolehkan)
 * 
 * css file harus .css
 * 
 * javascript file harus .js
 */

//gunakan lower case file name
/**
 * sebagian besar web server (Apache, Unix) bersifat case-sensitive pada
 * file name mereka
 * 
 * london.jpg tidak dapat diakses dengan LONDON.jpg
 * 
 * ada juga web servers (microsoft, IIS) yang tidak bersifat 
 * case-sensitive
 * 
 * london.jpg dapat juga diakses dengan London.jpg atau LONDON.jpg
 * 
 * jika kita menggunakan pencampuran lower case dan upper case, gunakan
 * dengan konsisten
 * 
 * jika kita memindahkan website dari server case-insensitive menuju
 * case-sensitive, ini akan menyebabkan error pada website kita
 * 
 * untuk menghindari masalah ini, biasakan menggunakan lower case
 * pada nama file jika memungkinkan
 */

//performance
/**
 * coding convention tidak digunakan oleh komputer, sebagian besar aturan dapat
 * berpengaruh pada eksekusi program
 * 
 * indentation dan extra space tidak signifikan pada script kecil
 * 
 * untuk kode yang masih tahap ujicoba, readibility lebih disukai,
 * pada larger production script ini harus diminimalisir
 */