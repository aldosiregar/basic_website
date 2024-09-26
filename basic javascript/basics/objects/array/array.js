//javascript array
/**
 * array adalah sebuah variable spesial, yang dapat menyimpan lebih dari 1 nilai
 */
console.log("javascript arrays : ");

//creating array
/**
 * menggunakan array literals adalah cara paling mudah dalam membuat javascript array
 * 
 * note :
 * adalah sebuah common practice untuk membuat array dalam bentuk constant
 */
const data = ["jack", "jane", "jeanne"];

/**
 * space dan line break tidak dianggap penting, deklarasi array dapat juga di-span
 * ke beberapa line
 * 
 * const data = [
 *  "jack",
 *  "jane",
 * "jeanne"
 * ];
 */

/**
 * selain itu, kita juga dapat membuat array dengan menambahkan elementnya
 */
data[3] = "joe";

//menggunakan javascript keyword new
/**
 * kita juga dapat menggunakan keyword new untuk membuat javacript array
 */
const data2 = new Array("jake", "jeanne");

/**
 * kedua cara diatas akan memberikan hasil yang serupa
 * 
 * tidak perlu menggunakan keyword new, demi tujuan simplisitas dan kecepatan eksekusi
 * gunakan literals
 */

//accessing array elements
/**
 * kita dapat mengakses element array dengan merujuk ke index numbernya
 */
console.log(data["0"]);

//merubah element array
/**
 * dengan merujuk ke index numbernya, kita dapat merubah isi dari sebuah array
 */
data[0] = "blackie";

//mengconvert array menjadi string
/**
 * method javascript toString() akan mengkonversi array menjadi string (comma separated) array values
 */
console.log(data.toString());

//mengakses semua array
/**
 * dalam javascript, semua isi array dapat diakses dengan merujuk ke nama arraynya
 */
console.log(data);

//array adalah object
/**
 * array adalah special type dari object, operator typeof di javascript akan mengembalikan "object"
 * untuk arrays
 * 
 * tetapi, javascript arrays lebih baik disebut sebagai arrays
 * 
 * arrays menggunakan angka untuk mengakses elements, sedangkan object menggunakan nama untuk mengakses
 * "members" nya
 */

//element arrays dapat menjadi objects
/**
 * javascript variables dapat menjadi object, array adalah special kind dari objects
 * 
 * karena ini, kita dapat mempunyai variable dengan beberapa tipe data di dalam sebuah array
 * 
 * kita dapat memiliki object, function, bahkan array di dalam array
 *  */ 
const compiled = [
    data,
    function() {
        return 10 * 20;
    },
    Date.now
];

//array properties dan method
/**
 * keunggulan dari array sendiri ada di built-in properties dan methodnya
 */

//length property
/**
 * length property di array akan mengembalikan panjang dari array (seberapa banyak element pada array)
 */
console.log(data.length);

//looping array elements
/**
 * ada 2 cara untuk melakukan looping pada array, pertama dengan menggunakan for
 */
for(let i = 0; i < data.length; i++){
    console.log(data[i]);
}

/**
 * kedua dengan Array.forEach methods
 */
const fewValue = [10, 50, 100, 2, 3];

fewValue.forEach(mulitply);
var multiplier = 3;
console.log(fewValue);

function mulitply(value){
    return value * multiplier;
}

//adding new array elements
/**
 * untuk menambah element array, selain menggunakan index, kita juga dapat menggunakan method
 * push
 */
data.push("kala");

//associative array
/**
 * banyak bahasa pemrograman mendukung array dengan index bernama
 * 
 * array dengan index bernama disebut sebagai associative array (atau hash)
 * 
 * pada javascript, tidak disupport array dengan index bernama
 * melainkan selalu menggunakan index angka
 * 
 * walaupun nanti kita coba, array tersebut akan menjadi object dan beberapa beberapa
 * method dan property array akan menghasilkan hasil yang tidak tepat
 */

//perbedaan antara array dan object
/**
 * pada javascript, array selalu menggunakan angka
 * 
 * sedangkan object selalu menggunakan index bernama
 */

//kapan harus menggunakan keduanya?
/**
 * javascript memiliki built-in constructor bernama new Array()
 * 
 * tapi lebih aman untuk menggunakan literals ([])
 * 
 * karena parameter pertamanya selalu menginginkan lebih dari 1 nilai, jika kita hanya memberikan
 * satu argument saja maka akan akan terbuat 40 element yang tidak bisa dibaca
 */

//bagaimana cara untuk mengetahui sebuah array?
/**
 * jika kita hanya menggunakan typeof, javascript mengelompokkan array sebagai "object"
 * 
 * ada 2 cara untuk mengetahui tipe suatu data array atau bukan
 */
console.log(typeof data);

//1. menggunakan method isArray()
/**
 * method ini mulai ada pada ECMAScript 5 (javascript 2009)
 *  */ 
console.log(Array.isArray(data));

//2. menggunakan operator instanceof
/**
 * operator ini akan mengembalikan true jika object dibuat dengan constructor yang sama
 */
console.log(data instanceof Array);

//nested array dan object
/**
 * value pada object dapat berupa arrays, dan value pada array dapat berupa Objects
 */
const newFusion = {
    named : "jack",
    address : "jln mawar",
    arrays : [
        "kane", "kine", "kone"
    ]
}

/**
 * untuk mengakses array di dalam object tersebut, kita dapat menggunakan operator for
 * dan merujuk indexnya
 */
for(let i = 0; i < newFusion.arrays.length; i++){
    console.log(newFusion.arrays[i]);
}
