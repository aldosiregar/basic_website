//javascript async
/**
 * "async dan await membuat promises lebih mudah untuk ditulis"
 * 
 * async membuat sebuah function mengembalikan sebuah promise
 * 
 * await membuat sebuah function menunggu untuk sebuah promise
 */

//async syntax
/**
 * keyword async sebelum sebuah function membuat function tersebut 
 * mengembalikan sebuah promise
 * 
 * contoh : 
 * async function myFunction(){
 *  return "hello";
 * }
 * 
 * sama dengan :
 * function myFunction(){
 *  return Promise.resolve("hello");
 * }
 * 
 * begini cara menggunakan sebuah promise
 * myFunction().then(
 *  function(value) { //code jika berhasil },
 *  function(value) { //code jika gagal }
 * );
 * 
 * contoh : 
 */
async function myFunction(){
    return "hello";
}

myFunction().then(
    function(value) { console.log(value); },
    function(error) { console.log(error); }
);

/**
 * atau bisa lebih sederhana, karena kita mengharapkan hanya normal value 
 * (response normal, bukan sebuah error)
 */
async function myFunction2() {
    return "hello2";
}

myFunction2.then(
    function(value) { console.log(value); }
);

//await syntax
/**
 * keyword await hanya dapat digunakan didalam sebuah async function
 * 
 * keyword await membuat sebuah function men-jeda eksekusi dan menunggu 
 * sebuah resolved promise sebelum melanjutkan
 * 
 * let value = await promise;
 */

/**
 * contoh :
 * 
 * basic syntax
 */
async function myDisplay(){
    let promises = new Promise(function(resolve, reject){
        resolve("yoi");
    });
    document.getElementById("demo").innerHTML = await promises;
}
     
myDisplay();

/**
 * kedua arguments (resolve dan reject) sudah pre-defined oleh javascript
 * 
 * kita tidak akan membuat mereka, tetapi memanggil mereka ketika executor 
 * function sudah siap
 * 
 * biasanya kita tidak memerlukan sebuah fungsi reject 
 * 
 * contoh tanpa reject :
 */
async function myDisplay2() {
    let promise = new Promise(function(resolve) {
        resolve("yeah");
    });
    document.getElementById("demo").innerHTML = await promise;
}

myDisplay2();

//menunggu sebuah timeout
async function myDisplay3() {
    let promise = new Promise(function(resolve){
        setTimeout(function() { resolve("timeout"); }, 3000);
    });

    document.getElementById("demo").innerHTML = await promise;
}

myDisplay3();

//menunggu sebuah file
async function getFile() {
    let promise = new Promise(function(resolve){
        let req = new XMLHttpRequest();
        req.open("GET", "mycar.html");
        req.onload = function(){
            if(req.status == 200){
                resolve(req.response);
            } else {
                resolve("file Not Found");
            }
        };

        req.send();
    });

    document.getElementById("demo").innerHTML = await promise;
}

getFile();