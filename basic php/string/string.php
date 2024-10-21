<?php 
    //dalam php, string dapat dibuat menggunakan " (double qoute) atau ' (single quote)

    //double quote digunakan ketika ingin dilakukan proses dengan special character
    $x = "johnny";
    echo "halo, $x<br>"; //output : halo, johnny

    //sedangkan single quote hanya akan menampilkan string sesuai dengan apa yang tertulis didalamnya
    $x = "geri";
    echo 'halo, $x<br>'; //output : halo, $x
    
    //untuk mengetahui seberapa banyak huruf sebuah string , bisa menggunakan strlen()
    $x = "strong lead weak";
    echo strlen($x) . "<br>"; //output : 16

    //untuk mengetahui seberapa banyak kata dalam sebuah string, bisa menggunakan str_word_count()
    $x = "jokonotoboto nama jawa";
    echo str_word_count($x) . "<br>"; //output : 3

    //untuk mencari sebuah kata dalam sebuah string dan akan mengembalikan posisi huruf dibeberapa kata tersebut, 
    //bisa menggunakan strpos()
    echo strpos($x, "jawa"); //output : 13
?>