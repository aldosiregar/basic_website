// javascript HTML DOM Elements
/**
 * pada bagian ini kita akan mempelajari bagaimana cara menemukan dan mengakses
 * element HTML pada sebuah page HTML
 */

//menemukan element HTML
/**
 * biasanya, dengan javascript, kita ingin memanipulasi element HTML
 * 
 * untuk melakukannya, kita harus menemukan elementnya terlebih dahulu, ada
 * beberapa cara untuk melakukan hal ini :
 * 
 * - menemukan element HTML dengan id
 * 
 * - menemukan element HTML dengan tag name
 * 
 * - menemukan element HTML dengan class name
 * 
 * - menemukan element HTML dnegan css selector
 * 
 * - menemukan element HTML dengan HTML object collections
 */

//menemukan element HTML dengan id
/**
 * ini cara termudah untuk menemukan sebuah element HTML pada DOM, yaitu dengan
 * menggunakan id
 * 
 * contoh dibawah ini akan menemukan element dengan id="intro" :
 * 
 * const element = document.getElementById("intro");
 * 
 * jika element ditemukan method akan mengembalikan element sebagai sebuah 
 * object (pada element)
 * 
 * jika element tidak ditemukan, element akan berisikan null
 */

//menemukan element HTML dengan tag name
/**
 * contoh dibawah ini akan menemukan semua element <p>
 * 
 * contoh : 
 * const element = document.getElementByTagName("p");
 * 
 * pada contoh ini, temukan element dengan id="main", kemudian temukan semua 
 * element <p> didalam "main" :
 * 
 * contoh :
 * const x = document.getElementById("main");
 * const y = x.getElementsByTagName("p");
 */

//menemukan element HTML dengan class name
/**
 * jika kita ingin menemukan semua element HTML pada class name yang sama, 
 * gunakan getElementByClassName()
 * 
 * contoh dibawah ini akan mengembalikan semua element dengan class="intro"
 * 
 * contoh : 
 * const x = document.getElementByClassName("intro");
 */

//menemukan element HTML dengan CSS selector
/**
 * jika kita ingin menemukan semua element HTML yang match dengan CSS selector
 * tertentu (id, class names, types, attributes, nilai attribute, dsb), 
 * gunakan method querySelectorAll
 * 
 * pada contoh dibawah, kembalikan sebuah list dari seluruh element <p> dengan
 * class="intro"
 * 
 * contoh : 
 * const x = document.querrySelectorAll("p.intro");
 */

//menemukan element HTML dengan HTML object collections
/**
 * pada contoh ini temukan element form dengan id="frm1", pada form collection,
 * dan tampilakn semua nilai elementnya :
 * 
 * contoh :
 * const x = document.forms["frm1"];
 * let text = '';
 * for (let i =0; i < x.length; i++){
 *  text += x.element[i].value + "<br>";
 * }
 * 
 * document.getElementById("demo").innerHTML = text;
 */

/**
 * HTML object dibawah ini (dan object collection juga), juga dapat diakses :
 * 
 * - document.anchors
 * 
 * - document.body
 * 
 * - document.documentElement
 * 
 * - document.embeds
 * 
 * - document.forms
 * 
 * - document.head
 * 
 * - document.images
 * 
 * - document.links
 * 
 * - document.scripts
 * 
 * - document.title
 */