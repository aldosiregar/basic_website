/**
 * sebuah javascript function adalah block kode yang didesign khusus untuk tugas tertentu
 * 
 * sebuah fungsi dieksekusi ketika "sesuatu" meng-invokes-nya (memanggilnya)
 */

//javascript function syntax
/**
 * javascript function didefinisikan dengan keyword function, diikuti namanya, dan disambung parantheses ()
 * 
 * nama fungsi bisa mengandung huruf, digit, underscore, dan dollar sign (aturan sama dengan variabel)
 * 
 * parantheses dapat berisi nama parameter yang dipisahkan dengan koma
 */
function status(){
    document.getElementById("statusOutput").innerHTML = "NGARET KONTOL";
}

/**
 * parameter fungsi ditentukan dalam parentheses () dalam denifinition function
 * 
 * argument fungsi adalah nilai yang diterima oleh fungsi ketika di panggil
 * 
 * didalam fungsi, arguments (parameters) dianggap sebagai local variables
 */

//function invocation
/**
 * code didalam fungsi akan dieksekusi ketika "sesuatu" invokes (memanggil) fungsi tersebut
 *  1. ketika sebuah event terjadi (ketika user menekan sebuah button)
 *  2. ketika fungsinya ter-invoked (terpanggil) dalam kode javascript
 *  3. otomatis (self-invoked)
 */

//function return
/**
 * ketika javascript mencapai statement return, sebuah fungsi akan berhenti beroprasi
 * 
 * jika sebuah fungsi dipanggil dari sebuah statement, javascript akan "mengembalikan" untuk
 * mengeksekusi kode setelah statement pemanggilan
 * 
 * fungsi biasanya mengoprasikan sebuah nilai return, nilai return dikembalikan ke "caller"
 */
function multiply(a, b){
    return a * b;
}
document.getElementById("resultMultiply").innerHTML = multiply(4, 5);

//why function?
/**
 * dengan function kita bisa menggunakan kembali sebuah baris kode
 * 
 * kita dapat menulis kode yang digunakan berkali-kali
 * 
 * kita dapat menggunakan baris kode yang sama dengan argument berbeda 
 * untuk menghasilkan hasil yang berbeda
 */

//operator ()
/**
 * operator () meng-invoked (memanggil) sebuah fungsi
 * 
 * menggunakan fungsi dengan parameter yang tidak tepat akan mengembalikan hasil yang tidak tepat
 */

//fungsi digunakan sebagai nilai variabel
/**
 * fungsi dapat digunakan sebagaimana kita menggunakan variabel, dalam berbagai bentuk
 * seperti formula, penugasan, dan kalkulasi
 */

//local variables
/**
 * variabel yang dideklarasikan didalam block fungsi, menjadi local terhadap fungsi tersebut
 * 
 * local variables hanya dapat diakses di dalam fungsi tersebut
 */
function contoh(){
    let x = 20;
}
//variabel x tidak dapat digunakan disini

/**
 * karena variabel local hanya dianggap didalam fungsi mereka, variabel dengan nama yang sama dapat
 * digunakan diluar fungsi tersebut
 * 
 * local variables dibuat ketika fungsi dimulai, dan dihapus ketika fungsi telah
 * selesai dijalankan
 */