//array methods
/**
 * terdapat beberapa method array yang sering digunakan
 */
console.log("array methods : ");

//javascript array length
/**
 * property length akan mengembalikan length (ukuran) dari sebuah array
 */
const arrays = [
    "jone",
    "joni"
]
console.log(arrays.length);

//javascript array toString()
/**
 * method toString() converts array menjadi string (dengan terpisah comma) 
 */
console.log(arrays.toString());

//javascript array at()
/**
 * ES2022 mengenalkan method array at()
 * 
 * at() mengembalikan hasil yang sama dengan [], dengan memperbolehkan negative index
 */
console.log(arrays.at(1));

//javascript array join()
/**
 * method join digunakan untuk menggabungkan semua array element menjadi string
 * 
 * cara kerjanya sama dengan toString(), tetapi kita juga dapat menambahkan separator didalamnya
 */
const arrays2 = [
    "joni",
    "kale"
];
console.log(arrays.join(" * "));

//popping dan pushing
/**
 * ketika kita bekerja dengan array, mudah untuk mengeluarkan element dan memasukkan element baru
 * 
 * itulah popping dan pushing
 * 
 * popping item mengeluarkan elements, sedangkan pushing item memasukkan elements
 */

//javascript array pop()
/**
 * method pop() mengeluarkan element terakhir dari array
 */
console.log(arrays.pop());

//javascript array push()
/**
 * method push() memasukkan element ke index terakhir
 */
console.log(arrays.push("lala"));

//shifting arrays
/**
 * cara kerja shifting sama dengan popping, tapi bekerja pada element pertama
 */

//javascript array shift()
/**
 * method shift() mengeluarkan array pertama dan "shift" semua element lain ke index yang lebih kecil
 */
console.log(arrays.shift());

//javascript array unshift()
/**
 * method unshift() menambahkan element baru ke sebuah array (di paling pertama), dan "unshift" element lain
 */
console.log(arrays.unshift("kalll"));

//merubah elements
/**
 * array elements diakses menggunakan index numbernya
 * 
 * dari sana dapat diubah element yang ada di index tersebut
 */
arrays[0] = "lake";
console.log(arrays);

//javascript array delete
/**
 * delete dapat menghapus sebuah element pada array
 * 
 * warning : 
 * array yang dihapus dengan method delete() akan menyisakan "lubang" pada array
 * 
 * jika ingin menghapus element array, gunakan pop()
 */

//merging array (concatenating)
/**
 * dalam bahasa pemrograman, concatenation berarti menyatukan string dari ujung ke ujung
 * 
 * concatenatng "snow" dan "ball" akan menghasilkan "snowball"
 * 
 * concatenating array berarti menggabungkan kedua array dari ujung ke ujung
 */

//javascript array concat()
/**
 * method concat membuat array baru dengan menggabungkan (concatenating) array yang ada
 * 
 * note : 
 * method concat() tidak merubah array yang ada, tetapi mengembalikan array baru
 * 
 * method concat() mengambil beberapa array sebagai argumentnya 
 */
console.log(arrays.concat(arrays2));

//javascript array copyWithing
/**
 * method ini meng-copy element array ke posisi lain di array
 * 
 * parameter pertama menentukan berapa banyak yang ingin dicopy, parameter kedua untuk posisi mulai,
 * dan parameter ketiga (opsional) untuk menentukan posisi selesai
 */
console.log(arrays.copyWithin(2, 0));

/**
 * note : 
 * method copyWithin() menghapus semua value yang ditentukan
 * 
 * method ini tidak menambahkan item baru ke array
 * 
 * method ini tidak merubah panjang dari array tersebut
 */

//flattening sebuah array
/**
 * flattening adalah proses mengurangi dimesionalitas dari array tersebut
 * 
 * flattening berguna ketika kita ingin mengconvert multi-dimensional array
 * menjadi one-dimensional array
 */

//javascript array flat()
/**
 * ES2019 mengenalkan method array flat()
 * 
 * method ini membuat array baru dengan sub array ter-concatenate ke kedalaman tertentu
 */
const flatteningTarget = [[1,2], [3,4], [5,6]];
console.log(flatteningTarget.flat());

//splicing dan slicing array
/**
 * method splice() digunakan untuk menambahkan item baru kedalam array
 * 
 * method slice() digunakan untuk memotong bagian dari array
 */

//javascript array splice()
/**
 * method ini digunakan untuk menambahkan item baru kedalam array
 * 
 * parameter pertama untuk dimana array harus diletakkan, 
 * parameter kedua untuk berapa banyak array yang harus dihapus dalam proses splice()
 */
arrays.splice(2, 0, "lale", "sasa");
console.log(arrays);

//javascript array toSpliced()
/**
 * method ini dikenalkan pada ES2023
 * 
 * method ini memungkin kita untuk melakukan splice pada array tanpa mengubah original arraynya
 * 
 * perbedaan antara toSpliced() dan splice() ada di method baru untuk membuat array baru,
 * dan tetap menjaga array lamanya, dibandingkan splice() yang langsung mempengaruhi original arraynya
 * 
 * parameter yang diterima juga masih sama dengan method slice()
 */
console.log(arrays.toSplice(0, 1));

//javascript array slice()
/**
 * method ini dapat digunakan untuk memotong array dan menciptakan array baru dari potongan tersebut
 * 
 * proses method slice() tidak mengganggu array originalnya
 * 
 * parameter pertama untuk indek mulainya, dan parameter kedua untuk di index keberapa proses slice()
 * selesai
 * 
 * jika tidak diberikan parameter kedua, slice akan bekerja sampai ke element terakhir array tersebut
 */
console.log(arrays.slice(0,2));

//automatic toString()
/**
 * javascript secara otomatis mengkonversi array menjadi string dengan pemisah comma ketika 
 * yang diinginkan adalah primitive value
 * 
 * sehingga kita biasanya tidak perlu secara spesifik harus mengkonversi array menjadi string
 * sebelum langsung memasukkannya ke dalam page html
 */

