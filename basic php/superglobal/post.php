<?php
    //php $_POST
    /**
     * $_POST berisi array variable yang diterima dari HTTP POST method
     * 
     * ada 2 cara untuk mengirimkan variable dari HTTP POST method : 
     *  1. HTML form
     *  2. javascript HTTP request
     */

    //$_POST di HTML from
    /**
     * html form melampirkan infomasi melalui HTTP POST method jika method formnya di-set ke "POST"
     * 
     * contoh bentuk formnya adalah sebagai berikut
     * 
     * <html>
     * <body>
     * <form method="POST" action="demo_request.php">
     *  Name: <input type="text" name="fname">
     *  <input type="submit">
     * </form>
     * 
     * </body>
     * </html>
     */


    /**
     * ketika user menekan tombol submit, data form akan dikirimkan ke file php yang telah ditentukan
     * di attribut action pada tag form
     * 
     * dalam file action kita dapat menggunakan variable $_POST untuk mengumpulkan nilai dari field
     * input
     */
    $data = $_POST["fname"];

    //$_POST di javascript HTTP request
    /**
     * ketika mengirimkan HTTP request di javascript, kita dapat menentukan HTTP methodnya sebagai POST
     * 
     * contoh kodenya adalah sebagai berikut : 
     * 
     * function myfunction() {
     *  const xhttp = new XMLHttpRequest();
     *  xhttp.open("POST", "demo_phpfile.php");
     *  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     *  xhttp.onload = function() {
     *      document.getElementById("demo").innerHTML = this.responseText;
     *  }
     *  xhttp.send("fname=Mary");
     *  }
     * }
     * 
     * kode diatas akan berjalan sebagai berikut : 
     *  1. menjalankan HTTP request
     *  2. men-set HTTP request ke POST
     *  3. men-set request header yang valid
     *  4. membuat function untuk mengeksekusi perintah ketika request selesai
     *  5. mengirim HTTP request dengan nilai variable fname menjadi Mary 
     */

    /**
     * pada bagian function akan tereksekusi ketika request telah berhasil dijalankan 
     * 
     * xhttp.onload = function() {
     *  document.getElementById("demo").innerHTML = this.responseText;
     * }
     * 
     * fungsi ini akan menulis respond dari operasi di element HTML dengan id="demo"
     * 
     * untuk menerima data ini, caranya sama seperti sebelumnya, cukup ambil datanya
     * dengan variable $_POST
     */
?>