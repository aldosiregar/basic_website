<?php
    /**
     * conditional statement biasanya digunakan untuk melakukan tindakan yang berbeda
     * tergantung dari kondisi yang diberikan
     */

    //php conditional statement
    /***
     * ketika kita menulis kode, kadang kita ingin untuk melakukan operasi yang berbeda
     * untuk setiap kondisi yang berbeda pula, kita bisa menggunakan conditional statement
     * dalam kode kita untuk melakukan ini
     * 
     * dalam php kita mengikuti conditional statement
     *  1. if statement - mengeksekusi kode jika perintahnya benar
     *  2. if...else statement - mengeksekusi sebuah kode jika kondisi awal benar, 
     *                           dan mengeksekusi kode lain jika kondisinya salah
     *  3. if...elseif...else statement - mengeksekusi kode lain untuk lebih dari
     *                                    dua kondisi
     *  4. switch statement - memilih satu diantara banyak kode untuk dieksekusi
     */

    //if statement 
    /**
     * if statement mengeksekusi sebuah kode jika kode tersebut benar
     * 
     * dalam penentuan kebenarannya, dapat menggunakan operator seperti comparison dan logical
     * maupun nilai boolean yaitu true atau false
     */
    $x = 25;
    if($x < 100){
        echo "<p>nilai x ada dibawah 100</p>";
    }
    //hasil eksekusinya sesuai dengan echo diatas

    //if...else statement
    /**
     * if...else statement akan mengeksekusi kode jika kondisi pertama benar,
     * jika tidak maka akan dieksekusi kode kedua
     */
    if($x < 10){
        echo "<p>nilai x dibawah 10</p>";
    }
    else{
        echo "<p>nilai x diatas 10</p>";
    }
    //akan dieksekusi kode kedua, karena 25 lebih dari 10

    //if...elseif...else statement
    /**
     * if...elseif...else statement akan mengeksekusi kode yang berbeda dari kedua kode tersebut
     */
    if($x < 10){
        echo "<p>nilai x dibawah 10</p>";
    }
    elseif($x > 20 && $x < 30){
        echo "<p>nilai x ada diatara 20 dan 30</p>";
    }
    else{
        echo "<p>nilai x diatas 30</p>";
    }
    //akan tereksekusi kode elseif, karena x sebesar 25, ada diantara 20 dan 30

    //shorthand if
    /**
     * untuk menulis kode yang lebih pendek, kita dapat menulis if di satu baris
     */
    $y = 10;
    if ($y < 20) echo "<p>nilai y ada dibawah 20</p>";

    //shorthand if...else
    /**
     * if...else statement juga dapat ditulis di satu baris, namun syntaxnya sedikit berbeda
     * 
     * kita akan menggunakan operasi ternary dalam shorthand if...else
     */
    $b = $y < 10 ? "nilai y ada dibawah 10" : "nilai y ada diatas 10";
    echo "<p>$b</p>";
    //$b akan menghasilkan nilai diatas 10, karena $y bernilai 10, bukan dibawah 10

    //nested if 
    /**
     * kita dapat memiliki if statement didalam if statement, ini kita sebut sebagai nested if
     */
    if($y <= 20){
        if($y <= 20 && $y >= 10){
            echo "<p>nilai y ada diantara 10 dan 20</p>";
        }
    }
    elseif($y <= 10){
        if($y <= 10 && $y >= 0){
            echo "<p>nilai y ada diantara 0 dan 10</p>";
        }
    }
    else{
        echo "<p>nilai y bisa jadi lebih besar dari 20 atau lebih kecil dari 0</p>";
    }
    //akan tereksekusi kode elseif nested, karena y bernilai 10 dan masuk kondisi nested if elseif
?>