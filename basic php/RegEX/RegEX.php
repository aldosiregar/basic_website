<?php
    //php Regular Expression
    /**
     * regular expression adalah kumpulan karakter yang membentuk sebuah pola pencarian, ketika kita
     * mencari data pada text, kita dapat menggunakan pola pencarian untuk menjelaskan data apa
     * yang kita cari
     * 
     * regular expression dapat berupa satu karakter, maupun pola yang rumit
     * 
     * regular expression dapat digunakan untuk menjalankan semua tipe pencarian text dan proses
     * menimpa text
     */

    //syntax
    /**
     * di php, regular expression adalah string yang berisikan delimiters, pattern, dan optional modifiers
     */
    $exp = "/budis/i";

    /**
     * pada contoh diatas, / adalah delimiters, budis adalah pattern yang dicari, dan i adalah modifiers
     * yang membuat pencariannya menjadi case-sensitive
     * 
     * delimiters dapat berupa karakter apapun yang bukan huruf, angka, backlash ataupun space, paling
     * sering delimiters berbentuk forward slash (/), tapi ketika patern kita juga memiliki forward slash
     * maka bisa juga diganti delimiters lain seperti # atau ~
     */

    //regular expression function
    /**
     * php menyediakan berbagai fungsi yang membuat kita bisa menggunakan regular expression
     * 
     * fungsi yang paling sering digunakan antara lain : 
     * 
     * Function	            Description
     * preg_match()	        Returns 1 if the pattern was found in the string and 0 if not
     * 
     * preg_match_all()	    Returns the number of times the pattern was 
     *                      found in the string, which may also be 0
     * 
     * preg_replace()	    Returns a new string where matched patterns 
     *                      have been replaced with another string
     */

    //menggunakan preg_match()
    /**
     * fungsi preg_match() akan memberitahu kita jika string berisi matches pattern
     */
    //gunakan regex untuk mencari kata "budis" dengan setting case-sensitive
    $str = "barakubudissard";
    $patern = "/budis/i";
    echo "<p>" . preg_match($patern, $str) . "</p>";

    //menggunakan preg_match_all()
    /**
     * fungsi preg_match_all() akan memberitahu berapa banyak patern yang ditemukan pada
     * sebuah string
     */
    //gunakan regex untuk mencari kata "an" dengan setting case-sensitive
    $str = "banyak orang yang suka makan ayam dibandingkan sapi di bali";
    $patern = "/an/i";
    echo "<p>" . preg_match_all($patern, $str) . "</p>";

    //menggunakan preg_replace()
    /**
     * fungsi preg_replace() akan menggantikan semua kata yang sesuai dengan patern yang telah
     * ditentukan ke menjadi string lain
     */
    //gunakan regex untuk menggantikan kata "badi" menjadi "saga"
    $str = "pribadi yang baik datang dari hidup yang baik";
    $patern = "/badi/i";
    echo "<p>" . preg_replace($patern, "saga", $str) . "</p>";

    //regular expression modifiers
    /**
     * Modifier	    Description
     * i	        Performs a case-insensitive search
     * 	
     * m	        Performs a multiline search (patterns that search for a match at 
     *              the beginning or end of a string will now match the beginning or end of each line)
     * 
     * u	        Enables correct matching of UTF-8 encoded patterns
     */

    //regular expression pattern
    /**
     * brackets digunakan untuk mencari range dari karakter
     * 
     * Expression	Description
     * [abc]	    Find one or many of the characters inside the brackets
     * 
     * [^abc]	    Find any character NOT between the brackets	
     * 
     * [a-z]	    Find any character alphabetically between two letters	
     * 
     * [A-z]	    Find any character alphabetically between a specified upper-case letter 
     *              and a specified lower-case letter	
     * 
     * [A-Z]	    Find any character alphabetically between two upper-case letters.	
     * 
     * [123]	    Find one or many of the digits inside the brackets	
     * 
     * [0-5]	    Find any digits between the two numbers	
     * 
     * [0-9]	    Find any digits
     */
    $str = "0821hhdksMSNasn80468hhdjsm7798";
    $patern = "/[a-z A-Z]/";
    echo "<p>" . preg_replace($patern, "", $str) . "</p>";

    //metacharacters
    /**
     * metacharacters adalah karakter dengan arti khusus
     * 
     * Metacharacter	Description	
     * |	            Find a match for any one of the patterns separated by | as in: cat|dog|fish	
     * 
     * .	            Find any character	
     * 
     * ^	            Finds a match as the beginning of a string as in: ^Hello	
     * 
     * $	            Finds a match at the end of the string as in: World$	
     * 
     * \d	            Find any digits	
     * 
     * \D	            Find any non-digits	
     * 
     * \s	            Find any whitespace character	
     * 
     * \S	            Find any non-whitespace character	
     * 
     * \w	            Find any alphabetical letter (a to Z) and digit (0 to 9)	
     * 
     * \W	            Find any non-alphabetical and non-digit character	
     * 
     * \b	            Find a match at the beginning of a word 
     *                  like this: \bWORD, or at the end of a word like this: WORD\b	
     * 
     * \uxxxx	        Find the Unicode character specified by the hexadecimal number xxxx
     */
    //alternatifnya gunakan metacharacters untuk menghilangkan huruf pada string nomer hp sebelumnya
    $patern = "/\D/";
    echo "<p>". preg_replace($patern, "", $str) ."</p>";

    //contoh untuk melakukan replace pada beberapa match di kata "jaka, budi, dan joko"
    $str = "ketiga pelaku pembunuhan yang tertangkap adalah jaka, budi, dan joko";
    $patern = "/jaka|budi|joko/";
    echo "<p>". preg_replace($patern, "#", $str) ."</p>";

    //quantifiers
    /**
     * quantifiers mengisyaratkan jumlah
     * 
     * Quantifier	Description	
     * n+	        Matches any string that contains at least one n	
     * 
     * n*	        Matches any string that contains zero or more occurrences of n	
     * 
     * n?	        Matches any string that contains zero or one occurrences of n	
     * 
     * n{3}	        Matches any string that contains a sequence of 3 n's	
     * 
     * n{2, 5}	    Matches any string that contains a sequence of at least 2, but not more that 5 n's	
     * 
     * n{3,}	    Matches any string that contains a sequence of at least 3 n's
     */
    //gunakan regex untuk menghitung berapa banyak kata "asu" muncul pada string ini
    $str = "asu kontol anak babi kau asu asu";
    $patern = "/asu+/";
    echo "<p>" . preg_match_all($patern, $str) . "</p>";

    /**
     * note : 
     * jika expression kita ingin mencari satu dari special characters kita bisa menggunakan 
     * backslash untuk membiarkan mereka agar tidak dianggap patern, contohnya kita ingin mencari
     * satu atau lebih tanda tanya kita dapat menggunakan patern berikut :
     * 
     * $patern = "/\?+/";
     */

    //grouping
    /**
     * kita dapat menggunakan parantheses () untuk menambahkan quantifiers ke semua patern, mereka juga
     * dapat digunakan untuk memilih bagian yang patern yang digunakan sebagai match
     */
    //misal kita ingin mengelompokkan kata "tertata" dengan mencari kata ter diikuti dua kata ta
    $str = "pemerintahan yang tertata akan menciptakan masyarakat yang tertata pula";
    $patern = "/ter(ta){2}/";
    echo "<p>" . preg_match_all($patern, $str) . "</p>";
?>