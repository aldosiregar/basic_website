//basic string methods
/**
 * javascript string adalah primitive dan immutable, semua string method
 * menghasilkan string baru tanpa mengubah string originalnya
 */

//javascript string length
/**
 * property length mengembalikan panjang dari sebuah string
 */
let a = "jaka skill";
console.log(a);

//extracting string characters
/**
 * ada 4 methods untuk mengambil string characters
 *  1. at(position) methods
 *  2. charAt(position) methods
 *  3. charCodeAt(position) methods
 *  4. menggunakan property access [] seperti di arrays
 */

//javascript string charAt()
/**
 * method charAt() mengembalikan character di posisi yang ditunjuk index (position) di string
 */
console.log(a.charAt(2)); //ambil character kedua

//javascript string charCodeAt()
/**
 * method charCodeAt() mengembalikan kode dari character di index tertentu pada string
 * 
 * method ini mengembalikan UTF-16 code (sebuah interger diantara 0 sampai 65535)
 */
console.log(a.charCodeAt(2)); //ambil kode UTF-16 dari character kedua

//javascript string at()
/**
 * ES2022 mengenalkan string method at()
 */
console.log(a.at(2));

/**
 * method at() mengembalikan character di index yang dituju (position) pada sebuah string
 * 
 * method at() disupport di semua browser modern sejak maret 2022 
 * 
 * note : 
 * method at() adalah tambahan baru di javascript
 * 
 * method ini mendukung penggunaan index negative yang mana tidak didukung oleh charAt()
 * 
 * sekarang kita bisa menggunakan string.at(-2) dibandingkan string.charAt(string.length - 2)
 */

//property access []
console.log(a[0]);
/**
 * note : 
 * property access akan sedikit tak bisa diprediksi
 *  1. ini akan membuat string terlihat seperti array (padahal tentu saja bukan)
 *  2. jika tidak ada character yang ditemukan, [] mengembalikan undefined, sedangkan charAt
 *     mengembalikan string kosong
 *  3. metode ini hanya bisa untuk membaca (a[0] = "b" tidak akan memberikan error, tapi juga tidak
 *     terjadi apa-apa)
 */
a[0] = "k";
console.log(a);

//extracting string parts
/**
 * ada 3 methods untuk mengekstrak bagian dari string
 *  1. slice(start, end)
 *  2. substring(start, end)
 *  3. substr(start,length)
 */

//javscript string slice()
/**
 * slice akan mengambil bagian dari string dan mengembalikan bagian yang diekstrak ke string baru
 * 
 * method ini mengambil 2 parameters : start position, dan end position, (end tidak termasuk) 
 * 
 * note : 
 * end itu berada di index + 1, jadi jika terdapat string dengan panjang 5, maka jika di slice
 * batas slicenya ada 5, bukan 4
 */
let b = a.slice(0, 5);
console.log(b);

/**
 * jika kita tidak menspesifikkan akhir dari slicenya, kita akan mengambil semua string dimulai
 * dari parameter pertama
 */
b = a.slice(1);
console.log(b);

/**
 * jika kita menggunakan index negatif, maka posisinya akan dihitung dari belakang string
 */
console.log(a.slice(-1));

/**
 * contoh kedua ini adalah jika kita mengambil string dari belakang
 */
console.log(a.slice(-5, -1));

//javascript string subtstring()
/**
 * substring() mirip dengan slice()
 * 
 * perbedaannya ada di nilai start dan end yang lebih kecil dari 0 dianggap sebagai 0
 * (tidak memperbolehkan adanya negative index)
 * 
 * jika kita tidak memberikan parameter end, maka method substring() akan
 * mengambil semua string setelah start
 */
console.log(a.substring(0, 5));

//javascript string substr()
/**
 * substr() juga mirip dengan slice()
 * 
 * bedanya parameter keduanya menentukan berapa banyak string yang akan kita ambil setelah
 * parameter start
 * 
 * jika kita tidak memberikan parameter length, maka substr() akan mengambil semua string
 * 
 * jika diberikan index negatif, maka pengambilan string akan dimulai dari belakang
 * 
 * substr() sudah usang di javascript terbaru
 */
console.log(a.substr(0, 5));

//converting ke upper dan lower case
/**
 * string mengconvert string ke huruf besar (upper case) dengan toUpperCase()
 * 
 * string mengconvert string ke huruf kecil (lower case) dengan toLowerCase()
 */
console.log(a.toUpperCase());
console.log(a.toLowerCase());

//javascript string concat()
/**
 * method concat() menggabungkan 2 string yang berbeda
 * 
 * dengan parameter pertama sebagai pembatas kedua string, dan parameter kedua adalah string 
 * yang ingin digabungkan
 */
console.log(a.concat(" ", a.toUpperCase()));

/**
 * note : 
 * semua methods string diatas masih akan mengembalikan string baru, tidak mengubah
 * string yang digunakan dalam proses
 * 
 * string yang sudah dibuat tidak bisa diubah, hanya ditimpa dengan string baru
 */

//javascript string trim()
/**
 * method trim() menghapus whitespace dari awal dan akhir string
 */
b = "         " + a + "         ";
console.log(b.trim());

/**
 * selain trim(), ada juga trimStart() untuk menghapus whitespace diawal string
 * dan trimEnd() untuk menghapus whitespace diakhir string
 */

//javascript string Padding
/**
 * ECMAScript 2017 menambahkan 2 string methods baru berupa padStart() dan padEnd()
 * untuk menambah padding diawal dan diakhir string
 */

//javascript padStart()
/**
 * method padStart() menambahkan "padding" (tambahan) diawal string
 * 
 * method ini akan menambahkan string di awal string dengan panjang yang sudah ditentukan
 * 
 * parameter pertama untuk menentukan seberapa banyak paddingnya, sedangkan parameter
 * kedua untuk menentukan string apa yang dijadikan sebagai padding
 * 
 * note : 
 * padStart() hanya bisa menambahkan string sebagai padding, jika ingin
 * menambahkan angka sebagai padding, ubah terlebih dahulu angka tersebut menjadi
 * string
 */
console.log(a.padStart(4, ))

/**
 * selain padStart(), ada juga padEnd(), fungsinya sama dengan padStart()
 * namun digunakan untuk menambah padding pada akhir string
 */

//javascript string repeat()
/**
 * method repeat() mengembalikan string dengan beberapa copy string
 * 
 * method repeat() mengembalikan string baru
 * 
 * method repeat() tidak mengubah original string
 */
console.log(a.repeat(5));

//replacing string content
/**
 * method replace() akan mengganti sebuah string menjadi string yang baru
 * 
 * note : 
 * method replace() hanya akan mengubah string yang terkena match pertama
 */
console.log(a.replace("ak", "w"));

//replacing all string content
/**
 * method replaceAll() diperkenalkan pada tahun 2021
 * 
 * method ini akan mengubah seluruh kata yang match pada sebuah string, berbeda dengan
 * replace() yang hanya akan mengubah kata yang match pertama saja
 */
console.log(a.replaceAll("l", "s"));

/**
 * biasanya untuk mengganti konten string, lebih sering dengan menggunakan regex
 */

//mengconvert string menjadi array
/**
 * kita dapat mengconvert string yang ada menjadi sebuah array
 */

//javascript string split()
/**
 * string dapat diconvert menjadi array dengan method split()
 * 
 * parameter pertama berisi apa yang kita gunakan sebagai penanda pemisah
 * 
 * dan parameter kedua berisi berapa banyak akan dilakukan proses split 
 */
console.log(a.split(" "));

/**
 * jika tidak diberikan seperator, method split() akan memisahkan semua string menjadi array
 * 
 * jika seperatornya "", akan dikembalikan array dengan array single character
 */
console.log(a.split(""));