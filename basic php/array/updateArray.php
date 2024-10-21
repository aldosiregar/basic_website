<?php
    //update array items
    /**
     * untuk mengupdate array item, kita dapat merujuk ke index numbernya untuk index array
     * dan keynamenya untuk associative array
     */

    //update array item di dalam loop
    /**
     * ada metode yang berbeda dalam mengupdate item di dalam loop array
     * 
     * karena perubahan yang terjadi dalam loop tidak terjadi pada array yang di loopkan
     * kita harus menggunakan operator & agar variable yang diubah di dalam loop
     * juga berubah ke array yang di loopkan
     */
    $contoh = [
        15, 20, 33
    ];
    
    foreach($contoh as &$x){
        $x = 0;
    }
?>