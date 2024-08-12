//javascript number properties
/**
 * beberapa properties yang ada pada object Number antara lain
 *  
 * Property	            Description
 * EPSILON	            The difference between 1 and the smallest number > 1.
 * 
 * MAX_VALUE	        The largest number possible in JavaScript
 * 
 * MIN_VALUE	        The smallest number possible in JavaScript
 * 
 * MAX_SAFE_INTEGER	    The maximum safe integer (253 - 1)
 * 
 * MIN_SAFE_INTEGER	    The minimum safe integer -(253 - 1)
 * 
 * POSITIVE_INFINITY	Infinity (returned on overflow)
 * 
 * NEGATIVE_INFINITY	Negative infinity (returned on overflow)
 * 
 * NaN	                A "Not-a-Number" value
 */
console.log("number properties : ");

//EPSILON properties
/**
 *  Number.EPSILON adalah perbedaan titik terkecil dari floating point yang lebih besar dari 1 dan 1
 */
console.log(Number.EPSILON);

//MAX_VALUE properties
/**
 * Number.MAX_VALUE adalah constant yang merepresentasikan angka terbesar yang bisa
 * ditampung dalam javascript
 */
console.log(Number.MAX_VALUE);

//MIN_VALUE properties
/**
 * kebalikan dari Number.MAX_VALUE, propertiy ini merepresentasikan angka terkecil 
 * yang bisa ditampung dalam javascript
 */
console.log(Number.MIN_VALUE);

//MAX_SAFE_INTERGER
/**
 * Number.MAX_SAFE_INTERGER merepresentasikan nilai maksimum dari safe interger di javascript
 * 
 * Number.MAX_SAFE_INTERGER isinya (25^3 - 1)
 */
console.log(Number.MAX_SAFE_INTEGER);

//MIN_SAFE_INTERGER
/**
 * ini adalah kebalikan dari Number.MAX_SAFE_INTERGER
 * 
 * nilainya -(25^3 - 1)
 */
console.log(Number.MIN_SAFE_INTEGER);

//POSITIVE_INFINITY properties
/**
 *  properties ini berisi nilai tak hingga, biasanya diisi ketika
 * terjadi overflow pada saat inisiasi number pada variabel (1/0)
 * */ 
console.log(Number.POSITIVE_INFINITY);

//NEGATIF_INFINITY properties
/**
 * sama dengan properties Number.POSITIVE_INFINITY, tetapi nilainya tercipta ketika 
 * terjadi overflow di nilai negatif
 */
console.log(Number.NEGATIVE_INFINITY);

//NaN properties
/**
 * NaN atau Not an Number adalah sebuah nilai yang merepresentasikan bahwa nilai tersebut bukanlah angka
 * yang legal
 * 
 * biasanya terjadi ketika kita melakukan operasi matematika pada huruf
 */
console.log(Number.NaN);