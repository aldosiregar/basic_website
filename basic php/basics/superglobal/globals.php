<?php
    //php $GLOBALS
    /**
     * $GLOBALS berisi array yang menampung semua variable global
     */

    //$GLOBALS variable
    /**
     * variable global adalah variable yang dapat diakses oleh semua scope
     * 
     * variable dari scope terluar secara otomatis masuk kedalam variable global, dan dapat digunakan
     * di semua scope
     * 
     * untuk menggunakan variable global didalam function antara kita harus mendefinisikan mereka sebagai
     * variable global dengan keyword global, atau merujuk mereka menggunakan syntax $GLOBAL
     */
    $x = 10;

    function echoing(){
        echo "<p>" . $GLOBALS["x"] . "</p>";
    }

    echoing();

    /**
     * ini berbeda dengan bahasa pemrograman lain dimana variable global tersedia tanpa harus secara spesifik 
     * merujuk mereka sebagai global
     * 
     * selain itu kita juga bisa merujuk variable global di dalam sebuah fungsi menggunakan keyword global
     */
    function globalEcho(){
        global $x;
        echo "<p>" . $x . "</p>";
    }

    //membuat variable global
    /**
     * variable yang dibuat di scope terluar merupakan variable global baik mereka menggunakan syntax 
     * $GLOBALS maupun tidak
     */
    $b = 20;

    echo "<p>" . $GLOBALS["b"] . "</p>";
    echo "<p>" . $b . "</p>";

    /**
     * variable yang dibuat di dalam function hanya dapat dipakai didalam function tersebut, namun
     * kita juga dapat membuat variable global dari dalam function menggunakan syntax $GLOBALS
     */
    function globalInitiators(){
        $GLOBALS["c"] = 1;
    }
?>