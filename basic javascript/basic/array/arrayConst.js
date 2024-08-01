console.log("array const : ");

//javascript array const
//ECMAScript 2015 (ES2015)
/**
 * pada tahun 2015, javascript mengenalkan keyword baru berupa const
 * 
 * sudah menjadi common practice untuk menggunakan const ketika mendeklarasikan
 * array
 */

const arrayConst = ["a", "b", "c"];

//tidak bisa di-reassign
/**
 * array yang dideklarasikan menggunakan const tidak dapat di reassign
 * 
 * arrayConst = ["b", "c"]; ini akan menyebabkan error
 */

//arrays bukanlah constant
/**
 * keyword const disini menjadi sedikit tidak tepat
 * 
 * keyword const ini tidak membuat sebuah constant array, tetapi constant
 * refrence dari array tersebut
 * 
 * karena inilah kita masih bisa merubah nilai dari array tersebut
 */

//element masih dapat diubah
/**
 * kita masih bisa merubah element dari array tersebut
 */
arrayConst.pop();
console.log(arrayConst);

arrayConst.push("jaka");
console.log(arrayConst);

//assign ketika dibuat
/**
 * javascript keyword const variable harus di assign setidaknya satu nilai ketika dibuat
 * 
 * artinya, sebuah array yang dideklarasikan dengan const harus diinisiasikan ketika dibuat
 * 
 * menggunakan const tanpa memberikan nilai pada array akan menyebabkan error 
 * 
 * const name;
 * name = ["kale", "llale"]; ini akan menyebabkan error
 * 
 * array yang dideklarasikan dengan var dapat dideklarasikan kapanpun
 * 
 * kita bahkan dapat menggunakan array tersebut sebelum bahkan dia dideklarasikan
 */
name = ["lock", "hack"];
console.log(name);
var name;

//const block code
/**
 * array yang dideklarasikan dengan const akan memiliki block scope
 * 
 * artinya, array yang dideklarasikan di block kode yang berbeda akan memiliki isi yang
 * berbeda pula
 */
{
    const arrayConst = ["llllllllll", "asdjfajd"];
    console.log(arrayConst);
}
console.log(arrayConst);

/**
 * tetapi array yang dideklarasikan dengan var tidak akan memiliki block scope
 */
{
    var name = ["lolo"];
    console.log(name);
}
console.log(name);

//mendeklarasikan ulang array 
/**
 * mendeklarasikan ulang sebuah array dengan var diperbolehkan di semua bagian program
 */
var name = [20];
console.log(name);

/**
 * namun, mendeklarasikan ulang sebuah array dengan const di block yang sama tidak diperbolehkan
 * 
 * const arrayConst = ["jakakak"]; ini akan menyebabkan error, karena arrayConst ada di scope yang sama
 * 
 * hal ini harus dilakukan di scope lain, tetapi tetap tidak bisa dilakukan proses pendeklarasian ulang
 * jika di block tersebut sudah ada const yang sama
 */
{
    arrayConst = [20, 10 , 5];
}


