<?php
    //php constant
    /**
     * constant adalah sebuah identifier (nama) untuk sebuah nilai yang tidak bisa diubah selama script berlangsung
     * sebuah nama constant dimulai dari huruf atau underscore (tidak ada $ sebelum nama constant)
     * note : tidak seperti variabel, constant secara otomatis langsung masuk ke global scope
     *        di semua script
     */

    //create a php constant
    /**
     * untuk membuat constant, guanakan fungsi define()
     */
    define("UNIVERSITY_STATUS", "OPEN");
    echo UNIVERSITY_STATUS . "<br>"; //output : OPEN

    /**
     * selain itu juga bisa menggunakan keyword const
     */
    const MY_STATUS = "ON";
    echo MY_STATUS . "<br>"; //output : ON

    /**
     * const vs define()
     *  1. const selalu case-sensitive
     *  2. define() memiliki opsi case-sensitive
     *  3. const tidak dapat dibuat didalam block scope lain, seperti didalam fungsi atau didalam statement if
     *  4. define() dapat dibuat didalam block scope lain
     */

    //php constant array
    /**
     * dari php7, kita bisa membuat array constant menggunakan fungsi define()
     */
    define("HOUSE", [
        "pik",
        "bath",
        "sway"
    ]);
    echo HOUSE[0] . "<br>"; //output : pik

    //constant bersifat global
    /**
     * constant secara otomatis akan bersifat global dan dapat di gunakan di semua script
     */
    define("GREETING", "hello");
    function my_test(){
        echo GREETING . "<br><br>";
    }
    my_test(); //output : hello
?>