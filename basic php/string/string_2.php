<?php
    //php memiliki beberapa fungsi bawaan untuk memanipulasi string

    //strtoupper() mengubah isi string yang diinginkan menjadi huruf besar (kapital)
    $x = "hello world!";
    echo strtoupper($x)."<br>"; //output : HELLO WORLD!

    //strtolower() mengubah isi string yang diinginkan menjadi huruf kecil 
    $x = "HELLO WORLD!!";
    echo strtolower($x) . "<br>"; //output : hello world!!

    //str_replace() mengubah bagian tertentu dalam string menjadi sesuatu yang lain
    $x = "jaka sembung bawa jambu";
    echo str_replace("jambu", "golok", $x) . "<br>"; //output : jaka sembung bawa golok

    //strrev() membalikan isi dari string
    $x = "pala bapak kau";
    echo strrev($x) . "<br>"; //output : uak kapab alap

    //trim() menghapus semua whitespace (spasi) dari sebuah string yang ada diawal maupun diakhir string
    $x = " D A N ";
    echo trim($x). "<br>"; //output : D A N

    //explode() mengubah string yang diinginkan menjadi array
    //parameter pertama dari explode() adalah separator (pemisah)
    //separator menentukan kata yang digunakan sebagai pemisah antar array
    $x = "P E M I S A H";

    //gunakan print_r() untuk menampilkan hasilnya
    print_r(explode(" ",$x))."<br>"; //output : [0] => P [1] => E [2] => M [3] => I [4] => S [5] => A [6] => H
?>