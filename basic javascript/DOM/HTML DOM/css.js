//javascript HTML DoM - changing CSS
/**
 * HTML DOM memungkinkan javascript untuk mangubah style dari element HTML
 */

//mengubah style HTML
/**
 * untuk menguba style dari sebuah element HTML, gunakan syntax ini
 * 
 * document.getElement(id).style.property = new style
 * 
 * contoh dibawah ini mengubah style dari sebuah element <p>
 * 
 * contoh :
 * <html>
 * <body>
 * 
 *  <p id="p2">hello world</p>
 * 
 *  <script>
 *      document.getElementById("p2").style.color = "blue";
 *  </script>
 * 
 * </body>
 * </html>
 */

//menggunakan events
/**
 * HTML DOM memungkinkan kita untuk mengeksekusi kode ketika sebuah event 
 * terjadi
 * 
 * event di-generate oleh browser ketika "sesuatu terjadi" terhadapat element
 * HTML :
 * 
 * - sebuah element diklik
 * - page diload
 * - input field berubah
 * 
 * kita akan mempelajari ini lebih lanjut nanti
 * 
 * contoh dibawah ini mengubah style dari element HTML dengan id="id1", ketika 
 * user mengklik sebuah button
 * 
 * contoh :
 * <!DOCTYPE html>
 * <html>
 * <body>
 * 
 *  <h1 id="id1">heading is 1</h1>
 * 
 *  <button type="button" 
 *  onclick="document.getElementById('id1').style.color = 'red'">
 *      click me
 *  <//button>
 * 
 * </body>
 * </html>
 */