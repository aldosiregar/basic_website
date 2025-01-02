//javascript HTML DOM - changing HTML
/**
 * HTML DOM memungkinkan javascript untuk mengubah content dari element HTML
 */

//mengubah content HTML
/**
 * cara termudah untuk mengubah content dari sebuah element HTML adalah dengan 
 * menggunakan property innerHTML
 * 
 * untuk mengubah content dari sebuah element HTML, gunakan syntax ini
 * 
 * document.getElementById(id).innerHTML = new HTML
 * 
 * contoh dibawah ini mengubah content dari element <p>
 * 
 * contoh : 
 * <body>
 * <html>
 *  <p id="p1">hello world</p>
 * 
 *  <script>
 *      document.getElementById("p1").innerHTML = "new text";
 *  </script>
 * </body>
 * </html>
 * 
 * penjelasan contoh :
 * - HTML document diatas mengandung sebuah element <p> didalam id="p1"
 * 
 * - kita menggunakan HTML DOM untuk mengambil element dengan id="p1"
 * 
 * - sebuah javascript mengubah content (innerHTML) dari element tersebut 
 *   menjadi "new text"
 */

//mengubah nilai dari sebuah attribute
/**
 * untuk mengubah nilai dari sebuah attribute HTML, gunakan syntax berikut
 * 
 * document.getElementById(id).attribute = new value
 * 
 * contoh dibawah ini mengubah nilai dari attribute src dari sebuah element
 * <img>
 * 
 * contoh :
 * <!DOCTYPE html>
 * <html>
 * <body>
 * 
 *  <img id="myImage" src="smiley.gif">
 * 
 *  <script>
 *      document.getElementById("myImage").src = "landscape.jpg"
 *  </script>
 * 
 * </body>
 * </html>
 * 
 * penjelasan contoh :
 * - document HTML diatas mengandung sebuah element <img> dengan id="myImage"
 * 
 * - kita menggunakan HTML DOM untuk mengambil element dengan id="myImage"
 * 
 * - sebuah javascript mengubah attribute src dari element tersebut dari 
 *   "smiley.gif" menjadi "landscape.jpg" 
 */

//dynamic HTML content
/**
 * javascript dapat membuat sebuah content HTML yang dinamis
 * 
 * contoh : 
 * <!DOCTYPE html>
 * <html>
 * <body>
 * 
 *  <p id="demo"></p>
 * 
 *  <script>
 *      document.getElementById("demo").innerHTML = "Date : " + Date();
 *  </script>
 * 
 * </body>
 * </html>
 */

//document.write()
/**
 * pada javascript, document.write() dapat digunakan untuk menulis secara 
 * langsung kedalam HTML output stream
 * 
 * contoh : 
 * <!DOCTYPE html>
 * <html>
 * <body>
 * 
 *  <p>bla bla bla</p> 
 * 
 *  <script>
 *      document.write(Date());
 *  </script>
 * 
 *  <p>bla bla bla</p>
 * 
 * </body>
 * </html>
 * 
 * jangan menggunakan document.write() setelah document ter-load, ini akan 
 * menulis ulang semua isi document
 */