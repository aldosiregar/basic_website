//javascript performance
/**
 * beberapa cara untuk mempercepat performa javascript
 */

//kurangi aktifitas pada loop
/**
 * loop sering digunakan pada programming
 * 
 * setiap statement pada loop, termasuk for statement, dieksekusi untuk 
 * setiap iterasi pada loop
 * 
 * statement atau assignment dapat ditaruh diluar loop untuk membuat 
 * loop menjadi lebih cepat
 * 
 * bad :
 * for (let i = 0; i < array.length; i++) {}
 * 
 * better : 
 * let lengths = array.length;
 * for (let i = 0; i < lengths; i++) {}
 * 
 * pada kode yang bad, property array.length akan diakses setiap
 * kali terjadi iterasi pada loop
 * 
 * pada kdoe yang better, property array.length diakses diluar 
 * loop dan akan membuat kode berjalan lebih cepat
 */

//mengurangi akses DOM
/**
 * mengakses HTML DOM sangatlah lambat dibandingkan dengan javascript
 * statement
 * 
 * jika kita akan mengakses DOM element beberapa kali, akses sekali
 * kemudian gunakan sebagai local variable
 * 
 * contoh : 
 * const obj = document.getElementById("demo");
 * obj.innerHTML = "hello";
 */

//kurangi ukuran DOM
/**
 * jaga agar element dari HTML DOM tetap kecil, kecil disini maksudnya 
 * adalah pengurangan banyaknya DOM yang ada di HTML
 * 
 * ini akan selalu mempercepat page loading, dan mempercepat 
 * rendering (page display), terutama pada devices yang lebih kecil
 * 
 * setiap percobaan mencari elements (seperti getElementByTagName) akan
 * lebih berguna untuk ukuran DOM yang lebih kecil
 */

//hindari variable yang tidak berguna
/**
 * jangan tambahkan variable baru jika kita tidak berencana untuk 
 * menyimpan value tersebut
 * 
 * biasanya kita menyingkat kode dibawah ini :
 * let fullname = firstname + " " + lastname;
 * document.getElementById("class").innerHTML = fullname;
 * 
 * dengan : 
 * document.getElementById("class").innerHTML = firstname + " " + lastname;
 */

//delay javascript loading
/**
 * menaruh script di bawah akan membuat page ter-load terlebih dahulu
 * 
 * ketika script sedang di-download, browser tidak akan memulai download
 * lainnya. yang dimana segala proses parsing dan rendering akan 
 * dihentikan terlebih dahulu.
 * 
 * HTTP spesification menyatakan bahwa browser tidak akan mendownload
 * lebih dari 2 component secara parallel 
 * 
 * alternativenya gunakan defer="true" pada tag script. defer attribute
 * menentukan bahwa script harus dieksekusi setelah proses parsing selesai,
 * tapi ini hanya bekerja untuk external script
 * 
 * jika memungkinkan, kita dapat menambahkan script kita ke page dengan kode,
 * setelah page kita ter-load
 * 
 * contoh :
 * <script>
 *  window.onload = function() {
 *      const element = document.createElement("script");
 *      element.src = "myScript.js";
 *      document.body.appendChild(element);
 * }
 * </script>
 */

//hindari menggunakan with
/**
 * hindari menggunakan keyword with, ini dapat berdampak negatif pada kecepatan
 * komputasi, ini juga akan memenuhkan scope javascript
 * 
 * with keyword tidak diperbolehkan pada mode strict
 */