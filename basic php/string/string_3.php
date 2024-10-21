<?php
    //kita bisa menampilkan range karakter menggunakan substr()
    //tentukan index mulainya dan berapa banyak kata yang ingin diambil
    $x = "Hello World!";
    echo substr($x, 2, 6) . "<br>"; //output : llo Wo

    //jika kita tidak menentukan berapa banyak kata yang diambil, maka semua katalah yang akan diambil
    echo substr($x, 1) . "<br>"; //output : ello World!

    //kita juga dapat mengambil dari belakang dengan menggunakan nilai minus
    //note : nilai minus disini tidak menggunakan (x - 1) tapi nilai x
    echo substr($x, -5, 5) . "<br>"; //output :  orld!

    //jika kita menggunakan nilai minus untuk kata yang ingin diambil
    //kita hanya tidak akan mengambil x kata terakhir
    echo substr($x, 0, -3); //output : Hello Wo  
?>