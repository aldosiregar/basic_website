//javascript errors
console.log("errors javascript : ");

//throw, dan try...catch...finally
/**
 * try statement defines code block yang ingin dijalankan (untuk dicoba)
 * 
 * catch statement defines code block untuk menangani berbagai error
 * 
 * finally statement defines code block yang menjalankan kode apapun hasilnya
 * 
 * throw statement defines custom errors
 */

//errors will happen!
/**
 * ketika mengeksekusi kode javascript, error berbeda bisa terjadi
 * 
 * errors dapat berupa sesuatu yang disebabkan oleh programmer, errors karena kesalahan input,
 * dan sesuatu yang tidak terduga
 * 
 * contohnya kita salah menulis alert sebagai addalert untuk sengaja memproduksi error
 */
try{
    addlert(back);
}
catch(err){
    console.log(err);
}

//javascript try and catch
/**
 * try statement memperbolehkan kita untuk membuat blok kode yang akan di tes jika terdapat errors
 * ketika sedang dieksekusi
 * 
 * catch statement memperbolehkan kita untuk membuat blok kode untuk dieksekusijika terjadi errors
 * pada blok try
 * 
 * javascript try dan catch datangnya berpasangan
 * 
 * try{
 *  /blok yang ingin dicoba
 * }
 * catch(errors){
 *  /blok kode yang menangani error 
 * }
 */

//javascript throws errors
/**
 * ketika errors terjadi, javascript biasanya akan berhenti dan memberikan error message
 * 
 * bahasa teknisnya : javascript akan melempar exception (throw an error)
 * 
 * javascript akan memberikan error object dengan dua properties : name dan message
 */

//throw statement
/**
 * throw statement memperbolehkan kita untuk membuat custom error
 * 
 * kita dapat melempar sebuah exception (throw an error)
 * 
 * exception dapat berupa javascript String, Number, Boolean, atau Object
 * 
 * throw "too big";
 * throw 500;
 * 
 * jika kita menggunakan throw bersama dengan try dan catch, kita dapat mengatur alur
 * dan membuat custom error message
 */

//finally statement 
/**
 * finally statement memperbolehkan kita untuk mengeksekusi kode, setelah try dan catch,
 * apapun hasilnya
 * 
 * try{
 *  /blok kode untuk dicoba
 * }
 * catch(error){
 *  /blok kode untuk menangani error
 * }
 * finally{
 *  /blok kode yang akan dieksekusi apapun hasil try / catch nya
 * }
 */
try{
    console.blo("mon");
}
catch(err){
    console.log(err);
}
finally{
    console.log("errors catched");
}

//error object
/**
 * javascript memiliki built in error object yang menyediakan informasi error
 * ketika terjadi sebuah errors
 * 
 * error object menyediakan dua properties : name dan message
 * 
 * Property	    Description
 * name	        Sets or returns an error name
 * 
 * message	    Sets or returns an error message (a string)
 */

//error name values
/**
 * enam nilai berbeda dapat dikembalikan pada name error property
 * 
 * Error Name	    Description
 * EvalError	    An error has occurred in the eval() function
 * 
 * RangeError	    A number "out of range" has occurred
 * 
 * ReferenceError	An illegal reference has occurred
 * 
 * SyntaxError	    A syntax error has occurred
 * 
 * TypeError	    A type error has occurred
 * 
 * URIError	        An error in encodeURI() has occurred
 */

//eval error
/**
 * EvalError berarti error pada function eval()
 * 
 * ps :
 * versi terbaru dari javascript tidak melempar EvalError, gunakan SyntaxError
 */

//range error
/**
 * RangeError dilempar jika kita menggunakan angka yang diluar dari range 
 * legal value
 * 
 * contohnya : kita tidak dapat mengatur angka ketepatan menjadi 500
 */
let numErr = 1;
try{
    numErr.toPrecision(500);
}
catch(err){
    console.log(err);
}

//refrence error
/**
 * RefrenceError akan terlempar jika kita gunakan (refrence) belum
 * dideklarasi
 */
try{
    console.log(kloo);
}
catch(err){
    console.log(err);
}

//syntax error
/**
 * SyntaxError akan terlempar jika kita mencoba mengevaluasi kode dengan syntax error
 */
try{
    eval("alert('hello)");
}
catch(err){
    console.log(err);
}

//type error
/**
 * TypeError akan terlempar jika sebuah operand atau argument tidak sesuai dengan tipe yang
 * diharapkan pada operator maupun function
 */
try{
    numErr.toUpperCase();
}
catch(err){
    console.log(err);
}

//URI (Uniform Resource Identifier) error
/**
 * URIError terlempar jika kita menggunakan illegal character di URI function
 */
try{
    decodeURI("%%%");
}
catch(err){
    console.log(err);
}

//non-standard error object properties
/**
 * mozila dan microsoft define beberapa non-standard error object properties
 * 
 * fileName (Mozilla)
 * lineNumber (Mozilla)
 * columnNumber (Mozilla)
 * stack (Mozilla)
 * description (Microsoft)
 * number (Microsoft)
 * 
 * jangan gunakan properties ini di public websites, mereka tidak bekerja di semua browser
 *  */ 