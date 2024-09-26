console.log("javascript modules : ");

//javascript modules
/**
 * javascript modules membuat kita dapat untuk memecah kode kita menjadi beberapa file
 * 
 * ini membuat kita mudah untuk me-maintain sebuah code-base
 * 
 * modules di import dari external file dengan import statement
 * 
 * modules juga bergantung pada type="module" di script tage
 * 
 * contoh : 
 * <script type="module">
 *  import message from "./message.js"
 * </script>
 */

//export
/**
 * modules dengan functions atau variable dapat disimpan di external file
 * 
 * ada 2 tipe exports : named exports dan default exports 
 */

//named export
/**
 * mari kita buat file bernama person.js, dan isi dengan hal yang ingin kita export
 * 
 * kita dapat membuat named exports dengan 2 cara, secara in-line atau semuanya di bagian bawah
 * 
 * /in-line individually
 * export const person = "jaka";
 * export const age = 40;
 * 
 * /all at once on the bottom
 * const name = "juki";
 * const classification = 23;
 * export {name, classification};
 * 
 * note : 
 * kode ada di person.js
 */

//default export
/**
 * mari kita membuat file lain bernama message.js, dan gunakan itu untuk mendemonstrasikan
 * default export
 * 
 * kita hanya bisa memiliki satu default export pada satu file
 * 
 * /default export
 * const message = () => {
 *  const Name = "jaki";
 *  const age = 40;
 *  return Name + " is " +  age + " years old.";
 * }
 * 
 * export default message;
 * 
 * note : 
 * kode ada di message.js
 */

//import 
/**
 * kita dapat meng-import module ke file dengan 2 cara, tergantung dari apakah mereka
 * named export atau default export
 * 
 * named export dibentuk dengan curly brackets, sedangkan default export tidak
 * 
 * /import dengan named export
 * import named export dari file person.js :
 * import { name, age } from "./person.js";
 * 
 * /import dengan default export
 * import default export dari file message.js : 
 * import message from "./message.js"
 */