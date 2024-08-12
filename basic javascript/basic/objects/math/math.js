console.log("math object : ");

//javascript math objects memperbolehkan kita untuk melakukan proses matematika pada angka
console.log(Math.PI);

//math object
/**
 * tidak seperti object lain, math object tidak memiliki constructor
 * 
 * math object bersifat static
 * 
 * semua method dan properties dapat dibuat tanpa harus membuat math object
 * terlebih dahulu
 */

//math properties
/**
 * syntax untuk math properties adalah Math.properties
 * 
 * javascript 8 menyediakan constant matematika yang dapat diakses dengan Math properties
 */
console.log(Math.E);        // returns Euler's number
console.log(Math.PI);       // returns PI
console.log(Math.SQRT2)     // returns the square root of 2
console.log(Math.SQRT1_2)   // returns the square root of 1/2
console.log(Math.LN2)       // returns the natural logarithm of 2
console.log(Math.LN10)      // returns the natural logarithm of 10
console.log(Math.LOG2E)     // returns base 2 logarithm of E
console.log(Math.LOG10E)    // returns base 10 logarithm of E

//math method
/**
 * syntax untuk method pada Math adalah Math.method(number)
 */

//number menjadi iterger
/**
 * ada 4 method untuk membulatkan number menjadi interger
 * 
 * Math.round(x)	Returns x rounded to its nearest integer
 * 
 * Math.ceil(x)	Returns x rounded up to its nearest integer
 * 
 * Math.floor(x)	Returns x rounded down to its nearest integer
 * 
 * Math.trunc(x)	Returns the integer part of x (new in ES6) 
 */

//math.round()
/**
 * method ini akan mengembalikan pembulatan dari interger terdekat
 * 
 * jika number dibawah setengahnya (number < number + 0.5), maka number tersebut akan dibulatkan
 * ke bawahnya 
 * 
 * jika number berada diatas setengahnya (number >= number + 0.5), maka number tersebut akan 
 * dibulatkan ke atasnya
 */
console.log(Math.round(5.4));

//Math.ceil()
/**
 * method ini akan membulatkan number keatas dari interger terdekat
 */
console.log(Math.ceil(4.1));

//Math.floor()
/**
 * method ini akan membulatkan number kebawah dari interger terdekatnya
 */
console.log(Math.floor(4.9));

//Math.trunc()
/**
 * method ini akan mengembalikan bagian interger (bulat) dari number tersebut
 */
console.log(Math.trunc(10.3));

//Math.sign()
/**
 * mathod ini akan mengembalikan kondisi number, apakah negatif, nol, atau positif
 * 
 * 1 untuk positif, 0 untuk nilai nol, dan -1 untuk negatif
 */
console.log(Math.sign(0));

//Math.pow()
/**
 * method ini akan mengembalikan x jika dipangkatkan oleh y
 * (parameter 1 dipangkatkan parameter 2)
 */
console.log(Math.pow(2,3));

//Math.sqrt()
/**
 * method ini akan mengembalikan akar dari number
 */
console.log(Math.sqrt(4));

//Math.abs()
/**
 * method ini akan mengembalikan nilai absolute dari number tersebut
 */
console.log(Math.abs(-4));

//Math.sin()
/**
 * Method ini mengembalikan sine (nilai antara -1 dan 1) dari angle x (dalam radian)
 * 
 * jika kita ingin menggunakan sudut, kita harus mengkonversinya terlebih dahulu ke radian
 * 
 * angle ke radian = angle in degre * PI / 180
 */
console.log(Math.sin(90 * Math.PI / 180));

//Math.cos()
/**
 * method ini berfungsi sama dengan sin, namun untuk menghitung cos
 */
console.log(Math.cos(180 * Math.PI / 180));

//Math.min() dan Math.max()
/**
 * kedua method ini dapat digunakan untuk mencari nilai terendah dan tertinggi pada 
 * beberapa kumpulan angka
 */
let fewNumbers = [10, 0, 100, 30, 5, 7];
console.log(Math.min.apply(null, fewNumbers));
console.log(Math.max.apply(null, fewNumbers));

//Math.random()
/**
 * method ini mengembalikan nilai random antara 0 (inclusive), dan 1 (exclusive)
 * 
 * lebih lanjut akan dijelaskan di tutorial mathRandom
 */
console.log(Math.random());

//Math.log()
/**
 * method ini mengembalikan natural logarithm dari x
 * 
 * natural logarithm mengembalikan waktu yang diperlukan untuk mencapat level pertumbuhan
 * tertentu
 */
console.log(Math.log(2));

/**
 * Math.E dan Math.log() sebenarnya mirip
 */
//berapa banyak kita harus mengalikan E agar mendapatkan nilai 10
console.log(Math.E ** Math.log(10));

//Math.log2()
/**
 * Method ini mengembalikan logaritma base 2 dari x
 */
//berapa banyak kita harus memangkatkan 2 untuk mendapatkan 8
console.log(Math.log2(8));

//Math.log10()
/**
 * mathod ini mengembalikan logaritma base 10 dari x
 */
//berapa kali kita harus memangkat 10 untuk mendapatkan 1000
console.log(Math.log10(1000));

//javascript math method lainnya
/**
 * Method	    Description
 * abs(x)	    Returns the absolute value of x
 * 
 * acos(x)	    Returns the arccosine of x, in radians
 * 
 * acosh(x)	    Returns the hyperbolic arccosine of x
 * 
 * asin(x)	    Returns the arcsine of x, in radians
 * 
 * asinh(x)	    Returns the hyperbolic arcsine of x
 * 
 * atan(x)	    Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
 * 
 * atan2(y, x)	Returns the arctangent of the quotient of its arguments
 * 
 * atanh(x)	    Returns the hyperbolic arctangent of x
 * 
 * cbrt(x)	    Returns the cubic root of x
 * 
 * ceil(x)	    Returns x, rounded upwards to the nearest integer
 * 
 * cos(x)	    Returns the cosine of x (x is in radians)
 * 
 * cosh(x)	    Returns the hyperbolic cosine of x
 * 
 * exp(x)	    Returns the value of Exp
 * 
 * floor(x)	    Returns x, rounded downwards to the nearest integer
 * 
 * log(x)	    Returns the natural logarithm (base E) of x
 * 
 * max(x, y, z, ..., n)	Returns the number with the highest value
 * 
 * min(x, y, z, ..., n)	Returns the number with the lowest value
 * 
 * pow(x, y)	Returns the value of x to the power of y
 * 
 * random()	    Returns a random number between 0 and 1
 * 
 * round(x)	    Rounds x to the nearest integer
 * 
 * sign(x)	    Returns if x is negative, null or positive (-1, 0, 1)
 * 
 * sin(x)	    Returns the sine of x (x is in radians)
 * 
 * sinh(x)	    Returns the hyperbolic sine of x
 * 
 * sqrt(x)	    Returns the square root of x
 * 
 * tan(x)	    Returns the tangent of an angle
 * 
 * tanh(x)	    Returns the hyperbolic tangent of a number
 * 
 * trunc(x)	    Returns the integer part of a number (x)
 */