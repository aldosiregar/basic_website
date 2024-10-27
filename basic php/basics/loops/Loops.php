<?php
    //php loops
    /**
     * sering ketika kita menulis kode, kita ingin sebuah block kode untuk dijalankan
     * beberapa kali, jadi daripada kita menulis beberapa kode yang hampir sama
     * kita bisa menggunakan loop
     * 
     * loop biasanya digunakan untuk mengeksekusi kode yang sama berkali-kali, 
     * selama kondisinya benar
     * 
     * dalam php, kita mengenal beberapa loop
     *  1. while - loop blok code selama kondisinya benar
     *  2. do...while - loop beberapa kode sekali, setelah itu ulangi kode selama kondisinya benar
     *  3. for - loop blok code selama beberapa kali yang sudah kita tentukan
     *  4. foreach - loop kode tergantung dari isi di dalam array
     */

    //while loops
    /**
     * while loop akan mengeksekusi kode selama kondisinya benar
     * 
     * while loop tidak menspesifikkan berapa banyak kode akan berulang, namun memeriksa
     * kondisi pada setiap iterasi perulangan
     * 
     * kondisi ini tidak memiliki counter, kondisinya dapat berupa status operasi maupun
     * kondisi yang dievalusi apakah benar atau salah
     */

    //break statement
    /**
     * dengan break statement, sebuah perulangan while dapat terhenti bahkan ketika kondisinya
     * masih benar
     */

    //continue statement
    /**
     * dengan continue statement kita dapat menghentikan iterasi sekarang, dan melanjutkan
     * ke iterasi berikutnya
     */
    $i = 1;
    $sum = 0;

    //hitung berapa jumlah semua angka ganjil dibawah 100
    while(true){
        if($i % 2 == 0){
            $i++;
            continue;
        }
        if($i >= 100) break;
        $sum += $i;
        $i++;
    }
    echo "<p>jumlah semua nilai ganjil dibawah 100 = $sum</p>";

    //alternative syntax
    /**
     * syntax while juga dapat ditulis dengan endwhile statement seperti dibawah ini
     * 
     * $i = 1;
     * while ($i < 6):
     *  echo $i;
     *  $i++;
     *  endwhile;
     */

    
    //do...while loop
    /**
     * do...while loop selalu mengeksekusi kode setidaknya sekali, lalu memeriksa kondisi
     * dan mengulangi loop selama kondisinya masih benar
     * 
     * note :
     * dalam do...while, kondisi selalu dicek setelah eksekusi statement didalam loop
     * ini artinya do...while akan mengeksekusi kode setidaknya sekali walaupun
     * kondisi selanjutnya akan tetap salah
     * 
     * break dan continue dalam tutorial while sebelumnya juga berlaku dalam keyword ini
     */
    $x = 0;
    $sum = 0;
    //hitung semua nilai genap di bawah seratus satu
    do{
        $x++;
        if($x % 2 == 0) $sum += $x;
    } while ($x < 101);
    echo "<p>jumlah nilai genap dibawah seratus satu = $sum</p>";


    //for loop
    /**
     * for loop digunakan ketika kita tahu berapa banyak kode tersebut harus mengulang
     * 
     * syntax : 
     * for (expression1; expression2; expression3) {
     * code block
     * }
     * 
     * cara kerja : 
     *  1. expression1 dievaluasi sekali
     *  2. expression2 dievaluasi sebelum setiap iterasi
     *  3. expression3 dievaluasi setelah setiap iterasi
     * 
     * continue dan break bekerja sama seperti contoh perulangan sebelumnya
     */
    $sum = 0;
    for($i = 0; $i < 100; $i++){
        $sum += $i;
    }
    //jumlah dari semua bilangan dibawah 100
    echo "<p>jumlah seluruh bilangan dibawah 100 = $sum</p>";


    //foreach loop
    /**
     * foreach loop sering digunakan dalam mengakses items di array
     * 
     * untuk setiap iterasi loop, nilai dari nilai array saat itu diassign dalam variabel $x,
     * iterasi berlanjut sampai mencapai item terakhir dari element array
     */
    $color = ["red", "blue", "yellow"];

    foreach($color as $x){
        echo "<p>" . $x . "</p>"; 
    }

    //keys and values in associative arrays
    /**
     * array diatas adalah index array, dimana item pertama bernilai 0, kedua 1, dan seterusnya
     * 
     * associative array sedikit berbeda, associative arrays menggunakan keys bernama yang dapat dinamakan sendiri
     * dan ketika di loop, kita ingin menyimpan key dan juga nilainya
     * 
     * ini dapat dilakukan dengan menspesifikkan key dan juga nilainya dalam definition foreach sebagai berikut
     */
    $car = ["model" => "bmw", "capacity" => 4, "price" => 100000];

    foreach($car as $x => $y){
        echo "<p>array1 = $x, values = $y</p>";
    }

    //foreach loop in objects
    /**
     * foreach loops juga dapat digunakan untuk loop properties objects
     */
    class data{
        public $name;
        public $job;
        public $address;
        public function __construct($name, $job, $address)
        {
            $this->name = $name;
            $this->job = $job;
            $this->address = $address;
        }
    }

    $employee = new data("aldo", "programmer", "jln mawar no 351");

    foreach($employee as $x => $y){
        echo "<p>properties = $x, values = $y</p>";
    }

    /**
     * konsep continue dan break untuk tutorial diatas masih sama dengan yang lain
     */

    //foreach byref
    /**
     * ketika looping arrays items, perubahan yang dilakukan di array items tidak
     * akan berefek kepada array originalnya
     * 
     * contoh : 
     * $colors = array("red", "green", "blue", "yellow");
     * 
     * foreach ($colors as $x) {
     *  if ($x == "blue") $x = "pink";
     * }
     * 
     * var_dump($colors);
     * 
     * tetapi, jika menggunakan huruf & dalam deklarasi foreach, array item yang ditempatkan
     * akan mengacu pada alamat arraynya, yang dimana perubahan yang terjadi pada array
     * akan terjadi juga pada array originalnya
     */
    $color = ["red", "blue", "yellow", "black"];

    foreach($color as &$x){
        if($x === "blue") $x = "green";
    }
    
    var_dump($color);
    echo "<br>";

    //alternative syntax
    /**
     * foreach syntax juga dapat ditulis dengan endforeach seperti berikut 
     * 
     * $colors = array("red", "green", "blue", "yellow");
     * 
     * foreach ($colors as $x) :
     *  echo "$x <br>";
     * endforeach;
     */
?>