//javascript break dan continue
/**
 * break statement "jumps out" dari sebuah loop
 * 
 * continue statement "jumps over" satu iterasi pada loop
 */
console.log("break and continue statement : ");

//break statement
/**
 * kita telah melihat statement break digunakan pada switch, digunakan untuk "keluar"
 * dari pilihan pada conditional switch() statement
 * 
 * break statement juga dapat digunakan untuk keluar dari loops
 */
for(let i = 0; i < 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}

//continue statement 
/**
 * continue statement breaks satu iteration (dalam loop), jika kondisi spesifik telah terjadi, 
 * dan menlanjutkannya ke iterasi selanjutnya
 */
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(i);
}

//javascript labels
/**
 * untuk melabel javascript kita harus terlebih dahulu melabeli statement dengan nama dan colon
 * 
 * syntax : 
 * label:
 * statement
 * 
 * break dan continue statement hanyalah statement pada javascript yang dapat "jump out of"
 * dari kode blok
 * 
 * break labelname;
 * 
 * continue labelname;
 */

/**
 * continue statement (dengan atau tanpa label refrence) hanya dapat digunakan untuk meng-skip 
 * satu iterasi loop
 * 
 * break statement, tanpa label refrence, hanya bisa digunakan untuk keluar dari loop atau switch
 * 
 * dengan label refrence, break statement dapat digunakan untuk keluar dari berbagai blok kode
 */

const characters = ["a", "b", 'c', "d"];

list:{ 
    console.log(characters[0]);
    console.log(characters[1]);
    break list;
    console.log(characters[2]);
    console.log(characters[3]);
}