<?php
    //associative array
    /**
     * associative array adalah array yang memiliki nama unik ketika didefinisikan
     */
    $person = [
        "nama" => "aldo",
        "job" => "developer",
        "umur" => 21
    ];

    //mengakses associative array
    /**
     * untuk mengakses item array kita dapat merujuk nama keynya
     */
    echo "<p>" . $person["nama"] . "</p>";

    //merubah nilai associative array
    /**
     * untuk merubah nilai item, gunakan key name
     */
    $person["nama"] = "aldora";

    //loop dalam associative array
    /**
     * untuk melakukan loop pada item associative array, gunakan keyword foreach seperti dibawah ini
     */
    foreach($person as $x => $y){
        echo "<p>key : $x, item : $y</p>";
    }

    
?>