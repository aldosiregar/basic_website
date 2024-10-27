<?php
    //php mulitidimensional array
    /**
     * sebagian besar tutorial array sebelumnya berkutat pada one-dimensional array
     * 
     * tetapi terkadang kita ingin membuat array yang lebih dari satu dimensi
     * atau dengan kata lain adalah array didalam array
     */

    //multidimensional array
    /**
     * multidimensional array berisi array didalam array
     * 
     * php mendukung mulitdimensional array dengan dimensi apapun, seperti 2, 3, 4 dst
     * namun array yang lebih dari 3 level lebih sulit di manage untuk sebagian besar orang
     * 
     * note:
     * dimensi array mengindikasikan seberapa banyak indicies yg kita butuhkan untuk mengaksesnya
     *  1. untuk array 2 dimensi, kita memerlukan 2 indicies array
     *  2. untuk array 3 dimensi, kita memerlukan 3 indicies array
     */

    //two dimensional array
    /**
     * two dimensional array adalah array didalam array, (3 dimensi adalah array didalam array didalam array lagi)
     */
    $data = [
        [
            "model", "horse Power", "travel range"
        ],
        [
            "sedan", 300, 3000
        ],
        [
            "jeep", 500, 6000
        ]
        ];

    /**
     * untuk mengaksesnya, kita harus menambahkan indicies di sebelah indicies sebelumnya
     * 
     * indicies pertama untuk baris, dan indicies kedua untuk kolom
     */
    echo "<p>" . $data[1][2] . "</p>"; //data baris kedua kolom ketiga, yaitu data 3000 

    /**
     * jika kita menggunakan loop untuk mengakses datanya, kita bisa menggunakan nested loop untuk
     * mengakses semua datanya
     */
    for($row = 0; $row < count($data); $row++){
        echo "<p>";
        for($col = 0; $col < count($data[0]); $col++){
            echo $data[$row][$col] . " ";
        }
        echo "</p>";
    };

    /**
     * array 3 dimensi juga mirip dengan ini, jadi tutorialnya silahkan pikirkan sendiri
     */
?>