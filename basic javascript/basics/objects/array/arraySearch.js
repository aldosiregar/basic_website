console.log("array search : ");

//javascript array indexOf()
/**
 * method ini mencari array dengan nilai element tertentu dan mengembalikan posisinya
 * 
 * parameter pertama untuk item yang ingin dicari, dan parameter kedua untuk dari index
 * berapa pencarian dimulai
 * 
 * jika terdapat lebih dari 1 item dengan hasil yang sama, maka penemuan pertamanya saja
 * yang dikembalikan posisinya
 */
let arraySearch = ["kala", "kili", "kolo", "kele", "kili", "kalllas"];
console.log(arraySearch.indexOf("kili"));

//javascript array lastIndexOf()
/**
 * method ini sama dengan indexOf(), tapi mencari kapan terakhir kali nilai tersebut muncul
 */
console.log(arraySearch.lastIndexOf("kili"));

//javascripts array includes()
/**
 * ECMAScripts 2016 mengenalkan method includes() ke arrays, ini membuat kita dapat mencari
 * jika ada tidak suatu nilai pada array tersebut, bahkan NaN yang dimana ini tidak bisa dilakukan
 * di indexOf()
 */
console.log(arraySearch.includes("kolo"));

//javascript array find()
/**
 * method ini mengembalikan nilai dari array pertama yang memenuhi kondisi test function
 */
console.log(arraySearch.find(moreThanFourCharacters));

function moreThanFourCharacters(value, index, array){
    return value.length > 4;
}

/**
 * fungsi diatas akan mengambil 3 arguments
 *  1. nilai itemnya
 *  2. index itemnya
 *  3. array dari element yang ingin ditemukan
 * 
 * argumentnya akan disediakan oleh method find() dan di-pass ke function test
 */

//javascript array findIndex()
/**
 * method ini mengembalikan index dari element array pertama yang memenuhi syarat test function
 * 
 * arguments yang diambil oleh test function juga sama dengan method find()
 */
console.log(arraySearch.findIndex(moreThanFourCharacters));

//javascript array findLast()
/**
 * ES2023 mengenalkan method ini, method ini akan mencari element yang sesuai dari belakang
 * dan mengembalikan hasil dari match pertama pada pencarian element arraynya
 */
console.log(arraySearch.findLast(x => x.length > 4));

//javascript array findLastIndex()
/**
 * method ini menemukan index dari element yang memenuhi kondisi pencarian
 */
console.log(arraySearch.findLastIndex(x => x.length > 4));