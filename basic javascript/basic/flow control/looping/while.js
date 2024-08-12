//javascript while loop
/**
 * loops dapat mengeksekusi sebuah blok kode selama kondisi yang ditentukan benar
 */
console.log("while loop : ");

//while loop
/**
 * while akan melakukan perulangan pada block kode selama kondisi yang ditentukan
 * benar
 * 
 * syntax : 
 * while(condition){
 *  /blok kode
 * }
 */
let whileIteration = 0;
let whileSumming = 0;

while (whileIteration < 10){
    whileSumming += whileIteration;
    whileIteration++;
}

/**
 * pada contoh diatas, looping akan terjadi sebanyak 10 kali selama whileIteration masih dibawah 10
 * 
 * jika kita lupa menambahkan iteration pada whileIteration, program akan terus loop, dan
 * meng-crash browser
 */

//do while loop
/**
 * do while loop adalah variant dari while, loop ini akan mengeksekusi blok kode sekali, sebelum
 * mengecek jika kondisinya benar, lalu akan terjadi loop selama kondisinya benar
 * 
 * syntax : 
 * do{
 *  /blok kode
 * }
 * while(condition);
 */
whileIteration = 0;
do{
    console.log("perulangan pertama dan terakhir karena iterationnya 0");
    whileIteration++;
}
while(whileIteration == 0);

//membandingkan for dan while
/**
 * jika kita membaca tutorial sebelumnya tentang for loop, kita menyadari bahwa for loop
 * mirip dengan while, dengan perbedaan tidak adanya expression 1 sampai 3
 */