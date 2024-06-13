/**
 * keyword const dikenalkan di ES6 (2015)
 * 
 * variabel yang dibuat dengan const tidak dapat dideklarasikan ulang
 * 
 * variabel yang dibuat dengan const tidak dapat diubah nilainya
 * 
 * variabel yang dibuat dengan const memiliki block scope
 */
try{
    const PI = 3.1415;
    PI = PI + 10;
}
catch(err){
    document.getElementById("constReassignError").innerHTML = err;
}

//harus di assign terlebih dahulu
/**
 * variabel const javascript harus diberikan nilai ketika mereka dideklarasikan
 * 
 * contoh yang salah:
 * const assigned;
 * assigned = 10;
 */

//kapan menggunakan javascript const
/**
 * selalu deklarasikan const ketika kita tahu nilai variabelnya tidak boleh diubah
 * 
 * gunakan const ketika kita mendeklarasikan : 
 *  1. array baru
 *  2. object baru
 *  3. fungsi baru
 *  4. RegEXP baru
 */

//constant object dan array
/**
 * keyword const sedikit missleading
 * 
 * karena keyword ini tidak membuat nilai yang konstan, namun mendefinisikan constant refrence ke sebuah nilai
 * 
 * karena ini kita tidak dapat :
 *  1. mengganti nilai constant
 *  2. mengganti array constant
 *  3. mengganti object constant
 * 
 * tapi kita dapat :
 *  1. mengganti element dari constant array
 *  2. mengganti properties dari constant object
 */

//constant array
/**
 * kita dapat mengubah nilai dari constant array
 */
const named = ["surti", "mangga", "jam"];
//kita dapat merubah element
named[0] = "jambu";
//serta menambahkan element baru
named.push("john");
document.getElementById("constArray").innerHTML = named;

/**
 * tetapi kita tidak dapat mendeklarasikan ulang constant array
 * 
 * err : 
 * const named = ["man"];
 */

//const object
/**
 * kita dapat mengganti properti dari constant object
 */
const bio = {nama:"jukri", umur:21, jenisKelamin: "L"};
//kita bisa mengganti propertinya
bio.nama = "john";
//kita juga bisa menambah properti baru
bio.noHp = 81289990093;
document.getElementById("constObject").innerHTML = bio.noHp;

/**
 * namun kita tidak dapat mengisi ulang constant object
 * 
 * err : 
 * const bio = {job:"ob"};
 */

//block scope
/**
 * mendeklarasikan variabel dengan const sama dengan let tentang block scope
 * 
 * x yang dideklarasikan di dalam block tidak sama dengan yang dideklarasikan di luar block;
 */
const x = 10;
{
    const x = 5;
}
document.getElementById("constBlockScope").innerHTML = x;

//hoisting
/**
 * variabel yang didefinisikan dengan var dihoisted ke paling atas dan dapat diinisiasi kapan saja
 * 
 * artinya kita dapat menggunakan variabel tersebut sebelum variabelnya dideklarasikan
 */
carname = "vw";
document.getElementById("hoisting").innerHTML = carname;
var carname;
