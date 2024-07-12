//javascript string template
console.log("string template : ");

/**
 * string template juga memiliki beberapa sebutan lain seperti :
 *  1. string templates
 *  2. template strings
 *  3. templates literals
 */

//back-ticks syntax
/**
 * template string menggunakan back-ticks (`) daripada quotes ("") ketika membuat
 * string 
 */
console.log(`jaka`);

//quotes inside string
/**
 * back-ticks memperbolehkan adanya quotes di dalamnya
 */
console.log(`jaka sembung bawa "golok"`);

//multiline strings
/**
 * selain itu, template string juga memperbolehkan adanya multiline string (tidak masalah jika ingin
 * menambahkan line baru, ini tidak akan merusak kode javascriptnya)
 */
console.log(`
    jaka
    jiki
    `);

//interpolation
/**
 * template string memudahkan kita untuk menginterpolasikan variable dan ekspresi ke dalam string 
 * 
 * metode ini disebut interpolation
 * 
 * syntaxnya adalah : ${...}
 */

//variable substitution
/**
 * template string memperbolehkan adanya variable di string
 */
let namaKakak = "kaka";
let namaAdik = "adik";
console.log(`string : ${namaKakak + " " + namaAdik}`);

//expression substitution
/**
 * selain itu, kita juga bisa memasukkan expression ke dalam string secara langsung
 */
console.log(`jawaban : ${15 + 20 * 10}`);

//html templates
/**
 * selain itu, kita juga bisa membuat template html dengan template string
 */
let header = "template string";
let tags = ["template string", "javascript", "ES06"];
let html = `<h2>${header}</h2><ul>`;

for (const i of tags){
    html += `<li>${i}</li>`;
}
html += "</ul>"

document.getElementById("templatePlace").innerHTML = html;