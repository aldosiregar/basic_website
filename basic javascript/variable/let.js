/**
 * keyword let dikenalkan pada ES6 (2015)
 * 
 * variabel yang di declare dengan let memiliki block scope 
 * (hanya bisa dipakai di block tempatnya dideklarasikan) 
 * 
 * variabel yang dideklarasikan dengan let 
 * harus dideklarasikan terlebih dahulu sebelum digunakan
 * 
 * variabel yang telah dideklarasikan dengan let tidak bisa 
 * dideklarasikan ulang di dalam scope yang sama
*/

//block scope
/**
 * sebelum ES6 (2015), javascript belum memiliki block scope
 * 
 * javascript memiliki global scope dan function scope
 * 
 * ES6 mengenalkan dua keyword javascript baru yaitu let dan const
 * 
 * kedua keyword ini menyediakan block code di javascript
 */
{
    let name = "jukri";
    document.getElementById("blockScope").innerHTML = name;
}
//tidak dapat dipakai diluar block

//global scope
/**
 * variabel yang dideklarasikan dengan var akan berada dalam global scope
 * 
 * variabel yang dideklarasikan dengan var tidak dapat dijadikan block scope
 */
{
    var alamat = "jalan mawar no. 351";
}
document.getElementById("globalScope").innerHTML = alamat;
//dapat digunakan diluar scope

//tidak bisa dideklarasikan kembali
/**
 * variabel yang dideklarasikan dengan let tidak dapat dideklarasikan kembali
 * 
 * kita tidak bisa dengan tidak sengaja mendeklarasikan kembali sebuah variabel dengan let
 * 
 * namun, variabel dengan keyword var dapat dideklarasikan kembali
 */
var naming = "john";
var naming = "sein";
document.getElementById("redeclareVariable").innerHTML = naming;

//redeclaring variable problem
/**
 * mendeklarasikan variabel menggunakan var juga dapat memberikan masalah
 * 
 * mendeklarasikan variabel di dalam block juga mendeklarasikan ulang variabel yang ada diluar block
 */
var naming = "shack";
{
    var naming = "dick";
}
document.getElementById("redeclareProblemVar").innerHTML = naming;

/**
 * mendeklarasikan ulang variabel menggunakan keyword let dapat menyelesaikan masalah ini
 * 
 * mendeklarasikan ulang variabel di dalam block tidak akan merubah nilai yang ada diluar block
 */
let nomorHp = 6282180467868;
{
    let nomorHp = 33724126;
}
document.getElementById("redeclareSolvedLet").innerHTML = nomorHp;

//perbedaan antara var, let, dan const
/**
 * 	Scope	Redeclare	Reassign	Hoisted	    Binds   this
 *  var	    No	        Yes	        Yes	        Yes	    Yes
 *  let	    Yes	        No	        Yes	        No	    No
 *  const	Yes	        No	        No	        No	    No
 */

//kelebihan let dan const dibanding var
/**
 * 1. let dan const memiliki block scope
 * 2. let dan const tidak bisa dideklarasikan kembali
 * 3. let dan const harus dideklarasikan sebelum digunakan
 * 4. let dan const tidak terikat dengan this
 * 5. let dan const tidak akan diangkat ke scope paling atas dalam proses interpreter (hoisted)
 */

//kekurangan
/**
 * 1. var tidak harus dideklarasikan terlebih dahulu
 * 2. var di hoisted
 * 3. var terikat dengan bind
 */

//browser support
/**
 * let dan const tidak di support untuk internet explorer 11 atau dibawahnya
 */