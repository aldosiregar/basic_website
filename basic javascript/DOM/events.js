//javascripts events
/**
 * HTML events adalah "sesuatu" yang terjadi di element html
 * 
 * ketika javascript menggunakan html, javascript dapat "bereaksi"
 * pada event ini
 */

//html events
/**
 * sebuah events html dapat berupa sesuatu yang dilakukan browser,
 * atau yang dilakukan oleh user
 * 
 * berikut beberapa contoh html events : 
 *  1. HTML web page yang telah selesai dimuat
 *  2. HTML input yang berubah
 *  3. HTML button yang di klik
 * 
 * biasanya, ketika event terjadi kita ingin melakukan sesuatu
 * 
 * javascript membiarkan kita mengeksekusi kode ketika event terdeteksi
 * 
 * html memperbolehkan attribut event handler, dengan kode javascript, untuk ditambahkan
 * ke element html
 * 
 * dengan single quote
 * <element event='some JavaScript'>
 * 
 * atau degan double quote
 * <element event="some JavaScript">
 */

/**
 * dibawah ini adalah salah satu contoh event handler tersebut
 * sebuah onclick atribute (dengan kode) ditempatkan pada button
 * 
 * <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
 * 
 * pada contoh diatas, kode javascript akan merubah isi dari content pada id="demo"
 * 
 * pada contoh berikutnya, kode akan merubah konten dari elementnya sendiri
 * menggunakan keyword this
 * 
 * <button onclick="this.innerhtml = "Date()">click here</button>
 */

/**
 * javascript biasanya memiliki beberapa baris kode yang panjang
 * oleh karena itu biasanya event attribute akan memanggil fungsi
 * 
 * <button onclick="click()">click here</button>
 */

//common javascript event
/**
 * beberapa event javascript yang umum digunakan antara lain
 * 
 * Event	    Description
 * onchange	    An HTML element has been changed
 * 
 * onclick	    The user clicks an HTML element
 * 
 * onmouseover	The user moves the mouse over an HTML element
 * 
 * onmouseout	The user moves the mouse away from an HTML element
 * 
 * onkeydown	The user pushes a keyboard key
 * 
 * onload	    The browser has finished loading the page
 * 
 * masih banyak event lain, untuk sisanya cari sendiri sesuai kebutuhan
 */

//javascript event handler
/**
 * javascript event handler dapat digunakan untuk meng-handle dan memastikan user
 * input, user action, dan tindakan browser :
 *  1. sesuatu yang harus dilakukan setiap halaman dimuat
 *  2. hal yang harus dilakukan setiap page ditutup
 *  3. aksi yang harus dilakukan jika user menekan button
 *  4. konten yang harus diverifikasi ketika user menginput data
 *  5. dan masih banyak lagi...
 * 
 * terdapat berbagai macam metode yang dapat digunakan agar kode javascript
 * bekerja dengan event :
 *  1. HTML event attribute dapat mengeksekusi langsung kode javascript
 *  2. HTML event attribute dapat memanggil fungsi javascript
 *  3. kita dapat memasang sendiri event handler function ke element HTML
 *  4. kita dapat mencegah event untuk dikirimkan atau diproses
 *  5. dan masih banyak lagi...
 */
