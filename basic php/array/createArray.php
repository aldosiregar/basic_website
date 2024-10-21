<?php
    //php create array
    /**
     * kita dapat membuat array menggunakan fungsi array()
     */
    $car = array("mercedes", "jeep", "yamaha");

    /**
     * kita juga dapat membuatnya menggunakan brackets []
     */
    $car2 = ["city", "muscle", "sports"];

    //multiple lines
    /**
     * line breaks tidaklah penting, jadi deklarasi array dapat dibuat dengan beberapa jarak
     */
    $car2 = [
        "jeep",
        "kock",
        "man"
    ];

    //trailing comma
    /**
     * kita bisa menaruh comma di item terakhir
     */

    //array keys
    /**
     * ketika membuat index array, secara otomatis keynya akan ter-generate, dimulai dari 0 dilanjut 1
     * dan seterusnya, jadi array car diatas dapat dibuat dengan ditambahkan key
     */
    $car = [
        0 => "jeep",
        1 => "kack",
        3 => "lambo",
    ];

    /**
     * index arrays sama saja dengan associative arrays, tapi associative arrays menggunakan nama dibandingkan
     * dengan angka
     */
    
    //membuat empty array
    /**
     * kita dapat membuat array kosong terlebih dahulu, baru menambahkan itemnya
     * 
     * metodenya juga sama untuk indexed arrays 
     */
    $car = [];
    $car[0] = "sedan";

    //mencampur array key
    /**
     * kita dapat mencampurkan index key dan associative key
     */
    $car["name"] = "jeep";
?>