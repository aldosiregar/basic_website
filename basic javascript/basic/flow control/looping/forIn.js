console.log("for in loop : ");

//javascript for in loop
/**
 * javascript for in statemnet melakukan loop pada properties sebuah object
 * 
 * syntax : 
 * for(keys in object){
 *  /blok kode
 * }
 */
let carData = {name : "kensworth", speed : 80, tank : 3000}
for(let keys in carData){
    console.log(keys + " : " + carData[keys]);
}
/**
 * keterangan : 
 *  1. for in loop mengiterasi carData object
 *  2. setiap iterasi mengembalikan keys
 *  3. keys digunakan untuk mengakses nilai dari key carData
 *  4. nilai dari key adalah carData[keys]
 */

//for in pada arrays
/**
 * javascript for in statement juga dapat loop pada properties array
 * 
 * syntax : 
 * for (variable in arrays){
 *  /blok kode
 * }
 */
let forInArrays = [10, 5, 3, 4, 7];
for(let variable in forInArrays){
    console.log(variable);
}

/**
 * note : 
 * jangan gunakan for in pada array jika urutan indexnya penting
 * 
 * indexnya diakses secara implementation-independen, dan nilai arrays mungkin tidak akan diakses
 * pada urutan yang kita bayangkan
 * 
 * gunakan for loop, for of loop, atau Array.forEach() ketika urutannya penting 
 */

//Array.forEach()
/**
 * method ini memanggil function (a callback function) sekali setiap element array
 */
let forInSum = 0;
forInArrays.forEach(summing);

function summing(value, index, array){
    forInSum += value;
}
console.log(forInSum);