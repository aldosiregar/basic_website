/**
 * dalam javascript, variabel dapat dideklarasikan dalam 4 cara
 *  1. secara otomatis
 *  2. menggunakan var
 *  3. menggunakan let
 *  4. menggunakan const
 */

//secara otomatis
/**
 * pendeklarasian secara otomatis dapat dilakukan hanya dengan memasukkan nilai ke dalam variabel
 * yang diinginkan
 * 
 * namun, merupakan kebiasaan yang baik untuk mendeklarasikan variabel sebelum digunakan
 */
a = 10;
b = 20;
c = a + b;
document.getElementById("automatic").innerHTML = c;

//menggunakan var
/**
 * keyword var dulu digunakan untuk semua kode javascript pada tahun 1995 sampai 2015
 * 
 * keyword let dan const baru ditambahkan pada javascript tahun 2015
 * 
 * keyword var hanya digunakan di kode yang ditulis untuk browser lama
 */
var d = 3;
var e = 5;
var f = 10 + d + e;
document.getElementById("varPracticed").innerHTML = f;

//menggunakan let
let g = 1;
let h = 5;
let i = 3 + g + h;
document.getElementById("letPracticed").innerHTML = i;

//menggunakan const
/**
 * berbeda dengan ketiga cara sebelumnya, keyword const tidak dapat diubah setelah di deklarasikan
 */
const j = 10;
const k = 30;
const l = j + k;
document.getElementById("constPracticed").innerHTML = l;

//kapan menggunakan var, let, atau const
/**
 * 1. selalu deklarasikan variable
 * 2. selalu gunakan const jika variabel tersebut tidak boleh diubah
 * 3. selalu gunakan const jika tipenya tidak boleh diubah (array dan objek)
 * 4. hanya gunakan let jika const tidak bisa digunakan
 * 5. hanya gunakan var jika kita HARUS men-support browser lama
 */

//javascript identifiers
/**
 * semua variabel javascript harus diidentifikasi dengan nama yang unik
 * nama yang unik ini dinamakan identifiers
 * identifiers dapat berupa nama-nama pendek (seperti x dan y) atau nama yang deskriptif (age, sum, totalVolume)
 * lumrahnya aturan untuk menulis nama untuk variabel (unique identifiers) antara lain :
 *  1. nama yang berisi huruf, digit, underscore, dan dollar sign
 *  2. nama harus dimulai dengan huruf
 *  3. nama juga dapat dimulai dengan $ atau _
 *  4. namanya harus case-sensitive (y dan Y bukanlah variabel yang sama)
 *  5. nama yang sudah dipakai (seperti keyword javascript) tidak dapat digunakan sebagai nama variabel
 */

//satu statement, banyak variabel
/**
 * kita dapat mendeklarasikan banyak variabel dalam satu statement
 * dimulai dengan keyword let dan pisah variabel menggunakan koma
 */
let car = "suzuki", volume = 200, maxCapacity = 5;

//value = undefined
/**
 * dalam program komputer, variabel biasanya dideklarasikan tanpa nilai
 * nilainya bisa berisi sesuatu yang nantinya akan di kalkulasi, atau sesuatu yang akan diisi nanti
 * seperti input user
 * 
 * variabel yang belum mempunyai isi disebut undefined
 */
let name;

//javascript dollar sign ($)
/**
 * karena javascript menganggap dollar sign sebagai huruf, identifiers yang menggunakan $ adalah nama yang legal
 * 
 * menggunakan dollar sign bukan hal yang lumrah di javascript
 * tapi programmer profesional sering menggunakannya sebagai alias untuk fungsi utama di sebuah library javascript
 * 
 * dalam library javascript jquery, fungsi utama dari $ adalah untuk memilih elemen html
 * di jquery, $("p"); artinya  "pilih semua elemen p"
 */
let $ = 1;
let $$ = 2;
let $duit = 30000;

//javascript underscore sign (_)
/**
 * underscore juga merupakan nama yang valid di javascript
 * 
 * biasanya underscore digunakan sebagai alias untuk variabel "private (tersembunyi)"
 */
let _gaji = 300000000;