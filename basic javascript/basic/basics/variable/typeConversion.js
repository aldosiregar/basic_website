console.log("type conversion : ");

//javascript type conversion
/**
 * javascript variable dapat dikonversi menjadi variable baru dan type data lain
 *  1. dengan menggunakan javascript function
 *  2. secara otomatis dilakukan oleh javascript
 *  */ 

//mengkonversi string ke number
/**
 * global method Number() mengkonversi sebuah variable (atau sebuah nilai) menjadi number
 * 
 * sebuah numeric string ("3.14") dikonversi menjadi number (3.14)
 * 
 * sebuah empty string (seperti "") dikonversi menjadi 0
 * 
 * sebuah non numeric string (seperti "john") dikonversi menjadi NaN (Not a Number)
 */
//yang dapat dikonversi
console.log(Number("3.14"));
console.log(Number(Math.PI));
console.log(Number(" "));
console.log(Number(""));

//yang tidak dapat dikonversi
console.log(Number("99 88"));
console.log(Number("John"));

//Number method
/**
 * pada tutorial number kita sudah membahas soal method yang ada pada number
 * 
 * kali ini cuma berisi method yang digunakan untuk konversi tipe saja
 * 
 * Method	        Description
 * Number()	        Returns a number, converted from its argument
 * 
 * parseFloat()	    Parses a string and returns a floating point number
 * 
 * parseInt()	    Parses a string and returns an integer
 */

//unary + operator
/**
 * unary + operator dapat digunakan untuk mengkonversi variable menjadi number
 */
let typeConversion = "5"; //string
typeConversion = + typeConversion; //number

/**
 * jika variable tersebut tidak bisa dikonversi menjadi number, maka akan tetap
 * dilakukan proses konversi namun akan menghasilkan NaN
 */
typeConversion = "kol"; //string
typeConversion = + typeConversion; //NaN

//mengkonversi number menjadi string
/**
 * global method String() dapat mengkonversi number menjadi string
 * 
 * method ini dapat digunakan pada semua tipe number, literals, variables, atau expression
 */
console.log(String(typeConversion));        // returns a string from a number variable x
console.log(String(123));                   // returns a string from a number literal 123
console.log(String(100 + 23));              // returns a string from a number from an expression

/**
 * Number method toString() juga melakukan hal yang sama
 */
console.log(typeConversion.toString());
console.log((123).toString());
console.log((100 + 23).toString());

//method lain
/**
 * pada tutorial number, ada beberapa method lain yang dapat digunakan untuk mengkonversi
 * number menjadi string
 * 
 * Method	        Description
 * toExponential()	Returns a string, with a number rounded 
 *                  and written using exponential notation.
 * 
 * toFixed()	    Returns a string, with a number rounded 
 *                  and written with a specified number of decimals.
 * 
 * toPrecision()	Returns a string, with a number written with a specified length
 */

//converting Dates menjadi Number
/**
 * global method Number() dapat mengkonversi date menjadi number
 */
let typeConversionDate = new Date();
console.log(Number(typeConversionDate));

//method getTime() juga melakukan hal yang sama
console.log(typeConversionDate.getTime());

//converting dates into string
/**
 * global method String() dapat mengkonversi date menjadi string
 */
console.log(String(typeConversionDate));

/**
 * method Date toString() juga melakukan hal yang sama
 */
console.log(typeConversionDate.toString());

/**
 * pada tutorial date kita sudah membahas beberapa method yang dapat digunakan untuk 
 * mengkonversi string, diantaranya : 
 * 
 * Method	            Description
 * getDate()	        Get the day as a number (1-31)
 * 
 * getDay()	            Get the weekday a number (0-6)
 * 
 * getFullYear()	    Get the four digit year (yyyy)
 * 
 * getHours()	        Get the hour (0-23)
 * 
 * getMilliseconds()	Get the milliseconds (0-999)
 * 
 * getMinutes()	        Get the minutes (0-59)
 * 
 * getMonth()	        Get the month (0-11)
 * 
 * getSeconds()	        Get the seconds (0-59)
 * 
 * getTime()	        Get the time (milliseconds since January 1, 1970)
 */

//mengkonversi boolean menjadi string
/**
 * method global Number dapat mengkonversi boolean menjadi string
 */
console.log(Number(true)); //1
console.log(Number(false)); //0

//mengkonversi boolean menjadi string
/**
 * global method String() dapat digunakan untuk mengkonversi boolean menjadi string
 */
console.log(String(true)); //"true"
console.log(String(false)); //"false"

/**
 * boolean method toString() juga melakukan hal yang sama
 */
console.log(true.toString());
console.log(false.toString());

//automatic type conversion
/**
 * ketika javascript mencoba untuk beroperasi pada type data yang "salah", javascript
 * akan mencoba untuk mengkonversi nilai menjadi type yang "benar", hasilnya tidak
 * selalu sesuai ekspektasi kita
 */
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

//automatic string conversion
/**
 * javascript secara otomatis memanggil fungsi toString() pada variable ketika kita
 * mencoba untuk meng-"output" sebuah object atau variable
 * 
 * document.getElementById("demo").innerHTML = myVar;
 * 
 * if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
 * if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
 * if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
 */

/**
 * number dan boolean juga dikonversi, namun hasilnya tidak akan terlalu kelihatan
 * 
 * if myVar = 123             // toString converts to "123"
 * if myVar = true            // toString converts to "true"
 * if myVar = false           // toString converts to "false"
 */

//javascript type conversion refrence
/**
 * berikut ini beberapa contoh konversi tipe data pada javascript
 * 
 * Original Value	Converted to Number	    Converted to String	    Converted to Boolean
 * false	        0	                    "false"	                false	
 * 
 * true	            1	                    "true"	                true	
 * 
 * 0	            0	                    "0"	                    false	
 * 
 * 1	            1	                    "1"	                    true
 * 	
 * "0"	            0	                    "0"	                    (true)
 * 	
 * "000"	        0	                    "000"	                (true)	
 * 
 * "1"	            1	                    "1"	                    true	
 * 
 * NaN	            NaN	                    "NaN"	                false	
 * 
 * Infinity	        Infinity	            "Infinity"	            true	
 * 
 * -Infinity	    -Infinity	            "-Infinity"	            true
 * 	
 * ""	            (0)	                    ""	                    false	
 * 
 * "20"	            20	                    "20"	                true	
 * 
 * "twenty"	        NaN	                    "twenty"	            true	
 * 
 * [ ]	            (0)	                    ""	                    true	
 * 
 * [20]	            (20)	                "20"	                true	
 * 
 * [10,20]	        NaN	                    "10,20"	                true	
 * 
 * ["twenty"]	    NaN	                    "twenty"	            true	
 * 
 * ["ten","twenty"]	NaN	                    "ten,twenty"	        true	
 * 
 * function(){}	    NaN	                    "function(){}"	        true	
 * 
 * { }	            NaN	                    "[object Object]"	    true	
 * 
 * null	            (0)	                    "null"	                false	
 * 
 * undefined	    NaN	                    "undefined"	            false
 * 
 * keterangan : 
 * nilai pada quote menggambarkan nilai string
 * 
 * nilai yang diberi parentheses adalah (beberapa) nilai yang programmer tidak harapkan
 */