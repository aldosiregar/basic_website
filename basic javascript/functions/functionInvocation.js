//javascript function invocation
/**
 * kode didalam javascript function akan dieksekusi ketika "sesuatu" 
 * memicunya
 */

//memicu sebuah javascript function
/**
 * kode didalam sebuah function tidak dieksekusi ketika function didefinisikan
 * 
 * kode didalam function akan dieksekusi ketika function dipanggil
 * 
 * lebih umum kita menyebutnya sebagai "call a function" daripada
 * "invoke a function"
 * 
 * juga lebih umum untuk mengatakannya "call upon a function",
 * "start a function" atau "execute a function"
 * 
 * dalam tutorial ini, kita akan menggunakan kata "invoke",
 * karena sebuah function javascript dapat di-invoked tanpa perlu dipanggil
 */

//invoking a function as a function
function myFunction(a, b){
    return a * b;
}
myFunction(2,11); //result : 22

/**
 * function diatas bukanlah termasuk kedalam sebuah object, tapi dalam
 * javascript akan selalu ada sebuah default global object
 * 
 * di HTML default global object adalah page HTML itu sendiri, jadi
 * function diatas "dimiliki" oleh HTML page
 * 
 * pada browser page object adalah browser window, function diatas secara
 * otomatis menjadi sebuah window function
 * 
 * note : 
 * ada cara umum untuk meng-invoke javascript function, tetapi bukanlah 
 * praktik yang bagus. Global variables, methods, atau function dapat 
 * dengan mudah menyebabkan terjadinya name conflicts dan bugs di 
 * global object
 * 
 * myFunction() dan window.myFunction() adalah function yang sama
 */
window.myFunction(11, 2); //result : juga 22 

//apa itu this?
/**
 * dalam javascript, keyword this mengacu kepada sebuah object
 * 
 * keyword this mengacu ke object yang berbeda tergantung dari bagaimana ia 
 * digunakan
 * 
 * - dalam sebuah object method, this mengacu ke object
 * 
 * - sendiri, this mengacu ke global object
 * 
 * - pada sebuah function, this mengacu ke global object
 * 
 * - pada sebuah function di strict mode, this menjadi undefined
 * 
 * - pada sebuah event, this mengacu ke element yang menerima event tersebut
 * 
 * - methods seperti call(), apply(), dan bind() dapat mengacukan this ke
 *   object apapun
 * 
 * note : 
 * this bukanlah sebuah variable, itu adalah sebuah keyword, kita tidak
 * dapat mengubah value dari this
 */

//global object
/**
 * ketika sebuah function dipanggil tanpa object pemilik, nilai dari this
 * menjadi global object
 * 
 * dalam web browser global object adalah window browser
 * 
 * pada contoh dibawah ini akan mengembalikan window object sebagai nilai
 * dari this
 */
function myFunction(){
    return this;
}
console.log(myFunction());

/**
 * note : 
 * memanggil sebuah function sebagai global function dapat menyebabkan value
 * dari this menjadi global object, gunakan window object sebagai sebuah 
 * variable dapat meng-crash program kita
 */

//invoking a function as a method
/**
 * dalam javascript kita dapat mendefinisikan functions sebagai object methods
 * 
 * contoh berikut membuat sebuah object (myObject), menjadi dua properties
 * (firstname dan lastname), dan sebuah method (fullname)
 */

const myObject = {
    firstname : "aldo",
    lastname : "fausta",
    fullname : function () {
        return this.firstname + " " + this.lastname;
    }
}

myObject.fullname(); //result : aldo fausta

/**
 * method fullname adalah sebuah function, function masuk kedalam sebuah 
 * object, myObject adalah pemilik dari function tersebut
 * 
 * sesuatu yang disebut this, adalah object yang "memiliki" kode javascript
 * itu, dalam kasus ini nilai dari this adalah myObject
 * 
 * coba saja, ubah method full menjadi mengembalikan nilai dari this
 */
myObject.fullname = function (){
    return this;
}

console.log(myObject.fullname()); //result : myObject

/**
 * invoking sebuah function sebagai sebuah object method, menyebabkan
 * nilai dari this menjadi object itu sendiri
 */

//invoking a function with a function constructor
/**
 * jika sebuah invocation function diikuti dengan keyword new, maka ini
 * adalah constructor invocation
 * 
 * ini seperti kita membuat function baru, tapi karena function javascript
 * adalah objects kita dapat membuat object baru dari sini
 */
//ini adalah object constructornya
function myFunction(first, last){
    this.firstname = first;
    this.lastname = last;
}

const newObjectMyFunction = new myFunction("aldo", "fausta");

console.log(newObjectMyFunction.firstname);

/**
 * constructor invocation akan membuat object baru, object baru ini mewarisi
 * properties dan methods dari constructornya
 * 
 * note : 
 * keyword this pada constructor tidak memiliki sebuah nilai
 * 
 * nilai dari this akan menjadi object baru yang dibuat ketika function
 * dipanggil
 */