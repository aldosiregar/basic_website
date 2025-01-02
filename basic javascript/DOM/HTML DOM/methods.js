//javascript - HTML DOM Methods
/**
 * HTML DOM methods adalah aksi yang dapat kita lakukan pada element HTML
 * 
 * HTML DOM properties adalah nilai dari element HTML yang dapat kita atur atau
 * ubah
 */

//DOM programming interface
/**
 * HTML DOM dapat diakses dengan javascript (dan dengan bahasa programming lain)
 * 
 * pada DOM, semua elements HTML didefinisikan sebagai objects
 * 
 * programming interface adalah properties dan methods dari setiap objects
 * 
 * property adalah nilai yang dapat kita ambil atau ubah 
 * (seperti mengubah content dari sebuah element HTML)
 * 
 * method adalah aksi yang dapat kita lakukan 
 * (seperti menambah atau menghapus sebuah element HTML)
 */

//contoh
/**
 * pada contoh dibawah ini, ubah content (innerHTML) dari element <p> dengan 
 * id="demo"
 * 
 * contoh : 
 * <html>
 *  <body>
 *      <p id="demo"></p>  
 * 
 *      <script>
 *          document.getElementById("demo").innerHTML = "hello world";
 *      </script>
 *  </body>
 * </html>
 * 
 * pada contoh diatas, getElementById adalah sebuah method, dan innerHTML
 * adalah sebuah property
 */

//getElementById method
/**
 * cara paling umum untuk mengakses element HTML adalah untuk menggunakan id 
 * dari sebuah element
 * 
 * pada contoh diatas method getElementById menggunakan id="demo" untuk menemukan
 * element
 */

//innerHTML property
/**
 * cara paling mudah untuk mengambil content dari sebuah element adalah dengan
 * menggunakan property innerHTMl
 * 
 * property innerHTML berguna untuk mengambil atau menimpa content dari element
 * HTML
 * 
 * proeprty innerHTML dapat digunakan untuk mengambil atau mengubah element HTML,
 * termasuk <html> dan <bodt>
 */