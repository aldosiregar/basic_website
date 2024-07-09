//javascript strings
/**
 * string digunakan untuk menyimpan text
 * 
 * strings ditulis dengan quotes
 */

//using quotes
/**
 * javascript string adalah nol atau lebih kerakter yang ditulis di dalam quotes
 * 
 * let name = "john";
 * 
 * kita dapat menggunakan single quote ataupun double quote
 * 
 * note : 
 * string yang dibuat dengan single quote maupun double quote sebenarnya sama saja
 * tidak ada perbedaan diantara keduanya
 */

//quotes didalam quotes
/**
 * kita dapat menggunakan quote didalam quote, selama tidak dalam quotes yang sama
 */
let name = 'john "doe"';

//template string
/**
 * template string dikenalkan pada ES6 (javascript 2016)
 * 
 * template adalah string yang ditutup dengan backtics (`)
 * 
 * templates memperbolehkan kita menggunakan single quote ataupun double quote ketika membuat string
 */
let second = `'jaka' bisa dipakai di "jika"`;

/**
 * note : 
 * template tidak di support di internet explorer
 */

//string length
/**
 * untuk mencari panjang dari sebuah string, kita bisa menggunakan property length
 */
console.log(second.length);

//escape characters
/**
 * karena sebuah string harus ditulis didalam quotes, javascript akan salah membaca string berikut
 * 
 * let text = "HRD adalah singkatan dari "Human Research Developement"";
 * 
 * string diatas malah dapat dibaca menjadi "HRD adalah singkatan dari" (tentunya gabisa juga, toh error)
 * 
 * untuk mengatasi masalah ini, kita dapat menggunakan backslash escape characters
 * 
 * backslash escape characters (\) mengubah special characters menjadi string characters
 * 
 * Code	    Result	    Description
 * \'	    '	    Single quote
 * 
 * \"	    "	    Double quote
 * 
 * \\	    \	    Backslash 
 */
let third = "yes\'nt bukan berarti \"yes not\" //";

/**
 * selain itu, ada 6 escape characters lain : 
 * 
 * Code	    Result
 * \b	    Backspace
 * 
 * \f	    Form Feed
 * 
 * \n	    New Line
 * 
 * \r	    Carriage Return
 * 
 * \t	    Horizontal Tabulator
 * 
 * \v	    Vertical Tabulator
 * 
 * note : 
 * keenam escape characters diatas sebenarnya dibuat untuk mengontrol typewriters, teletypes, dan
 * fax machines, keenam escape characters ini tidak masuk akal untuk digunakan di HTML
 */

//memecah baris yang panjang
/**
 * untuk keterbacaan, programmer biasanya selalu menghindari menulis baris kode yang panjang
 * 
 * cara terbaik untuk memecah statement adalah setelah operators
 */
document.getElementById("jika").innerHTML = 
"helloo world";

/**
 * dan cara terbaik untuk memecah string adalah dengan menggunakan string addition
 */
document.getElementById("jika").innerHTML = "hello" + 
"world";

//template string
/**
 * selain string addition, template string juga memperbolehkan multiline string
 */
let text2 = 
`
caka
ciki
cuku
`;

//javascript string sebagai object
/**
 * biasanya, javascript string adalah primitive values, dibuat dengan literals
 * 
 * let name = "jean";
 * 
 * tetapi string juga dapat dianggap sebagai object dengan keyword new
 * 
 * let name = new String("john");
 * 
 * note : 
 * seperti yang sudah dikatakan sebelumnya, jangan membuat string dari objects
 * 
 * keyword new hanya akan membuat kode menjadi rumit dan memperlambat proses komputasi
 * 
 * string object dapat menghasilkan sesuatu yang tak terduga 
 */

/**
 * pada operator ==, x dan y adalah benda yang sama
 * 
 * tetapi tidak pada operator ===
 */
let x = "john";
let y = new String("john");
console.log(x == y);
console.log(x === y);

/**
 * membandingkan kedua object javascripts selalu berakhir salah
 */