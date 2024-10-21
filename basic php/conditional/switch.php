<?php
    /**
     * statement switch digunakan untuk melakukan operasi yang berbeda tergantung kondisinya
     */

    //php switch statement
    /**
     * gunakan switch untuk memilih satu dari banyak block code untuk dieksekusi
     * 
     * bagaimana cara kerjanya : 
     *  1. expression hanya dievaluasi sekali
     *  2. nilai dari expression dibandingkan dengan nilai dari setiap case
     *  3. jika ada kemiripan, block kode yang terkait akan dieksekusi
     *  4. keyword break digunakan untuk keluar dari switch block
     *  5. keyword default akan dieksekusi jika tidak ada lagi yang sesuai
     */

    //break keyword
    /**
     * ketika php mencapai break keyword, proses switch akan di "break"
     * 
     * proses ini akan menghentikan eksekusi kode selanjutnya, dan tidak ada lagi case yang dites
     * 
     * block terakhir tidak perlu di break, karena pemilihan switch akan berhenti di situ
     * 
     * warning : jika kita tidak memberikan keyword break pada akhir case tertentu, maka case selanjutnya
     *           akan tetap tereksekusi walaupun casenya tidak sesuai 
     */

    //default keyword
    /**
     * default keyword specified bahwa code akan dieksekusi jika tidak ada case yang sesuai
     * 
     * default keyword tidak harus ada di paling bawah case, bisa juga ada dimana saja
     * walau tentu penulisan ini tidak direkomendasikan
     * 
     * note : jika default tidak ada dipaling bawah, ingat untuk menambahkan break pada block tersebut
     */

    //common block code
    /**
     * jika kita ingin beberapa case dengan block kode yang sama, kita bisa menuliskannya seperti 
     * ini
     * 
     * $d = 3;
     * 
     * switch ($d) {
     *  case 1:
     *  case 2:
     *  case 3:
     *  case 4:
     *  case 5:  
     *      echo "The weeks feels so long!";
     *      break;
     *  case 6:
     *  case 0:
     *      echo "Weekends are the best!";
     *      break;
     *  default:
     *  echo "Something went wrong";
     *  }  
     */ 
    $favcolor = "red";

    switch($favcolor){
        case "red":
        case "violet":
            echo "<p>favorite color is red</p>";
            break;
        case "blue":
        case "gold":
            echo "<p>favorite color is blue</p>";
            break;
        case "green":
        case "yellow":
            echo "<p>favorite color is green</p>";
            break;
        default:
            echo "<p>tidak ada pilihan warna favorite</p>";
    }
?>