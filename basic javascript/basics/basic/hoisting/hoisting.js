//javascript hoisting 
/**
 * hoisting adalah javascript default behaviour untuk mengarahkan declaration ke atas
 */
console.log("javascript hoisting : ");

//javascript declarations sudah ter-hoisted
/**
 * pada javascript, sebuah variable dapat dideklarasikan setelah dia digunakan
 * 
 * dengan kata lain, sebuah variable dapat digunakan sebelum variable tersebut dideklarasikan
 */
x = 10;
console.log(x);
var x;

/**
 * untuk memahami contoh diatas, pertama kita harus memahami apa itu hoisting
 * 
 * hoisting adalah perilaku default javascript untuk mengarahkan semua deklarasi ke 
 * bagian paling atas dari scope saat itu (dipindahkan ke bagian paling atas 
 * dari script atau function saat itu) 
 */

//let dan const keyword
/**
 * variable yang didefinisikan dengan let dan const juga akan tetap di hoist ke atas
 * blok, namun tidak akan diinisiasi
 * 
 * artinya : blok kode tahu akan keberadaan variable tersebut, namun tidak dapat digunakan
 * sampai variablenya terdeklarasi
 * 
 * menggunakan let variable sebelum dideklarasi akan menyebabkan RefrenceError
 * 
 * variable tersebut masih dalam keadaan "temporal dead zone" sampai saat variable tersebut
 * diinisiasi
 */
//menggunakan variable let sebelum variablenya terdeklarasi
try{
    hoistingLet = 10;
    console.log(hoistingLet);
    let hoistingLet;
}
catch(err){
    console.log("let errors : " + err);
}

//menggunakan variable const sebelum variablenya juga terdeklarasi
try{
    console.log(hoistingConst);
    const hoistingConst = 10; 
}
catch(err){
    console.log("const errors : " + err);
}

//javascript initializations tidaklah dihoisting
/**
 * javascript hanya menghoist variable, tidak dengan initializations
 */
try{
    var x = 10;
    console.log("x = " + x + " ,dan variable y : " + y);
    var y = 15;
}
catch(err){
    console.log(err);
}

/**
 * bukannya masuk akal ketika nilai dari y undefined
 * 
 * ini karena hanya deklarasi (var y), bukan inisialisasi (= 7) yang dipindahkan keatas
 * 
 * karena hoisting, y telah terdeklarasi sebelum ia digunakan, tetapi karena inisiasi tidak terhoisting
 * , nilai dari y tetap undefined
 */

//deklarasikan variable kita diatas
/**
 * hoisting (bagi banyak developer) adalah tindakan yang tidak diketahui atau dipedulikan dari 
 * javascript
 * 
 * jika developer tidak mengerti hoisting, program dapat menghasilkan bug (error)
 * 
 * untuk menghindari bug, selalu deklarasikan variable pada awal dari setiap scope
 * 
 * karena ini adalah bagaimana javascript mengerti sebuah kode, ini adalah
 * aturan yang bagus
 * 
 * ps : 
 * javascript pada strict mode tidak memperbolehkan variable untuk digunakan jika mereka
 * tidak dideklarasikan 
 */