//javascript this keyword
console.log("this javascript : ");

//apa itu this
/**
 * pada javascript, this adalah keyword yang merujuk pada object
 * 
 * this keyword merujuk pada object yang berbeda tergantung penggunaannya
 * 
 * pada sebuah object method, this merujuk kepada object
 * 
 * jika dipakai sendiri, this merujuk pada global object
 * 
 * pada function, this merujuk kepada global object
 * 
 * pada function di strict mode, this menjadi undefined
 * 
 * pada event, this merujuk pada element yang menerima event tersebut
 * 
 * method seperti call(), apply(), dan bind() dapat merujuk this ke banyak object 
 */

/**
 * note : 
 * this bukanlah variable, melainkan keyword, kita tidak bisa mengubah nilai dari this
 */

//this pada method
/**
 * ketika digunakan di object method, this merujuk kepada object
 * 
 * pada contoh dibawah ini, this merujuk kepada object data
 * 
 * karena fullanme method adalah method dari object data
 */
const data = {
    firstName : "jaka",
    lastname : "baring",
    fullname : function(){
        return this.firstName + " " + this.lastname;
    }
};
console.log(data.fullname());

//this dipakai sendiri
/**
 * ketika digunakan sendiri, this merujuk kepada global object
 * 
 * karena this berjalan pada global scope
 * 
 * pada object window global object adalah [object window];
 */
console.log(this);

/**
 * pada strict mode, ketika digunakan sendiri, this juga merujuk kepada global scope
 */

//this pada function
/**
 * pada function, global object adalah default binding dari this
 * 
 * pada browser window global object adalah [object window]
 */
function thisOnFunction(){
    return this;
}
console.log(thisOnFunction());

/**
 * jika kita gunakan this pada function saat di mode strict, maka this akan mengembalikan
 * undefined
 */

//this pada event handlers
/**
 * pada html event handlers, this merujuk kepada html element yang menerima event
 */
let thisButton = document.getElementById("thisButton");
thisButton.addEventListener("click", function(){
    this.style.display = "none";
});

//object method binding
/**
 * pada contoh dibawah, this adalah object data
 */
data.thisObject = function(){
    return this;
}
console.log(data.thisObject());

console.log(data.fullname());

//explicit function binding
/**
 * call() dan apply() method adalah predefined javascript method
 * 
 * mereka dapat digunakan untuk memanggil object method dengan object lain sebagai
 * argument
 * 
 * pada contoh dibawah, memanggil data.fullname dengan data2 sebagai argument, this
 * merujuk ke data2, walau fullname adalah method data
 */
const data2 = {
    firstName : "bale",
    lastname : "cage"
}

console.log(data.fullname.call(data2));

//function borrowing
/**
 * dengan method bind(), sebuah object dapat meminjam method dari object lain
 * 
 * pada contoh dibawah, data2 meminjam method fullname dari data
 */
let fullnamed = data.fullname.bind(data2);

console.log(fullnamed());

//this precendence
/**
 * untuk menentukan object this merujuk kemana, gunakan urutan precendence dibawah 
 * 
 * Precedence	Object
 * 1	        bind()
 * 
 * 2	        apply() and call()
 * 
 * 3	        Object method
 * 
 * 4	        Global scope
 */