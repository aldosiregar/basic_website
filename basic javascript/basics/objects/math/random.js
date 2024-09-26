console.log("random numbers :")

//Math.random()
/**
 * method ini mengembalikan angka random antara 0 (inclusive) dan 1 (exclusive)
 * 
 * method ini selalu mengembalikan nilai random dibawah 1
 */
console.log(Math.random());

//javascript random interger
/**
 * Math.random() jika digunakan dengan Math.floor dapat digunakan untuk mengembalikan
 * interger random
 * 
 * note : 
 * dalam javascript tidak ada yang namanya interger
 * 
 * kita hanya membicarakan angka tanpa desimal disini
 */
//mengembalikan nilai random antara 0 sampai 9
console.log(Math.floor(Math.random() * 10));
//mengembalikan nilai random antara 1 sampai 10
console.log(Math.floor(Math.random() * 10) + 1);

//a proper random function
/**
 * seperti yang kita lihat diatas, adalah ide yang bagus untuk membuat fungsi bilangan random
 * yang proper untuk mengenerate bilangan random
 * 
 * pada fungsi dibawah akan dikembalikan nilai random diantara min (included) dan max (excluded)
 */
function genRandNum(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(genRandNum(8, 100));

