console.log("boolean : ");

//boolean values
/**
 * seringnya dalam pemrograman, kita akan membutuhkan tipe data yang hanya berisi 2 data
 * seperti : 
 *  1. Yes / No
 *  2. On / Of
 *  3. True / False
 * 
 * untuk ini, javascript memiliki tipe data boolean, isinya hanya berupa true atau false
 */

//Boolean function
/**
 * kita dapat menggunakan function Boolean() untuk mencari tahu jika ekspresi (atau variable)
 * benar
 */
console.log(Boolean(9 > 5));

/**
 * atau bisa juga yang lebih mudah
 */
console.log(5 < 10);
console.log((4 > 7));

//komparasi dan kondisi
/**
 * tutorial komparasi sudah ada di bagian operators sebelumnya, tapi beberapa yang sering
 * dipakai dalam komparasi boolean adalah sebagai berikut
 * 
 * Operator	    Description	    Example
 * ==	        equal to	    if (day == "Monday")
 * 
 * >	        greater than	if (salary > 9000)
 * 
 * <	        less than	    if (age < 18)
 */

//semua yang memiliki "value" bernilai true
/**
 * 100
 * 
 * 3.14
 * 
 * -15
 * 
 * "Hello"
 * 
 * "false"
 * 
 * 7 + 1 + 3.14
 * 
 * semua nilai diatas akan bernilai benar karena memiliki nilai
 */

//semua yang tidak memiliki "value" bernilai false
/**
 * 0
 * 
 * -0
 * 
 * ""
 * 
 * variable only (x)
 * 
 * null
 * 
 * NaN
 * 
 * false
 * 
 * semua nilai diatas yang tidak memiliki nilai maupun NaN akan dianggap false
 */
let x = 0;
console.log(Boolean(x));

//javascript boolean sebagai object
/**
 * biasanya javascript boolean adalah primitive value yang dibuat dari literals
 */
x = false;

/**
 * tapi boolean bisa juga didefinisikan sebagai object dengan keyword new
 */
let y = new Boolean(false);

/**
 * jangan membuat boolean object
 * 
 * keyword new membuat kode lebih kompleks serta memperlambat waktu eksekusi
 * 
 * object boolean dapat memberikan hasil tidak terduga 
 */
//ketika menggunakan operator ==, x dan y itu sama
console.log(x == y);

//tetapi ketika menggunakan operator ===, x dan y tidaklah sama
console.log(x === y);

/**
 * membandingkan kedua object akan selalu bernilai salah
 */