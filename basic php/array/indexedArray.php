<?php
    //php indexed arrays
    /**
     * dalam indexed arrays, setiap item memiliki index number
     * 
     * secara default, item pertama memiliki index 0, selanjutnya satu, dan sebagainya
     */

    //accessed index array
    /**
     * untuk mengakses array items, kita dapat merujuknya menggunakan index number
     */
    $data = ["aldi", 53, "dev"];
    echo "<p>" . $data[0] . " " . $data[1] . " " . $data[2] . "</p>";

    //merubah nilai array
    /**
     * untuk merubah nilai dari array yang telah dibuat, gunakan index number
     */
    $data[0] = "aldo";

    //loop langsung sebuah indexed array
    /**
     * untuk melakukan loop langsung pada indexed array, kita dapat menggunakan foreach loop
     */
    foreach($data as $x){
        echo "<p>" . $x . "</p>";
    }

    //index number
    /**
     * kunci dari indexed array berada pada indexnya, secara default item pertama berindex 0, kedua 1, 
     * dan seterusnya. tapi ada beberapa pengecualian
     * 
     * item baru akan mendapat index yang lebih tinggi dari sebelumnya
     * 
     * misalkan kita punya array seperti $data diatas
     * 
     * jika kita menggunakan array_push() function untuk menambahkan item, item baru akan berindex 3
     */
    array_push($data, "jln mawar");

    /**
     * tetapi jika kita punya array dengan index yang random seperti dibawah ini
     */
    $data[10] = "jk";
    
    /**
     * maka ketika menggunakan array_push(), maka index barunya akan mengikuti array terbaru
     * yaitu lebih besar dari index 10
     */
    array_push($data, "jjj");
?>