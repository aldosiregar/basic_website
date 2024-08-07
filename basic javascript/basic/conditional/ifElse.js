console.log("conditional statements : ");

//javascript if, else, and else if
/**
 * condtional statements digunakan untuk melakukan aksi tergantung dari kondisi berbeda
 */

//conditional statements
/**
 * sering ketika kita menulis kode, kita ingin melakukan aksi yang berbeda tergantung
 * dari keputusan yang berbeda
 * 
 * kita dapat menggunakan conditional statements pada kode kita
 * 
 * pada javascript, kita memiliki beberapa condtional statements : 
 *  1. gunakan if jika ada kode yang ingin dieksekusi, dan kondisinya sesuai
 *  2. gunakan else jika ada kode yang ingin dieksekusi, dan ada kondisi lain jika tidak sesuai
 *  3. gunakan else if jika ada kode yang ingin dieksekusi, dan ada lebih dari satu kondisi opsional
 *  4. gunakan switch jika ada banyak alternatif kondisi
 */

//if statements
/**
 * gunakan if statements untuk mengerjakan baris kode jika kondisinya sesuai
 */
if(15 < 20){
    console.log("15 lebih kecil dari 20")
}

//else statements
/**
 * gunakan else jika ada kondisi alternatif jika kondisi if tidak sesuai
 */
if(15 > 20){
    console.log("15 lebih besar dari 20");
}
else{
    console.log("15 lebih kecil dari 20");
}

//else if statements
/**
 * gunakan else if jika ada kondisi lain yang harus dipenuhi selain if 
 */
let ifElseVariable = 10;
if(ifElseVariable < 10){
    console.log("ifElseVariable lebih kecil dari 10");
}
else if(ifElseVariable >= 10 && ifElseVariable < 20){
    console.log("ifElseVariable diantara 10 dan 20");
}
else{
    console.log("nilainya diatas 20");
}
