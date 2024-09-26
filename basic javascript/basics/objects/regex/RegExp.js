//RegExp javascript
/**
 * regular expression adalah kumpulan character yang membentuk sebuah pola pencarian
 * 
 * pola pencarian ini dapat digunakan untuk operasi text search dan text replace 
 */
console.log("RegExp javascript");

//apa itu regular expression
/**
 * regular expression adalah kumpulan kata yang dapat digunakan untuk membentuk search pattern
 * 
 * ketika kita mencari data pada text, kita dapat menggunakan pola pencarian ini untuk 
 * menjelaskan apa yang sedang kita cari
 * 
 * sebuah regular expression dapat berupa single character, atau juga pola yang lebih rumit
 * 
 * regular expression dapat digunakan untuk melakukan operasi text search maupun text replace
 * 
 * syntax : 
 * /pattern/modifiers; 
 * 
 */
/make/i;

/** 
 * penjelasan : 
 * /make/i adalah sebuah regular expression
 * 
 * make adalah patern (yang digunakan pada search)
 * 
 * i adalah modifiers (mengatur search menjadi case-sensitive)
 */

//menggunakan string method
/**
 * pada javascript, regular expression banyak dipakai dengan dua string method : search() dan
 * replace()
 * 
 * method search() menggunakan sebuah expression untuk mencari match, dan mengembalikan posisi
 * match
 * 
 * method replace() mengembalikan string yang telah termodifikasi dimana pattern telah
 * di replace
 */

//menggunakan String search() dengan regex
/**
 * method search() mencari string dengan nilai spesifik dan mengembalikan posisi match
 * 
 * kita bisa menggunakan Regular Expression pada method search ini
 */
let pattern = /lake/i;
let regexText = "justin timberlake";

console.log(regexText.search(pattern));

//menggunakan String replace() dengan regex
/**
 * method replace() mengganti nilai tertentu dengan nilai lain pada string
 * 
 * method ini juga dapat digunakan dengan regex untuk mencari pattern tersebut
 * dan menggantinya
 */
console.log(regexText.replace(pattern, "bale"));

/**
 * regular expression arguments (dan bukan string arguments) dapat digunakan di method diatas
 * 
 * regular expression dapat membuat pencarian kita menjadi lebih baik (misalnya dengan menambahkan
 * fitur case-sensitive)
 */

//regular expression modifiers
/**
 * modifiers dapat digunakan untuk menentukan sifat patern pencarian
 * 
 * Modifier	    Description
 * i	        Perform case-insensitive matching
 * 	
 * g	        Perform a global match (find all)
 * 	
 * m	        Perform multiline matching	
 * 
 * d	        Perform start and end matching (New in ES2022)
 */

//regular expression pattern
/**
 * brackets digunakan untuk mencari kumpulan characters
 * 
 * Expression	Description	
 * [abc]	    Find any of the characters between the brackets	
 * 
 * [0-9]	    Find any of the digits between the brackets	
 * 
 * (x|y)	    Find any of the alternatives separated with |
 */

//meta characters
/**
 * meta characters adalah karakter dengan arti spesial
 * 
 * Metacharacter	Description	
 * \d	            Find a digit
 * 	
 * \s	            Find a whitespace character	
 * 
 * \b	            Find a match at the beginning of a word like this: 
 *                  \bWORD, or at the end of a word like this: WORD\b	
 * 
 * \uxxxx	        Find the Unicode character specified by the hexadecimal number xxxx
 */

//quantifiers
/**
 * quantifiers artinya jumlah
 * 
 * Quantifier	Description	
 * n+	        Matches any string that contains at least one n
 * 
 * n*	        Matches any string that contains zero or more occurrences of n
 * 
 * n?	        Matches any string that contains zero or one occurrences of n
 */

//menggunakan RegExp objects
/**
 * pada javascript, RegExp object adalah regular expression object dengan predefined
 * properties dan method
 */

//menggunakan test()
/**
 * method test() adalah RegExp expression method
 * 
 * method ini mencari string pada pattern, dan mengembalikan true atau false, tergantung
 * dari hasilnya
 */
//cari character e
pattern = /e/;
console.log(pattern.test(regexText));

//menggunakan exec()
/**
 * method exec() adalah RegExp expression method
 * 
 * method ini mencari string untuk pattern spesifik, dan mengembalikan text yang ditemukan
 * sebagai sebuah object
 * 
 * jika tidak ditemukan match, maka akan dikembalikan empty (null) object
 */
console.log(/lake/.exec(regexText));