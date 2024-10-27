<?php
    //$_REQUEST
    /**
     * $_REQUEST adalah php superglobal variable yang berisikan data yang disubmit dari sebuah form, dan
     * semua data cookie
     * 
     * dengan kata lain, $_REQUEST adalah array berisikan data dari $_GET, $_POST, dan $_COOKIE
     * 
     * kita dapat mengakses data ini dengan menggunakan keyword $_REQUEST diikuti dengan nama dari form
     * field, atau cookie, seperti berikut
     * 
     * $_REQUEST["firstname"];
     */

    //menggunakan $_REQUEST pada $_POST request
    /**
     * untuk yang harus ditulis dalam htmlnya adalah sebagai berikut
     * 
     * <html>
     * <body>
     * 
     * <form method="post" action="demo_request.php">
     *  Name: <input type="text" name="fname">
     *  <input type="submit">
     * </form>
     * 
     * </body>
     * </html>
     */

    /**
     * ketika user menekan button submit, form data akan dikirimkan ke file php yang ditentukan di atribut action
     * pada tag form
     * 
     * pada file action kita dapat menggunakan variable $_REQUEST untuk mengumpulkan data dari field input 
     */
    $data = $_REQUEST["fname"];
    echo $data;

    /**
     * pada contoh dibawah ini kita akan menaruh file html dan php dalam satu file, php yang sama
     * 
     * <html>
     * <body>
     * <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
     *  Name: <input type="text" name="fname">
     *  <input type="submit">
     * </form>
     * 
     * <?php
     * if ($_SERVER["REQUEST_METHOD"] == "POST") {
     *  $name = htmlspecialchars($_REQUEST['fname']);
     *  if (empty($name)) {
     *      echo "Name is empty";
     *  } else {
     *      echo $name;
     *  }
     * }
     * ?>
     * </body>
     * </html>
     */

    //menggunakan $_REQUEST pada $_GET request
    /**
     * $_get request dapat berbentuk submission form, dengan atribut method pada tag form diset menjadi
     * get
     * 
     * GET request juga dapat berupa data dari query string (informasi yang ditambahkan setelah url address)
     * 
     * berikut contoh dari bentuk html hyperlink, dengan query string : 
     * <html>
     * <body>
     * 
     * <a href="demo_phpfile.php?subject=PHP&web=W3schools.com">Test $GET</a>
     * </body>
     * </html>
     */

    /**
     * ketika user menekan sebuah link, query string data dikirim ke demo_phpfile.php
     * 
     * dalam file php kita dapat menggunakan variable $_REQUEST untuk mengumpulkan data dari 
     * query string 
     */
    echo "study " . $_REQUEST["subject"] . " at " . $_REQUEST["web"]; 
?>