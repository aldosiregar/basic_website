<?php
    /**
     * untuk menghapus array item, kita dapat menggunakan array_splice() function
     * 
     * dengan array_splice() function, kita mengspesifikkan index (dimana mulainya)
     * dan berapa banyak yang ingin kita hapus
     */
    $data = [1, 2, 3, 4, 5, 6];
    array_splice($data, 0, 1);

    /**
     * setelah dihapus, array akan di reindex kembali ke 0
     */

    //menggunakan fungsi unset()
    /**
     * kita juga dapat menggunakan unset untuk menghapus item array
     * 
     * note :
     * fungsi unset tidak mengatur kembali index, artinya setelah penghapusan posisi index array akan 
     * tetap berada pada posisinya, dan posisi yang telah dihapus menjadi kosong
     */
    unset($data[0]);

    //menghapus beberapa array item
    /**
     * untuk menghapus beberapa item array, kita bisa menggunakan array_splice(), cukup berikan
     * index mulai dan berakhirya dan data akan dihapus sesuai dengan indexnya
     */

    /**
     * selain itu kita juga bisa menggunakan unset(), cukup tambahkan data lain yang ingin dihapus dan
     * dipisahkan dengan comma
     */
    unset($data[1], $data[2]);

    //menghapus item associative array
    /**
     * untuk menghapus item dari associative array, kita dapat menggunakan unset()
     * 
     * cukup berikan item mana yang ingin kita hapus
     */

    //menggunakan array_diff()
    /**
     * kita juga bisa menggunakan fungsi array_diff() untuk menghapus item dari associative array
     * 
     * fungsi ini mengembalikan array baru, tanpa merujuk ke item yang spesifik
     */
    $back = ["data1" => 1, "data2" => 2];
    array_diff($back, 1, 2);
    
    /**
     * array_diff mengambil values sebagai parameter fungsinya, bukan keys
     */

    //remove last item on array
    /**
     * untuk menghapus item terakhir pada array, kita bisa menggunakan array_pop()
     */

    //remove first item on array
    /**
     * untuk menghapus item pertama pada array, kita bisa menggunakan array_shift()
     */
    $dataBaru = [1,2,3,4,5];
    array_pop($dataBaru);
    array_shift($dataBaru);
?>