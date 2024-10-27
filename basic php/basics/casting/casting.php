<?php
    /**
     * terkadang kita ingin merubah satu tipe data ke tipe data lainnya
     * hal ini dapat kita lakukan dengan menggunakan metode casting
     */

    //merubah tipe data
    /**
     * merubah tipe data dapat dilakukan dengan menggunakan statement dibawah ini
     *  1. (string) - mengubah data menjadi bertipe string
     *  2. (int) - mengubah data menjadi bertipe interger
     *  3. (float) - mengubah data menjadi bertipe float
     *  4. (bool) - mengubah data menjadi bertipe bool
     *  5. (array) - mengubah data menjadi bertipe array
     *  6. (object) - mengubah data menjadi bertipe object
     *  7. (unset) - mengubah data menjadi NULL ('(unset)' cast deprecated in PHP 7.2)
     */

    //cast menjadi string
    echo "<h1>cast menjadi string</h1><br>";
    $a = 5;       // Integer
    $b = 5.34;    // Float
    $c = "hello"; // String
    $d = true;    // Boolean
    $e = NULL;    // NULL

    $a = (string) $a;
    $b = (string) $b;
    $c = (string) $c;
    $d = (string) $d;
    $e = (string) $e;

    var_dump($a); //output : string(1) "5" 
    var_dump($b); //output : string(4) "5.34" 
    var_dump($c); //output : string(5) "hello" 
    var_dump($d); //output : string(1) "1" 
    var_dump($e); //output : string(0) ""
    echo "<br><br>";

    //cast menjadi interger
    echo "<h1>cast menjadi interger</h1><br>";
    $a = 5;       // Integer
    $b = 5.34;    // Float
    $c = "25 kilometers"; // String
    $d = "kilometers 25"; // String
    $e = "hello"; // String
    $f = true;    // Boolean
    $g = NULL;    // NULL

    $a = (int) $a;
    $b = (int) $b;
    $c = (int) $c;
    $d = (int) $d;
    $e = (int) $e;
    $f = (int) $f;
    $g = (int) $g;

    var_dump($a); //output : int(5) 
    var_dump($b); //output : int(5) 
    var_dump($c); //output : int(25) 
    var_dump($d); //output : int(0) 
    var_dump($e); //output : int(0) 
    var_dump($f); //output : int(1) 
    var_dump($g); //output : int(0)
    echo "<br><br>";

    //cast menjadi float
    echo "<h1>cast menjadi float</h1><br>";
    $a = 5;       // Integer
    $b = 5.34;    // Float
    $c = "25 kilometers"; // String
    $d = "kilometers 25"; // String
    $e = "hello"; // String
    $f = true;    // Boolean
    $g = NULL;    // NULL

    $a = (float) $a;
    $b = (float) $b;
    $c = (float) $c;
    $d = (float) $d;
    $e = (float) $e;
    $f = (float) $f;
    $g = (float) $g;

    var_dump($a); //output : float(5) 
    var_dump($b); //output : float(5.34) 
    var_dump($c); //output : float(25) 
    var_dump($d); //output : float(0) 
    var_dump($e); //output : float(0) 
    var_dump($f); //output : float(1)  
    var_dump($g); //output : float(0)
    echo "<br><br>";

    //cast menjadi tipe boolean
    echo "<h1>cast menjadi boolean</h1><br>";
    $a = 5;       // Integer
    $b = 5.34;    // Float
    $c = 0;       // Integer
    $d = -1;      // Integer
    $e = 0.1;     // Float
    $f = "hello"; // String
    $g = "";      // String
    $h = true;    // Boolean
    $i = NULL;    // NULL

    $a = (bool) $a;
    $b = (bool) $b;
    $c = (bool) $c;
    $d = (bool) $d;
    $e = (bool) $e;
    $f = (bool) $f;
    $g = (bool) $g;
    $h = (bool) $h;
    $i = (bool) $i;

    var_dump($a); //output : bool(true) 
    var_dump($b); //output : bool(true) 
    var_dump($c); //output : bool(false) 
    var_dump($d); //output : bool(true) 
    var_dump($e); //output : bool(true) 
    var_dump($f); //output : bool(true) 
    var_dump($g); //output : bool(false) 
    var_dump($h); //output : bool(true) 
    var_dump($i); //output : bool(false)
    echo "<br><br>";

    //cast menjadi tipe array
    echo "<h1>cast menjadi array</h1><br>";
    $a = 5;       // Integer
    $b = 5.34;    // Float
    $c = "hello"; // String
    $d = true;    // Boolean
    $e = NULL;    // NULL

    $a = (array) $a;
    $b = (array) $b;
    $c = (array) $c;
    $d = (array) $d;
    $e = (array) $e;

    var_dump($a); //output : array(1) { [0]=> int(5) } 
    var_dump($b); //output : array(1) { [0]=> float(5.34) } 
    var_dump($c); //output : array(1) { [0]=> string(5) "hello" } 
    var_dump($d); //output : array(1) { [0]=> bool(true) } 
    var_dump($e); //output : array(0) { } array(2) 

    /**
     * ketika mengkonversi menjadi array, sebagian besar terconvert menjadi sebuah indexed array dengan 1 elemen
     * 
     * nilai NULL di convert menjadi sebuah array object kosong
     * 
     * object akan terconvert menjadi associative array dimana nama property menjadi key
     * dan nilai propertynya menjadi nilainya
     */

    //convert object menjadi array
    class Car{
        public $color;
        public $model;
        public function __construct($color, $model){
            $this->color = $color;
            $this->model = $model;
        }

        public function message(){
            return "my car is " . $this->color . " " . $this->model;
        }
    }

    $myCar = new Car("merah", "avanza");
    $myCar = (array) $myCar;
    var_dump($myCar); //output : { ["color"]=> string(5) "merah" ["model"]=> string(6) "avanza" }
    echo "<br><br>";

    //cast menjadi object
    echo "<h1>cast menjadi object</h1><br>";
    $a = 5;       // Integer
    $b = 5.34;    // Float
    $c = "hello"; // String
    $d = true;    // Boolean
    $e = NULL;    // NULL

    $a = (object) $a;
    $b = (object) $b;
    $c = (object) $c;
    $d = (object) $d;
    $e = (object) $e;

    var_dump($a); //output : object(stdClass)#1 (1) { ["scalar"]=> int(5) } 
    var_dump($b); //output : object(stdClass)#2 (1) { ["scalar"]=> float(5.34) } 
    var_dump($c); //output : object(stdClass)#3 (1) { ["scalar"]=> string(5) "hello" } 
    var_dump($d); //output : object(stdClass)#4 (1) { ["scalar"]=> bool(true) }
    var_dump($e); //output : object(stdClass)#5 (0) { }

    /**
     * ketika mengkonversi menjadi object, sebagian besar tipe data menjadi object dengan 1 property
     * dinamakan "scalar", dengan nilai yang ada sebelumnnya
     * 
     * nilai NULL dikonversi menjadi object kosong
     * 
     * indexed array akan dikonversi menjadi object dengan nomer index sebagai nama propertynya dan
     * nilai yang ada menjadi nilai dari propertynya
     * 
     * associative array akan dikonversi menjadi object dengan keynya sebagai nama propertynya dan
     * nilainya sebagai nilai dari propertynya
     */
    $a = array("honda", "suzuki", "samsung");
    $b = array("peter"=>19, "joe"=>20, "sam"=>30);

    $a = (object) $a;
    $b = (object) $b;

    var_dump($a); //output : object(stdClass)#2 (3) { ["0"]=> string(5) "honda" ["1"]=> string(6) "suzuki" ["2"]=> string(7) "samsung" } 
    var_dump($b); //output : object(stdClass)#1 (3) { ["peter"]=> int(19) ["joe"]=> int(20) ["sam"]=> int(30) }
    echo "<br><br>";
?>