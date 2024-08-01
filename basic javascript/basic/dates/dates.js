//javascript dates
console.log("javascript dates : ");

/**
 * javascript Date objects membuat kita dapat bekerja dengan waktu
 */
let dates = new Date();
dates = new Date("2023-03-05");

/**
 * note : 
 * Objects Date bentuknya static, "jam" pada object tersebut tidaklah "bekerja"
 * 
 * jam pada komputer bekerja, sedangkan Object Data tidak
 */

//javascript Date output
/**
 * secara default, javascript akan menggunakan time zone dari browser dan menunjukkan 
 * tanggal sebagai full text string
 * 
 * Thu Jul 25 2024 19:34:37 GMT+0700 (Western Indonesia Time)
 */

//membuat Date Object
/**
 * data object dibuat dengan menggunakan constructor new Date()
 * 
 * ada 9 cara untuk membuat object date baru
 * `1. new Date()
 *  2. new Date(date string)
 * 
 *  3. new Date(year,month)
 *  4. new Date(year,month,day)
 *  5. new Date(year,month,day,hours)
 *  6. new Date(year,month,day,hours,minutes)
 *  7. new Date(year,month,day,hours,minutes,seconds)
 *  8. new Date(year,month,day,hours,minutes,seconds,ms)
 * 
 *  9. new Date(milliseconds)
 */

//javascript new Date()
/**
 * new Date() membuat object date dengan waktu dan tanggal sekarang
 */
dates = new Date();
console.log(dates);

//new Date(date string)
/**
 * new Date(date string) akan membuat date object dari date string
 */
dates = new Date("2025-05-15");
console.log(dates);
dates = new Date("October 15, 2020 11:20:15");
console.log(dates);

//new Date(year, month, ...)
/**
 * new Date(year, month, ...) membuat date object dengan spesifikasi tanggal dan waktu
 * 
 * 7 angka yang di spesifikkan adalah tahun, bulan, hari, jam, menit, detik, dan milisecond (sesuai urutan)
 */
dates = new Date(2020, 10, 5, 11, 32, 10, 0);
console.log(dates);

/**
 * note : 
 * javascript menghitung bulan dari 0 sampai 11
 * 
 * january = 0
 * desember = 11
 * 
 * memberikan angka lebih dari 11 tidak akan memberikan error tetapi akan ter-overflow ke 
 * tahun selanjutnya\
 * 
 * hal ini juga berlaku untuk hari
 */

/**
 * note : 
 * ktia tak bisa hanya menaruh parameter tahun tanpa bulan, karena akan dianggap sebagai 
 * microsecond
 */

//previous century
/**
 * satu dan dua digit pada parameter tahun akan dianggap sebagai tahun 19xx
 */
dates = new Date(19, 5, 21);
console.log(dates);

//javascript menyimpan Dates sebagai microsecond
/**
 * javascript menyimpan dates sebagai jumlah milisecond semenjak 01 januari, 1970
 * 
 * Zero time is January 01, 1970 00:00:00 UTC.
 * 
 * satu hari (24 jam) adalah 86 400 000 miliseconds
 * 
 * waktu sekarang : 1722060774475 milisecond sejak januari 01, 1970
 */

//new Date(milliseconds)
/**
 * new Date(milliseconds) membuat object Date baru sebagai milliseconds ditambahkan zero times
 */
dates = new Date(100000000000);
console.log(dates);

dates = new Date(-100000000000);
console.log(dates);