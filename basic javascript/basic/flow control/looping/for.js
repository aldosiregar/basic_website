//javascript for loop
/**
 * loop dapat mengeksekusi code selama beberapa kali
 */
console.log("for loop");

//javascript loop
/**
 * loop berguna jika kita ingin menjalankan kode yang sama berulang kali, dan setiap perulangan
 * mengeluarkan hasil yang berbeda
 * 
 * biasanya ini digunakan ketika bekerja dengan array
 */

//beberapa jenis loop
/**
 * javascript mendukung beberapa jenis loop
 *  1. for - perulangan pada blok kode selama beberapa kali
 *  2. for/in - perulangan pada semua properties pada object
 *  3. for/of - perulangan pada nilai yang ada pada iterable object
 *  4. while - perulangan pada blok kode ketika kondisi yang ditentukan masih benar
 *  5. do/while - juga perulangan pada block ketika kondisi yang ditentukan masih benar
 *                tapi setidaknya blok kode dieksekusi sekali
 */

//for loop
/**
 * for statement membuat loop dengan 3 optional expression
 * 
 * for(expression1; expression2; expression3){
 *  /blok kode
 * }
 * 
 *  1. expression1 dieksekusi (satu kali) sebelum pengeksekusian blok kode
 *  2. expression2 mendefinisikan kondisi untuk mengeksekusi kode
 *  3. expression3 dieksekusi (setiap kali) setelah kode dieksekusi 
 */
for(let i = 0; i < 5; i++){
    console.log(i);
}
/**
 * pada kode diatas, kita bisa membaca
 * 
 *  1. expression1 menentukan variable sebelum loop dimulai (let i = 0)
 *  2. expression2 mendefinisikan kondisi for loop untuk tereksekusi (i harus lebih kecil dari 5)
 *  3. expression3 menambahkan value i (i++) setiap kali blok kode berhasil dieksekusi
 */

//expression 1
/**
 * biasanya kita akan menggunakan expression 1 untuk menginisiasi variable yang akan digunakan
 * pada loop (let i = 0)
 * 
 * namun tidak selalu, javascript tidak peduli, expression 1 bersifat opsional
 * 
 * kita dapat menginisiasi banyak value di expression 1 (dipisahkan koma)
 */
let text = "";
for(let i = 0, range = 5; i < range; i++){
    text += i + " ";
}
console.log(text);
/**
 * kita bisa juga tidak memasukkan expression 1 (seperti ketika nilainya telah kita set sebelum
 * proses loop dimulai)
 */
let forIterable = 0;
let forRange = 10;
let forSum = 0;
for(; forIterable < forRange; forIterable++){
    forSum += forIterable;
}
console.log("sum : " + forSum + " in " + (forIterable - 1) + " iteration");

//expression 2
/**
 * biasanya expression 2 digunakan untuk memeriksa kodisi dari variable awal
 * 
 * ini juga bukan masalah, javascript tidak peduli, expression 2 juga bersifat opsional
 * 
 * jika expresi 2 benar, maka loop akan tetap berjalan, dan jika salah maka loop akan berhenti
 * 
 * note : 
 * jika kita mengeluarkan expression 2, kita harus menambahkan break didalam loop, atau
 * kode tidak akan pernah berhenti, ini akan memberhentikan browsermu
 */

//expression 3
/**
 * biasanya expression 3 meng-increment nilai dari intial variable
 * 
 * ini bukan masalah, javascript tidak peduli, karena itu expression 3 juga opsional
 * 
 * expression 3 dapat melakukan apapun seperti negative increment (-1), positive increment (i += 15),
 * atau yang lainnya
 * 
 * expression 3 juga dapat dikeluarkan (seperti dengan kita melakukan incrementnya secara manual
 * di dalam loop)
 */

//loop scope
/**
 * jika kita menggunakan var didalam loop padahal sudah ada variable var diluar loop, 
 * maka variable tersebut akan mengikuti nilai dari var didalam loop tersebut
 * 
 * sedangkan jika kita menggunakan let didalam loop dan sudah memiliki varibale let,
 * maka variable let diluar tidak akan terpengaruh dengan perubahan yang ada didalam
 * loop karena memiliki scope yang berbeda
 */

