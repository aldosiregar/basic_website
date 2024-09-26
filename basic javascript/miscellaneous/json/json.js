//javascript json
/**
 * JSON adalah format untuk menyimpan dan mengirim data
 * 
 * JSON sering digunakan ketika data dikirim dari server ke web page
 */
console.log("json javascript");

//apa itu JSON?
/**
 *  1. JSON adalah kependekan dari JavaScript Object Notation
 *  2. JSON adalah lightweight data interchange format
 *  3. JSON bersifat language independent * 
 *  4. JSON bersifat self-describing dan gampang dimengerti
 * 
 * (*) json syntax adalah turunan dari javascript object notation syntax, tetapi JSON format
 * hanya berisi text, kode untuk membaca dan mengenerate JSON data dapat ditulis dari bahasa
 * apapun
 */

//JSON example
/**
 * JSON syntax defines employees object : sebuah array dari 3 employee record (objects)
 * 
 * /contoh JSON
 * {
 *  "employees" : [
 *      {"firstname" : "john", "lastname" : "doe"}, 
 *      {"firstname" : "jane", "lastname" : "doe"}, 
 *      {"firstname" : "hawk", "lastname" : "doe"} 
 *  ]
 * }
 * 
 * note : 
 * data ada di employee.json
 */

//JSON format mirip dengan javascript object
/**
 * JSON format secara sintetis mirip dengan kode untuk membuat object javascript
 * 
 * karena kemiripan ini, javascript program dapat dengan mudah mengkonversi JSON
 * data menjadi native javascript objects
 */

//JSON syntax rules 
/**
 *  1. data dibuat dalam pasangan name/value
 *  2. data dipisahkan oleh koma
 *  3. curly brackets menampung object
 *  4. square brackets menampung arrays
 */

//JSON data - sebuah nama dan sebuah nilai
/**
 * JSON data ditulis dalam pasangan name/value, seperti javascript properties
 * 
 * sebuah pasangan name/value berisi nama field (dengan double quotes), diikuti dengan colon,
 * dan dilanjutkan dengan nilai
 * 
 * "firstname" : "john"
 * 
 * note : 
 * nama JSON membutuhkan double quotes, javascript tidak perlu
 */

//JSON objects
/**
 * JSON objects ditulis didalam curly brackets
 * 
 * seperti pada javascript, objects dapat berisi beberapa pasangan name/value
 * 
 * {"firstName":"John", "lastName":"Doe"} 
 */

//JSON arrays
/**
 * JSON arrays ditulis didalam square brackets
 * 
 * seperti pada javascript, array dapat berisi object
 * 
 * "data" : [
 *  {"name" : "jake", "job" : "customer service"},
 *  {"name" : "hawk", "job" : "IT support"}
 * ]
 * 
 * pada contoh diatas, object "data" adalah array, dan berisi 2 object
 * 
 * setiap object adalah record dari person (dengan nama dan pekerjaan)
 */

//menkonversi JSON text menjadi javascript object
/**
 * penggunaan JSON berdasar pada kemampuannya untuk membaca data dari web server, dan menampilkan
 * data tersebut ke web page
 * 
 * untuk simpelnya, ini dapat didemonstrasikan menggunakan string sebagai input
 * 
 * pertama, buat javascript string berisi JSON syntax
 */
let text = '{"data" : [' +
'{"name" : "jake", "job" : "customer service"},' + 
'{"name" : "hawk", "job" : "IT support"}' +
']}';

/**
 * kemudian gunakan javascript built-in function JSON.parse() untuk mengkonversi string menjadi
 * javascript object : 
 */
const obj = JSON.parse(text);

/**
 * terakhir, gunakan javascript object pada page
 */
document.getElementById("demo").innerHTML = obj.data[0].name;