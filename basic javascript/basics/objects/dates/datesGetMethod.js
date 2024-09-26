console.log("dates get method : ");

//new Date constructor
/**
 * dalam javascript, data objects dibuat dengan new Date()
 * 
 * new Date() mengembalikan Date Object dengan tanggal dan waktu sekarang
 */
let datesGetMethod = new Date();
console.log(datesGetMethod);

//Date get method
/**
 * Method	        Description
 * getFullYear()	    Get year as a four digit number (yyyy)
 * 
 * getMonth()	        Get month as a number (0-11)
 * 
 * getDate()	        Get day as a number (1-31)
 * 
 * getDay()	            Get weekday as a number (0-6)
 * 
 * getHours()	        Get hour (0-23)
 * 
 * getMinutes()	        Get minute (0-59)
 * 
 * getSeconds()	        Get second (0-59)
 * 
 * getMilliseconds()	Get millisecond (0-999)
 * 
 * getTime()	        Get time (milliseconds since January 1, 1970)
 * 
 * note : 
 * get methods diatas akan mengembalikan waktu sesuai dengan local time 
 * 
 * Universal Time (UTC)
 * 
 * note : 
 * get Method diatas mengembalikan informasi dari date objects yang sedang dikerjakan
 * 
 * pada date object, waktunya static, "jam" nya tidak benar-benar "berjalan"
 * 
 * waktu pada Date object tidak sama dengan waktu pada saat itu
 */

//getFullYear() method
/**
 * method ini mengembalikan tahun dari Date sebagai angka 4 digit
 */
console.log(datesGetMethod.getFullYear());

/**
 * peringatan : 
 * javascript lama mungkin menggunakan method getYear()
 * 
 * getYear() akan mengembalikan tahun dalam bentuk 2 digit
 * 
 * lagipula ini sudah usang, jadi jangan digunakan
 */

//getMonth() method
/**
 * method ini mengembalikan bulan dari object Date dan berbentuk angka
 * dari 0 - 11
 * 
 * cukup kurangi bulan seharusnya dengan 1, seperti januari yang
 * harusnya bulan pertama akan dikembalikan sebagai 0
 */
console.log(datesGetMethod.getMonth());

/**
 * kita juga bisa menggunakan array untuk mengartikan angka yang dikembalikan oleh
 * method ini, dengan hasil dari method ini dijadikan sebagai index dari 
 * array yang berisikan nama-nama bulan
 */

//getDate() method
/**
 * method ini akan mengembalikan tanggal dari object date yang sedang dimanipulasi
 */
console.log(datesGetMethod.getDate());

//getHours() method
/**
 * method ini mengembalikan jam dari object Date yang sedang kita kerjakan
 */
console.log(datesGetMethod.getHours());

//getMinutes() method
/**
 * method ini mengembalikan menit dari object date yang sedang kita kerjakan
 */
console.log(datesGetMethod.getMinutes());

//getSeconds() method
/**
 * method ini mengembalikan detik dari object date yang sedang kita kerjakan
 */
console.log(datesGetMethod.getSeconds());

//getMilliseconds() method
/**
 * method ini mengembalikan milisecond dari object date yang sedang kita kerjakan
 */
console.log(datesGetMethod.getMilliseconds());

//getDay() method
/**
 * method ini mengembalikan hari dalam seminggu pada tanggal sebagai angka (0 - 6)
 * 
 * note : 
 * pada javascript, hari pertama (0) adalah hari minggu
 * 
 * beberapa negara di dunia menganggap hari pertama sebagai hari senin
 */
console.log(datesGetMethod.getDay());

//getTime() method
/**
 * method ini mengembalikan banyaknya milliseconds sejak 1 january, 1970
 */
console.log((new Date("2015-06-15")).getTime());

//Date.now() method
/**
 * method ini mengembalikan banyaknya milliseconds sejak 1 january, 1970
 * 
 * waktu sekarang, bukan waktu yang ditentukan pada constructor Date
 */
console.log(Date.now());

/**
 * Date.now() adalah static method dari object Date
 * 
 * kita tidak dapat menggunakan method ini pada Date object yang sudah terbuat seperti
 * datesGetMethod.now()
 * 
 * bentuknya selalu Date.now()
 */

//UTC Date Get method
/**
 * Method	            Same As	            Description
 * getUTCDate()	        getDate()	        Returns the UTC date
 * 
 * getUTCFullYear()	    getFullYear()	    Returns the UTC year
 * 
 * getUTCMonth()	    getMonth()	        Returns the UTC month
 * 
 * getUTCDay()	        getDay()	        Returns the UTC day
 * 
 * getUTCHours()	    getHours()	        Returns the UTC hour
 * 
 * getUTCMinutes()	    getMinutes()	    Returns the UTC minutes
 * 
 * getUTCSeconds()	    getSeconds()	    Returns the UTC seconds
 * 
 * getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds
 */

/**
 * UTC method menggunakan UTC time (Coordinated Universal Time)
 * 
 * UTC time sama dengan GMT (Greenwhich mean time)
 * 
 * perbedaan antara local time dan UTC time dapat sampai 24 jam
 */

//getTimezoneOffset() method
/**
 * method ini mengembalikan perbedaan (dalam menit) antara local time dan UTC time
 */
console.log(datesGetMethod.getTimezoneOffset());