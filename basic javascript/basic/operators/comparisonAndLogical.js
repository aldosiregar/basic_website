console.log("comparison and logical operators : ")

//javascript comparison and logical operators
/**
 * comparison dan logical operators digunakan untuk menguji true atau false
 */

//comparison operators
/**
 * comparison operators digunakan dalam logical statements untuk menentukan kesetaraan
 * atau perbedaan antara variable atau nilai
 * 
 * diberikan x = 5, contoh dibawah ini menjelaskan tentang prosesnya
 * 
 * Operator	    Description	                        Comparing	Returns
 * ==	        equal to	                        x == 8	    false	
 *                                                  x == 5	    true	
 *                                                  x == "5"	true
 * 	
 * ===	        equal value and equal type	        x === 5	    true	
 *                                                  x === "5"	false	
 * 
 * !=	        not equal	                        x != 8	    true	
 * 
 * !==	        not equal value or not equal type	x !== 5	    false	
 *                                                  x !== "5"	true	
 *                                                  x !== 8	    true	
 * 
 * >	        greater than	                    x > 8	    false	
 * 
 * <	        less than	                        x < 8	    true	
 * 
 * >=	        greater than or equal to	        x >= 8	    false
 * 	
 * <=	        less than or equal to	            x <= 8	    true
 */

//bagaimana penggunaanya
/**
 * comparison operators dapat digunakan di conditional statements untuk membandingkan
 * dan melakukan aksi tergantung dengan hasilnya
 */
var age = 10;
if (age < 18) console.log("dibawah 18 tahun");

//logical operators
/**
 * logical operators digunakan untuk menentukan logika antara variable atau nilai
 * 
 * diberikan x = 6 dan y = 3, contoh dibawah ini menjelaskan tentang prosesnya
 * 
 * Operator	    Description	    Example	
 * &&	        and	            (x < 10 && y > 1) is true	
 * ||	        or	            (x == 5 || y == 5) is false	
 * !	        not	            !(x == y) is true
 */

//conditional (ternary) operators
/**
 * javascript juga menyediakan operator kondisi yang memasukkan value pada variable
 * berdasarkan kondisinya
 * 
 * syntax : 
 * variablename = (condition) ? value1 (if true) : value2 (if false);
 */
let ternaryOperators = (age < 18) ? "dibawah umur" : "sudah cukup";
console.log(ternaryOperators);

//membandingkan beberapa type
/**
 * membandingkan data yang berbeda type dapat memberikan hasil yang tak terduga
 * 
 * ketika membandingkan string dan number, javascript akan mengkonversi string tersebut 
 * menjadi number ketika melakukan perbandingan, string kosong akan dikonversi menjadi 0
 * . non-numeric string dikonversi menjadi NaN dan selalu berakhir false
 * 
 * Case	            Value	
 * 2 < 12	        true	
 * 
 * 2 < "12"	        true	
 * 
 * 2 < "John"	    false	
 * 
 * 2 > "John"	    false	
 * 
 * 2 == "John"	    false	
 * 
 * "2" < "12"	    false	(karena keduanya berbentuk string, yang dibandingkan adalah huruf pertama)
 * 
 * "2" > "12"	    true	
 * 
 * "2" == "12"	    false   
 * 
 * ketika membandingkan 2 strings, "2" akan lebih besar dari "12" karena (secara alphabet)
 * "2" lebih besar dari "1"
 * 
 * untuk mengamankan hasil tes, variable harus dikonversi menjadi tipe yang sesuai sebelum
 * dibandingkan
 */
let comparisonResult = "";
if(isNaN(age)){
    comparisonResult = "x bukan angka";
}
else{
    comparisonResult = (age < 10) ? "dibawah umur" : "cukup umur";
}

//the nullish coalescing operators (??)
/**
 * operator ?? mengembalikan argument pertama jika tidak nullish (NULL atau undefined)
 * 
 * jika benar, maka dikembalikan arguments kedua
 */
let isNull;
let ifDataNulls = "data ini tidak ada isinya";
comparisonResult = age ?? ifDataNulls;

//optional chaining operators (?.)
/**
 * operator ini mengembalikan undefined jika object itu undefined atau null
 * (daripada memberikan error)
 */
const carsObj = {name : "volvo", tank : 2000, gear : 10};
//mencoba memanggil properties maxspeed pada carsObj
console.log(carsObj?.maxspeed);