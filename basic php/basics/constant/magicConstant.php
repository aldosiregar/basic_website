<?php
    namespace Myarea;
    /**
     * php memiliki 9 constant yang nilainya akan berubah tergantung dimana mereka digunakan
     * dan mereka disebut "magic constant"
     * 
     * mereka ditulis dengan double underscore (__) di awal dan diakhir
     * kecuali untuk constant ClassName::class
     */

    //magic constant 
    /**
     * berikut beberapa magic constant yang ada di php
     */

    //__CLASS__
    /**
     * jika digunakan dalam class, maka akan memberikan nama dari class yang dituju
     */
    class Contoh{
        public function __construct()
        {
            echo __CLASS__; //output : contoh
        }

        public function namaMethod(){
            echo __METHOD__;
        }

        public function returnClass(){
            echo Contoh::class;
        }
    }
    $contoh = new Contoh();
    echo "<br><br>";

    //__DIR__
    /**
     * berisi lokasi dari kode 
     */
    echo __DIR__; //output : C:\xampp\htdocs\php\basic\constant
    echo "<br><br>"; 

    //__FILE__
    /**
     * berisi nama dari file dan juga fullpath nya
     */
    echo __FILE__; //output : C:\xampp\htdocs\php\basic\constant\magicConstant.php
    echo "<br><br>";

    //__FUNCTION__
    /**
     * jika digunakan dalam fungsi, maka akan mengembalikan nama dari fungsi tersebut
     */
    function contoh_magic_function(){
        echo __FUNCTION__;
    }
    contoh_magic_function(); //output : contoh_magic_function
    echo "<br><br>";

    //__LINE__
    /**
     * memberikan baris dari kode sekarang
     */
    echo __LINE__; //output : 61
    echo "<br><br>";

    //__METHOD__
    /**
     * jika digunakan dalam fungsi yang berada di dalam class, maka akan mengembalikan nama dari fungsinya 
     */
    $contoh->namaMethod(); //output : Contoh::namaMethod
    echo "<br><br>";

    //__NAMESPACE__
    /**
     * jika digunakan didalam namespace, maka akan mengembalikan nama dari namespace tersebut
     */

    function value(){
        echo __NAMESPACE__; //output : Myarea
    }
    
    //__TRAIT__
    /**
     * jika digunakan dalam trait, maka akan mengembalikan nama dari trait tersebut
     */
    trait message{
        public function msg_1(){
            echo __TRAIT__;
        }
    }
    class welcome{
        use message;
    }
    $msg = new welcome();
    $msg->msg_1(); //output : message
    echo "<br><br>";

    //ClassName::Class
    /**
     * mengembalikan nama dari sebuah class dan juga nama dari namespacenya, jika ada
     */
    $contoh->returnClass(); //output : Myarea\Contoh
    echo "<br><br>";

    //note : magic constant adalah case-insensitive, artinya __LINE__ dan __line__ adalah sama
?>

    <!DOCTYPE html>
    <html>
    <body>
    <?php
    echo value();
    ?>
    <br><br>
    </body>
    </html>