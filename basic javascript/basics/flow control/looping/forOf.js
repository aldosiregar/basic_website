console.log("for of loop : ");

//javascript for of loop
/**
 * javascript for of statement loops ke seluruh nilai object yang iterable
 * 
 * ini memperbolehkan kita untuk melakukan iterable loop pada data structure seperti
 * arrays, strings, maps, nodelist, dan masih banyak lagi
 * 
 * syntax : 
 * for(variable of iterable){
 *  /blok kode
 * }
 * 
 * variable - untuk setiap iterasi dari nilai pada property selanjutnya yang diassign
 *            pada variable. variable dapat dideklarasikan dengan const, let, atau var
 * iterable - sebuah object yang dapat iterasi
 */

//looping pada array
let forOfArrays = [5, 15, 4, 3, 2];
let forOfResults = 0;

for(let value of forOfArrays){
    forOfResults += value;
}
console.log(forOfResults);

//looping pada string
let words = "kasiman adalah anak yang masal";
forOfResults = "";

for(let x of words){
    forOfResults += x;
}
console.log(forOfResults);