<?php
    /**
     * element dari array dapat di urutkan menurut alphabets atau numerical order, ascending atau descending
     */

    //sort function untuk arrays
    /**
     * beberapa function yang bisa digunakan untuk mengurutkan arrays adalah sebagai berikut :
     * sort() - sort arrays in ascending order
     * rsort() - sort arrays in descending order
     * asort() - sort associative arrays in ascending order, according to the value
     * ksort() - sort associative arrays in ascending order, according to the key
     * arsort() - sort associative arrays in descending order, according to the value
     * krsort() - sort associative arrays in descending order, according to the key
     */

    //sort function
    /**
     * sort function mengurutkan array secara urutan ascending (kecil ke besar)
     */
    $data = [1,3, 5 ,2, 7, 0];
    echo "<p>" . sort($data) . "</p>";

    //rsort function
    /**
     * rsort function adalah kebalikan dari sort, yaitu urutannya descending (besar ke kecil)
     */
    echo "<p>" . rsort($data) . "</p>";

    //asort() function
    /**
     * asort function mengurukan associative array dalam urutan ascending, tergantung dari nilainya
     */
    $personal = [
        "umur" => 31,
        "nama" => "aldo",
        "jabatan" => "it developer",
        "jarak" => 2000
    ];
    var_dump(asort($personal));
    echo "<br>";

    //ksort function
    /**
     * ksort bekerja sama seperti asort, bedanya urutannya dilihat dari urutan keynya 
     * (jika angka diurutkan dari besar angkanya, jika huruf dilihat dari encoding karakternya)
     */
    var_dump(ksort($personal));
    echo "<br>";

    //arsort() function
    /**
     * arsort bekerja seperti asort, tetapi urutannya descending
     */
    var_dump(arsort($personal));
    echo "<br>";

    //krsort() function
    /**
     * krsotr bekerja seperti ksort, tetapi urutannya descending
     */
    var_dump(krsort($personal));
    echo "<br>";
?>