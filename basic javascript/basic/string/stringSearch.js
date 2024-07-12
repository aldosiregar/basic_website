//javascript string search
console.log("string search : ");

//javascript string indexOf()
/**
 * method indexOf() mengembalikan index (position) dari first occurance dari string yang
 * ditemukan, atau mengembalikan -1 jika stringnya tidak ditemukan 
 * 
 * parameter kedua dari method ini menentukan dimulai dari index berapa pencariannya dimulai
 */
let text = "jaka sembung bawa golok";
console.log(text.indexOf("sembung"));

//javascript string lastIndexOf()
/**
 * method lastIndexOf() adalah kebalikan dari indexOf(), tetapi pencarian stringnya
 * dimulai dari belakang (bagian paling akhir dari string tersebut)
 */
console.log(text.lastIndexOf("bawa"));

//javascript string search()
/**
 * method search() mencari string dari sebuah string (atau regular expression), dan mengembalikan
 * posisi matchnya
 */
console.log(text.search(/aka/));

/**
 * walau terlihat sama, search() dan indexOf() memiliki perbedaan : 
 *  1. search() tidak bisa menentukan awal posisi pencarian, tidak seperti indexOf()
 *  2. indexOf() tidak bisa memproses RegEx, tidak seperti search()
 */

//javascript string match()
/**
 * method match() mengembalikan array yang berisi hasil dari matching string dengan string 
 * (atau regular expression)
 */
console.log(text.match(/a/));
console.log(text.match(/a/g));

/**
 * jika pada regexnya tidak diberikan modifier global (g), match() hanya akan mengembalikan 
 * posisi pertama dimana terjadi match pada string tersebut
 */

//javascript string matchAll()
/**
 * method matchAll() mengembalikan iterator yang berisi hasil match dari string dengan string
 * (atau regular expression)
 * 
 * jika menggunakan regex, maka harus disertakan modifier global atau akan terjadi TypeError
 */
console.log(text.matchAll(/a/g));

//javascript string includes()
/**
 * method includes() akan mengembalikan true jika string memiliki suatu value yang match
 * 
 * jika tidak maka akan mengembalikan nilai false
 * 
 * parameter keduanya juga menentukan akan dimulai pencarian dari index berapa
 */
console.log(text.includes("sembung"));

//javascript string startsWith()
/**
 * method startWith() akan mengembalikan true jika string dimulai dengna nilai tertentu
 * 
 * jika tidak maka akan bernilai false
 * 
 * parameter keduanya juga menentukan akan dimulai dari index keberapa pencariannya dimulai 
 */
console.log(text.startsWith("jaka"));

//javascript string endsWith()
/**
 * mathod endsWith() mirip dengan startsWith(), bedanya pencarian string dilakukan 
 * untuk mencari apakah string tertentu berakhir dengan suatu nilai atau tidak
 * 
 * parameter keduanya menentukan sampai index keberapa akan dilakukan pencariannya
 */
console.log(text.endsWith("golok"));