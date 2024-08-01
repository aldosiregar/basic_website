console.log("Date Format : ");

//javascript Date Input
/**
 * ada 3 tipe dari javascript Date input format
 * 
 * Type	        Example
 * ISO Date	    "2015-03-25" (The International Standard)
 * 
 * Short Date	"03/25/2015"
 * 
 * Long Date	"Mar 25 2015" or "25 Mar 2015"
 * 
 * format ISO mengikuti standard strict di javascript
 * 
 * format lain tidak akan terlalu terdefinisi dengan detil dan tergantung terhadap
 * browser
 */

//javascript Date output
/**
 * apapun formatnya, javascript akan (secara default) mengeluarkan output dates berupa
 * format full string text
 * 
 * Mon Jul 29 2024 14:34:46 GMT+0700 (Western Indonesia Time)
 */

//javascript ISO dates
/**
 * ISO 8601 adalah standar internasional dari reprensentasi tanggal dan waktu
 * 
 * syntax ISO 8601 (YYYY-MM-DD) juga merupakan format dates yang lebih diinginkan javascript
 */
let dateFormat = new Date("1920-10-21");
console.log(dateFormat);

/**
 * tanggal yang terkomputasi akan bergantung pada time zone kita
 * 
 * hasilnya bisa menjadi antara 20 atau 21 oktober
 */

//ISO Dates (Year-Month)
/**
 * ISO dates dapat ditulis dengan tahun dan bulan saja, tanpa menspesifikkan harinya (YYYY-MM)
 */
dateFormat = new Date("2010-05");

/**
 * tergantung dari timezonenya, bagian hari bisa menjadi 30 april atau 1 mei
 */

//ISO Dates Only (Year)
/**
 * selain itu, kita juga bisa hanya memberikan tahunnya saja
 */
dateFormat = new Date("2015");
console.log(dateFormat);

/**
 * hasilnya bisa menjadi antara 31 desember 2014 atau 1 januari 2015, tergantung timezone
 */

//ISO Dates (Date-Time)
/**
 * ISO Dates dapat ditulis dengan penambahan jam, menit, dan detik (YYYY-MM-DDTHH:MM:SSZ) 
 */
dateFormat = new Date("2015-6-15T12:00:00Z");

/**
 * Date dan Time dipisahkan dengan capital T
 * 
 * UTC time didefinisikan dengan kapital Z
 * 
 * jika kita ingin memodifikasi waktu dengan timezone selain UTC, ganti Z dan tambah +HH:MM
 * atau -HH:MM 
 */
dateFormat = new Date("2015-06-15T12:00:00-06:30");
console.log(dateFormat);

//time zone
/**
 * ketika mengatur tanggal tanpa menentukan time zone, javascript akan menggunakan timezone
 * dari browser
 * 
 * ketika mengambil tanggal tanpa menentukan time zone, hasil dari Date tersebut akan dikonversi 
 * sesuai dengan time zone dari browser
 * 
 * dengan kata lain, jika date/time dibuat pada waktu GMT (Greenwhich mean time), date/time akan 
 * terkonversi menjadi CDT (central US Dayight time) jika browser pengguna ada di central US
 */

//javascript short date
/**
 * short date ditulis dengan "MM/DD/YYYY" seperti dibawah ini
 */
dateFormat = new Date("06/15/2001");
console.log(dateFormat);

/**
 * peringatan :
 * 
 * pada beberapa browser, bulan ataupun tanggal tanpa awalan 0 akan menyebabkan error
 * dates = new Date("2015-3-14");
 * 
 * terkadang perilaku dari format "YYYY/MM/DD" menjadi undefined
 * beberapa browser akan mencoba menebak formatnya, ada juga yang akan mengembalikan nan
 * dates = new Date("2014/05/03");
 * 
 * perilaku dari format "DD-MM-YYYY" juga begitu
 * beberapa browser akan mencoba menebak formatnya, ada juga yang akan mengembalikan nan
 * dates = new Date("04-08-2009");
 */

//javascrit long dates
/**
 * long dates biasanya ditulis dengan "MMM DD YYYY" syntax seperti ini
 */
dateFormat = new Date("Mar 25 2001");

/**
 * tanggal dan bulan dapat ada di urutan manapun
 */
dateFormat = new Date("25 Mar 2001");

/**
 * juga, bulan dapat ditulis lengkap (January) atau singkata (Jan)
 */
dateFormat = new Date("January 23 1998");

/**
 * commas akan dibiarkan, dan penulisannya case-insensitive
 */
dateFormat = new Date("JANUARY, 25, 2001");
console.log(dateFormat);

//Date Input - Parsing Date
/**
 * jika kita memiliki string date yang valid, kita dapat menggunakan method Date.parse()
 * untuk mengkonversinya menjadi milisecond
 * 
 * Date.parse() mengembalikan banyaknya milisecond antara tanggal dan 1 january 1970
 */
let msc = Date.parse("march 21, 2001");
console.log(msc);

/**
 * kita dapat menggunakan milisecond dari hasil parse string untuk dijadikan date
 */
console.log(new Date(msc));