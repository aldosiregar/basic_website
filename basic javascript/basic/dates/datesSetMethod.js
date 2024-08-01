//Date method
/**
 * ketika Object Date dibuat, beberapa method memperbolehkan kita untuk memanipulasi data
 * yang ada
 * 
 * Date method membuat kita untuk mengambil dan mengatur tahun, bulan, hari, jam, menit, detik
 * , dan millisecond dari Object Date, menggunakan waktu local time ataupun UTC (universal, atau
 * GMT)
 */

console.log("date Set method : ");

/**
 * set Date method memungkinkan kita untuk mengatur nilai Date (tahun, bulan, hari, jam
 * , menit, detik, milliseconds) untuk objet Date
 */

//set Date method
/**
 * Method	            Description
 * setDate()	        Set the day as a number (1-31)
 * 
 * setFullYear()	    Set the year (optionally month and day)
 * 
 * setHours()	        Set the hour (0-23)
 * 
 * setMilliseconds()	Set the milliseconds (0-999)
 * 
 * setMinutes()	        Set the minutes (0-59)
 * 
 * setMonth()	        Set the month (0-11)
 * 
 * setSeconds()	        Set the seconds (0-59)
 * 
 * setTime()	        Set the time (milliseconds since January 1, 1970)
 */

//setFullYear() method
/**
 * method ini mengatur tahun dari Date object
 */
const datesSetMethod = new Date();
datesSetMethod.setFullYear(2018);
console.log(datesSetMethod);

/**
 * selain itu juga, ada opsi untuk mengatur bulan dan tanggal dari method ini
 */
datesSetMethod.setFullYear(2018, 6, 10);
console.log(datesSetMethod);

//setMonth() method
/**
 * method ini mengatur bulan dari Date objects (0 - 11)
 */
datesSetMethod.setMonth(2);
console.log(datesSetMethod);

//setDate() method
/**
 * method ini mengatur tanggal dari object Date (1-31)
 */
datesSetMethod.setDate(15);
console.log(datesSetMethod);

/**
 * setDate() juga dapat digunakan untuk menambahkan hari ke Date
 */
datesSetMethod.setDate(datesSetMethod.getDate() + 15);
console.log(datesSetMethod);

/**
 * jika tanggal yang ditambahkan lebih dari jumlah hari pada bulan itu, maka secara otomatis
 * ini akan diurus oleh object Date
 */

//setHours() method
/**
 * method ini mengatur jam dari object Date (0-23)
 */
datesSetMethod.setHours(22);
console.log(datesSetMethod);

//setMinutes() method
/**
 * method ini mengatur menit dari object Date (0-59)
 */
datesSetMethod.setMinutes(50);
console.log(datesSetMethod);

//setSeconds() method
/**
 * method ini mengatur detik dari object Date (0-59)
 */
datesSetMethod.setSeconds(30);
console.log(datesSetMethod);

//membandingkan tanggal
/**
 * Dates dapat dibandingkan
 */
const today = new Date();
const someday = new Date();
someday.setFullYear(2025, 1, 1);

if(someday > today){
    console.log("sekarang belum sampai 2025");
}
else if(someday < today){
    console.log("sekarang sudah sampai atau lebih dari 2025");
}

