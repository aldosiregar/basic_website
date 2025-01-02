//javascript promises
/**
 * "i promise a result"
 * 
 * "producing code" adalah kode yang akan berjalan selang beberapa waktu
 * 
 * "consuming code" adalah kode yang harus menunggu untuk mendapatkan hasil
 * 
 * promise adalah sebuah object yang menghubungkan producing code dan consuming 
 * code
 */

//javascript promise object
/**
 * sebuah promise mengandung baik producing code dan memanggil consuming code
 */
let myPromise = new Promise(function(myResolve, myReject){
    // "producing code" (akan berjalan nanti)
    myResolve(); //when success
    myReject(); //when failed
});

// "consuming code" (harus menunggu untuk sebuah fulfilled promise)
myPromise.then(
    function(value) {/** ketika kode berhasil */},
    function(error) {/** ketika kode gagal */}
)

/**
 * ketika producing code mendapatkan hasil, ia harus memanggil satu dari dua 
 * callbacks
 * 
 * when         call
 * Success      myResolve(result value)
 * Error        myReject(error object)
 */

//promise object properties 
/**
 * sebuah javascript promise object dapat menjadi
 * 
 * - pending
 * - fulfilled
 * - rejected
 * 
 * promise object mendukung dua properties : state dan result
 * 
 * ketika sebuah promise object sedang "pending" (working), hasilnya masih 
 * undefined
 * 
 * ketika sebuah promise object sudah "fulfilled", hasilnya adalah sebuah 
 * value
 * 
 * ketika sebuah promise object di "rejected", hasilnya adalah sebuah error
 * object 
 * 
 * myPromise.state          myPromise.result
 * "pending"                undefined
 * "fulfilled"              a result value
 * "rejected"               an error object
 * 
 * note : 
 * kita tidak dapat mengakses promise propertuies state dan result
 * 
 * kita harys menggunakan sebuah promise method untuk meng-handle promises
 */

//promise : how to
/**
 * begini cara menggunakan sebuah promise
 */
myPromise = new Promise(function(resolve, reject) {
    resolve();
    reject();
});

myPromise.then(
    function (value) { /**code jika berhasil */ },
    function (error) { /** code jika gagal */ }
);

/**
 * Promise.then() mengambil dua arguments, sebuah callback untuk success 
 * dan satunya untuk failure
 * 
 * keduanya bersifat opsional, jadi kita dapt menambahkan sebuah callback
 * untuk succes atau failure saja
 * 
 * contoh : 
 * function myDisplayer(some){
 *  document.getElementById("demo").innerHTML = some;
 * }
 * 
 * let myPromise = new Promise(function(resolve, reject){
 *  let x = 0;
 * 
 *  //producing code, ini akan memakan waktu
 *  if (x == 0){
 *      resolve("OK");
 *  } else {
 *      myReject("error"); 
 *  }
 * });
 * 
 * myPromise.then(
 *  function(value) { myDisplayer(value) },
 *  function(errir) { myDisplayer(error) }
 * );
 */

//javascript Promise example
/**
 * untuk mendemonstrasikan penggunaan Promise, kita akan menggunakan contoh
 * callback dari chapter sebelumnya
 * 
 * - menunggu sebuah Timeout
 * - menunggu sebuah file
 */

//menunggu sebuah Timeout
/** contoh menggunakan callback */
setTimeout(function () { myFunction("cok"); }, 3000);

function myFunction(value) {
    document.getElementById("demo").innerHTML = value;
}

/** contoh menggunakan Promise */
let promises = new Promise(function(resolve, reject){
    setTimeout( function() { resolve("hancoook"); }, 5000 );
});

promises.then(function(value) {
    document.getElementById("demo").innerHTML = value;
});

//menunggu sebuah file
/** contoh menggunakan callback */
function getFile(callback){
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");
    req.onload = function() {
        if(req.status == 200){
            callback(req.responseText);
        } else {
            callback("Error: " + req.status);
        }
    }
    req.send();
}

getFile(myFunction);

/** contoh menggunakan promise */
let promises2 = new Promise(function(resolve, reject){
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");
    req.onload = function() {
        if(req.status == 200){
            resolve(req.response);
        } else {
            reject("file not found");
        }
    };

    req.send();
});

promises2.then(
    function(value) { myFunction(value); },
    function(error) { myFunction(error); }
);