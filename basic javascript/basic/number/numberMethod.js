//javascript method number
/**
 * beberapa method untuk number dalam javascript
 * 
 * Method	        Description
 * toString()	    Returns a number as a string
 * 
 * toExponential()	Returns a number written in exponential notation
 * 
 * toFixed()	    Returns a number written with a number of decimals
 * 
 * toPrecision()	Returns a number written with a specified length
 * 
 * valueOf()	    Returns a number as a number
 */

//toString() method
/**
 * toString() method mengembalikan nilai dari number sebagai sebuah string
 */

let numbers = 10;
console.log("tipe = " + typeof numbers.toString());

//toExponential() method
/**
 * method toExponential() akan mengembalikan string dengan numbernya dibulatkan dan dituliskan
 * exponential notationnya
 * 
 * parameternya akan menentukan berapa angka dibelakang koma yang kita inginkan
 * 
 * parameternya bersifat opsional, jika kita tidak menentukan angkanya
 * maka angka exponentialnya tidak akan dibulatkan
 */
const pi = 3.141592653589793238462643383279502884197;
console.log(`nilai exponential dari pi = ${pi.toExponential(3).toString()}`);

//toFixed() methods
/**
 * method toFixed() akan mengembalikan string, dengan number yang ditulis dengan tambahan angka desimal
 * 
 * parameternya akan menentukan berapa banyak angka desimalnya, jika tidak diberikan angka pastinya
 * maka number yang diproses tidak akan dilakukan perbuahan ke desimal
 */
console.log(numbers.toFixed(2));

//toPrecission() method
/**
 * method toPrecission() akan mengembalikan string, dengan number yang dispesifikkan presisi angkanya
 * 
 * parameternya menentukan seberapa tepat presisi dari number tersebut
 */
console.log(pi.toPrecision(4));

//valueOf() method
/**
 * method valueOf() akan mengembalikan number sebagai number
 */
console.log(typeof numbers.valueOf());

/**
 * dalam javascript, number dapat menjadi primitive value (typeof = number), atau sebuah object
 * (typeof = object)
 * 
 * method valueOf() digunakan di javascript untuk mengkonversi number object menjadi primitive value
 * 
 * tidak ada alasan untuk menggunakan method ini di sebagian besar project
 */

//convert variable into numbers
/**
 * ada 3 method javascript yang bisa digunakan untuk mengkonversi variable menjadi number
 * 
 * Method	    Description
 * Number()	    Returns a number converted from its argument.
 * 
 * parseFloat()	Parses its argument and returns a floating point number
 * 
 * parseInt()	Parses its argument and returns a whole number
 * 
 * ketiga method diatas bukanlah method number, melainkan global methods 
 */

//Number() method
/**
 * method Number() dapat digunakan untuk mengkonversi variabel javascript mnejadi number;
 */
console.log(`sebelum diubah = ${typeof true}`);
console.log(`setelah diubah = ${typeof Number(true)}`);

//Number() method digunakan untuk date
/**
 * selain itu, method Number() juga bisa digunakan untuk date
 */
console.log(Number(new Date("1971-08-21")));

/**
 * method Number() mengembalikan banyaknya milisecond sejak tanggal 1971-01-01
 */

//parseInt() method
/**
 * method parseInt() mengubah string menjadi number, diperboleh adanya space, dan hanya angka pertama
 * yang dikembalikan
 * 
 * jika number tidak bisa dikonversi, maka akan dikembalikan nilai NaN
 */
console.log(parseInt(numbers.toString()));

//parseFloat() method
/**
 * method parseFloat() sama dengan method parseInt, bedanya string diubah menjadi bentuk float
 * (masih dihitung number, namun type datanya float) 
 */
console.log(parseFloat(numbers.toString()));

//Number() object methods
/**
 * object methods berikut ada di Number Object
 * 
 * Method                   Description
 * Number.isInteger()	    Returns true if the argument is an integer
 * 
 * Number.isSafeInteger()	Returns true if the argument is a safe integer
 * 
 * Number.parseFloat()	    Converts a string to a number
 * 
 * Number.parseInt()	    Converts a string to a whole number
 */

/**
 * note : 
 * Number method tidak dapat digunakan di variable
 * 
 * number method diatas termasuk kedalam javascript Number Object
 * 
 * methods diatas hanya dapat diakses dengan (Number.isInterger())
 * 
 * menggunakan X.isInterger() dimana ketika variable X masih berupa variable akan memberikan error
 * TypeError X.isInterger() is not a function
 */

//Number.isInterger() method
/**
 * method ini memeriksa jika argumentnya adalah interger atau bukan
 */
console.log(Number.isInteger(numbers));

//Number.isSafeInterger() method
/**
 * safe interger adalah interger yang dapat secara tepat merepresentasikan double precision number
 * 
 * method Number.isSafeInterger() mengembalikan true jika argumentnya adalah safe interger 
 */
console.log(Number.isSafeInteger(numbers));
console.log(Number.isSafeInteger(123456789012875941471));

/**
 * note : 
 * safe interger ada diantara  -(253 - 1) sampai +(253 - 1)
 * 
 * lebih atau kurang dari itu, maka angka tersebut sudah tidak termasuk safe interger
 */

//Number.parseFloat() method
/**
 * method ini merubah string menjadi menjadi number
 * 
 * space diperbolehkan, hanya bagian awalnya yang dikembalikan
 * 
 * jika number tidak dapat dikonversi, maka akan dikembalikan NaN
 */
console.log(Number.parseFloat(" 20-"));

/**
 * note : 
 * Number method Number.parseInt() dan Number.parseFloat 
 * 
 * sama dengan
 * 
 * global method parseInt() dan parseFloat()
 * 
 * tujuan dari modularisasi menjadi global ini adalah agar mudah untuk menggunakan kode javascript
 * yang sama diluar browser
 */

//Number.parseInt() method
/**
 * method Number.parseInt() merubah string menjadi number
 * 
 * sama saja dengan sebelumnya
 */
console.log(Number.parseInt(" 10 tahun "));