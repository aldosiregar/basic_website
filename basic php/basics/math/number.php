<?php
    //Number dalam php
    /**
     * Dalam php, terdapat 3 tipe angka utama yaitu : Interger, Float, dan Number Strings
     * Selain itu, ada juga 2 tipe data yang digunakan dalam angka yaitu : Infinity dan NaN
     * tipe data variable dibuat ketika ditambahkan nilai didalamnya
     * 
     * untuk melihat tipe data dari object dalam php, dapat menggunakan var_dump()
     */
    $x = ["a" => 5, "b" => 12.5, "c" => "25"];
    var_dump($x); //output : { ["a"]=> int(5) ["b"]=> float(12.5) ["c"]=> string(2) "25" }
    echo "<br>";

    //Php Interger
    /**
     * interger adalah angka yang tidak memiliki nilai desimal
     * 
     * dalam sistem 32 bit, nilai interger berada dalam rentang -2147483648 sampai 2147483647
     * dan dalam sistem 64 bit, nilainya berada dalam rentang -9223372036854775808 sampai 9223372036854775807
     * 
     * nilai yang lebih besar atau lebih kecil dari ini akan masuk kedalam tipe data float
     * note : dan juga 4 * 2.5 akan masuk kedalam float karena 2.5 termasuk tipe data float
     * 
     * beberapa aturan untuk interger adalah :
     *  1. sebuah interger harus setidaknya memiliki 1 digit
     *  2. sebuah interger tidak boleh memiliki nilai desimal
     *  3. sebuah interger dapat bernilai positif ataupun negatif
     *  4. sebuah interger dapat dispesifikkan menjadi 3 format : decimal (base 10), 
     *     hexadecimal (base 16, prefixed dengan 0x), octal (base 8, prefixed dengan 0),
     *     atau binary (base 2, prefixed with 0b)
     * 
     * Php memiliki beberapa predifined constant untuk interger
     *  1. PHP_INT_MAX - nilai terbesar yang di support oleh interger
     *  2. PHP_INT_MIN - nilai terkecil yang di support oleh interger
     *  3. PHP_INT_SIZE - besar dari interger dalam bytes
     * 
     * Php memiliki fungsi bawaan untuk memastikan jika sebuah tipe data adalah interger atau bukan
     *  1. is_int()
     *  2. is_interger() - alias dari is_int()
     *  3. is_long() - alias dari is_int() 
     */
    $x = ["i_1" => 12, "i_2" => 0x3A, "i_3" => 073, "i_4" => 0b1011];
    var_dump($x); // output : { ["i_1"]=> int(12) ["i_2"]=> int(58) ["i_3"]=> int(59) ["i_4"]=> int(11) }
    echo "<br>";
    
    //Php Floats
    /**
     * float adalah angka yang memiliki nilai desimal atau angka eksponen
     * 
     * tipe data float biasanya dapat menyimpan nilai sampai 1.7976931348623E+308 (tergantung platform)
     * dan memiliki presisi maksimal sampai 14 digit
     * 
     * php memiliki beberapa predefined constant seperti
     *  1. PHP_FLOAT_MAX - nilai terbesar yang bisa ditampilkan tipe data float
     *  2. PHP_FLOAT_MIN - nilai terkecil yang bisa ditampilkan tipe data float
     *  3. PHP_FLOAT_DIG - titik nilai desimal yang bisa dibulatkan menjadi float dan sebaliknya tanpa
     *     kehilangan akurasinya
     *  4. PHP_FLOAT_EPSILON ` nilai terkecil yang bisa ditampilkan nilai positif x, agar x + 1.0 != 1
     * 
     * php memiliki fungsi bawaan untuk memastikan jika sebuah tipe data adalah float atau bukan
     *  1. is_float()
     *  2. is_double() - alias dari is_float()
     */
    $x = 10.332;
    var_dump($x); //output : float(10.332)
    echo "<br>";

    //php infinity
    /**
     * nilai angka yang melebihi PHP_FLOAT_MAX dianggap sebagai nilai tak hingga
     * 
     * php memiliki fungsi untuk memastikan jika sebuah tipe data adalah tak hingga atau bukan
     *  1. is_finite()
     *  2. is_infinite()
     * 
     * namun, var_dump() akan menampilkan tipe data dan nilainya
     */
    $x = 1.9e555;
    var_dump($x); //output : float(INF)
    echo "<br>";

    //php NaN
    /**
     * NaN berarti Not a Number (bukan sebuah angka)
     * 
     * NaN digunakan untuk operasi matematika yang mustahil
     * 
     * php memiliki fungsi bawaan untuk memastikan jika sebuah tipe data adalah NaN atau bukan
     *  1. is_nan()
     * 
     * namun, var_dump() akan menampilkan tipe data dan nilainya
     */
    $x = acos(8);
    var_dump($x); //output : float(NAN)
    echo "<br>";

    //php Numerical Strings
    /**
     * fungsi is_numeric() dapat digunakan untuk memastikan apakah sebuah variabel adalah angka,
     * fungsi ini akan mengembalikan nilai true jika variabel merupakan angka atau numerical string,
     * dan false jika bukan
     */
    $x = ["1" => is_numeric(5568), "2" => is_numeric("5568"), "3" => is_numeric("55.7" + 100), "4" => is_numeric("hello")];
    var_dump($x); //output : { [1]=> bool(true) [2]=> bool(true) [3]=> bool(true) [4]=> bool(false) }
    echo "<br>";

    //php casting Strings dan Float menjadi interger
    /**
     * terkadang kita perlu untuk mengubah sebuah nilai angka menjadi tipe data lain
     * (int), (interger), dan fungsi intval() biasanya digunakan untuk mengubah sebuah nilai menjadi interger
     */
    //ubah float menjadi int
    $x = 2345.678;
    $int_case = (int) $x; 
    echo $int_case . "<br>"; //output : 2345

    //ubah string menjadi int
    $x = "33241";
    $int_case = (int) $x;
    echo $int_case . "<br>"; //output : 33241
?>