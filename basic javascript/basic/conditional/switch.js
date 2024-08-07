console.log("switch case : ");

//javascript switch statements
/**
 * switch statements digunakan untuk melakukan aksi berdasarkan kondisi-kondisi yang berbeda
 */

//javascript switch statements
/**
 * gunakan switch statements untuk memilih satu dari banyak kondisi untuk dieksekusi
 * 
 * syntax : 
 * switch (expression){
 *  case x :
 *      /code block
 *      break;
 *  case y :
 *      /code block
 *      break;
 *  default : 
 *      /code block
 * }
 * 
 * bagaimana cara kerjanya : 
 *  1. switch expression dievaluasi sekali
 *  2. nilai dari expression dibandingkan dengan nilai dari setiap case
 *  3. if ada match, block kode tersebut akan dieksekusi
 *  4. jika tidak ada match sampai case terakhir, default akan tereksekusi
 */
switch(Date().getDate()){
    case 0:
        console.log("minggu");
        break;
    case 1:
        console.log("senin");
        break;
    case 2:
        console.log("selasa");
        break;
    case 3:
        console.log("rabu");
        break;
    case 4:
        console.log("kamis");
        break;
    case 5:
        console.log("jumat");
        break;
    case 6:
        console.log("sabtu");
        break;
}

//break keyword
/**
 * ketika javascript mencapai break keyword, maka kode akan keluar dari switch block
 * 
 * keyword ini akan mengehentikan semua proses didalam switch block;
 * 
 * tidak perlu menambahkan break keyword diakhir, karena kodenya juga akan berakhir disitu
 * 
 * note : 
 * jika kita tidak menambahkan break diakhir case, maka case selanjutnya akan tetap tereksekusi
 * walau kondisinya tidak match
 */

//default keyword
/**
 * default keyword menspesifikkan kode jika tidak terjadi satupun match
 */
switch(Date().getDate()){
    case 0:
        console.log("minggu");
    case 6:
        console.log("sabtu");
    default:
        console.log("belum weekend");
}

/**
 * default case tidak selalu harus berada diakhir switch, bisa juga diawal
 * 
 * tetapi jika ada di selain akhir, tambahkan break agar kode yang casenya tidak sesuai
 * tidak ikut tereksekusi
 */

//common code block
/**
 * kadang kita ingin switch case yang walau casenya beda, tapi hasil yang diberikan sama
 */
switch(Date().getDate()){
    case 4:
    case 5:
        console.log("hampir weekend");
        break;
    case 0:
    case 6:
        console.log("weekend");
        break;
    default:
        console.log("masih awal weekday");
}

//switching details
/**
 * jika ada lebih dari 1 matches case, maka hanya match pertama yang terpilih
 * 
 * jika tidak ada matching case, program berlanjut ke bagian default
 * 
 * jika tidak ada default, maka program akan berlanjut ke baris setelah switch
 */

//strict comparisson (===)
/**
 * switch case menggunakan strict comparisson (===)
 * 
 * artinya, baik nilai maupun tipe datanya haruslah sama
 * 
 * sebuah strict comparisson hanya bisa benar jika operandi juga memiliki tipe yang sama
 * 
 * pada contoh dibawah, x tidak akan match kemanapun
 */
let x = "0";
switch(x){
    case 0:
        console.log("salah");
        break;
    case 1:
        console.log("benar");
        break;
    default:
        console.log("tidak ada match");
}
