//javascript common mistakes
/**
 * beberapa kesalahan yang sering terjadi pada javascript 
 */

//tidak sengaja menggunakan assignment operator (=)
/**
 * program javascript dapat memberikan hasil yang tidak terduga ketika
 * programmer tidak sengaja menggunakan assignment operator (=) daripada
 * comparisson operator (==) pada if statement
 * 
 * if statement akan mengembalikan false (sesuai prediksi) karena x tidak
 * sama dengan 10
 * 
 * let x = 0;
 * if(x == 10)
 * 
 * namun if statement akan mengembalikan true (tidak sesuai prediksi) karena
 * 10 adalah true
 * let x = 0;
 * if(x = 10) 
 * 
 * dan if statement akan mengembalikan false karena 0 adalah false
 * let x = 0;
 * if(x = 0)
 * 
 * note : 
 * sebuah assignment akan selalu mengembalikan nilai dari sebuah assignment
 */

//expecting loose comparison
/**
 * pada regular comparison, data type tidak terlalu berarti, if statement
 * dibawah akan mengembalikan true
 * let x = 10;
 * let y = "10";
 * if(x == y)
 * 
 * namun pada strict comparison, if statement ini akan memberikan hasil
 * false
 * let x = 10;
 * let y = "10";
 * if(x === y)
 * 
 * dan juga, sering terjadi ketika programmer melupakan bahwa switch
 * menggunakan strict comparison
 * let x = 10
 * switch(x){
 *  case 10 : alert("hello"); break;
 * }
 * 
 * case switch dibawah tidak akan menampilkan alert("hello")
 * let x = 0;
 * switch(x){
 *  case "10" : alert("hello"); break;
 * }
 */

//bingung antara addition dan concatination
/**
 * addition adalah menambahkan angka
 * 
 * sedangkan concatination adalah menggabungkan string
 * 
 * pada javascript, kedua operasi ini menggunakan operator + yang sama
 * 
 * karena ini, menambahkan sebuah angka akan memberikan hasil yang 
 * berbeda dari menambahkan sebuah angka dengan string
 * 
 * let x = 10;
 * x = 10 + 5; //now its 15
 * 
 * let y = 10;
 * y += "5"; //now its "105" 
 */

//misunderstanding float
/**
 * semua number pada javascript disimpan sebagai 64-bits floating point number 
 * (floats)
 * 
 * semua bahasa pemrograman, termasuk javascript, memiliki masalah dengan 
 * ketepatan nilai floating point
 * 
 * let x = 0.1;
 * let y = 0.2;
 * let z = x + y; //hasilnya tidak akan menjadi 0.3
 * 
 * untuk menyelesaikan masalah diatas, dapat dengan perkalian dan pembagian
 * 
 * let z = (10 * x + 10 * y) / 10; //sekarang hasilnya menjadi 0.3
 */

//memecah javascript string
/**
 * javascript memperbolehkan kita untuk memecah statement menjadi 2 baris
 * 
 * let x = 
 * "hello world";
 * 
 * tetapi, memecah statement ditengah string tidak akan bekerja
 * 
 * let x = "hello
 * world";
 * 
 * kita harus menggunakan backslash jika ingin tetap memecah string 
 * tersebut
 * 
 * let x = "hello \
 * world";
 */

//salah menaruh semicolon
/**
 * karena semicolon yang salah ditaruh, code block akan terekesekusi
 * berapapun nilai kondisinya
 * 
 * if(x == 19);
 * {
 *  /code block
 * }
 */

//memecah return statement
/**
 * javascript akan langsung menutup statement pada akhir baris
 * karena inilah, javascript tidak mengharuskan kita untuk menutup
 * statement dengan semicolon
 * 
 * javascript juga memperbolehkan kita untuk memecah statement menjadi 2 baris
 * 
 * tetapi apa yang terjadi jika kita memecah return statement menjadi 2 baris
 * seperti ini?
 * 
 * function uji(a){
 *  let 
 *  power = 10;
 * 
 *  return
 *  power * 2;
 * }
 * 
 * bagian let akan berjalan sebagaimana mestinya, tetapi return dari function ini akan
 * menghasilkan undefined
 * 
 * hal ini terjadi karena walau let memperbolehkan kita memecah statement, tetapi
 * return akan dainggap sebagai akhir dari function tersebut
 * 
 * bentuknya akan jadi seperti ini 
 * 
 * function uji(a){
 *  let
 *  power = 10;
 *  
 *  return;
 *  power * 2;
 * }
 * 
 * ini terjadi karena keyword return menandakan bahwa statement function berakhir
 * dengan mengembalikan sesuatu, dan karena sifat javascript yang secara otomatis
 * akan menutup statement, ini menyebabkan interpreter mengira return tidak
 * akan mengembalikan apapun karena sudah diberhentikan prosesnya
 * 
 * note :
 * maka dari itu jangan memecah return keyword statement
 */

//mengakses array dengan named index
/**
 * banyak bahasa pemrograman mendukung arrays dengan index bernama
 * 
 * array dengan index bernama disebut sebagai associative arrays 
 * (atau hashes)
 * 
 * javascript tidak mendukung arrays dengan named index
 * 
 * pada javascript, arrays adalah numbered index
 * 
 * const arrays = []
 * arrays[0] = 1;
 * arrays[1] = 2;
 * arrays.length; /ini akan mengembalikan 2
 * arrays[0]; /ini akan mengembalikan 1
 * 
 * pada javascript, object menggunakan named indexes
 * 
 * jika kita menggunakan named index, ketika mengakses array, javascript
 * harus mendefinisikan ulang arrays sebagai standard object
 * 
 * setelah automatic redefinition, array method dan properties akan
 * menghasilkan undefined atau incorect result
 * 
 * const arrays = []
 * arrays["name"] = "john";
 * arrays["age"] = 20;
 * arrays.length; /ini akan mengembalikan 0
 * arrays[0]; /ini akan mengembalikan undefined
 */

//mengakhiri definition dengan comma yang tertinggal
/**
 * mengakhiri definition object atau array dengan comma memang
 * diperbolehkan dalam ecmascript 5, tetapi pada internet explorer
 * ini akan menyebabkan terjadinya crash pada browser
 * 
 * juga json tidak memperbolehkan adanya trailing comma
 * 
 * const arrays = [10, 20, 30, 40,];
 * const objects = {name:"john",age:20,}
 */

//undefined bukanlah null
/**
 * object javascript, variables, properties, dan method dapat menjadi undefined
 * 
 * juga, javascript object yang tidak memiliki nilai dapat menjadi null
 * 
 * karena inilah sulit untuk memeriksa jika sebuah object kosong
 * 
 * kita dapat memeriksa jika sebuah object undefined atau tidak
 * 
 * if(typeof obj === "undefined")
 * 
 * tetapi kita tidak bisa memeriksa jika object tersebut null, karena ini
 * akan mengembalikan error jika object tersebut undefined
 * 
 * if(obj === null)
 * 
 * untuk menyelesaikan masalah ini, kita harus memeriksa jika object 
 * tersebut bukan null, atau undefined
 * 
 * tapi ini juga akan masih memberikan error
 * 
 * if(object !== null && typeof object !== "undefined")
 * 
 * karena ini, kita harus memeriksa jika object tersebut undefined sebelum
 * kita dapat memeriksanya apakah dia undefined sebelum memeriksa apakah 
 * dia null
 * 
 * if (typeof obj !== 'undefined' && obj !== null) 
 */