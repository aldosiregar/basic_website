<?php
    //php $_GET
    /**
     * $_GET berisi array variable yang diterima dari method HTTP request GET
     * 
     * ada 2 cara untuk mengirim variable melalui HTTP GET request method
     *  1. melalui query string dari HTML
     *  2. HTML Forms
     */

    //query string dari URL
    /**
     * query string adalah data yang ditambahkan pada akhir URL, pada link dibawah ini, semua setelah
     * huruf ? adalah bagian dari query string
     * 
     * <a href="demo_phpfile.php?subject=PHP&web=W3schools.com">Test $GET</a>
     * 
     * query string diatas berisi dua pasangan key/value : 
     *  1. subject = PHP
     *  2. web =  W3schools.com
     * 
     * untuk menerima nilainya, kita cukup menggunakan variabel $_GET
     */
    $data = [$_GET["subject"], $_GET["web"]];

    //get pada HTML form
    /**
     * Form html mengirimkan informasi melalui HTTP GET method jika atribut form method di-set ke GET
     * 
     * contoh kodenya adalah sebagai berikut : 
     * 
     * <html>
     * <body>
     * 
     * <form action="welcome_get.php" method="GET">
     *  Name: <input type="text" name="name">
     *  E-mail: <input type="text" name="email">
     *  <input type="submit">
     * </form>
     * 
     * </body>
     * </html>
     * 
     * ketika user menekan tombol submit, data dari form akan dikirimkan ke file php yang dispesifikkan
     * pada atribut action pada tag form
     * 
     * form field dikirmkan ke file php, dengan inputnya menjadi query string
     * 
     * welcome_get.php?name=John&email=john@example.com
     * 
     * dan untuk mengambil datanya, sama seperti tutorial sebelumnya
     */

    //pikirkan keamanan ketika mengolah PHP form
    /**
     * contoh-contoh sebelumnya tidak memiliki validasi form, tutorial diatas hanya untuk menunjukkan bagaimana
     * cara menerima data dari form
     */
?>