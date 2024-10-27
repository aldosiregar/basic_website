<?php
    /**
     * operator digunakan untuk melakukan operasi pada variabel ataupun nilai
     * 
     * php membagi operator dalam beberapa grup
     *  1. arithmethic operator
     *  2. assignment operator
     *  3. comparison operator
     *  4. increment/decrement operator
     *  5. logical operator
     *  6. string operator
     *  7. array operator
     *  8. condtional assignment operator 
     */

    //php arithmethic operator
    /**
     * php arithmetic operator digunakan untuk nilai angka untuk melakukan operasi matematika sederhana
     * seperti penambahan, pengurangan, perkalian, dan lain sebagainya
     * 
     * (+)  Addition	    =	Sum of $x and $y	
     * (-)	Subtraction	    =	Difference of $x and $y	
     * (*)	Multiplication	=	Product of $x and $y	
     * (/)	Division	    =	Quotient of $x and $y	
     * (%)	Modulus	        =	Remainder of $x divided by $y	
     * (**) Exponentiation	=	Result of raising $x to the $y'th power
     */
    $addition = 14 + 20;
    $subtraction = 30 - 14;
    $multiply = 3 * 17;
    $divide = 5 / 12;
    $modulo = 4 % 2;
    $exponen = 4 ** 2;

    echo "<h1>php arithmethic operator</h1>"; 
    echo "<p>penambahan = $addition </p>"; //output : penambahan = 34
    echo "<p>pengurangan = $subtraction </p>"; //output : pengurangan = 16
    echo "<p>perkalian = $multiply </p>"; //output : perkalian = 51
    echo "<p>pembagian = $divide </p>"; //output : pembagian = 0.41666666666667
    echo "<p>modulus = $modulo </p>"; //output : modulus = 0
    echo "<p>perpangkatan = $exponen </p>"; //output : perpangkatan = 16
    echo "<br><br>";

    //php assignment operator
    /**
     * php assignment operator digunakan untuk nilai numerik untuk mengisi sebuah nilai kedalam variabel
     * 
     * operator assignment paling dasar adalah "=", artinya bagian kiri di-set nilainya dengan bagian kanan
     * 
     * x = y    same as 	x = y	    The left operand gets set to the value of the expression on the right	
     * x += y	same as     x = x + y	Addition	
     * x -= y	same as     x = x - y	Subtraction	
     * x *= y	same as     x = x * y	Multiplication	
     * x /= y	same as     x = x / y	Division	
     * x %= y	same as     x = x % y	Modulus
     */

    //php comparison operator
    /**
      * php comparison operator digunakan untuk membandingkan 2 nilai (baik angka maupun string)
      * (==)	Equal		                Returns true if $x is equal to $y	
      * (===)	Identical	                Returns true if $x is equal to $y,  
      *                                     and they are of the same type	
      * (!=)	Not equal	                Returns true if $x is not equal to $y	
      * (<>)	Not equal	                Returns true if $x is equal to $y (xor logic)
      * (!==)	Not identical	            Returns true if $x is not equal to $y, 
      *                                     or they are not of the same type	
      * (>)	    Greater than	            Returns true if $x is greater than $y	
      * (<)	    Less than	   	            Returns true if $x is less than $y	
      * (>=)	Greater than or equal to	Returns true if $x is greater than or equal to $y	
      * (<=)	Less than or equal to	    Returns true if $x is less than or equal to $y	
      * (<=>)	Spaceship	                Returns an integer less than, 
      *                                     equal to, or greater than zero, 
      *                                     depending on if $x is less than, equal to, 
      *                                     or greater than $y. Introduced in PHP 7.
      *                                     (if less, return -1. if same, return 0. if more, return 1)
      */
    echo "<h1>php arithmethic operator</h1>";
    echo "<p>apakah 14 sama dengan 14? : " . (14 == 14) . "</P>"; //output : 1
    echo "<p>apakah tulisan 'big' sama dengan 'bag'? : " . ("big" === "bag") . "</P>"; //output : 0
    echo "<p>apakah 14 tidak sama dengan 7? : " . (14 != 7) . "</P>"; //output : 1
    echo "<p>apakah 14 tidak sama dengan '14'? : " . (14 <> "14") . "</P>"; //output : 0
    echo "<p>apakah 14 tidak sama tipenya dengan '14'? : " . (14 !== "14") . "</P>"; //output : 1
    echo "<p>apakah 14 lebih dari 15? : " . (14 > 15) . "</P>"; //output : 0
    echo "<p>apakah 14 kurang dari 20? : " . (14 < 20) . "</P>"; //output : 1
    echo "<p>apakah 14 lebih dari sama dengan 14? : " . (14 >= 14) . "</P>"; //output : 1
    echo "<p>apakah 14 kurang dari sama dengan 3? : " . (14 <= 3) . "</P>"; //output : 1
    echo "<p>apakah 14 sama dengan 14? : " . (14 <=> 14) . "</P>"; //output : 0
    echo "<br><br>";

    //php increment/decrement operators
    /**
     * php increment operators digunakan untuk melakukan inkremen
     * 
     * sedangkan php decrement operators digunakan untuk melakukakn decrement
     * 
     * ++$x :	Pre-increment	Increments $x by one, then returns $x	
     * $x++ :	Post-increment	Returns $x, then increments $x by one	
     * --$x : Pre-decrement	Decrements $x by one, then returns $x	
     * $x-- : Post-decrement	Returns $x, then decrements $x by one
     */

    //php logical operator
    /**
     * php logical operators digunakan untuk menggabungkan statement conditional
     * 
     * (and) :	And,	True if both $x and $y are true	
     * (or)  :	Or.	  True if either $x or $y is true	
     * (xor) :	Xor,	True if either $x or $y is true, but not both	
     * (&&)  :	And,	True if both $x and $y are true	
     * (||)  :	Or, 	True if either $x or $y is true	
     * (!)   :  Not,	True if $x is not true	
     */
    $x = true;
    $y = false;
    echo "<h1>php logical operator</h1>";
    echo "<p>true dan true akan menghasilkan = ". $x && $x ."</p>";
    echo "<p>true dan false akan menghasilkan = ". $x || $y ."</p>";
    echo "<p>nilai terbalik dari false adalah". !$y ."</p>";
    echo "<br><br>";

    //php string operator
    /**
     * php memiliki 2 operator yang di design khusus untuk string 
     * 
     * (.)	Concatenation	: Concatenation of $txt1 and $txt2	
     * (.=)	Concatenation : assignment,	Appends $txt2 to $txt1
     */

    //php array operators
    /**
     * php array operators digunakan untuk membandingkan array
     * 
     * (+)	  Union	      :	Union of $x and $y	
     * (==)	  Equality	  :	Returns true if $x and $y have the same key/value pairs	
     * (===)	Identity	  :	Returns true if $x and $y have the same key/value pairs 
     *                      in the same order and of the same types	
     * (!=)	  Inequality	:	Returns true if $x is not equal to $y	
     * (<>)	  Inequality	:	Returns true if $x is not equal to $y	(xor)
     * (!==)	Non-identity:	Returns true if $x is not identical to $y
     */
    $x = array(1, 2 , 4 , 8, "hello");
    $y = array(5, "good", "array", 2, 3);
    echo "<h1>array operators</h1>";
    echo "<p>array x : ";
    var_dump($x);
    echo "</p><p>array y : ";
    var_dump($y);
    echo "</p>";
    echo "<p>gabungan dari x dan y adalah: ";
    var_dump($x + $y); //output : { [0]=> int(1) [1]=> int(2) [2]=> int(4) [3]=> int(8) [4]=> string(5) "hello" }
    echo "</p>";
    echo "<p>apakah x dan y memiliki nilai yang sama: ";
    var_dump($x == $y); //output : bool(false)
    echo "</p>";
    echo "<p>apakah x dan y memiliki nilai dan tipe data yang sama: ";
    var_dump($x === $y); //output : bool(false)
    echo "</p>";
    echo "<p>apakah x tidak sama dengan y: ";
    var_dump($x != $y); //output : bool(true)
    echo "</p>";
    echo "<p>apakah x dan y adalah array yang berbeda: ";
    var_dump($x <> $y); //output : bool(true)
    echo "</p>";
    echo "<p>apakah x dan y tidak sama nilai dan tipe datanya: ";
    var_dump($x !== $y); //output : bool(true)
    echo "</p>";
    echo "<br><br>";

    //php conditional assignment operators
    /**
     * php conditional assignment operators digunakan untuk meng-set nilai tergantung
     * dari sebuah kondisi
     * 
     * (?:)	Ternary	        :	Returns the value of $x. The value of $x is expr2 if expr1 = TRUE.
     *                        The value of $x is expr3 if expr1 = FALSE	
     * (??)	Null coalescing	:	Returns the value of $x.
     *                        The value of $x is expr1 if expr1 exists, and is not NULL.
     *                        If expr1 does not exist, or is NULL, the value of $x is expr2.
     *                        Introduced in PHP 7
     */
    $x = 5;
    $hasil = $x < 10 ? true : false;
    $y = $nilai ?? false;
    echo "<h1>php conditional assignment operators</h1>";
    echo "<p>apakah $x lebih kecil dari 10? : $hasil</p>"; //output : 1
    echo "<p>apakah nilai y sudah terisi? : $y</p>"; //output : 0
    echo "<br><br>";
?>