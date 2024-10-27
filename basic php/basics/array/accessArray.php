<?php
    //access item array
    /**
     * untuk mengakses item array, kita dapat merujuk index numbernya untuk index array, dan
     * nama keynya untuk associative array
     */

    //double or single quote
    /**
     * kita dapat menggunakan single maupun double quote untuk mengakses sebuah arrays
     */
    
    //execution a function item
    /**
     * array item dapat berupa tipe data apapun, termasuk function
     * 
     * untuk mengeksekusi function, gunakan index number untuk merujuknya diikuti parentheses ()
     */ 
    $math = [
        5,
        10,
        "multiply" => function ($x, $y){
            return $x * $y; 
        }
    ];

    /**
     * untuk pembuatan function dalam array, buat functionnya didalam array,
     * tidak bisa dengan membuat function diluar array lalu dimasukkan ke dalamnya
     * itu menciptakan error
     */

    //menggunakan loop
    /**
     * kita juga bisa menggunakan loop untuk mengakses setiap item di dalam arrays
     * gunakan keyword foreach
     */
?>