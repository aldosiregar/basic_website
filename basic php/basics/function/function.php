<?php declare(strict_types=1);
    /**
     * keunggulan php sendiri berada di functionnya
     * 
     * php sendiri memiliki 1000 built-in function, dan juga kita dapat membuat
     * custom function sendir
     */

    //php built-in function
    /**
     * php memiliki 1000 built-in function yang dapat langsung dipanggil untuk mengerjakan tugas tertentu
     */

    //php user defined functions
    /**
     * selain php built-in function, kita juga dapat membuat function sendiri
     *  1. sebuah function adalah kumpulan statement yang dapat digunakan berkali-kali dalam sebuah program
     *  2. sebuah fungsi tidak akan secara otomatis tereksekusi ketika page di-load
     *  3. sebuah fungsi akan berjalan jika dipanggil
     */

    //membuat sebuah function
    /**
     * sebuah function dibuat dengan menggunakan keyword function, diikuti nama functionnya
     * 
     * sebuah nama awal fungsi dibuat dengan huruf maupun underscore, dan tidak case-sensitive
     * 
     * nama sebuah fungsi menyatakan tugas yang dilakukannya
     */
    
    //call a function
    /**
     * untuk memanggil fungsi, cukup tuliskan namanya disertai parentheses ()
     */

    //php function arguments
    /**
     * informasi dapat dimasukkan ke dalam fungsi menggunakan arguments, arguments mirip dengan variable
     * 
     * arguments dapat ditentukan setelah nama fungsi, didalam parantheses. kita dapat menambahkan arguments
     * sebanyak-banyaknya, cukup pisahkan dengan koma.
     */

    //default function arguments
    /**
     * kita juga dapat menentukan nilai default dari arguments, cukup isi nilai arguments setelah
     * menentukan argument nya
     */

    //returning value
    /**
     * untuk mengembalikan nilai dari sebuah fungsi, cukup gunakan keyword return
     */
    function circle_volume($diameter, $pi = 3.1415){
        return (($diameter / 2)**2) * $pi;
    }

    echo "<p>volume dari lingkaran dengan diameter 10 cm = " . circle_volume(10) . "</p>";

    //passing arguments by refrence
    /**
     * dalam php, arguments biasanya berisi nilai, yang artinya merupakan copy dari nilai yang
     * digunakan dalam fungsi, dan variable yang dimasukkan ke dalam fungsi tidak dapat 
     * diubah
     * 
     * ketika sebuah function arguments diisi dengan refrence, perubahan dalam variabel didalam
     * fungsi juga akan berpengaruh ke dalam variabel yang dimasukkan ke dalam function tersebut
     * untuk melakukan ini, gunakan operator &
     */
    $values = 1;
    function changeToOneHundred(&$x){
        $x = 100;
    }
    changeToOneHundred($values);
    echo "<p>nilai x sudah berubah menjadi $values</p>";

    //variable number of arguments
    /**
     * dengan menggunakan operator ... didepan parameter function, function akan menerima
     * beberapa argument, ini juga disebut variadic function
     * 
     * variadic function nantinya akan berubah menjadi array
     * 
     * kita juga dapat memiliki 1 arguments dalam variable length, dan harus ada
     * diakhir argument
     */
    function multiplyAllToSomeValue($constant, ...$x){
        $len = count($x);
        for($i = 0; $i < $len; $i++){
            $x *= $constant;
        }

        return $x;
    }
    $result = multiplyAllToSomeValue(3, 4, 5, 1, 2, 3);
    var_dump($result);
    echo "<br>";

    //php is a loosely typed language
    /**
     * dalam contoh diatas, php tidak menspesifikkan tipe data dari variablenya
     * 
     * php secara otomatis mengasosiasikan tipe data dari variablenya tergantung dari nilainya,
     * karena tipe datanya tidak diset dengan ketat, kita dapat menambahkan string ke interger
     * tanpa menghasilkan error
     * 
     * dalam php 7, deklarasi tipe sudah ditambahkan, ini memberikan kita opsi untuk menentukan
     * tipe data yang diharapkan ketika membuat function, dan dengan menambahkan deklarasi strict,
     * akan diberikan "fatal error" jika tipe datanya tidak sesuai
     * 
     * untuk menspesifikkan strict, kita harus meng-set declare(strict_types=1);
     * ini harus diletakkan di bagian paling awal dari file php
     * 
     * contoh : 
     * <?php declare(strict_types=1); // strict requirement
     * function addNumbers(int $a, int $b) {
     *  return $a + $b;
     * }
     * echo addNumbers(5, "5 days");
     * since strict is enabled and "5 days" is not an integer, an error will be thrown
     * ?>
     */

    //php return type declaration
    /**
     * php 7 juga mendukung type declaration untuk return statement, seperti ketika type declaration
     * untuk function arguments, dengan menghidupkan strict requirements, akan terjadi
     * fatal errors jika terjadi ketidaksesuaian tipe
     * 
     * untuk mendeklarasikan tipe fungsi, tambahkan colon (:) dan tipe datanya tepat setelah curly
     * brackets ketika mendeklarasikan fungsi
     * 
     * kita juga dapat menentukan tipe returnnya, tapi pastikan returnnya juga bertipe sama
     */
    function multiply (float $a, float $b) : int {
        return (int) ($a * $b);
    }
    echo "<p>1.5 dikali 5.3 = " . multiply(1.5, 5.3) . "</p>";
?>