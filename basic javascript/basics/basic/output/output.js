/**
 * javascript dapat menampilkan data dengan beberapa cara
 *  1. mengisi ke dalam elemen html menggunakan innerHTML
 *  2. menampilkan ke output html menggunakan document.write()
 *  3. menampilkan ke dalama alert box menggunakan window.alert()
 *  4. menampilkan ke browser console log menggunakan console.log()
 */

//innerHTML
/**
 * untuk mengakses elemen html, javacript dapat menggunakan method document.getElementById()
 * atribut id define elemen htmlnya, dan property innerHTML define kontent html
 * 
 * mengubah properti innerHTML dari elemen html merupakan cara yang sering digunakan
 * dalam menampilkan data di html
 */
document.getElementById("inner").innerHTML = 15 + 20;

//document.write
/**
 * untuk kebutuhan testing, lebih cocok menggunakan document.write()
 * 
 * menggunakan document.write() setelah semua dokumen html termuat 
 * akan menghapus semua dokumen html yang telah termuat
 * 
 *  document.write() sebaiknya hanya digunakan dalam proses testing saja
 */
function rewriteAll(){
    document.write(10 + 20);
}

//window.alert()
/**
 * kita bisa menggunakan window.alert() untuk menampilkan data
 * 
 * kita dapat melewati keyword window
 * dalam javascript, objek window termasuk dalam objek global scope
 * artinya, semua variabel, properti, dan method secara default berada dalam objek window
 * ini artinya menentukan keyword window bersifat opsional 
 */
alert("alert box : opsional");

//console.log()
/**
 * dalam proses debug, kita bisa menggunakan method console.log() untuk menampilkan data
 */
console.log("semua proses berjalan dengan baik");

//javascript print
/**
 * javascript tidak memiliki objek print maupun method print
 * 
 * kita tidak bisa mengakses output device dari javascript
 * 
 * namun terdapat pengecualian dimana kita bisa menggunakan method window.print() di browser 
 * untuk print konten yang ada di window saat ini
 */
function printContent(){
    window.print();
}