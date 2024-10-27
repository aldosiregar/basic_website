<?php
    //add item array
    /**
     * untuk menambah item array, kita dapat menggunakan [] syntax
     */
    $data = [0, 1, 2];
    $data[] = 4;

    /**
     * pada associative array, kita harus menambahkan keynya juga di dalam [] tersebut
     */
    $data["baru"] = 10;

    //add multiple array item
    /**
     * untuk menambah beberapa array item, kita dapat memanfaatkan fungsi array_push()
     */
    array_push($data, 1, 2, 3, 4);

    /**
     * lalu untuk associative array, kita bisa menggunakan operator +=
     */
    $data += ["pertama" => 1, "kedua" => 2];
?>