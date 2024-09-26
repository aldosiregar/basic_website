//javascript debugging
/**
 * errors dapat (akan) terjadi setiap kita menulis kode baru pada komputer
 */
console.log("javascript debugging : ");

//code debugging
/**
 * kode programming dapat memiliki syntax error, atau logical error
 * 
 * banyak dari error ini sulit untuk dideteksi
 * 
 * biasanya, ketika kode pemrograman mengandung error, tidak akan ada yang terjadi. tidak
 * ada error message, dan kita tidak akan mendapatkan indikasi dimana terjadinya error
 * 
 * mencari (dan memperbaiki) error di kode programming disebut sebagai code debugging
 */

//javascript debugger
/**
 * debugging tidaklah mudah, tapi untungnya semua modern browser memiliki built-in javascript
 * debugger
 * 
 * built-in debugger dapat dihidupkan dan dimatikan, memaksa error untuk dilaporkan
 * ke user
 * 
 * dengan debugger, kita dapat mengatur breakpoints (tempat dimana kode yang tereksekusi dapat
 * dihentikan), dan memeriksa variabel ketika kode dijalankan
 * 
 * biasanya (atau dengan beberapa cara lain dibawah nanti), kita dapat mengaktifkan debugger
 * di browser kita dengan f12 key, dan pilih "console" pada menu debugger
 */

//console.log() method
/**
 * jika browser mensupport debugging, kita dapat menggunakan console.log() untuk menampilkan
 * nilai javascript pada debugger window
 */
console.log(13 + 20);

//setting breakpoint
/**
 * pada debugger window, kita dapat mengatur breakpoints pada kode javascript
 * 
 * pada setiap breakpoints, javascript akan berhenti beroperasi, dan kita dapat memeriksa
 * javascript value
 * 
 * setelah memeriksa value, kita dapat melanjutkan kode yang tereksekusi (biasanya dengan
 * play button)
 */

//debugger keyword
/**
 * debugger keyword memberhentikan eksekusi kode javascript, dan memanggil (jika ada) 
 * debugging function
 * 
 * ini memiliki fungsi yang sama dengan mengatur breakpoint pada debugger
 * 
 * jika debugging tidak tersedia, debugger statement tidak akan memiliki efek
 * 
 * dengan debugger yang hidup, kode akan berhenti tereksekusi sebelum mengeksekusi line selanjutnya
 */
let x = 20 * 30;
debugger;
console.log(x);

//major browser debugging tool
/**
 * biasanya, kita mengaktifkan debugging pada browser dengan f12, dan memilih "console" pada
 * debugger menu
 * 
 * jika tidak bisa,ada beberapa cara alternatif : 
 * 
 * Chrome
 *  1. Open the browser.
 *  2. From the menu, select "More tools".
 *  3. From tools, choose "Developer tools".
 *  4. Finally, select Console.
 * 
 * Firefox
 *  1. Open the browser.
 *  2. From the menu, select "Web Developer".
 *  3. Finally, select "Web Console".
 * 
 * Edge
 *  1. Open the browser.
 *  2. From the menu, select "Developer Tools".
 *  3. Finally, select "Console".
 * 
 * Opera
 *  1. Open the browser.
 *  2. From the menu, select "Developer".
 *  3. From "Developer", select "Developer tools".
 *  4. Finally, select "Console".
 * 
 * Safari
 *  1. Go to Safari, Preferences, Advanced in the main menu.
 *  2. Check "Enable Show Develop menu in menu bar".
 *  3. When the new option "Develop" appears in the menu:
 *  4. Choose "Show Error Console".
 */