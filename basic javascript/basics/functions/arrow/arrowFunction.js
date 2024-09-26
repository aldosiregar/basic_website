console.log("javascript arrow function");

//javascript arrow function
/**
 * arrow function dikenalkan pada ES6
 * 
 * arrow function memperbolehkan kita untuk menulis syntax function yang lebih singkat
 */
//tidak menggunakan arrow function
let regularFunctionExample = function(){
    return "ordinary function syntax";
}
console.log(regularFunctionExample());

//menggunakan arrow function
let arrowFunctionExample = () => {
    return "arrow function";
}
console.log(arrowFunctionExample());

/**
 * selain itu kita juga bisa mengeluarkan brackets jika function tersebut hanya mengembalikan value
 * 
 * kita tidak perlu menambahkan return untuk ini
 * 
 * note : 
 * ini hanya bekerja jika function tersebut memiliki satu baris kode
 */
arrowFunctionExample = () => "arrow function without brackets";
console.log(arrowFunctionExample());

/**
 * jika kita memiliki parameter, kita dapat menambahkan parameternya pada parantheses
 */
arrowFunctionExample = (val) => val * 2;
console.log(arrowFunctionExample(2));

/**
 * bahkan, jika kita hanya memiliki satu parameter kita bisa tidak menggunakan parantheses
 * sama sekali
 */
arrowFunctionExample = val => "nilai : " + val;
console.log(arrowFunctionExample(12));

//bagaimana dengan this?
/**
 * menghandle this juga berbeda pada arrow function dibandingkan pada regular function
 * 
 * singkatnya, dengan arrow function tidak ada binding pada this
 * 
 * pada regular function, keyword this menggambarkan object yang dipanggil pada function, yang dimana
 * bisa berupa window, document, button, dan sebagainya
 * 
 * dengan arrow function keyword this selalu menggambarkan object yang mendefinisikan arrow function
 * 
 * mari kita lihat dua contoh dibawah ini
 * 
 * keduanya memanggil method dua kali, pertama ketika page di load, dan sekali lagi ketika 
 * user menekan tombol
 * 
 * contoh pertama menggunakan regular function, dan contoh kedua menggunakan arrow function
 * 
 * pada contoh pertama akan mengembalikan dua object yang berbeda (window dan button), dan
 * yang kedua akan mengembalikan object window dua kali, karena object window adalah
 * "pemilik" dari function tersebut
 */
//pada regular function, this menggambarkan object yang memanggil function tersebut
regularFunctionExample = function (){
    document.getElementById("demo").innerHTML = this;
}

window.addEventListener("load", regularFunctionExample);

document.getElementById("btn").addEventListener("click", regularFunctionExample);

//dengan arrow function, this menggambarkan pemilik dari function tersebut

arrowFunctionExample = () => {
    document.getElementById("demo2").innerHTML = this;
}

window.addEventListener("load", arrowFunctionExample);

document.getElementById("btn2").addEventListener("click", arrowFunctionExample);

/**
 * ingat ini ketika bekerja dengan function, terkadang sifat dari regular function yang kita
 * inginkan, jika tidak, gunakan arrow function
 */