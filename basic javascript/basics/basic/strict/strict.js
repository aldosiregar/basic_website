//javascript use strict
/**
 * "use strict" mengartikan bahwa kode javascript tersebut harus dieksekusi di "strict mode"
 */
console.log("strict javascript : ");

//the "use strict" directive
/**
 * "use strict" directive baru ada pada ECMAScript version 5
 * 
 * ini bukan termasuk statement, tetapi literal expression, diabaikan pada versi awal
 * dari javascript
 * 
 * tujuan dari adanya "use strict" adalah untuk mengindikasikan bahwa kode tersebut
 * harus dieksekusi di "strict mode"
 * 
 * semua modern browser mensupport "use strict" kecuali internet explorer 9 atau dibawahnya
 * 
 * ps :
 * kita dapat menggunakan mode strict di program kita, ini membantu kita menulis kode yang rapi,
 * seperti mencegah kita dari menggunakan variable yang tidak terdeklarasi 
 * 
 * "use strict" hanyalah sebuah string, jadi IE 9 tidak akan memberikan error bahkan jika
 * browsernya tidak mengerti itu apa
 */

//mendeklarasikan strict mode
/**
 * strict mode dideklarasikan dengan menambahkan "use strict"; pada bagian awal script atau function
 * 
 * mendeklarasikannya pada awal script, dia akan memiliki global scope (semua kode pada script 
 * akan tereksekusi di strict mode)
 */
x = 13; //tidak akan ada error
rundowned();

function rundowned(){
    "use strict";
    try{
        y = 20;
    }
    catch(err){
        console.log(err);
    }
}

//"use strict"; syntax
/**
 * syntax untuk mendeklarasikan strict mode, sudah didesign untuk compatible dengan versi lama
 * dari javascript
 * 
 * compiling sebuah numeric literals (4 + 5;) atau string literals ("john";) pada program javascript
 * tidak akan memberikan efek samping, itu biasanya dicompile ke non existing variable dan mati sendiri
 * 
 * jadi, "use strict"; hanya penting pada compiler baru yang "mengerti" makna didalamnya   
 */

//kenapa strict mode?
/**
 * strict mode memudahkan kita untuk menulis kode javascript yang "aman"
 * 
 * strict mode merubah javascript dari yang sebelumnya menerima "bad syntax" menjadi
 * error sesungguhnya
 * 
 * sebagai contoh, pada javascript normal, kesalahan tulis pada nama variable akan membuat
 * global variable baru. pada strict mode, akan terlempar sebuah error, membuatnya mustahil
 * untuk tidak sengaja membuat global variable
 * 
 * pada javascript normal, developer tidak akan menerima error feedback ketika menulis nilai
 * pada non writeable properties
 * 
 * pada strict mode, setiap assignment ke non writeable properties, sebuah gette-only properties,
 * sebuah properties yang tidak ada, sebuah non-existing variable, atau sebuah non-existing 
 * object, akan melemparkan error
 */

//yang tidak diperbolehkan pada strict
/**
 * beberapa hal yang tidak diperbolehkan pada strict mode adalah :
 * 
 * menggunakan variable tanpa mendeklarasikannya
 * "use strict";
 * x = 20;
 * 
 * object juga merupakan variable
 * "use strict";
 * x = {p1:10, p2:20};
 * 
 * menghapus sebuah variable atau object
 * "use strict";
 * let x = 3.14;
 * delete x;
 * 
 * menghapus function 
 * "use strict";
 * function (a, b) {return a + b;}
 * delete x;
 * 
 * menduplikasi nama parameter 
 * "use strict";
 * function (a,a) {};
 * 
 * octal numeric literals
 * "use strict";
 * let x = 010;
 * 
 * octal escape character
 * "use strict";
 * let x = "\010";
 * 
 * menulis read-only properties
 * "use strict";
 * const obj = {};
 * Object.defineProperty(obj, "x", {value:0, writeable:false});
 * obj.x = 3.14
 * 
 * menulis get-only property
 * "use strict";
 * const obj = {get x() {return 0}};
 * obj.x = 20;
 * 
 * menghapus undeleteable property
 * "use strict";
 * delete Object.prototype;
 * 
 * kata eval tidak dapat digunakan sebagai nama variable
 * "use strict";
 * let eval = 20;
 * 
 * kata arguments tidak dapat digunakan sebagai nama variable
 * "use strict";
 * let arguments = 30;
 * 
 * with statement tidak diperbolehakan
 * "use strict";
 * with (math) {x = cos(2)}
 * 
 * 
 * untuk masalah keamanan, eval tidak diperbolehkan untuk membuat variable
 * di scope dimana ia dipanggil
 * 
 * pada strict mode, variable tidak dapat dipakai sebelum ia dideklarasikan
 * "use strict";
 * eval ("x = 2");
 * alert(x);
 * 
 * eval() tidak dapat mendeklarasikan variable menggunakan var keyword
 * "use strict";
 * eval("var x = 2");
 * alert(x);
 * 
 * eval() tidak dapat mendeklarasikan variable menggunakan let keyword
 * "use strict";
 * eval("let x = 3");
 * alert(x);
 * 
 * 
 * this keyword bekerja berbeda pada mode strict
 * 
 * this keyword merujuk pada object yang memanggil function
 * 
 * jika object tidak dispecified, function di strict mode akan mengembalikan undefined
 * dan function di normal mode akan mengembalikan global object (window)
 * 
 * "use strict";
 * function myFunction(){
 *  alert (this); //akan mengalert "undefined"
 * }
 * myFunction();
 */

//future proof
/**
 * keyword yang disimpan untuk versi selanjutnya dari javascript tidak dapat
 * digunakan sebagai nama variable di strict mode
 * 
 * mereka adalah :
 *  1. implements
 *  2. interface
 *  3. let
 *  4. package
 *  5. private
 *  6. protected
 *  7. public
 *  8. static
 *  9. yield
 */
function testing(){
    "use strict";
    try{
        let public = 0;
    }
    catch(err){
        console.log(err);
    }
}

testing();

//peringatan
/**
 * "use strict" directive hanya dianggap pada awal dari script atau function
 */