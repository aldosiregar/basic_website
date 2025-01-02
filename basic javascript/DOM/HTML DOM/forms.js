//javascript forms
//javascript form validation
/**
 * HTML form validation dapat dilakukan dengan javascript
 * 
 * jika sebuah form field (name) kosong, function ini memberikan peringatan 
 * sebuah message, dan mengembalikan false, untuk mencegah form ter-submit
 */
function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        alert("name must be filled out");
        return false;
    }
}

/**
 * function dapat dipanggil ketika form ter-submit
 * 
 * HTML form example
 * 
 * <form name="myForm" action="/action_page.php" 
 * onsubmit="return validateForm" method="post">
 *  Name : <input type="text" name="fname">
 *  <input type="submit" value="submit">
 * </form>
 */

//javascript dapat memvalidasi input numeric
/**
 * javascript biasanya digunakan untuk memvalidasi input numeric
 */

//automatic HTML form validation
/**
 * HTML form validation dapat dilakukan secara otomatis oleh browser
 * 
 * jika sebuah form field (fname) kosong, attribute required mencegah form
 * ini ter-submit
 * 
 * HTML form example :
 * <form>
 *  <input type="text" name="fname" required>
 *  <input type="submit" value="Submit">
 * </form>
 * 
 * automatic HTML form validation tidak bekerja pada internet Explorer 9 
 * atau versi sebelumnya
 */

//data validation
/**
 * data validation adalah proses untuk memastikan input user bersih, benar,
 * dan berguna
 * 
 * typical validation task antara lain :
 * - sudahkan user mengisi semua fields yang diperlukan?
 * 
 * - sudahkah user memasukkan date yang valid
 * 
 * - sudahkan user memasukkan text ke sebuah field numeric
 * 
 * biasanya, tujuan dari data validation adalah untuk memastikan user input
 * yang benar
 * 
 * validation dapat didefinisikan oleh banyak method berbeda, dan di-deploy
 * diberbagai cara
 * 
 * server side validation dilakukan oleh web server, setelah input 
 * dikirimkan ke server
 * 
 * client side validation dilakukan oleh web browser, sebelum input dikirimkan
 * ke web server 
 */

//HTML constraint validation
/**
 * HTML5 memperkenalkan sebuah konsep baru HTML validation yang disebut 
 * constraint validation
 * 
 * HTML constraint validation didasarkan pada :
 * - constraint validation HTML input attribute
 * 
 * - constraint validation css pseudo selector
 * 
 * - constraint validation DOM properties and methods
 */

//constraint validation HTML input attributes
/**
 * attribute    description
 * disabled     menentukan bahwa input element harus dimatikan
 * 
 * max          menentukan nilai maksimum dari sebuah element input
 * 
 * min          menentukan nilai minimum dari sebuah element input
 * 
 * pattern      menentukan nilai pattern dari sebuah element input
 * 
 * required     menentukan bahwa field input membutuhkan sebuah element
 * 
 * type         menentukan tipe dari sebuah element input
 * 
 * dan masih banyak attribute input yang lainnya        
 */

//constraint validation css pseudo selectors
/**
 * selector     description
 * :disabled    pilih element input dengan attribute "disabled"
 * 
 * :invalid     pilih element input dengan nilai invalid
 * 
 * :optional    pilih element input dengan tanpa "required" attribute
 * 
 * :required    pilih element input dengan attribute "required"
 * 
 * :valid       pilih element input dengan nilai valid
 * 
 * dan masih banyak pesudo class css lainnya
 */