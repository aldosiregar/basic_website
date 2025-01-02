//ascynchronous javascript
/**
 * "i will finish later"
 * 
 * function berjalan secara parallel dengan function lain disebut sebagai 
 * asynchronous, contohnya adalah javascript setTimeout()
 */

//asynchronous javascript
/**
 * pada contoh sebelumnya, ini terlalu disederhanakan
 * 
 * tujuan dari contoh sebelumnya adalah untuk mendemonstrasikan syntax dari
 * callback functions
 */
function myDisplayer(something){
    document.getElementById("demo").innerHTML = something;
}

function myCalculator(a, b, myCallback){
    myCallback(a + b);
}

myCalculator(10, 5, myDisplayer);

/**
 * pada contoh diatas, myDisplayer adalah nama dari sebuah function
 * 
 * ia diarahkan ke myCalculator() sebagai sebuah arguments
 * 
 * note : 
 * pada kasus dunia nyata, callbacks biasanya digunakan dengan function 
 * asynchronous, contohnya pada javascript setTimeout()
 */

//menunggu sebuah timeout
/**
 * ketika menggunakan javascript function setTimeout(), kita dapat menentukan
 * callback function yang akan dieksekusi pada time-out
 */
setTimeout(myFunctions, 3000);

function myFunctions(){
    document.getElementById("demo").innerHTML = "pantek";
}

/**
 * pada contoh diatas, myFunctions digunakan sebagai sebuah callback
 * 
 * myFunction di passed ke setTimeout() sebagai sebuah argument
 * 
 * 3000 adalah angka dari milliseconds sebelum time-out, jadi myFunctions() 
 * akan dipanggil setelah 3 detik
 * 
 * note : 
 * ketika kita meng-pass sebuah function sebagai argument, ingat untuk tidak 
 * menggunakan parenthesis
 * 
 * benar : setTimeout(myFunction, 3000);
 * salah : setTimeout(myFunction(), 3000);
 * 
 * kadang, daripada meng-passing nama dari function sebagai sebuah argument 
 * untuk function lain, kita bisa meng-pass seluruh fungsinya
 */
setTimeout(
    function() {
        document.getElementById("demo").innerHTML = "pantek kau";
    }, 5000
);

/**
 * pada contoh diatas, anonymous function digunakan sebagai sebuah callback
 * untuk function setTimeout()
 * 
 * 5000 adalah angka dari millisecond sebelum time-out, jadi anonymous 
 * function diatas akan dipanggil setelah 5 detik
 */

//menunggu intervals
/**
 * ketika menggunakan javascript function setInterval(), kita dapat menentukan
 * sebuah callback function untuk dieksekusi disetiap interval
 */
setInterval(function() {
    let d = new Date();
    document.getElementById("hours").innerHTML = 
    d.getHours() + " : " + 
    d.getMinutes() + " : " +
    d.getSeconds() + " : "; 
}, 1000);

/**
 * pada contoh diatas, myFunction digunakan sebagai sebuah callback
 * 
 * myFunction dipassed ke setInterval() sebagai sebuah argument
 * 
 * 1000 adalah angka dari milliseconds antar intervals, jadi myFunction()
 * akan dipanggil setiap detik
 */

//callback alternatives
/**
 * dengan asynchronous programming, program javascript dapat mengerjakan 
 * long-running task, dan melanjutkan running dari task lain secara parallel
 * 
 * tetapi, asynchronous programmes sulit untuk ditulis dan sulit untuk di debug
 * 
 * karena ini, sebagian besar modern asynchronous javascript methods tidak 
 * menggunakan callbacks, tetapi, di javascript, asynchronous programming
 * diselesaikan dengan promise
 * 
 * note :
 * kita akan mempelajari promises di chapter selanjutnya
 */