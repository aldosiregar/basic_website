//javascript HTML DOM document
/**
 * object HTML DOM document adalah pemilik dari semua object lain didalam 
 * webpage kita
 */

//HTML DOM document object
/**
 * document object merepresentasikan web page kita
 * 
 * jika kita ingin mengakses element lain pada sebuah page HTML, kita selalu
 * memulainya dengan mengakses object document
 * 
 * dibawah ini adalah beberapa contoh dari bagaimana kita menggunakan object
 * document untuk mengakses dan memanipulasi HTML
 */

//menemukan element HTML
/**
 * method                                   description
 * document.getElementById(id)              temukan sebuah element melalui id
 * 
 * document.getElementsByTagName(name)      temukan sebuah element melalui tag name
 * 
 * document.getElementsByClassName(name)    temukan sebuah element melalui class name
 */

//merubah element HTML
/**
 * property                                 description
 * element.innerHTML = new html content     merubah inner HTML dari sebuah element
 * 
 * element.attribute = new value            merubah nilai attribute dari sebuah element HTML
 * 
 * element.style.property = new style       merubah style dari sbeuah element HTML
 * 
 * method                                   description
 * element.setAttribute(attribute, value)   ubah nilai attribute dari sebuah element HTML
 */

//menambahk atau menghapus element
/**
 * method                                   description
 * document.createElement(element)          buat sebuah element HTML
 * 
 * document.removeChild(element)            hapus sebuah element HTML
 * 
 * document.appendChild(element)            tambahkan sebuah element HTML
 * 
 * document.replaceChild(new, old)          timpa sebuah element HTML
 * 
 * document.write(text)                     tulis sesuatu ke HTML output stream
 */

//menambahkan event handlers
/**
 * method                                   description
 * document.getElementById(id).onclick =    menambahkan code event handler kedalam event onclick
 * function() {code}
 */

//menemukan HTML object
/**
 * HTML DOM level 1 (1998), mendefinisikan 11 HTML objects, object collection, dan 
 * properties, ini masih valid di HTML5
 * 
 * kemudian, di HTML DOM level 3, lebih banyak objects, collection, dan properties yang 
 * ditambahkan
 * 
 * property                         description                         DOM
 * document.anchors                 mengembalikan semuah element <a>    1
 *                                  yang memiliki attribute name        
 * 
 * document.applets                 usang                               1
 * 
 * document.baseURI                 mengembalikan absolute base URI     3     
 *                                  dari document
 * 
 * document.body                    mengembalikan element <body>        1
 * 
 * document.cookie                  mengembalikan document's cookie     1
 * 
 * document.doctype                 mengembalikan document's doctype    3
 *  
 * document.documentElement         mengembalikan element <html>        3
 * 
 * document.documentMode            mengembalikan mode yang digunakan   3
 *                                  browser
 * 
 * document.documentURI             mengembalikan URI dari document     3
 * 
 * document.domain                  mengembalikan nama domain dari      1 
 *                                  document server
 * 
 * document.domConfig               tidak lagi digunakan                3
 * 
 * document.embeds                  mengembalikan semua element         3
 *                                  <embed>
 * 
 * document.forms                   mengembalikan semua element         1
 *                                  <form>  
 * 
 * document.head                    mengembalikan element <head>        3
 * 
 * document.images                  mengembalikan semua element         1
 *                                  <img>
 * 
 * document.implementation          returns the DOM implementation      3
 * 
 * document.inputEncoding           mengembalikan document's encoding   3
 *                                  (character set)
 * 
 * document.lastModified            mengembalikan tanggal dan waktu     3
 *                                  ketika document diupdate
 * 
 * document.links                   mengembalikan semua <area> dan <a>  1
 *                                  elements yang memiliki attribute 
 *                                  href
 * 
 * document.readyState              mengembalikan (loading) status      3 
 *                                  dari document   
 * 
 * document.referrer                mengembalikan URI dari referrer     1
 *                                  (linking document)
 * 
 * document.scripts                 mengembalikan semua element         3 
 *                                  <script>
 * 
 * document.strictErrorChecking     mengembalikan jika error checking   3
 *                                  ter-enforced
 * 
 * document.title                   mengembalikan element <title>       1
 * 
 * document.URL                     mengembalikan URL lengkap dari      1 
 *                                  document
 */