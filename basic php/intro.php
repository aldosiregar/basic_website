<?php
    //variable dibuat dengan menuliskan $ (dollar sign) didepannya
    $warna = "Green"; //tipe data string

    $panjang = 10;

    $lebar = 15;

    //echo digunakan untuk memberikan output kepada browser melalui server
    echo "<h1>Hello World, Warna yang diberikan : ". $warna. "</h1>";

    //selain echo, bisa juga menggunakan print, berbeda dengan echo, print memberikan hasil nilai 1
    //jika berhasil dieksekusi
    print "<br><h3>Luas Persegi : ".$panjang * $lebar." </h3>";
?>