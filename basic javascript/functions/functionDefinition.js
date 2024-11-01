//javascript function definition
/**
 * javascript function dibuat dengan keyword function
 * 
 * kita dapat menggunakan deklarasi function atau function expression
 */
console.log("function definition : ");

//function declarations
/**
 * pada basics, kita mempelajari bahwa function dideklarasikan
 * dengan syntax berikut : 
 * 
 * function functionName(parameters){
 *  /kode yang akan dieksekusi
 * }
 * 
 * function yang telah terdeklarasi tidak akan langsung dieksekusi, mereka
 * akan "disimpan" untuk nantinya digunakan, dan akan dieksekusi nanti,
 * ketika mereka di-invoked (dipanggil)
 */
function myFunction(a, b){
    return a * b;
}

console.log(myFunction(21, 3)); //result : 63

/**
 * sebuah function expression yang telah disimpan dalam bentuk variable, 
 * variable tersebut akan dapat digunakan sebagai sebuah function
 */
const myFunctionOnVariable = function (a, b) {return a + b};

console.log(myFunctionOnVariable(10, 5)); //result : 15

/**
 * function diatas disebut sebagai anonymous function 
 * (sebuah function tanpa nama)
 * 
 * function yang disimpan di variable tidak butuh nama function, mereka akan
 * selalu ter-invoked (terpanggil) menggunakan nama variable
 * 
 * note : 
 * function diatas diakhiri dengan semicolon karena merupakan bentuk deklarasi
 * variable
 */

//function constructor
/**
 * seperti yang kita lihat di contoh sebelumnya, javascript function dibuat
 * dengan keyword function
 * 
 * function juga dapat dibuat dengan built-in javascript function constructor
 * bernama Function()
 */
const myFunctionConstructors = new Function("a", "b", "return a - b");

let temp = myFunctionConstructors(4,3); //result : 1

/**
 * kita sebenarnya tidak perlu menggunakan function constructor
 * 
 * di sebagian besar kondisi, kita bisa menghindari untuk menggunakan 
 * keyword new di javascript
 */

//function hoisting
/**
 * sebelumnya, ktia telah mempelajari apa itu hoisting
 * 
 * hoisting adalah tingkah laku default javascript untuk memindahkan
 * deklarasi ke bagian atas dari scope saat itu
 * 
 * hoisting terjadi pada deklarasi variable maupun deklarasi 
 * function
 * 
 * karena ini, javascript function dapat dipanggil sebelum mereka 
 * dideklarasikan
 * 
 * function yang didefinisikan menggunakan sebuah expression tidak akan 
 * di-hoist
 */

//self-invoking function
/**
 * function expression dapat dibuat "self-invoking"
 * 
 * sebuah self-invoking expression di-invoked (dimulai) secara otomatis,
 * tanpa perlu dipanggil
 * 
 * function expression akan tereksekusi otomatis jika expressionnya
 * diikuti dengan ()
 * 
 * kita tidak dapat melakukan self-invoke sebuah deklarasi function
 * 
 * kita dapat menambahkan parentheses disekitar function untuk
 * mengindikasikan bahwa itu adalah sebuah function expression
 */
(function(){
    console.log("hello!!"); //self-invoked result : hello!!
})();

/**
 * function diatas adalah anonymous self-invoking function 
 * (fungsi tanpa nama yang otomatis terpanggil)
 */

//function dapat digunakan sebagai sebuah nilai
/**
 * javascript function dapat digunakan sebagai sebuah nilai
 */
temp = myFunction(12, 3); //result : 36

/**
 * javascript function dapat digunakan juga pada expression
 */
temp = myFunction(13, 3) / 3; //result : 13

//function adalah object
/**
 * operator typeof di javascript akan mengembalikan "function" untuk
 * functions
 * 
 * tetapi, javascript function dapat dianggap juga sebagai objects
 * 
 * javascript function memiliki properties dan methods
 * 
 * property arguments.length akan mengembalikan argument yang diterima
 * ketika function dipanggil
 */

function myFunctionIsObjects(a, b, c){
    return arguments.length;
}

console.log(myFunctionIsObjects(12,3,4)); //result : 3

/**
 * method toString() akan mengembalikan function sebagai sebuah string
 */

console.log(myFunction.toString()); 
//result : function myFunction(a, b){return a * b;}

/**
 * sebuah function didefinisikan sebagai sebuah property dari sebuah
 * object, disebut sebuah method pada object
 * 
 * sebuah function yang didesign untuk membuat object baru, disebut
 * sebagai sebuah object constructor
 */

//arrow function
/**
 * arrow function mempersingkat syntax untuk menulis sebuah 
 * function expression
 * 
 * kita tidak membutuhkan keyword function, return function, dan
 * curly brackets
 */

const myFunctionArrowFunction = (a, b) => a / b;

/**
 * arrow function tidak mempunyai keyword this, mereka juga tidak cocok
 * untuk mendefinisikan object methods
 * 
 * arrow function tidak di-hoist, mereka harus didefinisikan sebelum
 * mereka digunakan 
 * 
 * menggunakan const lebih aman daripada menggunakan var, karena sebuah 
 * function expression selalu memiliki constant value
 * 
 * kita dapat hanya mengeluarkan return keyword dan curly brackets jika 
 * function itu hanya memiliki satu statement. Karena ini, adalah
 * kebiasaan yang bagus untuk tetap menambahkan mereka setiap
 * membuat arrow function
 */
const myFunctionArrowFunction2 = () => {return x * y};