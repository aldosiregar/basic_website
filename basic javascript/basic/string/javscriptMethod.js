//basic string methods
/**
 * javascript string adalah primitive dan immutable, semua string method
 * menghasilkan string baru tanpa mengubah string originalnya
 */

//javascript string length
/**
 * property length mengembalikan panjang dari sebuah string
 */
let a = "jaka skill";
console.log(a);

//extracting string characters
/**
 * ada 4 methods untuk mengambil string characters
 *  1. at(position) methods
 *  2. charAt(position) methods
 *  3. charCodeAt(position) methods
 *  4. menggunakan property access [] seperti di arrays
 */

//javascript string charAt()
/**
 * method charAt() mengembalikan character di posisi yang ditunjuk index (position) di string
 */
console.log(a.charAt(2)); //ambil character kedua

//javascript string charCodeAt()
/**
 * method charCodeAt() mengembalikan kode dari character di index tertentu pada string
 * 
 * method ini mengembalikan UTF-16 code (sebuah interger diantara 0 sampai 65535)
 */
console.log(a.charCodeAt(2)); //ambil kode UTF-16 dari character kedua

//javascript string at()
/**
 * ES2022 mengenalkan string method at()
 */
console.log(a.at(2));
